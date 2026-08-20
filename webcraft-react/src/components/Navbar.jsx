import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { COMPANY } from '../data/content.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = ({ isActive }) => (isActive ? 'active' : undefined)

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="wrap">
        <Link to="/" className="logo">
          <span className="dot"></span> {COMPANY.nameFirst}<span style={{ color: 'var(--muted)' }}>{COMPANY.nameRest}</span>
        </Link>
        <div className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={navClass}>
              {l.label}
            </NavLink>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link to="/contact" className="cta-btn">Start Your Project</Link>
          <button className="hamburger" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'} className={navClass} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}
