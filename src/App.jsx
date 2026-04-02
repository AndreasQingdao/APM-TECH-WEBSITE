export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <div className="logo">APM</div>
            <div>
              <div className="brand-title">APM TECH Limited</div>
              <div className="brand-subtitle">AI-Driven Enterprise Software</div>
            </div>
          </div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#markets">Markets</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="tag">Hong Kong Technology Company</div>
              <h1>Integrated AI software for industrial companies.</h1>
              <p className="lead">
                APM TECH Limited develops enterprise software solutions that combine
                ERP, production planning, and operational management into one
                scalable platform for manufacturing businesses.
              </p>
              <div className="buttons">
                <a className="btn btn-dark" href="#contact">Contact Us</a>
                <a className="btn btn-light" href="#services">Explore Services</a>
              </div>
            </div>

            <div className="cards">
              <div className="card">
                <h3>Core Focus</h3>
                <p>ERP + MES + Operations for industrial environments.</p>
              </div>
              <div className="card">
                <h3>Business Model</h3>
                <p>Licensing, integration, customization, and long-term support.</p>
              </div>
              <div className="card card-wide">
                <h3>Industrial Foundation</h3>
                <p>
                  Built on practical manufacturing requirements and real operational workflows.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container two-col">
            <div className="panel">
              <h2>About APM TECH Limited</h2>
              <p>
                APM TECH Limited develops next-generation enterprise software for
                industrial companies. The company combines manufacturing know-how
                with AI-based software architecture to solve real operational challenges.
              </p>
              <p>
                The platform supports production planning, process transparency,
                and company-wide operational control for small and medium-sized
                industrial businesses.
              </p>
            </div>
            <div className="panel">
              <h2>Core Capabilities</h2>
              <ul className="list">
                <li>AI-based production planning and control</li>
                <li>Integrated ERP and MES functionality</li>
                <li>Real-time operational visibility</li>
                <li>Modular and scalable architecture</li>
                <li>Designed for rapid implementation</li>
                <li>Built for industrial SMEs</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="section alt">
          <div className="container">
            <h2>Services</h2>
            <div className="grid-4">
              <div className="panel">
                <h3>Enterprise Software Development</h3>
                <p>AI-driven ERP, production planning, and operational control systems.</p>
              </div>
              <div className="panel">
                <h3>Software Licensing</h3>
                <p>Flexible subscription and enterprise licensing models.</p>
              </div>
              <div className="panel">
                <h3>Integration & Customization</h3>
                <p>Implementation support for industrial workflows and structures.</p>
              </div>
              <div className="panel">
                <h3>Maintenance & Support</h3>
                <p>Long-term technical support and continuous system improvement.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="markets" className="section">
          <div className="container two-col">
            <div className="panel">
              <h2>Markets</h2>
              <p>
                The company focuses on industrial clients in Europe, the United States,
                and China.
              </p>
              <div className="chips">
                <span>Europe</span>
                <span>United States</span>
                <span>China</span>
              </div>
            </div>
            <div className="panel">
              <h2>Founder</h2>
              <p>
                Andreas Spiegler leads the company with more than 20 years of
                experience in international manufacturing and industrial project development.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section alt">
          <div className="container two-col">
            <div className="panel">
              <h2>Contact</h2>
              <p>
                For banking, commercial, and partnership inquiries, please contact
                APM TECH Limited directly.
              </p>
              <form className="contact-form">
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Your email" />
                <input type="text" placeholder="Subject" />
                <textarea rows="6" placeholder="Your message"></textarea>
                <button type="button" className="btn btn-dark">Send Inquiry</button>
              </form>
            </div>
            <div className="panel">
              <h2>Company Information</h2>
              <p><strong>Company:</strong> APM TECH Limited</p>
              <p><strong>Director:</strong> Andreas Spiegler</p>
              <p><strong>Email:</strong> spiegler@cssc-tp.com</p>
              <p><strong>Phone:</strong> +86 186 5321 7992</p>
              <p><strong>Location:</strong> Hong Kong</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© 2026 APM TECH Limited. All rights reserved.</div>
          <div>AI-Driven Enterprise Software for Industrial Companies</div>
        </div>
      </footer>
    </div>
  );
}
