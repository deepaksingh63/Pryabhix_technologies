import { Link } from 'react-router-dom'
import { SERVICES } from '../data/content.js'

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link> / Services</div>
          <div className="eyebrow">what we build</div>
          <h1>Custom digital solutions, built around your goals</h1>
          <p>Every engagement starts with your business — not a template.</p>
        </div>
      </section>

      <section className="pad tight">
        <div className="wrap">
          <div className="services-grid">
            {SERVICES.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/contact" className="link">Discuss Your Project →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="cta-band">
          <h2>Not sure which service fits?</h2>
          <p>Tell us what you're trying to build — we'll recommend the right approach.</p>
          <Link to="/contact" className="cta-btn">Start Your Project</Link>
        </div>
      </section>
    </>
  )
}
