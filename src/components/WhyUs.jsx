import React from "react";
import { whyUs } from "../data.js";

export default function WhyUs() {
  return (
    <section className="section-pad why-dark">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Why Us</span>
          <h2 className="h2" style={{ color: "#fff" }}>Why Businesses Choose Pryabhix Technologies</h2>
        </div>
        <div className="why-grid">
          {whyUs.map((item) => (
            <div className="why-cell reveal" key={item.num}>
              <span className="why-num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
