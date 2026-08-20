import { Link } from 'react-router-dom'
import { SERVICES, PROJECTS, WHY_US } from '../data/content.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">available for new projects — 2026</div>
            <h1>We Build Websites That Turn <span>Ideas</span> Into Digital Experiences.</h1>
            <p className="lead">From business websites to powerful web applications, we design and develop fast, responsive and scalable digital solutions for businesses and startups.</p>
            <div className="hero-actions">
              <Link to="/contact" className="cta-btn">Start Your Project</Link>
              <Link to="/portfolio" className="cta-ghost">View Our Work</Link>
            </div>
          </div>
          <div className="mockup">
            <div className="mockup-bar">
              <div className="c c1"></div><div className="c c2"></div><div className="c c3"></div>
              <div className="mockup-url">webcraftstudio.dev/build</div>
            </div>
            <div className="mockup-body">
              <div className="code-line"><b>const</b> project = {'{'} client: <i>"your-business"</i> {'}'}</div>
              <div className="code-line"><b>build</b>(project).then(<b>launch</b>)</div>
              <div className="code-line">✓ responsive &nbsp; ✓ fast &nbsp; ✓ scalable</div>
              <div className="render-preview">
                <div className="rline w60"></div>
                <div className="rline w40"></div>
                <div className="rline" style={{ width: '80%' }}></div>
                <div className="btn-fake">Live Preview</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pad tight">
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">what we build</div>
            <h2>Custom digital solutions, built around your goals</h2>
            <p>A few of the things we build most often — see the full list on the Services page.</p>
          </div>
          <div className="services-grid">
            {SERVICES.slice(0, 3).map((s) => (
              <div className="service-card" key={s.title}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/contact" className="link">Discuss Your Project →</Link>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 34 }}>
            <Link to="/services" className="cta-ghost">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="pad tight" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">selected work</div>
            <h2>A few things we've shipped</h2>
            <p>Explore some of the digital solutions we've designed and developed.</p>
          </div>
          <div className="portfolio-grid">
            {PROJECTS.slice(0, 3).map((p) => (
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
          <div style={{ textAlign: 'center', marginTop: 34 }}>
            <Link to="/portfolio" className="cta-ghost">View Full Portfolio</Link>
          </div>
        </div>
      </section>

      <section className="pad tight" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">why choose us</div>
            <h2>Built for businesses that need it done right</h2>
          </div>
          <div className="why-grid">
            {WHY_US.map((w) => (
              <div className="why-card" key={w.title}>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="cta-band">
          <h2>Let's Build Something Together</h2>
          <p>Tell us about your project — we'll get back to you with next steps.</p>
          <Link to="/contact" className="cta-btn">Start Your Project</Link>
        </div>
      </section>
    </>
  )
}
