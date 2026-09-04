import React from "react";
import { techBadges } from "../data.js";

export default function TechStack() {
  return (
    <section className="section-pad tech-strip">
      <div className="wrap">
        <div className="section-head reveal" style={{ textAlign: "center", marginBottom: 38 }}>
          <span className="eyebrow">Technology</span>
          <h2 className="h2">Built With Modern Technology</h2>
        </div>
        <div className="tech-badges reveal">
          {techBadges.map((tech) => (
            <div className="tech-badge" key={tech}><span className="dot2"></span>{tech}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
