import React, { useEffect, useRef, useState } from "react";
import { serviceOptions, budgetOptions } from "../data.js";
import { waLink, COMPANY_EMAIL } from "../config.js";
import { CloseIcon } from "./Icons.jsx";
import { useModal } from "../context/ModalContext.jsx";

const initialForm = {
  name: "",
  email: "",
  whatsapp: "",
  company: "",
  service: "",
  budget: "",
  timeline: "",
  details: "",
};

export default function StartProjectModal() {
  const { isOpen, closeModal } = useModal();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState(`mailto:${COMPANY_EMAIL}`);
  const nameInputRef = useRef(null);
  const lastFocused = useRef(null);

  useEffect(() => {
    if (isOpen) {
      lastFocused.current = document.activeElement;
      document.body.style.overflow = "hidden";
      const t = setTimeout(() => nameInputRef.current && nameInputRef.current.focus(), 300);
      return () => clearTimeout(t);
    } else {
      document.body.style.overflow = "";
      if (lastFocused.current) lastFocused.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape" && isOpen) closeModal();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeModal]);

  function handleClose() {
    closeModal();
    // Reset to the form view for next time, after the close animation.
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
      setErrors({});
    }, 300);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function validate(data) {
    const next = {};
    if (!data.name.trim()) next.name = "Please enter your name.";

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(data.email.trim())) next.email = "Please enter a valid email.";

    const waDigits = data.whatsapp.replace(/\D/g, "");
    if (waDigits.length < 10) next.whatsapp = "Please enter a valid WhatsApp number.";

    if (!data.service) next.service = "Please select a service.";
    if (!data.details.trim()) next.details = "Please tell us a bit about your project.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      ...form,
      budget: form.budget || "Not specified",
      timeline: form.timeline || "Not specified",
    };
    if (!validate(data)) return;

    const message =
      "New Project Enquiry – Pryabhix Technologies\n\n" +
      `Name: ${data.name}\n` +
      `Email: ${data.email}\n` +
      `WhatsApp: ${data.whatsapp}\n` +
      `Company: ${data.company || "Not specified"}\n` +
      `Service: ${data.service}\n` +
      `Budget: ${data.budget}\n` +
      `Timeline: ${data.timeline}\n` +
      `Project Details: ${data.details}`;

    const win = window.open(waLink(message), "_blank");

    const mailSubject = encodeURIComponent(`New Project Enquiry – ${data.name}`);
    const mailBody = encodeURIComponent(message);
    setMailtoUrl(`mailto:${COMPANY_EMAIL}?subject=${mailSubject}&body=${mailBody}`);

    if (!win) {
      window.location.href = waLink(message);
    }

    setSubmitted(true);
  }

  return (
    <div className={`modal-overlay ${isOpen ? "open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>
      <div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" aria-label="Close form" onClick={handleClose} style={{ color: "var(--ink-900)" }}>
          <CloseIcon />
        </button>

        {!submitted ? (
          <div id="form-view">
            <h2 id="modal-title">Start Your Project</h2>
            <p className="lead">
              Tell us a little about what you need — we'll get back to you on WhatsApp or email.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="f-name">Full Name *</label>
                  <input ref={nameInputRef} type="text" id="f-name" name="name" value={form.name} onChange={handleChange} required />
                  <span className="form-error">{errors.name}</span>
                </div>
                <div className="form-field">
                  <label htmlFor="f-email">Email Address *</label>
                  <input type="email" id="f-email" name="email" value={form.email} onChange={handleChange} required />
                  <span className="form-error">{errors.email}</span>
                </div>
                <div className="form-field">
                  <label htmlFor="f-whatsapp">WhatsApp Number *</label>
                  <input type="tel" id="f-whatsapp" name="whatsapp" value={form.whatsapp} onChange={handleChange} placeholder="10-digit mobile number" required />
                  <span className="form-error">{errors.whatsapp}</span>
                </div>
                <div className="form-field">
                  <label htmlFor="f-company">Company / Business Name</label>
                  <input type="text" id="f-company" name="company" value={form.company} onChange={handleChange} />
                </div>
                <div className="form-field">
                  <label htmlFor="f-service">What service do you need? *</label>
                  <select id="f-service" name="service" value={form.service} onChange={handleChange} required>
                    <option value="">Select a service</option>
                    {serviceOptions.map((opt) => <option key={opt}>{opt}</option>)}
                  </select>
                  <span className="form-error">{errors.service}</span>
                </div>
                <div className="form-field">
                  <label htmlFor="f-budget">Budget Range</label>
                  <select id="f-budget" name="budget" value={form.budget} onChange={handleChange}>
                    <option value="">Select a range</option>
                    {budgetOptions.map((opt) => <option key={opt}>{opt}</option>)}
                  </select>
                </div>
                <div className="form-field full">
                  <label htmlFor="f-timeline">Expected Timeline</label>
                  <input type="text" id="f-timeline" name="timeline" value={form.timeline} onChange={handleChange} placeholder="e.g. Within 1 month, Flexible, ASAP" />
                </div>
                <div className="form-field full">
                  <label htmlFor="f-details">Project Details *</label>
                  <textarea id="f-details" name="details" value={form.details} onChange={handleChange} placeholder="Tell us about your project, goals and any specific requirements" required></textarea>
                  <span className="form-error">{errors.details}</span>
                </div>
              </div>

              <div className="form-submit-row">
                <button type="submit" className="btn btn-gold">Send Project Enquiry →</button>
                <span className="form-alt">
                  or email us directly at <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="form-success show">
            <div className="ic">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                <path d="M4 12l5 5L20 6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Thank you! Your project enquiry has been received.</h3>
            <p>
              Our team will get in touch with you shortly. We've also opened WhatsApp
              with your details pre-filled — please hit send there to reach us instantly.
            </p>
            <div style={{ marginTop: 22, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn btn-outline-light btn-sm" onClick={handleClose}>Close</button>
              <a className="btn btn-gold btn-sm" href={mailtoUrl}>Email Us Instead</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
