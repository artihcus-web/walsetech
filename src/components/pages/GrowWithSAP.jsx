import React from 'react';

const GrowWithSAP = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased">
      
      {/* HERO SECTION */}
      <section className="bg-white border-b border-slate-200 pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-700 bg-blue-50 rounded-full uppercase">
            Walsetech
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-950 mb-6">
            GROW WITH <span className="text-blue-600">SAP</span>
          </h1>
          <p className="text-2xl font-light text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Embrace cloud ERP with agility, consistency, and ongoing innovation.
          </p>
        </div>
      </section>

      {/* DEFINITION SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold tracking-tight">
                What exactly is GROW with SAP?
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                A comprehensive suite of solutions, acceleration services for adoption, a community, and 
                educational resources designed to help companies of all sizes effectively implement cloud ERP.
              </p>
              <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Immediate Cloud ERP</h3>
                <p className="text-blue-50 leading-relaxed">
                  Expand without restrictions and create your own innovations with a cloud ERP that's ready to go. 
                  SAP S/4HANA Cloud, public edition propels your business forward with cutting-edge industry 
                  practices and ongoing advancements.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-inner">
              <h3 className="text-2xl font-bold mb-6">Speed Up Your Implementation</h3>
              <p className="text-slate-600 mb-8">
                Facilitate your cloud ERP launch using tested tools and processes. With a clear scope and timeline, 
                you can reduce unexpected outcomes through a reliable deployment service.
              </p>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-blue-600 mb-2">Community and Education</h4>
                  <p className="text-sm text-slate-500">
                    Participate and learn in a cooperative, open environment with SAP professionals, partners, and clients.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  <h4 className="font-bold text-blue-600 mb-2">Adaptable Training</h4>
                  <p className="text-sm text-slate-500">
                    Access educational opportunities tailored to your objectives to enhance skills and boost adoption within your team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Uncover the Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Industry Practices */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-lg">⚙️</span>
                Operate using leading industry practices
              </h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3">• Drive your business forward with pre-configured workflows</li>
                <li className="flex items-start gap-3">• Enhance productivity through built-in automation bots</li>
                <li className="flex items-start gap-3">• Accelerate work processes utilizing AI, business events, and KPIs</li>
              </ul>
            </div>

            {/* Innovations */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-lg">💡</span>
                Create your own innovations
              </h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3">• Expand reach and revenue by introducing new business strategies</li>
                <li className="flex items-start gap-3">• Recognize your strengths and areas for improvement</li>
                <li className="flex items-start gap-3">• Empower creators with low-code development solutions</li>
              </ul>
            </div>

            {/* Expand without limits */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-lg">🌐</span>
                Expand without limits
              </h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3">• Speed up your growth by navigating local, tax, and industry regulations</li>
                <li className="flex items-start gap-3">• Scale responsibly with complete transparency and essential metrics</li>
                <li className="flex items-start gap-3">• Integrate additional suppliers into your network while enhancing efficiency</li>
              </ul>
            </div>

            {/* Launch Confidently */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-lg">🚀</span>
                Launch confidently
              </h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3">• Accelerate your rollouts with reliable tools and methodologies from SAP Activate</li>
                <li className="flex items-start gap-3">• Sidestep unexpected challenges with a defined scope and timeline</li>
                <li className="flex items-start gap-3">• Gain knowledge through an open, collaborative group</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SCALEUPS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-slate-950 rounded-[3.5rem] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="relative z-10 max-w-4xl">
              <h2 className="text-4xl font-bold mb-8">GROW with SAP for Scaleups</h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-10">
                Whether you're in the early stages or gearing up for an exit, your growth path demands a 
                continuous development of skills, systems, and future preparations. Initiate and nurture 
                exponential growth with a cloud-native solution available for up to six months at no cost, 
                alongside partnership benefits.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="text-blue-400 font-bold text-lg">Scale with Cloud-Native</h4>
                  <p className="text-slate-400 text-sm">
                    Address back-office requirements with top-tier solutions for finance, procurement, HR, 
                    and travel and expense management.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-blue-400 font-bold text-lg">Engage the Community</h4>
                  <p className="text-slate-400 text-sm">
                    Connect with the complete SAP community and ecosystem to enhance your capacity to grow and scale.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-blue-400 font-bold text-lg">Hypergrowth Hub</h4>
                  <p className="text-slate-400 text-sm">
                    Network and collaborate with our global ecosystem to prepare for a successful exit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-slate-400 text-xs font-bold tracking-widest uppercase">
          <div>Walsetech | Grow with SAP Strategic Overview</div>
          <div className="hidden md:block">Next-Generation Cloud ERP Solutions</div>
        </div>
      </footer>
    </div>
  );
};

export default GrowWithSAP;