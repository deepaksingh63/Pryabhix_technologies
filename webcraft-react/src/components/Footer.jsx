import { Link } from 'react-router-dom'
import { COMPANY } from '../data/content.js'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <div className="logo">{COMPANY.nameFirst}<span style={{ color: 'var(--muted)' }}>{COMPANY.nameRest}</span></div>
            <p>Building modern digital experiences for businesses, startups and professionals.</p>
            <p style={{ marginTop: 14 }}>{COMPANY.location}</p>
          </div>
          <div className="foot-col">
            <h5>Navigate</h5>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <Link to="/process">Process</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <a href={`tel:${COMPANY.phone1.replace(/\s/g, '')}`}>{COMPANY.phone1}</a>
            <a href={`tel:${COMPANY.phone2.replace(/\s/g, '')}`}>{COMPANY.phone2}</a>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 {COMPANY.name}. All rights reserved.</span>
          <span className="mono">{COMPANY.location}</span>
        </div>
      </div>
    </footer>
  )
}
