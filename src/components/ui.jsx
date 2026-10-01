import React, { useEffect, useRef, useState } from 'react'
import { motion, animate, useInView } from 'framer-motion'

export const Reveal = ({ children, delay = 0, className = '', as = 'div' }) => {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  )
}

export const SectionHead = ({ index, title, sub }) => (
  <Reveal className="section-head">
    <span className="section-index">{index}</span>
    <h2>{title}</h2>
    {sub && <p>{sub}</p>}
  </Reveal>
)

export const CountUp = ({ value, prefix = '', suffix = '', decimals = 0 }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setN(v)
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref}>
      {prefix}
      {n.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export const Chip = ({ children }) => <span className="chip">{children}</span>
