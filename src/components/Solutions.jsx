import React from "react";
import { solutions } from "../data.js";

export default function Solutions() {
  return (
    <section className="section-pad" id="solutions">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Solutions</span>
          <h2 className="h2">Digital Solutions for Every Stage of Business</h2>
          <p className="sol-note">
            Whether you're launching a new business or upgrading an existing digital
            system, we create technology that fits your needs.
          </p>
        </div>
        <div className="sol-grid stagger">
          {solutions.map((item) => (
            <div className="sol-card reveal" key={item}>
              <span className="dot"></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
