import React from "react";
import { process } from "../data.js";

export default function Process() {
  return (
    <section className="section-pad" id="process">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">How We Work</span>
          <h2 className="h2">From Idea to Launch, We Keep It Simple.</h2>
        </div>
        <div className="process-wrap">
          <div className="process-line"></div>
          <div className="process-grid stagger">
            {process.map((step) => (
              <div className="proc-step reveal" key={step.num}>
                <span className="proc-num">{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
