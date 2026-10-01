import React from 'react'
import { skills } from '../data'
import { SectionHead, Reveal, Chip } from './ui'

const marquee = ['Java', 'Spring Boot', 'React', 'Angular', 'Kafka', 'Redis', 'Oracle', 'PostgreSQL', 'Node.js', 'Microservices', 'AWS', 'Stripe', 'OAuth 2.0', 'Mule ESB']

const Skills = () => (
  <section className="section" id="skills">
    <SectionHead index="04" title="Toolbox" />
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...marquee, ...marquee].map((m, i) => (
          <span key={i}>{m}</span>
        ))}
      </div>
    </div>
    <div className="skills">
      {skills.map(([group, items], i) => (
        <Reveal key={group} className="card skill-group" delay={i * 0.04}>
          <h4>{group}</h4>
          <div className="chips">
            {items.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  </section>
)

export default Skills
