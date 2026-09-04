import React from "react";
import { services } from "../data.js";
import { ServiceIcon } from "./Icons.jsx";

export default function Services() {
  return (
    <section className="section-pad" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Services</span>
          <h2 className="h2">Everything You Need to Build Your Digital Presence.</h2>
          <p className="lead">
            From your first website to a complete business platform, we design and
            develop digital solutions around your goals.
          </p>
        </div>

        <div className="services-grid stagger">
          {services.map((svc) => (
            <div className="svc-card reveal" key={svc.title}>
              <div className="svc-icon"><ServiceIcon name={svc.icon} /></div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <a href="#contact" className="card-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
