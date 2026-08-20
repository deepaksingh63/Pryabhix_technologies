import { Link } from 'react-router-dom'
import { PROCESS_STEPS } from '../data/content.js'

export default function Process() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs"><Link to="/">Home</Link> / Process</div>
          <div className="eyebrow">how we work</div>
          <h1>Six steps from idea to launch</h1>
          <p>A clear, structured process so you always know what's happening next.</p>
        </div>
      </section>

      <section className="pad tight">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="process-list">
            {PROCESS_STEPS.map((s) => (
              <div className="p-step" key={s.num}>
                <div className="num">{s.num}</div>
                <div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="cta-band">
          <h2>Ready to start Step 01?</h2>
          <p>Tell us about your project and we'll begin the discovery call.</p>
          <Link to="/contact" className="cta-btn">Start Your Project</Link>
        </div>
      </section>
    </>
  )
}
