import { Link } from 'react-router-dom'
import { TESTIMONIALS } from '../data/content.js'

export default function Testimonials() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link> / Testimonials</div>
          <div className="eyebrow">client feedback</div>
          <h1>What clients say</h1>
          <p>The testimonials below are sample/demo content shown for layout purposes, not live client reviews.</p>
        </div>
      </section>

      <section className="pad tight">
        <div className="wrap">
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t) => (
              <div className="testimonial-card" key={t.who}>
                <div className="stars">★★★★★</div>
                <blockquote>"{t.quote}"</blockquote>
                <div className="who">{t.who}</div>
                <div className="sample-tag">SAMPLE TESTIMONIAL — demo content</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="cta-band">
          <h2>Worked with us before?</h2>
          <p>We'd love to hear how the project went.</p>
          <Link to="/contact" className="cta-btn">Share Your Feedback</Link>
        </div>
      </section>
    </>
  )
}
