import React from "react";
import { valueColumns } from "../data.js";
import { useModal } from "../context/ModalContext.jsx";

export default function ValueSection() {
  const { openModal } = useModal();
  return (
    <section className="section-pad value-section">
      <div className="wrap">
        <div className="section-head reveal" style={{ maxWidth: 640 }}>
          <span className="eyebrow">Business Value</span>
          <h2 className="h2" style={{ color: "#fff" }}>Your Website Should Do More Than Look Good.</h2>
        </div>
        <div className="value-grid">
          {valueColumns.map((col) => (
            <div className="value-col reveal" key={col.num}>
              <span className="vnum">{col.num}</span>
              <h3>{col.title}</h3>
              <p>{col.desc}</p>
            </div>
          ))}
        </div>
        <div className="value-cta reveal">
          <a href="#" className="btn btn-gold" onClick={(e) => { e.preventDefault(); openModal(); }}>
            Let's Build Something Valuable →
          </a>
        </div>
      </div>
    </section>
  );
}
