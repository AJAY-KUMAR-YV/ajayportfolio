import React from 'react'
import { experience } from '../data'
import { SectionHead, Reveal, Chip } from './ui'

const Experience = () => (
  <section className="section" id="experience">
    <SectionHead index="02" title="Experience" sub="Promoted from trainee to senior engineer in 2.5 years." />
    <div className="timeline">
      {experience.map((e, i) => (
        <Reveal key={e.title + e.period} className="tl-item" delay={i * 0.05}>
          <span className={`tl-dot ${i === 0 ? 'live' : ''}`} />
          <div className="card">
            <div className="tl-top">
              <div>
                <h3>{e.title}</h3>
                <span className="tl-org">{e.org}</span>
              </div>
              <span className="tl-period">{e.period}</span>
            </div>
            <ul>
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="chips">
              {e.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
)

export default Experience
