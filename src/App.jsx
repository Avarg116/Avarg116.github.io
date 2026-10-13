import { useEffect, useLayoutEffect, useState } from 'react'
import { flushSync } from 'react-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const SECTIONS = ['about', 'projects']

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [active, setActive] = useState('')

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // fade smoothly
  const toggleTheme = (next) => {
    const apply = () => flushSync(() => setTheme(next))
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!document.startViewTransition || reduceMotion) return apply()
    document.startViewTransition(apply)
  }

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, i) => {
            const el = entry.target
            el.style.setProperty('--d', `${i * 90}ms`)
            el.classList.add('is-visible')
            observer.unobserve(el)
          })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.15 }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])


  // Current section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    const onScroll = () => {
      if (window.scrollY < 200) setActive('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <Header active={active} theme={theme} setTheme={toggleTheme} />
      <main>
        <Hero />
        <div className="page main__blocks">
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  )
}

export default App
