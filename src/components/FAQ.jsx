import React, { useState } from "react";
import { faqs } from "../data.js";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(i) {
    setOpenIndex((cur) => (cur === i ? null : i));
  }

  return (
    <section className="section-pad" style={{ background: "var(--paper-50)" }}>
      <div className="wrap">
        <div className="section-head reveal" style={{ textAlign: "center" }}>
          <span className="eyebrow">FAQ</span>
          <h2 className="h2">Questions Businesses Usually Ask</h2>
        </div>
        <div className="faq-list reveal">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.q}>
                <button className="faq-q" onClick={() => toggle(i)} aria-expanded={isOpen}>
                  {item.q}<span className="plus"></span>
                </button>
                <div
                  className="faq-a"
                  style={{ maxHeight: isOpen ? "400px" : undefined }}
                >
                  <div className="faq-a-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
