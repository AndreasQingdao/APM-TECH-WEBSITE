export default function APMTechWebsite() {
  const services = [
    {
      title: "Enterprise Software Development",
      text: "AI-driven ERP, production planning, and operational control systems tailored for industrial companies.",
    },
    {
      title: "Software Licensing",
      text: "Flexible subscription and enterprise licensing models for scalable international deployment.",
    },
    {
      title: "Integration & Customization",
      text: "Implementation support and practical adaptation to existing industrial workflows and structures.",
    },
    {
      title: "Maintenance & Support",
      text: "Long-term technical support, optimization, and system improvement based on real operational feedback.",
    },
  ];

  const capabilities = [
    "AI-based production planning and control",
    "Integrated ERP and MES functionality",
    "Real-time operational visibility",
    "Modular and scalable architecture",
    "Designed for rapid implementation",
    "Built for industrial SMEs and growing manufacturers",
  ];

  const markets = ["Europe", "United States", "China"];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-100 text-sm font-bold tracking-wide text-slate-700 shadow-sm">
              LOGO
            </div>
            <div>
              <div className="text-xl font-semibold tracking-wide">APM TECH Limited</div>
              <div className="text-xs text-slate-500">AI-Driven Enterprise Software</div>
            </div>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="hover:text-slate-950">About</a>
            <a href="#services" className="hover:text-slate-950">Services</a>
            <a href="#markets" className="hover:text-slate-950">Markets</a>
            <a href="#contact" className="hover:text-slate-950">Contact</a>
            <a href="#legal" className="hover:text-slate-950">Legal</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.10),transparent_30%),radial-gradient(circle_at_left,rgba(59,130,246,0.08),transparent_25%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex w-fit rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-700">
                Hong Kong Technology Company
              </div>
              <h1 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Integrated AI software for industrial companies.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                APM TECH Limited develops advanced enterprise software solutions that combine ERP, production planning, and operational management into one scalable platform for manufacturing businesses.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                >
                  Contact Us
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
                <div className="text-sm text-slate-500">Core Focus</div>
                <div className="mt-2 text-2xl font-semibold">ERP + MES + Operations</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  A practical system structure for planning, visibility, control, and execution across industrial environments.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
                <div className="text-sm text-slate-500">Business Model</div>
                <div className="mt-2 text-2xl font-semibold">Licensing & Support</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Revenue through software licensing, integration, customization, and long-term support agreements.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:col-span-2">
                <div className="text-sm text-slate-500">Industrial Foundation</div>
                <div className="mt-2 text-2xl font-semibold">Built on real manufacturing requirements</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The software is developed with direct exposure to practical production environments and real industrial workflows, with implementation pathways through international manufacturing partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">About</div>
              <h2 className="mt-4 text-3xl font-bold">A practical software company with industrial roots</h2>
              <p className="mt-6 leading-8 text-slate-600">
                APM TECH Limited was founded to develop next-generation enterprise software solutions tailored to industrial companies. The company combines practical manufacturing know-how with AI-based software architecture to solve real operational challenges across production and administration.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                The platform is designed to support production planning, process transparency, and company-wide operational control with a structure suitable for small and medium-sized industrial businesses.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-100 p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Core Capabilities</div>
              <ul className="mt-6 space-y-4">
                {capabilities.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-600" />
                    <span className="text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Services</div>
            <h2 className="mt-4 text-3xl font-bold">What APM TECH Limited provides</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <div key={service.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="markets" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Markets</div>
              <h2 className="mt-4 text-3xl font-bold">International market orientation</h2>
              <p className="mt-6 leading-8 text-slate-600">
                The company focuses on industrial clients in international markets, with a primary emphasis on Europe and additional opportunities in the United States and China.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {markets.map((market) => (
                  <span key={market} className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-700">
                    {market}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Founder</div>
              <h2 className="mt-4 text-3xl font-bold">Led by industrial experience</h2>
              <p className="mt-6 leading-8 text-slate-600">
                Andreas Spiegler leads the company with more than 20 years of experience in international manufacturing, industrial project development, and operational execution.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                This background supports a software strategy grounded in real production requirements rather than purely theoretical development.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Contact</div>
                <h2 className="mt-4 text-3xl font-bold">Get in touch</h2>
                <p className="mt-6 max-w-2xl leading-8 text-slate-600">
                  For banking, commercial, and partnership inquiries, please contact APM TECH Limited directly.
                </p>

                <form className="mt-8 grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-500"
                    />
                    <input
                      type="email"
                      placeholder="Your email"
                      className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-500"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-500"
                  />
                  <textarea
                    placeholder="Your message"
                    rows={6}
                    className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-500"
                  />
                  <button
                    type="button"
                    className="w-fit rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="space-y-4 text-sm text-slate-600">
                  <div>
                    <div className="text-slate-500">Company</div>
                    <div className="mt-1 text-base font-medium text-slate-900">APM TECH Limited</div>
                  </div>
                  <div>
                    <div className="text-slate-500">Director</div>
                    <div className="mt-1 text-base font-medium text-slate-900">Andreas Spiegler</div>
                  </div>
                  <div>
                    <div className="text-slate-500">Email</div>
                    <a href="mailto:spiegler@cssc-tp.com" className="mt-1 block text-base font-medium text-slate-900 hover:underline">
                      spiegler@cssc-tp.com
                    </a>
                  </div>
                  <div>
                    <div className="text-slate-500">Phone</div>
                    <a href="tel:+8618653217992" className="mt-1 block text-base font-medium text-slate-900 hover:underline">
                      +86 186 5321 7992
                    </a>
                  </div>
                  <div>
                    <div className="text-slate-500">Location</div>
                    <div className="mt-1 text-base font-medium text-slate-900">Hong Kong</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="legal" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Impressum</div>
              <div className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                <p><strong>Company:</strong> APM TECH Limited</p>
                <p><strong>Registered Office:</strong> Hong Kong</p>
                <p><strong>Director:</strong> Andreas Spiegler</p>
                <p><strong>Email:</strong> spiegler@cssc-tp.com</p>
                <p><strong>Phone:</strong> +86 186 5321 7992</p>
                <p><strong>Company Registration No.:</strong> [Insert after incorporation]</p>
                <p><strong>Business Registration No.:</strong> [Insert after registration]</p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">Disclaimer</div>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
                <p>
                  The information on this website is provided for general business information purposes only. It does not constitute legal, financial, or professional advice.
                </p>
                <p>
                  APM TECH Limited makes reasonable efforts to keep all content accurate and up to date, but does not guarantee the completeness or accuracy of all information presented.
                </p>
                <p>
                  Any references to products, services, markets, or implementation capabilities are subject to contractual agreement and operational availability.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 APM TECH Limited. All rights reserved.</div>
          <div>AI-Driven Enterprise Software for Industrial Companies</div>
        </div>
      </footer>
    </div>
  );
}
