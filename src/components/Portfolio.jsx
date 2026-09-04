import React from "react";
import { portfolio } from "../data.js";

export default function Portfolio() {
  return (
    <section className="section-pad" id="work" style={{ background: "var(--paper-50)" }}>
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">Our Work</span>
          <h2 className="h2">Work That Speaks for Itself.</h2>
          <p className="lead">
            Explore digital experiences and software solutions built with performance,
            usability and business goals in mind.
          </p>
        </div>

        <div className="portfolio-grid stagger">
          {portfolio.map((p) => (
            <div className="work-card reveal" key={p.title}>
              <div className="work-shot">
                <span className="work-placeholder-tag">Live</span>
                <div className="mini-browser">
                  <div className="mini-bar"><i></i><i></i><i></i></div>
                  <div className="mini-body">
                    <div className="mini-line" style={{ width: "60%" }}></div>
                    <div className="mini-line" style={{ width: "75%" }}></div>
                    <div className="mini-line" style={{ width: "45%" }}></div>
                  </div>
                </div>
              </div>
              <div className="work-body">
                <span className="work-cat">{p.category}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href={p.url} className="card-link" target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 13, color: "var(--ink-400)", marginTop: 18 }}>
          Live projects shown above — final display names and descriptions can be
          refined further whenever you're ready.
        </p>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="#" className="btn btn-outline-light">View All Projects →</a>
        </div>
      </div>
    </section>
  );
}
