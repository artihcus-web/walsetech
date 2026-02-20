import React from 'react';
import { 
  CloudIcon, 
  ArrowsRightLeftIcon, 
  ShieldCheckIcon, 
  CpuChipIcon, 
  Square3Stack3DIcon, 
  ArrowPathIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  Cog6ToothIcon
} from "@heroicons/react/24/outline";

const SAPCPI = () => {
  const menuItems = [
    { id: 'intro', label: 'Introduction' },
    { id: 'capabilities', label: 'Core Capabilities' },
    { id: 'integration', label: 'Smarter Integration' },
    { id: 'security', label: 'Security & Monitoring' },
    { id: 'ecosystem', label: 'Digital Ecosystem' },
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen font-sans selection:bg-blue-100 flex flex-col">
      
      {/* WRAPPER FOR SIDEBAR + CONTENT */}
      <div className="flex flex-1">
        
        {/* SIDEBAR - Changed to sticky for footer visibility */}
        <nav className="w-80 bg-white border-r border-slate-200 hidden xl:flex flex-col p-10 h-screen sticky top-0 z-50 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
          <div className="mb-12 flex-shrink-0">
            <span className="text-xs font-black tracking-[0.3em] text-blue-600 uppercase">Solutions</span>
            <h2 className="text-3xl font-black text-slate-900 mt-2 tracking-tighter uppercase">Walsetech</h2>
            <div className="h-1 w-12 bg-blue-600 mt-4"></div>
          </div>
          
          <ul className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-grow">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-xs font-bold text-slate-400 hover:text-blue-600 uppercase tracking-widest block transition-all">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
          
          {/* INTRODUCTION SECTION */}
          <header id="intro" className="pt-24 pb-16 px-8 lg:px-20 max-w-7xl mx-auto w-full">
            <h1 className="text-6xl lg:text-7xl font-black text-slate-900 leading-tight mb-8 tracking-tighter">
              SAP Cloud Platform <br />
              <span className="text-blue-600 italic">Integration (CPI)</span>
            </h1>
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                SAP Cloud Platform Integration is a powerful integration service designed to connect cloud applications with on-premise systems securely and efficiently. It enables organizations to exchange data in real-time, automate processes, and simplify system communication across diverse landscapes.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With pre-built integration flows, adapters, and intuitive tools, CPI reduces complexity while accelerating project timelines. Beyond connectivity, SAP CPI enhances scalability and flexibility, allowing businesses to adapt quickly to evolving digital needs.
              </p>
            </div>
          </header>

          <main className="px-8 lg:px-20 max-w-7xl mx-auto space-y-32 pb-40 w-full">
            
            {/* CORE CAPABILITIES */}
            <section id="capabilities" className="scroll-mt-24">
              <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase italic tracking-tight">Core Capabilities</h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p>Walsetech enables smarter integrations by leveraging the full suite of SAP CPI's functional tools. We help organizations build bridge-points between siloed data environments.</p>
                  <ul className="space-y-4">
                    {[
                      "Implement diverse scenarios",
                      "Connect to multiple endpoints",
                      "Customize SAP integration scenarios",
                      "Access public APIs"
                    ].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 font-bold text-slate-800">
                        <CheckBadgeIcon className="w-6 h-6 text-blue-600" />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-slate-900 p-12 rounded-[3rem] shadow-2xl flex justify-center items-center aspect-video">
                  <ArrowsRightLeftIcon className="w-40 h-40 text-blue-500 opacity-50 animate-pulse" />
                </div>
              </div>
            </section>

            {/* SMARTER INTEGRATION */}
            <section id="integration" className="scroll-mt-24">
              <div className="bg-blue-600 rounded-[4rem] p-16 text-white grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-black mb-8 uppercase italic text-white">Smarter Integrations</h2>
                  <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                    Designed for scalability and flexibility, SAP CPI supports multiple communication protocols and integration patterns.
                  </p>
                  <ul className="grid grid-cols-1 gap-4 text-sm font-bold uppercase tracking-widest text-blue-200">
                    <li className="flex gap-2"><CloudIcon className="w-5 h-5"/> Multitenancy Support</li>
                    <li className="flex gap-2"><CpuChipIcon className="w-5 h-5"/> Various Communication Modes</li>
                    <li className="flex gap-2"><ShieldCheckIcon className="w-5 h-5"/> Secure Communication</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-10 rounded-3xl border border-white/20 backdrop-blur-sm">
                   <p className="text-xl font-medium leading-relaxed italic">
                      "Walsetech empowers enterprises to build smart, integrated ecosystems that drive performance and innovation by supporting hybrid environments."
                   </p>
                </div>
              </div>
            </section>

            {/* SECURITY & MONITORING */}
            <section id="security" className="scroll-mt-24">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
                  <h3 className="text-2xl font-black text-blue-600 mb-4 uppercase italic">Monitoring & Reliability</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Its monitoring, security features, and API management capabilities ensure seamless operations and high reliability. Get full visibility into data movement across your entire landscape.
                  </p>
                </div>
                <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
                  <h3 className="text-2xl font-black text-blue-600 mb-4 uppercase italic">API Management</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Simplify complex integration scenarios with pre-built flows and flexible mapping tools. CPI ensures reliable operations and robust security for all public and private API endpoints.
                  </p>
                </div>
              </div>
            </section>

            {/* DIGITAL ECOSYSTEM */}
            <section id="ecosystem" className="scroll-mt-24">
              <div className="bg-slate-900 p-20 rounded-[5rem] text-white">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-5xl font-black mb-10 uppercase italic">Future-Ready Ecosystems</h2>
                  <p className="text-slate-400 text-lg mb-12">
                    SAP CPI allows businesses to create connected, efficient, and future-ready digital ecosystems that can adapt quickly to evolving needs.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 text-left">
                    <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                      <h4 className="text-xl font-black text-blue-400 mb-2 uppercase">Scalability</h4>
                      <p className="text-sm opacity-80 font-medium">Build integration patterns that grow with your business volume without increasing complexity.</p>
                    </div>
                    <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
                      <h4 className="text-xl font-black text-blue-400 mb-2 uppercase">Flexibility</h4>
                      <p className="text-sm opacity-80 font-medium">Adapt to evolving digital needs with intuitive tools and pre-built adapters for any landscape.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* FOOTER - Spans full width and remains clearly visible */}
      <footer className="w-full bg-[#0b2340] py-20 px-8 lg:px-20 border-t border-slate-800 z-[60] relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-left">
            <span className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase">Walsetech</span>
            <h3 className="text-3xl font-black text-white mt-2 tracking-tighter uppercase">Solutions</h3>
            <div className="h-1 w-12 bg-blue-600 mt-4"></div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-8">
              {['Home', 'Platform', 'Security', 'Contact'].map((link) => (
                <span key={link} className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{link}</span>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.3em] mt-4">
              © 2026 Walsetech Industrial Systems. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SAPCPI;