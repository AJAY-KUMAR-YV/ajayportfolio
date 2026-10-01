import React, { useEffect } from 'react'
import { useScroll, useSpring, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Flow from './components/Flow'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty('--gx', `${e.clientX}px`)
      document.documentElement.style.setProperty('--gy', `${e.clientY}px`)
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      <div className="glow" />
      <Navbar />
      <main>
        <Hero />
        <Flow />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App
