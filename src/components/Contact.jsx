import React from "react";
import { MailIcon, PinIcon, WhatsAppIcon } from "./Icons.jsx";
import { waLink, DEFAULT_WA_MESSAGE } from "../config.js";
import { useModal } from "../context/ModalContext.jsx";

export default function Contact() {
  const { openModal } = useModal();
  return (
    <section className="section-pad contact-dark" id="contact">
      <div className="wrap">
        <div className="section-head reveal" style={{ textAlign: "center", marginBottom: 0 }}>
          <span className="eyebrow">Contact</span>
          <h2 className="h2" style={{ color: "#fff" }}>Have a Project in Mind?</h2>
          <p className="lead" style={{ margin: "14px auto 0" }}>
            Tell us what you're building. We'll help you turn your idea into a
            practical digital solution.
          </p>
        </div>

        <div className="contact-grid stagger">
          <div className="contact-card reveal">
            <div className="ic"><MailIcon size={20} /></div>
            <h3>Email</h3>
            <a className="big" href="mailto:pryabhixtechnologies@gmail.com">pryabhixtechnologies@gmail.com</a>
            <p className="sub">Send us your requirements</p>
          </div>
          <div className="contact-card reveal">
            <div className="ic"><WhatsAppIcon size={20} stroke="currentColor" fillColor="currentColor" /></div>
            <h3>WhatsApp</h3>
            <p className="big" style={{ fontWeight: 600 }}>Chat with our team</p>
            <a
              className="btn btn-wa btn-sm"
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: "fit-content" }}
            >
              WhatsApp Us →
            </a>
          </div>
          <div className="contact-card reveal">
            <div className="ic"><PinIcon /></div>
            <h3>Location</h3>
            <p className="big">Gorakhpur, Uttar Pradesh, India</p>
            <p className="sub">Serving clients across India</p>
          </div>
        </div>

        <div className="contact-final reveal">
          <a href="#" className="btn btn-gold" onClick={(e) => { e.preventDefault(); openModal(); }}>
            Start Your Project →
          </a>
        </div>
      </div>
    </section>
  );
}
