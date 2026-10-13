import { useEffect, useState } from 'react'
import { PROFILE } from '../data'
import { Moon, Sun } from 'lucide-react'
import './Header.css'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
]

// Notion-style top bar.
export default function Header({ active, theme, setTheme }) {
  const isLight = theme === 'light'
  const [scrolled, setScrolled] = useState(false)

  // Divider under bar fades
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`topbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="topbar__inner">
        <a href="#top" className="topbar__crumb" aria-label="Back to top">
          <span className="topbar__name topbar__name--full">{PROFILE.name}</span>
          <span className="topbar__name topbar__name--short">{PROFILE.name.split(' ')[0]}</span>
        </a>

        <nav className="topbar__nav" aria-label="Sections">
          <span className="topbar__sections">
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`topbar__link ${active === link.id ? 'is-active' : ''}`}
                aria-current={active === link.id ? 'true' : undefined}
              >
                {link.label}
              </a>
            ))}
          </span>
          {PROFILE.resume && (
            <a className="topbar__resume" href={PROFILE.resume} target="_blank" rel="noreferrer">
              resume.pdf
            </a>
          )}
          <button
            className="topbar__icon"
            onClick={() => setTheme(isLight ? 'dark' : 'light')}
            aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {isLight ? <Moon size={16} strokeWidth={1.8} /> : <Sun size={16} strokeWidth={1.8} />}
          </button>
        </nav>
      </div>
    </header>
  )
}
