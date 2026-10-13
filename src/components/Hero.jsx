import { PROFILE, EDUCATION } from '../data'
import { FileText, GraduationCap, Laptop, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Hero.css'

const MAX_TILT = 12

// Glass panel effect
function tiltPhoto(e) {
  if (e.pointerType === 'touch') return
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const x = (e.clientX - r.left) / r.width
  const y = (e.clientY - r.top) / r.height
  el.style.setProperty('--rx', `${(0.5 - y) * MAX_TILT * 2}deg`)
  el.style.setProperty('--ry', `${(x - 0.5) * MAX_TILT * 2}deg`)
  el.style.setProperty('--gx', `${x * 100}%`)
  el.style.setProperty('--gy', `${y * 100}%`)
  el.classList.add('is-tilting')
}

function resetPhoto(e) {
  const el = e.currentTarget
  el.style.removeProperty('--rx')
  el.style.removeProperty('--ry')
  el.classList.remove('is-tilting')
}

// Page header
export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__cover" aria-hidden="true">
        {PROFILE.cover && <img src={PROFILE.cover} alt="" />}
      </div>

      <div className="page">
        <figure className="photo-card reveal" onPointerMove={tiltPhoto} onPointerLeave={resetPhoto}>
          <span className="photo-card__print">
            <img
              src={PROFILE.photo}
              alt={`Portrait of ${PROFILE.name}`}
              width="160"
              height="160"
            />
          </span>
        </figure>
        <div className="hero__titleRow reveal">
          <h1 className="hero__title">{PROFILE.name}</h1>
        </div>
        <p className="hero__tagline reveal">{PROFILE.tagline}</p>
        <div className="hero__info reveal">
          <p className="hero__line">
            <Laptop size={16} strokeWidth={1.8} />
            <span className="hero__roleText">
              <span>
                {PROFILE.role} · {PROFILE.city}
              </span>
              {PROFILE.openToWork && (
                <span className="tag hero__status">
                  <span className="dot dot--green" /> Open to work
                </span>
              )}
            </span>
          </p>
          <p className="hero__line">
            <GraduationCap size={16} strokeWidth={1.8} />
            <span>
              {EDUCATION.degree}, {EDUCATION.schoolFull} ({EDUCATION.year})
            </span>
          </p>
        </div>

        <div className={`hero__links reveal ${PROFILE.resume ? '' : 'hero__links--three'}`}>
          <a className="n-btn" href={PROFILE.github} target="_blank" rel="noreferrer">
            <FaGithub size={16} /> GitHub
          </a>
          <a className="n-btn" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin size={16} /> LinkedIn
          </a>
          <a className="n-btn" href={`mailto:${PROFILE.email}`}>
            <Mail size={16} strokeWidth={1.8} /> Email
          </a>
          {PROFILE.resume && (
            <a className="n-btn" href={PROFILE.resume} target="_blank" rel="noreferrer">
              <FileText size={16} strokeWidth={1.8} /> Resume
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
