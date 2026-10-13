import { PROFILE } from '../data'
import './Contact.css'

export default function Contact() {
  return (
    <footer className="footer">
      <p className="footer__signoff">
        Built with React. Deployed via GitHub Pages.
      </p>
      <p>
        © {new Date().getFullYear()} {PROFILE.name}
      </p>
    </footer>
  )
}

