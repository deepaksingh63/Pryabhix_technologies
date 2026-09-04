import React, { useState } from "react";
import { navLinks } from "../data.js";
import { waLink, DEFAULT_WA_MESSAGE } from "../config.js";
import { WhatsAppIcon } from "./Icons.jsx";
import { useHeaderScroll } from "../hooks/useHeaderScroll.js";
import { useModal } from "../context/ModalContext.jsx";

export default function Header() {
  const scrolled = useHeaderScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useModal();

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleStartProject(e) {
    e.preventDefault();
    closeMenu();
    openModal();
  }

  return (
    <>
      <header id="site-header" className={scrolled ? "scrolled" : ""}>
        <div className="wrap nav-inner">
          <a href="#home" className="brand">
            <picture>
              <source srcSet="/logo-mark.webp" type="image/webp" />
              <img src="/logo-mark.png" alt="Pryabhix Technologies logo" className="mark" width="120" height="67" />
            </picture>
            Pryabhix<span className="co"> Technologies</span>
          </a>

          <nav className="primary-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>{link.label}</a>
            ))}
          </nav>

          <div className="nav-cta">
            <a
              className="icon-btn"
              href={waLink(DEFAULT_WA_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <a className="btn btn-gold btn-sm" href="#" onClick={handleStartProject}>
              Start Your Project
            </a>
          </div>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
        ))}
        <div className="mm-cta">
          <a className="btn btn-gold" href="#" onClick={handleStartProject}>Start Your Project</a>
          <a
            className="btn btn-wa"
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            WhatsApp Us →
          </a>
        </div>
      </div>
    </>
  );
}
