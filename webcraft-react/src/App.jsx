import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Portfolio from './pages/Portfolio.jsx'
import About from './pages/About.jsx'
import Process from './pages/Process.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Contact from './pages/Contact.jsx'
import WebsiteDevelopmentGorakhpur from './pages/WebsiteDevelopmentGorakhpur.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Home />} />

        {/* SEO Landing Page */}
        <Route
          path="/website-development-gorakhpur"
          element={<WebsiteDevelopmentGorakhpur />}
        />

        {/* Main Pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}