import React from 'react'
import { profile } from '../data'
import { Reveal } from './ui'

const Contact = () => (
  <section className="section contact" id="contact">
    <Reveal className="contact-card">
      <span className="section-index">05</span>
      <h2>
        Need someone who has shipped payments at <em>scale?</em>
      </h2>
      <p>
        I&apos;m open to Full Stack and Java backend roles. Fastest way to reach me is email or phone.
      </p>
      <div className="hero-cta center">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="btn" href={`tel:${profile.phone.replace(/-/g, '')}`}>
          {profile.phone}
        </a>
      </div>
      <div className="social">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="/Ajay_Kumar_YV_Resume.pdf" download>
          Resume (PDF)
        </a>
      </div>
    </Reveal>
    <footer className="footer">© {new Date().getFullYear()} {profile.name}</footer>
  </section>
)

export default Contact
