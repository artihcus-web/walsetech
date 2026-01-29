import React from 'react'

function Home() {
  return (
    <main className="min-h-[calc(100vh-150px)] flex flex-col gap-12 py-10 px-8 bg-[radial-gradient(circle_at_top_left,#e3f2ff_0,#ffffff_45%,#f1f5fb_100%)] text-[#0b2340]">
      <section className="grid grid-cols-1 lg:grid-cols-[2.2fr_1.8fr] gap-10 items-center">
        <div>
          <h1 className="text-[2.3rem] font-bold mb-4">
            SAP Supply Chain Management{' '}
            <span className="text-[#145ea8]">(SCM)</span> that keeps your
            business moving.
          </h1>
          <p className="text-base leading-relaxed mb-5 max-w-[38rem]">
            WALSE Tech helps organizations design, implement and optimize SAP
            Supply Chain Management (SCM) solutions so that planning,
            forecasting and logistics run as one connected flow. From demand and
            inventory planning to performance management, we transform your SAP
            landscape into a resilient, data‑driven supply chain platform.
          </p>

          <div className="flex flex-wrap gap-3 mb-7">
            <span className="px-3 py-1.5 rounded-full border border-[#145ea8]/25 bg-[#e3f2ff]/70 text-[0.78rem] font-semibold text-[#145ea8]">
              SAP Supply Chain Management (SCM)
            </span>
            <span className="px-3 py-1.5 rounded-full border border-[#145ea8]/25 bg-[#e3f2ff]/70 text-[0.78rem] font-semibold text-[#145ea8]">
              End‑to‑end planning visibility
            </span>
            <span className="px-3 py-1.5 rounded-full border border-[#145ea8]/25 bg-[#e3f2ff]/70 text-[0.78rem] font-semibold text-[#145ea8]">
              Process optimization &amp; KPIs
            </span>
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <button
              type="button"
              className="px-6 py-3 rounded-full border-none bg-gradient-to-br from-[#145ea8] to-[#0b2c5f] text-white font-semibold text-[0.95rem] cursor-pointer shadow-lg"
            >
              Talk to a SAP SCM expert
            </button>
            <span className="text-[0.9rem] text-[#145ea8] underline cursor-pointer">
              Learn how we modernize supply chains
            </span>
          </div>
        </div>

        <aside className="p-7 rounded-xl bg-white shadow-xl border border-[#e0e7f3]">
          <h2 className="text-[1.05rem] font-semibold mb-4 text-[#145ea8]">
            What SAP SCM means for your supply chain
          </h2>
          <ul className="list-none p-0 m-0 flex flex-col gap-3 text-[0.9rem]">
            <li>
              • Integrated strategic enterprise management for supply chain
              planning, budgeting and simulation.
            </li>
            <li>
              • Scenario‑based planning to balance service levels, cost and
              capacity in real time.
            </li>
            <li>
              • KPI tracking and dashboards that align operations with corporate
              strategy.
            </li>
            <li>
              • Proven implementation templates tailored to your industry and
              SAP landscape.
            </li>
          </ul>
        </aside>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">
          How WALSE Tech supports SAP Supply Chain Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-white border border-[#dde5f3] shadow-md">
            <h3 className="text-base font-semibold mb-2 text-[#0b2c5f]">
              SAP SCM Roadmapping
            </h3>
            <p className="text-[0.87rem] leading-relaxed text-[#4a5568]">
              Define a clear SCM roadmap covering strategy, process design, data
              model, and governance so that every supply chain initiative is
              traceable back to measurable business objectives.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white border border-[#dde5f3] shadow-md">
            <h3 className="text-base font-semibold mb-2 text-[#0b2c5f]">
              Implementation &amp; Roll‑out
            </h3>
            <p className="text-[0.87rem] leading-relaxed text-[#4a5568]">
              Configure and deploy SAP SCM modules with best‑practice templates,
              integration to ECC/S4HANA, and change‑management support for
              planners and business users.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-white border border-[#dde5f3] shadow-md">
            <h3 className="text-base font-semibold mb-2 text-[#0b2c5f]">
              Continuous Optimization
            </h3>
            <p className="text-[0.87rem] leading-relaxed text-[#4a5568]">
              Monitor performance, tune planning parameters and enhance
              reporting so your supply chain keeps pace with market volatility
              and customer expectations.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
