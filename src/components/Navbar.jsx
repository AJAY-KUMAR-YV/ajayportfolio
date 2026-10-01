import React from 'react'

const links = [
  ['Stack', '#flow'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Skills', '#skills']
]

const Navbar = () => (
  <header className="nav">
    <a href="#top" className="nav-logo">
      <span className="logo-mark">AK</span>
      <span className="logo-text">ajay.dev</span>
    </a>
    <nav className="nav-links">
      {links.map(([label, href]) => (
        <a key={href} href={href}>
          {label}
        </a>
      ))}
    </nav>
    <a href="#contact" className="btn btn-sm">
      Hire me
    </a>
  </header>
)

export default Navbar
