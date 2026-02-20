

import React from 'react';
import { 
  TruckIcon, 
  ClipboardDocumentCheckIcon, 
  ArrowsRightLeftIcon, 
  CurrencyDollarIcon, 
  MapIcon, 
  ClockIcon,
  PresentationChartLineIcon,
  LinkIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  AdjustmentsHorizontalIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

// Image Imports
import SAPTMIntroduction from "../../assets/SAPTMIntroduction.png";
import SAPTMTransport from "../../assets/SAPTMTransport.png";

const SAPTM = () => {
  const sections = [
    { id: 'intro', title: 'Introduction', icon: <TruckIcon className="w-5 h-5" /> },
    { id: 'requirement', title: 'Requirement Mgmt', icon: <ClipboardDocumentCheckIcon className="w-5 h-5" /> },
    { id: 'planning', title: 'Planning Configuration', icon: <MapIcon className="w-5 h-5" /> },
    { id: 'execution', title: 'Transportation Execution', icon: <PresentationChartLineIcon className="w-5 h-5" /> },
    { id: 'benefits', title: 'Business Benefits', icon: <CurrencyDollarIcon className="w-5 h-5" /> },
    { id: 'synergy', title: 'Warehouse Synergy', icon: <LinkIcon className="w-5 h-5" /> },
  ];

  return (
    <div className="flex min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      {/* Sidebar Navigation */}
      <aside className="w-80 bg-slate-50 border-r border-slate-200 sticky top-0 h-screen hidden xl:block shadow-sm">
        <div className="p-10 border-b border-slate-200">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter">WALSETECH</h2>
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mt-1">SAP TM Master Guide</p>
        </div>
        <nav className="p-6 space-y-2 overflow-y-auto h-[calc(100vh-160px)]">
          {sections.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="flex items-center gap-4 px-4 py-4 text-base font-bold text-slate-500 hover:bg-white hover:text-blue-700 rounded-2xl transition-all shadow-hover group">
              <span className="text-slate-400 group-hover:text-blue-600">{item.icon}</span>
              {item.title}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-8 py-20 lg:px-24">
        
        {/* Header Section */}
        <header className="mb-40 scroll-mt-24">
          <h1 className="text-7xl font-black text-slate-900 tracking-tight leading-none mb-12">
            Need Of SAP TM For <br />
            <span className="text-blue-600">Warehousing</span>
          </h1>
          <div className="bg-slate-50 p-12 rounded-[4rem] border-2 border-slate-100 mb-12">
            <p className="text-3xl text-slate-600 leading-relaxed font-medium">
              Walsetech leverages SAP Transportation Management to provide efficient support for transport processes, automating everything from planning and bidding to freight cost billing.
            </p>
          </div>
          <img 
            src={SAPTMIntroduction} 
            alt="SAP TM Introduction" 
            className="w-full h-auto rounded-[4rem] shadow-2xl border border-slate-100" 
          />
        </header>

        {/* 1. Introduction of SAP TM */}
        <section id="intro" className="mb-40 scroll-mt-24">
          <h2 className="text-5xl font-black mb-12 flex items-center gap-6 text-slate-900">
            <TruckIcon className="w-12 h-12 text-blue-600"/> Introduction of SAP TM
          </h2>
          <div className="space-y-8">
            <p className="text-2xl text-slate-700 leading-relaxed font-bold">
              SAP offers numerous possibilities for transport processes with efficient support. Through SAP ERP capabilities of LE-TRA, SAP provides SAP Transportation Management (SAP TM).
            </p>
            <div className="p-10 bg-blue-600 text-white rounded-[3rem] shadow-xl">
              <p className="text-2xl leading-relaxed font-bold italic">
                By integrating SAP TM with SAP EWM, improvements are made directly in the warehouse. This eliminates the need for external systems, significantly reducing interfaces, dependencies, and costs.
              </p>
            </div>
            <p className="text-xl text-slate-500 font-medium">
              SAP TM efficiently supports the improvement and automation of all transport-relevant processes, including freight cost billing, transport planning, and bidding.
            </p>
          </div>
        </section>

        {/* 2. Transportation Requirement Management */}
        <section id="requirement" className="mb-40 scroll-mt-24">
          <h2 className="text-5xl font-black mb-12 text-slate-900">Requirement Management</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Defining Transportation Relevance for Orders & Deliveries",
              "Creating Freight Units",
              "Configuring Complex Conditions",
              "Managing Delivery Creation",
              "Creating Handling Units & Package Building"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-200 text-xl font-bold text-slate-800">
                <ShieldCheckIcon className="w-8 h-8 text-blue-600 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* 3. Planning Configuration */}
        <section id="planning" className="mb-40 scroll-mt-24">
          <h2 className="text-5xl font-black mb-12 text-slate-900 flex items-center gap-6">
             <MapIcon className="w-12 h-12 text-blue-600"/> Planning Configuration
          </h2>
          <div className="bg-slate-900 text-white p-12 rounded-[4rem] mb-16 shadow-2xl">
            <h3 className="text-3xl font-black mb-10 text-blue-400">Processes & Cockpit Layouts</h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6 text-lg font-bold">
              <ul className="space-y-4">
                <li className="flex gap-4 items-start"><CheckBadgeIcon className="w-6 h-6 text-blue-400 shrink-0 mt-1"/> Defining Selection and Planning Profiles</li>
                <li className="flex gap-4 items-start"><CheckBadgeIcon className="w-6 h-6 text-blue-400 shrink-0 mt-1"/> Configuring Transportation Cockpit Layouts</li>
                <li className="flex gap-4 items-start"><CheckBadgeIcon className="w-6 h-6 text-blue-400 shrink-0 mt-1"/> Interactive Planning & Scheduling</li>
                <li className="flex gap-4 items-start"><CheckBadgeIcon className="w-6 h-6 text-blue-400 shrink-0 mt-1"/> Optimizing Freight Orders</li>
              </ul>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start"><CheckBadgeIcon className="w-6 h-6 text-blue-400 shrink-0 mt-1"/> Creating Transportation Proposals</li>
                <li className="flex gap-4 items-start"><CheckBadgeIcon className="w-6 h-6 text-blue-400 shrink-0 mt-1"/> Subcontracting Freight Orders</li>
                <li className="flex gap-4 items-start"><CheckBadgeIcon className="w-6 h-6 text-blue-400 shrink-0 mt-1"/> Creating Detailed Load Plans</li>
                <li className="flex gap-4 items-start"><CheckBadgeIcon className="w-6 h-6 text-blue-400 shrink-0 mt-1"/> Defining Short-cut Planning Processes</li>
              </ul>
            </div>
          </div>
          <img 
            src={SAPTMTransport} 
            alt="SAP TM Planning Cockpit" 
            className="w-full h-auto rounded-[4rem] shadow-2xl border border-slate-100" 
          />
        </section>

        {/* 4. Transportation Execution */}
        <section id="execution" className="mb-40 scroll-mt-24">
          <h2 className="text-5xl font-black mb-12 text-slate-900 flex items-center gap-6">
            <PresentationChartLineIcon className="w-12 h-12 text-blue-600"/> Execution & Integration
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="p-10 bg-slate-50 border rounded-[3rem] shadow-sm">
              <AdjustmentsHorizontalIcon className="w-12 h-12 text-blue-600 mb-6"/>
              <h4 className="text-2xl font-black mb-4">Configuring Types</h4>
              <p className="text-lg font-bold text-slate-600 leading-relaxed">Configuring Freight Order types and explaining the concept of Transportation Units and Service Orders.</p>
            </div>
            <div className="p-10 bg-slate-50 border rounded-[3rem] shadow-sm">
              <DocumentTextIcon className="w-12 h-12 text-blue-600 mb-6"/>
              <h4 className="text-2xl font-black mb-4">Monitoring & Output</h4>
              <p className="text-lg font-bold text-slate-600 leading-relaxed">Generating outputs and real-time monitoring of all transportation events.</p>
            </div>
          </div>
          <div className="p-10 bg-blue-50 border-2 border-blue-100 rounded-[3rem] text-center">
            <h4 className="text-3xl font-black text-blue-900">Integrating Warehouses</h4>
            <p className="text-xl font-bold text-blue-700 mt-2 italic">Standardizing processes to tap into double-figure savings potentials.</p>
          </div>
        </section>

        {/* 5. Business Benefits */}
        <section id="benefits" className="mb-40 scroll-mt-24">
          <h2 className="text-5xl font-black mb-12 text-slate-900 underline decoration-blue-200 decoration-8 underline-offset-8">Financial & Strategic Benefits</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-12 bg-white border-2 border-slate-100 rounded-[4rem] shadow-xl">
              <CurrencyDollarIcon className="w-20 h-20 text-blue-600 mb-8" />
              <h4 className="text-3xl font-black text-slate-900 mb-6">Freight Cost Reduction</h4>
              <p className="text-xl font-medium text-slate-600 leading-relaxed">
                Increase transparency of courier services to select carriers with the best price and improve your negotiating position for carrier contracts.
              </p>
            </div>
            <div className="p-12 bg-slate-900 text-white rounded-[4rem] shadow-xl">
              <PresentationChartLineIcon className="w-20 h-20 text-blue-400 mb-8" />
              <h4 className="text-3xl font-black mb-6">Process Standardization</h4>
              <p className="text-xl font-medium opacity-80 leading-relaxed">
                Implement well thought out software solutions to standardize processes and tap into savings potentials in single and double-figure percentages.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Synergy */}
        <section id="synergy" className="mb-40 scroll-mt-24">
          <div className="bg-blue-600 text-white p-20 rounded-[5rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-6 mb-12">
                <LinkIcon className="w-16 h-16 text-blue-200" />
                <h2 className="text-6xl font-black tracking-tighter">Synergy with EWM</h2>
              </div>
              <p className="text-3xl text-blue-100 font-bold mb-16 leading-relaxed">
                In synergy with SAP warehouse management for intralogistics, SAP TM facilitates improvements in:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Notification', 'Preparation of Goods', 'Time Slot Booking', 'Yard Management'].map((item) => (
                  <div key={item} className="p-8 bg-white/10 text-center rounded-3xl border border-white/20 backdrop-blur-sm">
                    <span className="text-lg font-black">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <TruckIcon className="absolute right-[-100px] bottom-[-100px] w-96 h-96 opacity-10 rotate-[-15deg]" />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-60 pt-24 border-t border-slate-200 text-center">
          <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">WALSETECH</h3>
          <p className="text-xl text-slate-400 font-bold uppercase tracking-[0.2em] mb-12">SAP SCM Implementation Experts</p>
          <div className="space-y-4 text-slate-300 font-black uppercase tracking-widest text-xs">
            <p>Thank You</p>
            <p>© {new Date().getFullYear()} Walsetech. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default SAPTM;