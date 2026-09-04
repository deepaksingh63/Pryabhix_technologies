import React from "react";
import { ModalProvider } from "./context/ModalContext.jsx";
import { useReveal } from "./hooks/useReveal.js";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TrustStrip from "./components/TrustStrip.jsx";
import Services from "./components/Services.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Solutions from "./components/Solutions.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Process from "./components/Process.jsx";
import TechStack from "./components/TechStack.jsx";
import ValueSection from "./components/ValueSection.jsx";
import About from "./components/About.jsx";
import FAQ from "./components/FAQ.jsx";
import Contact from "./components/Contact.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";
import StartProjectModal from "./components/StartProjectModal.jsx";

function PageContent() {
  useReveal();

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>

      <Header />

      <main id="main">
        <Hero />
        <TrustStrip />
        <Services />
        <WhyUs />
        <Solutions />
        <Portfolio />
        <Process />
        <TechStack />
        <ValueSection />
        <About />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppFloat />
      <StartProjectModal />
    </>
  );
}

export default function App() {
  return (
    <ModalProvider>
      <PageContent />
    </ModalProvider>
  );
}
