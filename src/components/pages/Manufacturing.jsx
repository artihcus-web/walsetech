import React from "react";
import { 
  Warehouse, 
  Truck, 
  Boxes, 
  CheckCircle2, 
  Factory, 
  Cpu, 
  ShieldCheck 
} from "lucide-react";

// Hero Image Import
import heroImage from "../../assets/manufacturing.jpg"; 

// INDUSTRY ASSETS
import ManufacturingImage from "../../assets/ManufacturingImage.png";
import ManufacturingChallenges from "../../assets/ManufacturingChallenges.png";

function Manufacturing() {
  return (
    <main className="bg-white text-[#0b2340] font-sans tracking-tight overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-[45vh] flex items-center justify-center text-center px-6">
        <img 
          src={heroImage} 
          alt="Manufacturing Industry" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-5xl text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">
            Manufacturing Industry
          </h1>
          <p className="text-lg md:text-2xl opacity-90 font-medium max-w-3xl mx-auto leading-relaxed">
            Enabling intelligent manufacturing ecosystems with advanced SAP warehouse and supply chain solutions.
          </p>
        </div>
      </section>

      {/* INTRODUCTION SECTION - Increased Image Size */}
      <section className="max-w-[90%] xl:max-w-[1300px] mx-auto px-4 py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-10 items-center text-left">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#145ea8] tracking-tight">
              The Digital Revolution in Manufacturing
            </h2>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              To adapt to the <span className="font-bold text-[#145ea8]">digital revolution</span> and meet today’s evolving market demands, industrial companies must create cutting-edge operational ecosystems and foster supplier collaboration.
            </p>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              This involves developing <span className="font-bold text-[#0b3d91]">intelligent solutions and digital platforms</span> that reduce costs, enhance service capabilities, and deliver a consistent customer experience.
            </p>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              <strong>Walsetech</strong> provides comprehensive solutions that help manufacturers improve performance in critical areas including talent management, supply chain optimization, process automation, and quality control.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            {/* Increased max-w-md to max-w-2xl */}
            <img 
              src={ManufacturingImage} 
              alt="Intelligent Manufacturing" 
              className="w-full max-w-2xl rounded-2xl shadow-2xl border border-gray-100 transition-transform duration-500 hover:scale-[1.02]" 
            />
          </div>
        </div>
      </section>

      {/* CHALLENGES SECTION - Increased Image Size */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-[90%] xl:max-w-[1300px] mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center text-left">
          <div className="flex justify-center order-2 lg:order-1">
            {/* Increased max-w-sm to max-w-lg */}
            <img 
              src={ManufacturingChallenges} 
              alt="Industry Challenges" 
              className="w-full max-w-lg rounded-2xl shadow-xl border border-gray-100 transition-transform duration-500 hover:scale-[1.02]" 
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl font-extrabold text-[#145ea8] tracking-tight uppercase">
              Challenges Faced by Manufacturers
            </h2>
            <div className="grid grid-cols-1 gap-y-4">
              {[
                "Achieving High Efficiency in supply chains",
                "Building Resilience amid regulatory uncertainty",
                "Realizing the Full Potential of innovation",
                "Managing Product and Supply Chain Complexity",
                "Maximizing Capacity and Asset Utilization",
                "Improving Staff Productivity and Safety"
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-4 text-base lg:text-lg text-gray-700 font-medium group">
                  <CheckCircle2 size={22} className="text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="max-w-[90%] xl:max-w-[1300px] mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-[#145ea8] mb-16 tracking-tighter uppercase">
          Our SAP Warehouse Solutions for Manufacturing
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* SAP Yard Logistics */}
          <div className="bg-white p-10 rounded-3xl border border-blue-50 hover:shadow-xl transition-all group hover:-translate-y-2">
            <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-colors group-hover:bg-blue-600">
              <Warehouse size={40} className="text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-[#0b3d91] mb-4">SAP Yard Logistics</h3>
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">Streamlining movement and visibility within your facility's yard.</p>
          </div>

          {/* SAP TM */}
          <div className="bg-white p-10 rounded-3xl border border-red-50 hover:shadow-xl transition-all group hover:-translate-y-2">
            <div className="bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-colors group-hover:bg-red-600">
              <Truck size={40} className="text-red-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-red-800 mb-4">SAP TM</h3>
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">Optimizing transportation management for global supply chains.</p>
          </div>

          {/* SAP EWM */}
          <div className="bg-white p-10 rounded-3xl border border-green-50 hover:shadow-xl transition-all group hover:-translate-y-2">
            <div className="bg-green-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-colors group-hover:bg-green-600">
              <Boxes size={40} className="text-green-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-4">SAP EWM</h3>
            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">Advanced warehouse management for high-volume operations.</p>
          </div>
        </div>
      </section>

      {/* FOOTER SUMMARY */}
      <section className="max-w-[90%] xl:max-w-[1300px] mx-auto px-4 py-16 border-t border-slate-100 text-left mb-10">
        <p className="text-slate-500 text-lg leading-relaxed italic max-w-4xl">
          Walsetech delivers innovative SAP and digital transformation solutions that help manufacturing organizations optimize operations and drive sustainable growth.
        </p>
      </section>
    </main>
  );
}

export default Manufacturing;