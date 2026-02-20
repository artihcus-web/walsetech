import React from 'react';
import { 
  CheckBadgeIcon
} from "@heroicons/react/24/outline";

// Image Imports
import SAPEWMStorageStructure from "../../assets/SAPEWMStorage structure.png";
import SAPEWMGoodsReceipt from "../../assets/SAPEWMGoodsReceipt.png";
import SAPEWMDeconsolidation from "../../assets/SAPEWMDeconsolidation.png";
import SAPEWMStorageStrategies from "../../assets/SAPStorageStrategies.png";
import SAPEWMRetrivalStrategies from "../../assets/SAPEWMRetrivalStrategies.png";
import SAPEWMManToGoodsSystem from "../../assets/SAPEWMManToGoodsSystem.png";
import SAPEWMPickPack from "../../assets/SAPEWMPickByVoice.png"; 
import SAPEWMPickByVoice from "../../assets/SAPEWMPickByVoice.png";
import SAPEWMKitAndSet from "../../assets/SAPEWMKitAndSetInformation.png";
import SAPEWMRFID from "../../assets/SAPEWMRFID.png";

const SAPEWM = () => {
  const menuItems = [
    { id: 'intro', label: 'Introduction' },
    { id: 'structure', label: 'Storage Structure' },
    { id: 'hu', label: 'Handling Units' },
    { id: 'batch', label: 'Batch & Serial' },
    { id: 'quality', label: 'Quality & Decon' },
    { id: 'strategies', label: 'Strategies' },
    { id: 'production', label: 'Production Supply' },
    { id: 'issue', label: 'Goods Issue' },
    { id: 'special', label: 'VAS & Kits' },
    { id: 'optimization', label: 'Task & Slotting' },
    { id: 'tech', label: 'RFID & HANA' },
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen font-sans selection:bg-blue-100 flex flex-col">
      
      {/* WRAPPER FOR SIDEBAR + CONTENT */}
      <div className="flex flex-1">
        
        {/* SIDEBAR - Sticky so it scrolls away at the footer */}
        <nav className="fixed xl:sticky top-0 left-0 h-screen w-80 bg-white border-r border-slate-200 hidden xl:flex flex-col p-10 z-50">
          <div className="mb-12 flex-shrink-0">
            <span className="text-xs font-black tracking-[0.3em] text-blue-600 uppercase">Solutions</span>
            <h2 className="text-3xl font-black text-slate-900 mt-2 tracking-tighter uppercase">Walsetech</h2>
            <div className="h-1 w-12 bg-blue-600 mt-4"></div>
          </div>
          
          <ul className="space-y-4 overflow-y-auto pr-2 custom-scrollbar flex-grow">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-[10px] font-bold text-slate-400 hover:text-blue-600 uppercase tracking-widest block transition-all">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
          
          <header id="intro" className="pt-24 pb-16 px-8 lg:px-20 max-w-7xl mx-auto w-full">
            <h1 className="text-6xl lg:text-7xl font-black text-slate-900 leading-tight mb-8 tracking-tighter">
              SAP Extended <br />
              <span className="text-blue-600 italic">Warehouse Management</span>
            </h1>
            <div className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
              <p className="text-xl text-slate-700 leading-relaxed font-medium">
                SAP Extended Warehouse Management (SAP EWM) forms part of SAP supply chain Management (SAP SCM) and provides end to end support for supply chain processes.
              </p>
            </div>
          </header>

          <main className="px-8 lg:px-20 max-w-7xl mx-auto space-y-32 w-full">
            {/* STORAGE STRUCTURE */}
            <section id="structure" className="scroll-mt-24">
              <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase italic tracking-tight">Storage Structure</h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p>SAP EWM provides the ability to define and map the physical layout of your warehouse and logistics center.</p>
                </div>
                <img src={SAPEWMStorageStructure} alt="Storage Structure" className="w-full rounded-[3rem] shadow-2xl" />
              </div>
            </section>

            {/* HANDLING UNITS */}
            <section id="hu" className="scroll-mt-24">
              <div className="bg-slate-900 rounded-[4rem] p-16 text-white grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-black mb-8 uppercase italic">Handling Units (HU)</h2>
                  <ul className="grid grid-cols-2 gap-4 text-sm font-bold uppercase tracking-widest text-blue-400">
                    <li className="flex gap-2"><CheckBadgeIcon className="w-5 h-5"/> Nestable Units</li>
                    <li className="flex gap-2"><CheckBadgeIcon className="w-5 h-5"/> EAN 128 / SSCC</li>
                  </ul>
                </div>
                <img src={SAPEWMGoodsReceipt} alt="HU Handling" className="w-full rounded-3xl shadow-lg" />
              </div>
            </section>

            {/* BATCH & SERIAL */}
            <section id="batch" className="scroll-mt-24">
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
                  <h3 className="text-2xl font-black text-blue-600 mb-4 uppercase italic">Batch Management</h3>
                  <p className="text-slate-600">Articles can be provided with various characteristics like country of origin.</p>
                </div>
                <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
                  <h3 className="text-2xl font-black text-blue-600 mb-4 uppercase italic">Serial Number Handling</h3>
                  <p className="text-slate-600">Used for unique product identification tracking.</p>
                </div>
              </div>
            </section>

            {/* QUALITY & DECON */}
            <section id="quality" className="scroll-mt-24">
              <h2 className="text-4xl font-black text-slate-900 mb-12 uppercase italic">Quality & Decon</h2>
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100">
                    <h4 className="text-xl font-black text-blue-800 mb-2">Quality Inspection</h4>
                  </div>
                  <img src={SAPEWMDeconsolidation} alt="Deconsolidation" className="w-full rounded-[3rem] shadow-xl" />
                </div>
                <div className="p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm">
                  <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase">Deconsolidation</h4>
                  <p className="text-slate-600">Counterpart to consolidation, breaking down items for storage.</p>
                </div>
              </div>
            </section>

            {/* STRATEGIES */}
            <section id="strategies" className="scroll-mt-24">
               <div className="grid lg:grid-cols-2 gap-10">
                  <img src={SAPEWMStorageStrategies} alt="Putaway" className="w-full rounded-3xl" />
                  <img src={SAPEWMRetrivalStrategies} alt="Retrieval" className="w-full rounded-3xl" />
               </div>
            </section>

            {/* PRODUCTION */}
            <section id="production" className="scroll-mt-24">
               <div className="bg-blue-600 p-16 rounded-[4rem] text-white">
                  <h2 className="text-4xl font-black mb-10 uppercase italic">Production Supply</h2>
                  <p className="text-xl opacity-90">Mapping for Production orders, Process orders, and Kanban.</p>
               </div>
            </section>

            {/* ISSUE */}
            <section id="issue" className="scroll-mt-24">
              <div className="grid lg:grid-cols-3 gap-8">
                <img src={SAPEWMManToGoodsSystem} alt="Man-to-Goods" className="rounded-2xl shadow-md" />
                <img src={SAPEWMPickPack} alt="Pick Pack" className="rounded-2xl shadow-md" />
                <img src={SAPEWMPickByVoice} alt="Voice" className="rounded-2xl shadow-md" />
              </div>
            </section>

            {/* VAS & KITS */}
            <section id="special" className="scroll-mt-24">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <img src={SAPEWMKitAndSet} alt="Kit and Set" className="w-full rounded-[4rem] shadow-2xl" />
                 <h2 className="text-4xl font-black text-slate-900 uppercase italic">VAS & Kitting</h2>
              </div>
            </section>

            {/* TECH & RFID */}
            <section id="tech" className="scroll-mt-24 pb-32">
               <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="p-10 bg-slate-900 text-white rounded-[3rem]">
                     <h4 className="text-2xl font-black mb-4 italic text-blue-400 uppercase">SAP EWM On HANA</h4>
                  </div>
                  <img src={SAPEWMRFID} alt="RFID Tech" className="w-full rounded-[4rem] shadow-2xl" />
               </div>
            </section>
          </main>
        </div>
      </div>

      {/* FOOTER SECTION - Outside the wrapper for 100% full-width visibility */}
      <footer className="w-full bg-[#0b2340] py-20 px-8 lg:px-20 border-t border-slate-800 z-[100] relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-left">
            <span className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase">Walsetech</span>
            <h3 className="text-3xl font-black text-white mt-2 tracking-tighter uppercase">Solutions</h3>
            <div className="h-1 w-12 bg-blue-600 mt-4"></div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-8">
              {['Introduction', 'Storage', 'Technology'].map((link) => (
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

export default SAPEWM;