import { SKILL_GROUPS } from '../data'
import './Skills.css'

export default function Skills() {
  return (
    <div className="reveal">
      <h3 className="subhead">Skills</h3>
      <div className="skills" role="table" aria-label="Skills">
        {SKILL_GROUPS.map((group) => (
          <div className="skills__row" role="row" key={group.label}>
            <span className="skills__label" role="rowheader">{group.label}</span>
            <span className="skills__tags" role="cell">
              {group.skills.map((skill) => (
                <span className={`tag tag--${group.color}`} key={skill}>
                  {skill}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
