import React from "react";

// Images
import SAPMFSIntroduction from "../../assets/SAPMFSIntroduction.png";
import SAPMFSConveyorSystem from "../../assets/SAPMFSConveyorSystem.png";
import SAPMFSSmallParts from "../../assets/SAPMFSSmallParts.png";
import SAPMFSHighBay from "../../assets/SAPMFSHighBay.png";
import SAPMFSSingleDeepShuttle from "../../assets/SAPMFSSingleDeepShuttle.png";
import SAPMFSDoubleDeepShuttle from "../../assets/SAPMFSDoubleDeepShuttle.png";
import SAPMFSMultiDeepStorage from "../../assets/SAPMFSMultiDeepStorage.png";
import SAPMFSPickBy from "../../assets/SAPMFSPickBy.png";
import SAPMFSGoods from "../../assets/SAPMFSGoods.png"; 

const SAPMFS = () => {
  const menuItems = [
    { id: "intro", label: "Overview" },
    { id: "conveyor", label: "Conveyor Systems" },
    { id: "smallparts", label: "Small Parts AS/RS" },
    { id: "highbay", label: "High-Bay Systems" },
    { id: "shuttle", label: "Shuttle Storage" },
    { id: "agv", label: "AGV, MOC & IFC" },
    { id: "gtp", label: "Goods-To-Person" },
    { id: "picklight", label: "Pick-By-Light" },
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 flex flex-col">
      
      {/* WRAPPER FOR SIDEBAR + CONTENT */}
      <div className="flex flex-1">
        
        {/* SIDEBAR - Changed to sticky for natural scrolling at footer */}
        <nav className="w-80 bg-white border-r border-slate-200 hidden xl:flex flex-col p-10 h-screen sticky top-0 z-50 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
          <div className="mb-16 flex-shrink-0">
            <span className="text-xs font-black tracking-[0.3em] text-blue-600 uppercase">Solutions</span>
            <h2 className="text-3xl font-black text-slate-900 mt-2 tracking-tighter uppercase">Walsetech</h2>
            <div className="h-1 w-12 bg-blue-600 mt-4"></div>
          </div>
          
          <ul className="space-y-6 overflow-y-auto pr-2 flex-grow custom-scrollbar">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-md font-bold text-slate-400 hover:text-blue-600 hover:translate-x-2 transition-all duration-300 block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10 border-t border-slate-100">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
              SAP SCM Center of Excellence <br />
              Material Flow Systems
            </p>
          </div>
        </nav>

        {/* MAIN CONTENT AREA */}
        <div className="flex-1 flex flex-col min-h-screen overflow-x-hidden">
          
          {/* INTRODUCTION */}
          <header id="intro" className="relative pt-24 pb-16 px-8 lg:px-20 max-w-7xl mx-auto border-b border-slate-100 mb-20">
            <div className="max-w-4xl">
              <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                <span>Supply Chain</span>
                <span className="h-px w-4 bg-slate-300"></span>
                <span className="text-blue-600 italic">SAP EWM Integrated</span>
              </nav>
              <h1 className="text-6xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tight">
                SAP Material <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  Flow System (MFS)
                </span>
              </h1>
            </div>

            <div className="relative group mb-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <img
                src={SAPMFSIntroduction}
                alt="SAP MFS Introduction"
                className="relative w-full h-[550px] object-cover rounded-[2rem] shadow-2xl border border-white"
              />
            </div>

            <div className="bg-white p-12 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
              <p className="text-xl leading-relaxed text-slate-700 font-medium">
                SAP Material Flow System is an integrated functional component within SAP EWM. SAP MFS is typically used for material flow control in automated warehouse systems such as AS/RS for small parts and High-Bay Warehouses.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                The deployment of SAP MFS results in a two-tier SAP–PLC architecture, making external middleware and subsystems like WCS/MFC surplus to requirements. This means lower operation costs, greater flexibility, and maximum protection for your investment.
              </p>
            </div>
          </header>

          <main className="px-8 lg:px-20 max-w-7xl mx-auto space-y-32 pb-40">
            
            {/* CONVEYOR SYSTEM */}
            <section id="conveyor" className="scroll-mt-24">
              <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
                <div>
                  <span className="text-blue-600 font-bold text-sm tracking-widest uppercase mb-4 block italic">Module 01</span>
                  <h2 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Conveyor System</h2>
                  <div className="w-12 h-1 bg-blue-600 mb-8"></div>
                  <p className="text-slate-700 leading-relaxed text-lg font-medium">
                    SAP MFS defines conveyor travel for totes, pallets and other handling units on automated lines as "routes." 
                  </p>
                </div>
                <img
                  src={SAPMFSConveyorSystem}
                  alt="Conveyor System"
                  className="w-full h-[450px] object-cover rounded-[2.5rem] shadow-xl"
                />
              </div>
              <div className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100">
                <p className="text-slate-600 leading-relaxed">
                  Complex layouts with multi-level layouts, buffers, and sorting lines can be mapped. Real-time capabilities safeguard communication even at time-critical decision points to ensure an uninterrupted flow of material.
                </p>
              </div>
            </section>

            {/* SMALL PARTS ASRS */}
            <section id="smallparts" className="scroll-mt-24">
              <div className="bg-slate-900 rounded-[3rem] p-16 overflow-hidden relative">
                <div className="relative z-10 flex flex-col lg:flex-row gap-16">
                  <div className="lg:w-1/2">
                    <span className="text-blue-400 font-bold text-sm tracking-widest uppercase mb-4 block">Module 02</span>
                    <h2 className="text-4xl font-black text-white mb-6 tracking-tight">Small Parts AS/RS</h2>
                    <p className="text-slate-300 leading-relaxed text-lg font-medium mb-6">
                      AS/RS for totes and trays, plus vertical lifter systems, are controlled directly by SAP MFS.
                    </p>
                    <div className="space-y-4 text-slate-400 text-sm border-t border-white/10 pt-6">
                      <p>• Often implemented as double deep storage with multiple load handling gear.</p>
                      <p>• Real-time architecture guarantees rapid response times and optimum performance.</p>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <img
                      src={SAPMFSSmallParts}
                      alt="Small Parts ASRS"
                      className="w-full h-[400px] object-cover rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* HIGH BAY */}
            <section id="highbay" className="scroll-mt-24">
               <div className="flex flex-col gap-10">
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight text-center">High-Bay Warehouse System</h2>
                  <img
                    src={SAPMFSHighBay}
                    alt="High Bay Warehouse"
                    className="w-full h-[550px] object-cover rounded-[3rem] shadow-lg border border-slate-100"
                  />
                  <div className="bg-white border border-slate-100 p-10 rounded-[2rem] shadow-sm">
                     <p className="text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
                      Any automated high-bay warehouse system and integrated conveyor system can be controlled and optimized. Movement commands are sent in real-time directly to the PLC controlling stacker cranes.
                     </p>
                  </div>
               </div>
            </section>

            {/* SHUTTLE STORAGE */}
            <section id="shuttle" className="scroll-mt-24">
              <div className="mb-12">
                 <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Shuttle Storage</h2>
                 <p className="text-lg text-slate-600 font-medium">
                  Highly automated shuttle AS/RS for small parts with direct SAP–PLC link for cars, lifters, and elevators.
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                <div className="space-y-4">
                  <img src={SAPMFSSingleDeepShuttle} alt="Single Deep" className="w-full h-[350px] object-cover rounded-[2rem] shadow-md" />
                  <p className="text-center font-bold text-slate-500 text-sm uppercase tracking-widest">Single Deep Shuttle</p>
                </div>
                <div className="space-y-4">
                  <img src={SAPMFSDoubleDeepShuttle} alt="Double Deep" className="w-full h-[350px] object-cover rounded-[2rem] shadow-md" />
                  <p className="text-center font-bold text-slate-500 text-sm uppercase tracking-widest">Double Deep Shuttle</p>
                </div>
              </div>

              <img
                src={SAPMFSMultiDeepStorage}
                alt="Multi Deep Storage"
                className="w-full h-[500px] object-cover rounded-[2.5rem] shadow-md mb-12"
              />
              
              <div className="grid lg:grid-cols-2 gap-10 bg-blue-50 p-12 rounded-[3rem]">
                <p className="text-slate-700 leading-relaxed font-medium italic">
                  Putaway strategies are mapped to minimize goods relocation. Nominal system output is achieved by optimum modelling of removal strategies.
                </p>
                <p className="text-slate-700 leading-relaxed font-medium">
                  For stock picking, handling units near aisles are reserved. The strategy also takes pair formation into account where possible.
                </p>
              </div>
            </section>

            {/* AGV, MOC & IFC */}
            <section id="agv" className="scroll-mt-24">
              <div className="max-w-4xl">
                <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tight">AGVs, MOCs & IFC Systems</h2>
                <p className="text-slate-700 leading-relaxed text-lg mb-8">
                  In-house conveyor systems with automatically controlled vehicles for material transport. SAP MFS sends movement commands directly to control stations in real-time.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm border-b-4 border-b-blue-600">
                    <p className="text-slate-600 text-sm font-bold">Return messages from control systems are processed in real-time to ensure operational transparency.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* GOODS TO PERSON */}
            <section id="gtp" className="scroll-mt-24 border-t border-slate-100 pt-24">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-none mb-6">
                    Goods-To-Person <br /><span className="text-blue-600">Dynamic Picking</span>
                  </h2>
                  <p className="text-slate-700 leading-relaxed text-lg font-medium">
                    The Goods-to-Person principle dynamically provides pallets or totes to operators at picking stations. Automated systems equipped with GtP stations can be managed by SAP MFS.
                  </p>
                </div>
                <div className="group overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white">
                  <img 
                    src={SAPMFSGoods} 
                    alt="SAP MFS Goods to Operator" 
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </section>

            {/* PICK BY LIGHT */}
            <section id="picklight" className="scroll-mt-24 pb-20">
              <div className="flex flex-col gap-12">
                <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-6 text-center">Pick-By / Pick-To-Light</h2>
                <img
                  src={SAPMFSPickBy}
                  alt="Pick By Light"
                  className="w-full h-[550px] object-cover rounded-[3rem] shadow-2xl"
                />
                <div className="bg-slate-900 text-white p-12 rounded-[3rem] grid md:grid-cols-2 gap-10">
                  <p className="text-slate-300 leading-relaxed font-medium">
                    Pick-by-light systems are deployed in small parts picking environments where efficiency and quality are paramount (zero defect strategy).
                  </p>
                  <p className="text-slate-300 leading-relaxed font-medium">
                    SAP EWM and MFS manage the complete flow of information for the organization of material flows, subdividing pick zones, and target tote assignment.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* FOOTER SECTION - Fully visible and spans full width */}
      <footer className="w-full bg-[#0b2340] py-20 px-8 lg:px-20 border-t border-slate-800 z-[60] relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-left">
            <span className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase">Walsetech</span>
            <h3 className="text-3xl font-black text-white mt-2 tracking-tighter uppercase">Solutions</h3>
            <div className="h-1 w-12 bg-blue-600 mt-4"></div>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-8">
              {['About Us', 'Services', 'Terms', 'Contact'].map((link) => (
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

export default SAPMFS;