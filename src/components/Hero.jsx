import React from "react";
import { trustPoints } from "../data.js";
import { CheckIcon, GrowthIcon, UsersIcon, RevenueIcon } from "./Icons.jsx";
import { useModal } from "../context/ModalContext.jsx";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <div className="reveal in">
          <h1>Build Digital Products That Move Your Business Forward.</h1>
          <p className="lead">
            Pryabhix Technologies builds modern websites, powerful web applications and
            custom software solutions that help businesses look professional, reach more
            customers and grow online.
          </p>
          <div className="hero-ctas">
            <a href="#" className="btn btn-gold" onClick={(e) => { e.preventDefault(); openModal(); }}>
              Start Your Project →
            </a>
            <a href="#work" className="btn btn-outline-dark">View Our Work</a>
          </div>
          <ul className="trust-points">
            {trustPoints.map((point) => (
              <li key={point}><CheckIcon />{point}</li>
            ))}
          </ul>
        </div>

        <div className="hero-visual reveal in" aria-hidden="true">
          <div className="device-desktop">
            <div className="bar"><i></i><i></i><i></i></div>
            <div className="screen">
              <div className="skel-row" style={{ width: "40%" }}></div>
              <div className="skel-row" style={{ width: "70%", height: 16, margin: "14px 0" }}></div>
              <div className="mock-grid">
                <div className="skel-card"><div className="skel-row" style={{ width: "60%" }}></div><div className="skel-row" style={{ width: "80%" }}></div></div>
                <div className="skel-card"><div className="skel-row" style={{ width: "60%" }}></div><div className="skel-row" style={{ width: "80%" }}></div></div>
                <div className="skel-card"><div className="skel-row" style={{ width: "60%" }}></div><div className="skel-row" style={{ width: "80%" }}></div></div>
              </div>
              <div className="skel-card" style={{ marginTop: 12 }}>
                <div className="bar-chart">
                  {[35, 60, 45, 80, 55, 90, 65].map((h, i) => (
                    <i key={i} style={{ height: `${h}%` }}></i>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="device-mobile">
            <div className="m-screen">
              <div className="skel-row" style={{ width: "50%", marginBottom: 16 }}></div>
              <div className="skel-card" style={{ marginBottom: 10 }}><div className="skel-row" style={{ width: "70%" }}></div></div>
              <div className="skel-card" style={{ marginBottom: 10 }}><div className="skel-row" style={{ width: "60%" }}></div></div>
              <div className="skel-card"><div className="skel-row" style={{ width: "80%" }}></div></div>
            </div>
          </div>

          <div className="float-chip chip-1"><GrowthIcon />Growth +38%</div>
          <div className="float-chip chip-2"><UsersIcon />Active Users</div>
          <div className="float-chip chip-3"><RevenueIcon />Revenue Up</div>
        </div>
      </div>
    </section>
  );
}
