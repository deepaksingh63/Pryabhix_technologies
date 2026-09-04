import React from "react";
import { trustChips } from "../data.js";

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="wrap trust-strip-inner">
        <span className="trust-strip-label">From Idea to Launch — We Build It.</span>
        <div className="trust-chips">
          {trustChips.map((chip) => <span key={chip}>{chip}</span>)}
        </div>
      </div>
    </section>
  );
}
