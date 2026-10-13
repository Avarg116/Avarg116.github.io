import { PROJECTS, SKILL_GROUPS } from '../data'
import Block from './Block'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import './Projects.css'

const TAG_COLORS = ['blue', 'purple', 'green', 'orange', 'pink', 'yellow', 'red', 'brown']

// Cover color
function coverColor(name) {
  let h = 0
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) >>> 0
  return TAG_COLORS[h % TAG_COLORS.length]
}

// Give each project tag the same color as skills table
const SKILL_COLORS = {}
SKILL_GROUPS.forEach((group) => {
  group.skills.forEach((skill) => {
    SKILL_COLORS[skill] = group.color
  })
})

SKILL_COLORS['AWS'] = SKILL_COLORS['AWS (EC2, RDS, S3, etc.)']
SKILL_COLORS['GitHub Actions'] = SKILL_COLORS['CI/CD (GitHub Actions)']

const skillColor = (name) => SKILL_COLORS[name] || 'gray'

const sorted = [...PROJECTS].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

export default function Projects() {
  return (
    <Block
      id="projects"
      title="Projects"
      aside={`${PROJECTS.length} ${PROJECTS.length === 1 ? 'item' : 'items'}`}
    >
      <div className="gallery">
        {sorted.map((p) => (
          <article
            className={`pcard reveal ${p.featured ? 'pcard--featured' : ''}`}
            key={p.title}
          >
            {p.image ? (
              <img className="pcard__cover" src={p.image} alt="" loading="lazy" />
            ) : (
              <div className={`pcard__cover pcard__cover--${coverColor(p.title)}`} aria-hidden="true">
                <span>{p.title.charAt(0)}</span>
              </div>
            )}

            <div className="pcard__body">
              <div className="pcard__top">
                <h3 className="pcard__title">{p.title}</h3>
              </div>

              <p className="pcard__desc">{p.description}</p>

              <div className="pcard__tags">
                {p.status && (
                  <span className="tag">
                    <span className={`dot ${p.status === 'Completed' ? 'dot--green' : 'dot--orange'}`} />
                    {p.status}
                  </span>
                )}
                {p.stack.map((tech) => (
                  <span className={`tag tag--${skillColor(tech)}`} key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              {(p.live || p.repo) && (
                <div className="pcard__links">
                  {p.live && (
                    <a className="n-btn n-btn--primary" href={p.live} target="_blank" rel="noreferrer">
                      Live <ArrowUpRight size={16} strokeWidth={1.8} />
                    </a>
                  )}
                  {p.repo && (
                    <a className="n-btn" href={p.repo} target="_blank" rel="noreferrer">
                      <FaGithub size={16} /> Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </Block>
  )
}
