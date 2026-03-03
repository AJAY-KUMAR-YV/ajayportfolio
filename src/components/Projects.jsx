import React from 'react'
import './Projects.css'

const sampleProjects = [
  { title: 'Project One', desc: 'A cool app built with React.' },
  { title: 'Project Two', desc: 'Another project using Node.js.' },
  { title: 'Project Three', desc: 'And yet another awesome thing.' }
]

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {sampleProjects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
