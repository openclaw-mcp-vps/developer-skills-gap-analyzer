export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Engineering Managers &amp; HR Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Identify Skill Gaps in<br />
          <span className="text-[#58a6ff]">Your Dev Team</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Map team skills against job requirements, surface training needs, and prioritize hiring — all in one dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Analyzing — $18/mo
        </a>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '🗂️', title: 'Team Skill Profiles', desc: 'Input each member\'s skills, experience levels, and certifications.' },
          { icon: '📋', title: 'Job Requirement Matching', desc: 'Paste job descriptions and auto-extract required competencies.' },
          { icon: '📊', title: 'Gap Reports', desc: 'Visual gap analysis with training and hiring recommendations.' }
        ].map(f => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1 text-sm">{f.title}</h3>
            <p className="text-[#8b949e] text-xs leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$18</div>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-2 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited team members',
              'Unlimited job requirement analyses',
              'Gap reports with training plans',
              'Hiring priority recommendations',
              'CSV export',
              'Email support'
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the skill gap analysis work?',
              a: 'You input your team members\' skills and proficiency levels, then paste or upload job descriptions. The analyzer extracts required competencies and compares them against your team, highlighting gaps and suggesting targeted training or new hires.'
            },
            {
              q: 'Can I add multiple teams or departments?',
              a: 'Yes. The Pro plan supports unlimited team members and multiple team groupings, so you can analyze gaps across different squads or departments simultaneously.'
            },
            {
              q: 'Is there a free trial?',
              a: 'We offer a 7-day money-back guarantee. If the tool doesn\'t surface actionable insights for your team within the first week, we\'ll refund you — no questions asked.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2 text-sm">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} Developer Skills Gap Analyzer. All rights reserved.
      </footer>
    </main>
  )
}
