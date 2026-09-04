import React from "react";
import { useModal } from "../context/ModalContext.jsx";

export default function Footer() {
  const { openModal } = useModal();
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <picture>
                <source srcSet="/logo-mark.webp" type="image/webp" />
                <img src="/logo-mark.png" alt="Pryabhix Technologies logo" className="mark" width="120" height="67" />
              </picture>
              Pryabhix<span className="co"> Technologies</span>
            </a>
            <p>Building modern digital solutions for ambitious businesses.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#work">Our Work</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Web Development</a></li>
              <li><a href="#services">Software Development</a></li>
              <li><a href="#services">Mobile Apps</a></li>
              <li><a href="#services">E-commerce</a></li>
              <li><a href="#services">AI & Automation</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>Gorakhpur, Uttar Pradesh, India</li>
              <li><a href="mailto:pryabhixtechnologies@gmail.com">pryabhixtechnologies@gmail.com</a></li>
              <li>
                <a href="#" style={{ fontWeight: 700, color: "var(--gold-400)" }} onClick={(e) => { e.preventDefault(); openModal(); }}>
                  Start Your Project →
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Pryabhix Technologies. All rights reserved.</span>
          <span>Gorakhpur, Uttar Pradesh, India</span>
        </div>
      </div>
    </footer>
  );
}
