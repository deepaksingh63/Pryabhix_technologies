import React from "react";
import { waLink, DEFAULT_WA_MESSAGE } from "../config.js";
import { WhatsAppIcon } from "./Icons.jsx";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink(DEFAULT_WA_MESSAGE)}
      className="wa-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="wa-pulse"></span>
      <WhatsAppIcon size={22} stroke="#06210f" fillColor="#06210f" />
      <span className="label">Chat with us</span>
    </a>
  );
}
