import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { metrics, scan, profile } from '../data'
import { CountUp } from './ui'

const calls = [
  ['POST', '/api/p2p/transfer'],
  ['POST', '/api/b2b/payment'],
  ['POST', '/api/wallet-to-bank'],
  ['POST', '/api/c2c/transfer'],
  ['GET', '/api/favorites-recents'],
  ['GET', '/api/agent-locator'],
  ['POST', '/api/cash-in'],
  ['POST', '/api/cash-out']
]

const makeLine = (id) => {
  const [verb, path] = calls[Math.floor(Math.random() * calls.length)]
  return { id, verb, path, ms: 62 + Math.floor(Math.random() * 120) }
}

const LiveTerminal = () => {
  const [lines, setLines] = useState(() => [0, 1, 2, 3, 4].map(makeLine))

  useEffect(() => {
    let id = 5
    const t = setInterval(() => {
      setLines((prev) => [...prev.slice(-6), makeLine(id++)])
    }, 1100)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="terminal" aria-hidden="true">
      <div className="terminal-bar">
        <i /> <i /> <i />
        <span>payments-api · tail -f</span>
      </div>
      <div className="terminal-body">
        {lines.map((l) => (
          <motion.div
            key={l.id}
            className="log-line"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="log-verb">{l.verb}</span>
            <span className="log-path">{l.path}</span>
            <span className="log-ok">200</span>
            <span className="log-ms">{l.ms}ms</span>
          </motion.div>
        ))}
        <div className="log-note">// simulated stream · real SLO: &lt;200ms p95</div>
      </div>
    </div>
  )
}

const Hero = () => (
  <section className="hero" id="top">
    <div className="hero-grid">
      <div className="hero-copy">
        <motion.span
          className="pill"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <i className="dot" /> Open to Full Stack / Java roles
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          I build the rails that move money for <em>10M+ people.</em>
        </motion.h1>

        <motion.p
          className="lede"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          I&apos;m <strong>{profile.name}</strong>, a Full Stack Engineer at Comviva. I ship Java and
          Spring Boot payment services on a platform processing 2B+ transactions a year, and the React
          and Angular interfaces people use to reach them.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <a href="/Ajay_Kumar_YV_Resume.pdf" className="btn btn-primary" download>
            Download resume
          </a>
          <a href={`mailto:${profile.email}`} className="btn">
            Email me
          </a>
          <a href="#flow" className="btn btn-ghost">
            See how I work &darr;
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-side"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <LiveTerminal />
        <dl className="scan">
          <dt className="scan-title">30-second scan</dt>
          {scan.map(([k, v]) => (
            <div key={k} className="scan-row">
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </div>

    <div className="metrics">
      {metrics.map((m) => (
        <div key={m.label} className="metric">
          <b>
            <CountUp {...m} />
          </b>
          <span>{m.label}</span>
        </div>
      ))}
    </div>
  </section>
)

export default Hero
