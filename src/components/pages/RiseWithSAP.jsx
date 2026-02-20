import React from 'react';

const RiseWithSAP = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100">
      
      {/* Hero Section: Modern & Impactful */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase mb-4">
              Artihcus Global Presentation
            </h1>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-8">
              RISE WITH <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">SAP</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed mb-10">
              Accelerate your journey to an Intelligent Enterprise. Transform your business 
              in <span className="text-blue-600 font-bold italic">6 months</span>—not years.
            </p>
            <div className="flex justify-center gap-4">
              <span className="px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-medium shadow-lg shadow-blue-200">
                Business Transformation as a Service
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-50 transition-transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 text-2xl font-bold">01</div>
            <h3 className="text-xl font-bold mb-3">Rapid ROI</h3>
            <p className="text-slate-500 leading-relaxed">
              Achieve 20% lower TCO compared to legacy systems. Eliminate fragmented licensing and multiple vendor overheads.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-50 transition-transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6 text-2xl font-bold">02</div>
            <h3 className="text-xl font-bold mb-3">Unified Simplicity</h3>
            <p className="text-slate-500 leading-relaxed">
              One provider, one contract. SAP manages maintenance and troubleshooting, allowing you to focus on core business growth.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-50 transition-transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-6 text-2xl font-bold">03</div>
            <h3 className="text-xl font-bold mb-3">Adaptive Infrastructure</h3>
            <p className="text-slate-500 leading-relaxed">
              Total flexibility with Hyperscalers (AWS, Azure, Google). Scale your tech stack seamlessly as market demands evolve.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Ecosystem */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">Comprehensive Solutions Bundle</h3>
            <p className="text-lg text-slate-600">
              RISE with SAP isn't just a license; it's a complete toolkit for digital evolution.
            </p>
            <ul className="space-y-4">
              {[
                { title: 'Cloud ERP', desc: 'SAP S/4HANA Cloud (Public or Private)' },
                { title: 'Business Process Intelligence', desc: 'Analyze and optimize operational workflows' },
                { title: 'Business Technology Platform', desc: 'A unified platform for data, analytics, and AI' },
                { title: 'Business Network', desc: 'Ariba, Logistics, and Asset Intelligence integration' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 hover:border-blue-300 transition-colors cursor-default">
                  <div className="mt-1 text-green-500">✔</div>
                  <div>
                    <span className="font-bold block">{item.title}</span>
                    <span className="text-sm text-slate-500">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 bg-blue-900 rounded-[2rem] p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
            <h4 className="text-2xl font-bold mb-6">Why Organizations Switch?</h4>
            <div className="space-y-6 relative z-10">
              <div className="p-4 bg-blue-800/40 backdrop-blur-md rounded-lg border border-blue-700">
                <p className="italic font-light">"How can we condense migration and execute a project in just 6 months?"</p>
              </div>
              <div className="p-4 bg-blue-800/40 backdrop-blur-md rounded-lg border border-blue-700">
                <p className="italic font-light text-blue-200 underline">"Which existing ERP customizations should we keep and which should we modernize?"</p>
              </div>
              <p className="text-blue-100 leading-relaxed pt-4">
                RISE with SAP answers these by providing SAP Readiness Checks, Learning Hubs, and Custom Code Migration apps directly in the package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Roadmap - Visual Flow */}
      <section className="bg-slate-900 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16 underline decoration-blue-500 underline-offset-8">The 4-Step Transformation Roadmap</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {[
              { title: "Assessment", text: "Identify performance gaps and improvement needs." },
              { title: "Modernization", text: "Adopt intelligent technology to reshape functions." },
              { title: "Migration", text: "Technical shift of all tools and services to the cloud." },
              { title: "Intelligent Enterprise", text: "Establish a collective network with infrastructure." }
            ].map((step, i) => (
              <div key={i} className="relative group p-6 border border-slate-800 rounded-2xl hover:bg-slate-800 transition-all">
                <div className="text-4xl font-black text-blue-500/20 group-hover:text-blue-500/40 mb-4 transition-colors">0{i+1}</div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{step.text}</p>
                {i < 3 && <div className="hidden md:block absolute top-1/2 -right-2 text-slate-700">→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-2">Developed for Artihcus Global</p>
        <p className="text-slate-900 font-bold">Strategic Consultant: Sai Kumar Dodla</p>
      </footer>
    </div>
  );
};

export default RiseWithSAP;