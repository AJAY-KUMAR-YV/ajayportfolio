import React from 'react'
import './Skills.css'

const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'Git']

const Skills = () => (
  <section id="skills" className="skills">
    <h2>Skills</h2>
    <ul>
      {skills.map((s, i) => <li key={i}>{s}</li>)}
    </ul>
  </section>
)

export default Skills
