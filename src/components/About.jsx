import { BIO } from '../data'
import Block from './Block'
import Skills from './Skills'
import './About.css'

export default function About() {
  return (
    <Block id="about" title="About">
      <div className="about__bio reveal">
        {BIO.map((para) => (
          <p key={para.slice(0, 24)}>{para}</p>
        ))}
      </div>

      <Skills />
    </Block>
  )
}
