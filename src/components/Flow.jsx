import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { pipeline } from '../data'
import { SectionHead, Reveal } from './ui'

const Flow = () => {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setActive((a) => (a + 1) % pipeline.length), 2600)
    return () => clearInterval(t)
  }, [paused])

  const node = pipeline[active]
  const pct = (active / (pipeline.length - 1)) * 100

  return (
    <section className="section" id="flow">
      <SectionHead
        index="01"
        title="One payment, end to end"
        sub="Hover a layer. This is the stack I own in production, and what I did at each hop."
      />

      <Reveal className="flow">
        <div className="flow-track" onMouseLeave={() => setPaused(false)}>
          <div className="flow-line">
            <motion.span
              className="flow-packet"
              animate={{ left: `${pct}%` }}
              transition={{ type: 'spring', stiffness: 90, damping: 16 }}
            />
          </div>
          {pipeline.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className={`flow-node ${i === active ? 'on' : ''} ${i < active ? 'done' : ''}`}
              onMouseEnter={() => {
                setPaused(true)
                setActive(i)
              }}
              onFocus={() => {
                setPaused(true)
                setActive(i)
              }}
            >
              <span className="flow-bullet">{i + 1}</span>
              <span className="flow-tag">{p.tag}</span>
              <span className="flow-label">{p.label}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={node.id}
          className="flow-detail"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <span className="flow-detail-tag">
            {String(active + 1).padStart(2, '0')} · {node.tag}
          </span>
          <h3>{node.label}</h3>
          <p>{node.text}</p>
        </motion.div>
      </Reveal>
    </section>
  )
}

export default Flow
