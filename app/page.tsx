export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Browser Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Test Checkout Forms Under{" "}
          <span className="text-[#58a6ff]">Realistic Conditions</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Simulate slow networks, mobile devices, and autofill conflicts with Playwright automation.
          Catch checkout failures before your customers do.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Testing — $25/mo
        </a>
        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-left">
          {[
            ["Slow 3G & Offline", "Test forms on throttled connections that real mobile users face."],
            ["Autofill Conflicts", "Detect broken fields when browsers auto-populate payment data."],
            ["Cross-Device Reports", "Run scenarios on desktop, tablet, and mobile viewports at once."]
          ].map(([title, desc]) => (
            <li key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <p className="font-semibold text-white mb-1">{title}</p>
              <p className="text-[#8b949e]">{desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$25</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-left space-y-2 mb-8">
            {[
              "Unlimited checkout URL tests",
              "Slow network & mobile simulation",
              "Autofill conflict detection",
              "Detailed HTML + JSON reports",
              "Playwright-powered accuracy"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "How does the testing work?",
              "You submit your checkout URL and we run Playwright scripts that simulate real user conditions — slow 3G, mobile viewports, and browser autofill — then generate a detailed report."
            ],
            [
              "Which browsers and devices are tested?",
              "We test across Chromium, Firefox, and WebKit (Safari) on desktop and mobile viewports so you get broad coverage in one run."
            ],
            [
              "Do I need to install anything?",
              "No. Everything runs in the cloud. Just paste your checkout URL, configure your scenarios, and download the report."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#484f58] pb-8">
        © {new Date().getFullYear()} Browser Form Stress Test. All rights reserved.
      </footer>
    </main>
  );
}
