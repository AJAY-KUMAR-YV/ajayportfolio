import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 initial={{ y: -20 }} animate={{ y: 0 }} transition={{ delay: 0.5 }}>
        Hi, I'm Ajay
      </motion.h1>
      <motion.p initial={{ y: 20 }} animate={{ y: 0 }} transition={{ delay: 0.7 }}>
        Full‑Stack Developer & Designer
      </motion.p>
      <a href="#projects" className="btn">View my work</a>
    </motion.section>
  )
}

export default Hero
