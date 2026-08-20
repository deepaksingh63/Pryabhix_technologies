import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/content.js'

const FILTERS = ['All', 'AI/ML', 'E-commerce', 'Healthcare', 'Web Application', 'Education']

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const visible = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.filter === active)

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link> / Portfolio</div>
          <div className="eyebrow">selected work</div>
          <h1>A few things we've shipped</h1>
          <p>Explore some of the digital solutions we've designed and developed.</p>
        </div>
      </section>

      <section className="pad tight">
        <div className="wrap">
          <div className="filter-row">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-chip ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {visible.map((p) => (
              <div className="p-card" key={p.title}>
                <div className="p-thumb">{p.title}</div>
                <div className="p-body">
                  <div className="p-cat">{p.category}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="tag-row">
                    {p.tech.map((t) => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="cta-band">
          <h2>Have a Similar Project? Let's Talk</h2>
          <p>We'll walk through your requirements and suggest the right approach.</p>
          <Link to="/contact" className="cta-btn">Start Your Project</Link>
        </div>
      </section>
    </>
  )
}
