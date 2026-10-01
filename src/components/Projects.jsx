import React from 'react'
import { projects } from '../data'
import { SectionHead, Reveal, Chip } from './ui'

const spotlight = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

const Projects = () => (
  <section className="section" id="projects">
    <SectionHead index="03" title="Selected work" sub="Production payments, a lending engine, and a customer-facing wallet." />
    <div className="projects">
      {projects.map((p, i) => (
        <Reveal key={p.name} className={`project ${p.featured ? 'featured' : ''}`} delay={i * 0.08}>
          <article className="card spot" onMouseMove={spotlight}>
            <span className="project-kind">{p.kind}</span>
            <h3>{p.name}</h3>
            <p className="project-blurb">{p.blurb}</p>
            <ul>
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
            <div className="chips">
              {p.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
)

export default Projects
