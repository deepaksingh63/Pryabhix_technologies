import { useState } from 'react'
import { Link } from 'react-router-dom'
import { COMPANY } from '../data/content.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, POST this to your backend API (e.g. /api/inquiries or /api/contact)
    console.log('Contact form submitted:', form)
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link> / Contact</div>
          <div className="eyebrow">get in touch</div>
          <h1>Start Your Project</h1>
          <p>Tell us a bit about what you need — we'll get back to you soon.</p>
        </div>
      </section>

      <section className="pad tight">
        <div className="wrap contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <div className="ic">📍</div>
              <div>
                <h4>Location</h4>
                <p>{COMPANY.location}</p>
              </div>
            </div>
            <div className="info-card">
              <div className="ic">📞</div>
              <div>
                <h4>Phone / WhatsApp</h4>
                <a href={`tel:${COMPANY.phone1.replace(/\s/g, '')}`}>{COMPANY.phone1}</a>
                <a href={`tel:${COMPANY.phone2.replace(/\s/g, '')}`}>{COMPANY.phone2}</a>
              </div>
            </div>
            <div className="info-card">
              <div className="ic">✉️</div>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </div>
            </div>
            <div className="info-card">
              <div className="ic">🕒</div>
              <div>
                <h4>Response Time</h4>
                <p>We typically reply within 24 hours.</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            {submitted && (
              <div className="success-msg" style={{ display: 'block' }}>
                ✓ Thank you! Your message has been received. We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="field">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="What's this about?" value={form.subject} onChange={handleChange} required />
              </div>
              <div className="field">
                <label>Message</label>
                <textarea name="message" placeholder="Tell us about your project or query..." value={form.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit Message</button>
              <p className="form-note">By submitting, you agree to be contacted about your enquiry.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
