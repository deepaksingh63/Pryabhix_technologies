import React from "react";
import { waLink, DEFAULT_WA_MESSAGE } from "../config.js";
import { useModal } from "../context/ModalContext.jsx";

export default function FinalCTA() {
  const { openModal } = useModal();
  return (
    <section className="section-pad">
      <div className="wrap">
        <div className="final-cta reveal">
          <h2 className="h2">Let's Build Something That Moves Your Business Forward.</h2>
          <p>
            Have an idea, a business challenge or an existing website that needs
            improvement? Let's talk.
          </p>
          <div className="final-cta-btns">
            <a href="#" className="btn btn-gold" onClick={(e) => { e.preventDefault(); openModal(); }}>
              Start Your Project →
            </a>
            <a className="btn btn-wa" href={waLink(DEFAULT_WA_MESSAGE)} target="_blank" rel="noopener noreferrer">
              WhatsApp Us →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
