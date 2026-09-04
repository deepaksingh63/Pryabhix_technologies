import React from "react";
import { MailIcon, PinIcon } from "./Icons.jsx";

export default function About() {
  return (
    <section className="section-pad" id="about">
      <div className="wrap about-grid">
        <div className="about-copy reveal">
          <span className="eyebrow">About Us</span>
          <h2 className="h2" style={{ marginBottom: 20 }}>Technology With a Purpose.</h2>
          <p>
            Pryabhix Technologies is a technology company focused on building modern
            digital products for businesses, institutions and growing brands.
          </p>
          <p>
            We combine clean design, modern technology and business thinking to create
            websites and software that are not only visually impressive, but also
            useful, reliable and built for growth.
          </p>
          <div className="about-meta">
            <div className="about-meta-row">
              <div className="ic"><PinIcon /></div>
              <div>
                <span className="lbl">Location</span><br />
                <span className="val">Gorakhpur, Uttar Pradesh, India</span>
              </div>
            </div>
            <div className="about-meta-row">
              <div className="ic"><MailIcon /></div>
              <div>
                <span className="lbl">Email</span><br />
                <a className="val" href="mailto:pryabhixtechnologies@gmail.com">pryabhixtechnologies@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="about-visual reveal" aria-hidden="true">
          <div className="ring r1"></div>
          <div className="ring r2"></div>
          <picture>
            <source srcSet="/logo-full.webp" type="image/webp" />
            <img src="/logo-full.png" alt="Pryabhix Technologies logo" className="core-logo" width="700" height="700" />
          </picture>
        </div>
      </div>
    </section>
  );
}
