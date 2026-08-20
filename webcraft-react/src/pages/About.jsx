import { Link } from 'react-router-dom'
import { COMPANY } from '../data/content.js'

const EXPERTISE = [
  'Frontend Development',
  'Backend Development',
  'Database Development',
  'API Development',
  'UI/UX Implementation',
  'Deployment',
]

const FOCUS_AREAS = [
  'Business Websites',
  'Full-Stack Web Applications',
  'E-commerce Platforms',
  'Admin Dashboards',
  'Education Platforms',
  'Healthcare Systems',
  'AI-Powered Applications',
]

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link> / About</div>
          <div className="eyebrow">web development &amp; digital solutions</div>
          <h1>A studio built around clean, reliable engineering</h1>
          <p>
            {COMPANY.name} designs and develops websites and web applications for
            businesses, startups and professionals — with a focus on performance,
            maintainability and clear communication throughout every project.
          </p>
        </div>
      </section>

      <section className="pad tight">
        <div className="wrap" style={{ maxWidth: 780 }}>
          <div className="sec-head left">
            <div className="eyebrow">what we do</div>
            <h2>We specialize in</h2>
          </div>
          <div className="tag-row" style={{ gap: 10, marginBottom: 8 }}>
            {FOCUS_AREAS.map((f) => (
              <span className="tag" style={{ fontSize: 13.5, padding: '7px 14px' }} key={f}>{f}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="pad tight" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="wrap">
          <div className="sec-head">
            <div className="eyebrow">our expertise</div>
            <h2>End-to-end delivery, from design to deployment</h2>
            <p>Every project is handled across the full stack, by people who build and maintain what they ship.</p>
          </div>
          <div className="why-grid">
            {EXPERTISE.map((e) => (
              <div className="why-card" key={e}>
                <h4>{e}</h4>
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
