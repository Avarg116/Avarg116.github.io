import { Folder } from 'lucide-react'
import './Block.css'

// Gray Notion-style section bar.
export default function Block({ id, title, icon = <Folder size={18} fill="currentColor" strokeWidth={1.8} />, aside, children }) {
  return (
    <section id={id} className="block">
      <header className="block__head reveal">
        <span className="block__icon">{icon}</span>
        <h2 className="block__title">{title}</h2>
        {aside && <span className="block__aside">{aside}</span>}
      </header>
      <div className="block__body">{children}</div>
    </section>
  )
}
