import React from 'react';
import { 
  TruckIcon, 
  ClipboardDocumentListIcon, 
  MapIcon, 
  PlayIcon, 
  ComputerDesktopIcon, 
  LinkIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

// Asset Imports
import SAPYLIntroduction from '../../assets/SAPYLIntroduction.png';
import SAPYLProcess from '../../assets/SAPYLProcess.png';

const SAPYL = () => {
  const sections = [
    { id: 'intro', title: 'Introduction', icon: <TruckIcon className="w-5 h-5" /> },
    { id: 'process', title: 'Core Processes', icon: <ClipboardDocumentListIcon className="w-5 h-5" /> },
    { id: 'master-data', title: 'Master Data', icon: <MapIcon className="w-5 h-5" /> },
    { id: 'transformation', title: 'Transformation Path', icon: <PlayIcon className="w-5 h-5" /> },
    { id: 'monitoring', title: 'Monitoring & Reporting', icon: <ComputerDesktopIcon className="w-5 h-5" /> },
    { id: 'integration', title: 'Integration Scenarios', icon: <LinkIcon className="w-5 h-5" /> },
  ];

  const steps = [
    { step: "01", title: "Performance", desc: "Identify the necessity for improved business performance" },
    { step: "02", title: "Modernize", desc: "Update business functions with intelligent technology" },
    { step: "03", title: "Migrate", desc: "Technical migration of tools and services to the cloud" },
    { step: "04", title: "Establish", desc: "Establishing an intelligent enterprise with a collective network" }
  ];

  return (
    <div className="flex min-h-screen bg-white font-sans text-slate-900">
      {/* Sidebar Navigation */}
      <aside className="w-72 bg-white border-r border-slate-200 sticky top-0 h-screen hidden xl:block z-20">
        <div className="p-8 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-[#145ea8]">Walsetech</h2>
          <p className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-semibold">SAP Yard Logistics</p>
        </div>
        <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-120px)]">
          {sections.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-[#145ea8] hover:text-white rounded-lg transition-all group">
              <span className="text-slate-400 group-hover:text-white">{item.icon}</span>
              {item.title}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 bg-white overflow-x-hidden">
        {/* pt-32 ensures the top title is never cut by the navbar */}
        <div className="max-w-5xl mx-auto px-6 pt-32 pb-16 lg:px-16">
          
          <header className="mb-20">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-6 uppercase leading-tight">
              Use of SAP YL For Warehousing
            </h1>
            <div className="h-2 w-24 bg-[#145ea8] mb-8"></div>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl font-medium">
              Walsetech presents SAP Yard Logistics (SAP YL) to help you stay in control of your yard processes across trucks, rail, ships, and aircraft.
            </p>
          </header>

          {/* 1. Introduction */}
          <section id="intro" className="mb-28 scroll-mt-32">
            <h2 className="text-3xl font-bold text-[#145ea8] mb-8 border-l-4 border-[#145ea8] pl-4 uppercase">Introduction of SAP YL</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="prose prose-slate max-w-none text-slate-700 text-lg leading-relaxed">
                <p className="mb-4">
                  SAP Yard Logistics covers various modes of transport. Whenever cargo is loaded from one transportation mode to another, the yard starts to play a key role.
                </p>
                <p>
                  Walsetech implements SAP YL to guarantee security by registering each vehicle and tracking every action from check-in to check-out in restricted company areas.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src={SAPYLIntroduction} 
                  alt="SAP Yard Logistics Overview" 
                  className="w-full h-auto"
                  onError={(e) => { e.target.src = "https://placehold.co/600x400?text=SAP+YL+Intro"; }}
                />
              </div>
            </div>
          </section>

          {/* 2. Core Processes */}
          <section id="process" className="mb-28 scroll-mt-32">
            <h2 className="text-3xl font-bold text-[#145ea8] mb-8 border-l-4 border-[#145ea8] pl-4 uppercase">Yard Logistics Processes</h2>
            
            <div className="mb-12 rounded-3xl overflow-hidden border border-slate-200 shadow-lg">
              <img 
                src={SAPYLProcess} 
                alt="SAP YL Core Process Flow" 
                className="w-full h-auto"
                onError={(e) => { e.target.src = "https://placehold.co/1200x500?text=Process+Workflow"; }}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {[
                { title: "Planning", desc: "Data entry via SAP ERP/TM integration. Includes yard-specific data like loading times and maintenance schedules." },
                { title: "Check-In", desc: "Transportation units registered upon arrival via staff or self-registration terminals using license plates." },
                { title: "Execution", desc: "Yard Tasks performed in sequence. Tracks planned vs. actual times with commands sent via SMS or web services." },
                { title: "Check-Out", desc: "Return of equipment and final checkpoint passage, essential for real-time yard security tracking." }
              ].map((proc, i) => (
                <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:shadow-md hover:border-[#145ea8] transition-all group">
                  <h4 className="font-bold text-[#145ea8] mb-3 uppercase tracking-wide">{proc.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{proc.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Master Data */}
          <section id="master-data" className="mb-28 scroll-mt-32">
            <h2 className="text-3xl font-bold text-[#145ea8] mb-8 border-l-4 border-[#145ea8] pl-4 uppercase">Master Data & Yard Structure</h2>
            <div className="bg-[#f8fafc] p-10 rounded-3xl border border-slate-200">
              <ul className="grid md:grid-cols-2 gap-8 text-slate-800 font-bold uppercase tracking-widest text-xs">
                <li className="flex items-center gap-4"><MapIcon className="w-6 h-6 text-[#145ea8]" /> Yard Structure</li>
                <li className="flex items-center gap-4"><TruckIcon className="w-6 h-6 text-[#145ea8]" /> TU Management</li>
                <li className="flex items-center gap-4"><ChartBarIcon className="w-6 h-6 text-[#145ea8]" /> Handling Resources</li>
                <li className="flex items-center gap-4"><ComputerDesktopIcon className="w-6 h-6 text-[#145ea8]" /> Yard Editor</li>
              </ul>
            </div>
          </section>

          {/* 4. Transformation Path */}
          <section id="transformation" className="mb-28 scroll-mt-32">
            <h2 className="text-3xl font-bold text-[#145ea8] mb-12 border-l-4 border-[#145ea8] pl-4 uppercase">Transformation Path</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {steps.map((item, i) => (
                <div key={i} className="relative p-8 border-t-2 border-slate-100 hover:border-[#145ea8] transition-colors bg-white group shadow-sm">
                  <span className="text-5xl font-black text-slate-50 absolute top-4 right-4 z-0 group-hover:text-slate-100">{item.step}</span>
                  <div className="relative z-10">
                    <h5 className="font-black uppercase text-[#145ea8] mb-3">{item.title}</h5>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. Monitoring (Dark Section) */}
          <section id="monitoring" className="mb-28 scroll-mt-32 bg-[#0b2340] text-white p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <ChartBarIcon className="w-12 h-12 text-[#39FF14]" />
                <h2 className="text-3xl font-black uppercase tracking-tight">Monitoring & Reporting</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <h5 className="text-[#39FF14] font-bold uppercase text-xs tracking-widest mb-1">Central Tool</h5>
                    <p className="text-lg font-bold underline decoration-[#39FF14] underline-offset-8">Yard Cockpit</p>
                  </div>
                  <div>
                    <h5 className="text-[#39FF14] font-bold uppercase text-xs tracking-widest mb-1">Visual Mapping</h5>
                    <p className="text-lg font-bold">Graphical Yard Overview</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 text-sm font-bold uppercase tracking-widest opacity-90">
                  <p className="flex items-center gap-2"><span className="text-[#39FF14]">●</span> Alert Management</p>
                  <p className="flex items-center gap-2"><span className="text-[#39FF14]">●</span> Safety Lists</p>
                  <p className="flex items-center gap-2"><span className="text-[#39FF14]">●</span> Appointment Tracking</p>
                  <p className="flex items-center gap-2"><span className="text-[#39FF14]">●</span> Resource Monitoring</p>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Integration */}
          <section id="integration" className="mb-28 scroll-mt-32">
            <h2 className="text-3xl font-bold text-[#145ea8] mb-8 border-l-4 border-[#145ea8] pl-4 uppercase">Integration Scenarios</h2>
            <div className="flex flex-wrap gap-4">
              {['SAP TM', 'SAP EWM', 'SAP ERP', 'SAP S/4 HANA', 'Third Party'].map((sys) => (
                <span key={sys} className="px-8 py-4 bg-white text-[#145ea8] rounded-xl font-black text-xs border-2 border-slate-100 hover:border-[#145ea8] transition-all uppercase tracking-widest shadow-sm">
                  {sys}
                </span>
              ))}
            </div>
          </section>

          <footer className="mt-40 pt-16 border-t border-slate-200 text-center">
            <h3 className="text-2xl font-black text-[#145ea8] tracking-[0.4em] mb-4 uppercase">WALSETECH</h3>
            <p className="text-slate-500 text-sm mb-12 font-medium">Precision in SAP Supply Chain Management.</p>
            <div className="text-slate-400 text-[10px] font-bold space-y-2 uppercase tracking-widest">
              <p>Thank You</p>
              <p>© {new Date().getFullYear()} Walsetech. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default SAPYL;