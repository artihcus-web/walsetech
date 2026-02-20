import React from 'react';

const SAPOnPremise = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans antialiased">
      
      {/* HERO SECTION */}
      <section className="bg-white border-b border-slate-200 pt-20 pb-16 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-blue-700 bg-blue-50 rounded-full uppercase">
            Walsetech
          </div>
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-slate-950 mb-6">
            SAP S/4HANA <span className="text-blue-600 uppercase">On-Premise</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Outline the essential distinctions between On-Premise and Cloud variants of the 
            fourth-generation ERP suite to empower your digital strategy.
          </p>
        </div>
      </section>

      {/* CORE CAPABILITIES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold tracking-tight">The Evolution of ERP</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                SAP S/4HANA offers comprehensive capabilities for finance, sourcing, procurement, sales, 
                professional services, and manufacturing operations. Introduced in 2015, it leverages 
                SAP HANA's innovative in-memory computing technology, which revolutionized performance 
                and data analysis.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-blue-700 mb-1">Advanced Handling</h4>
                  <p className="text-sm text-slate-600">Handles significantly more data compared to its predecessor, R/3.</p>
                </div>
                <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                  <h4 className="font-bold text-indigo-700 mb-1">User Experience</h4>
                  <p className="text-sm text-slate-600">Offers a highly improved user interface through SAP Fiori.</p>
                </div>
              </div>
              <p className="text-slate-600 italic">
                While some have hesitated due to process overhauls, the rationale for migrating is increasingly 
                compelling as competitors gain a clear edge from the suite.
              </p>
            </div>

            <div className="bg-slate-950 text-white p-10 rounded-[3rem] shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">What is SAP S/4HANA On-Premise?</h3>
              <div className="space-y-6 text-slate-300">
                <p>
                  This internal system follows SAP's standard licensing framework, installed on servers or virtual 
                  machines that are self-managed and maintained by the organization or its IT partner.
                </p>
                <div className="border-l-2 border-blue-500 pl-6 space-y-4">
                  <p>• Accountability for deploying and evaluating annual updates.</p>
                  <p>• Option for hosted solutions via a platform as a service (PaaS) model for security and cost-effectiveness.</p>
                  <p>• Suited for large enterprises with intricate business operations and high security needs.</p>
                </div>
                <p className="text-sm font-medium pt-4 text-blue-200">
                  Integrates seamlessly with SAP Hybris Marketing, SAP Jam, and SAP Ariba.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOUD COMPARISON SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">On-Premise vs. Cloud Solution</h2>
            <p className="text-slate-500">Choosing the right environment for your enterprise agility.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-indigo-600">Cloud Edition Characteristics</h3>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>Operates on a subscription model, managed and maintained by SAP via SAP HANA Enterprise Cloud.</p>
                <ul className="space-y-3">
                  <li className="flex gap-3">✔ <span className="font-semibold">Quicker Time to Value:</span> No substantial initial time investment.</li>
                  <li className="flex gap-3">✔ <span className="font-semibold">Heightened Agility:</span> Deploy, scale, and customize with a few clicks.</li>
                  <li className="flex gap-3">✔ <span className="font-semibold">Scalability:</span> Ideal for rapidly growing companies and standard processes.</li>
                  <li className="flex gap-3">✔ <span className="font-semibold">Cost Savings:</span> Avoids internal IT support team expenses.</li>
                </ul>
                <p className="text-sm italic pt-4">While offering reduced control, it accommodates businesses with standardized workflows effectively.</p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Selection Criteria for On-Premise</h3>
              <p className="text-slate-600 mb-6">We suggest the On-Premise variant for organizations with specific requirements:</p>
              <div className="grid grid-cols-1 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-blue-500">
                  <p className="font-bold text-slate-800">Complete Capability Array</p>
                  <p className="text-sm text-slate-500">Requires the full depth of S/4HANA features.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-blue-500">
                  <p className="font-bold text-slate-800">Advanced Customization</p>
                  <p className="text-sm text-slate-500">Needs software modifications that the Cloud version cannot provide.</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-blue-500">
                  <p className="font-bold text-slate-800">On-Site Security</p>
                  <p className="text-sm text-slate-500">Mandatory on-site software execution for strict security protocols.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HYBRID MODEL SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[3.5rem] p-12 lg:p-20 text-white shadow-3xl">
            <h2 className="text-4xl font-bold mb-8">The Hybrid Delivery Model</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-xl font-light text-blue-50">
                  Accommodate both on-premise and cloud environments simultaneously. 
                  This is an excellent choice for businesses aiming for rapid transformation with a lower upfront investment.
                </p>
                <p className="text-slate-100">
                  Ideal for organizations seeking a balance between control and flexibility. 
                  Core data and applications are stored locally, while modifications are enabled 
                  without massive financial commitments for full software licenses.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                <h4 className="text-2xl font-bold mb-4">Model Functionality</h4>
                <ul className="space-y-4 text-blue-100 font-medium">
                  <li>• Rapid transformation paths</li>
                  <li>• Lower upfront financial investment</li>
                  <li>• Local core data storage</li>
                  <li>• Flexible system modifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPLEMENTATION STRATEGIES */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-16">How Can I Implement S/4HANA?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Brownfield Conversion</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Migrating your current SAP environment to S/4HANA. This can be complex and risky 
                for highly customized systems, but preserves historical data.
              </p>
            </div>
            <div className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Greenfield Migration</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Establishing S/4HANA as a completely new environment. Discard traces of legacy 
                processes and minimize obstacles with a clean-slate approach.
              </p>
            </div>
            <div className="p-8 bg-white border border-slate-200 rounded-3xl hover:border-blue-500 transition-colors">
              <h3 className="text-xl font-bold text-blue-600 mb-4">Consolidation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Transfer data from various ERPs into a unified S/4HANA platform. Allows regional 
                teams to integrate into a system managed by a designated headquarters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-slate-400 text-xs font-bold tracking-widest uppercase">
          <div>Walsetech | SAP S/4HANA Strategic Analysis</div>
          <div>Enterprise Resource Planning Solutions</div>
        </div>
      </footer>
    </div>
  );
};

export default SAPOnPremise;