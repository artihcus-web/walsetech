import React from "react";
import { CheckCircle2, Cpu, BarChart3, Users, ShieldCheck, Cog } from "lucide-react";

// Hero Image Import
import automotiveImage from "../../assets/automotive.jpg";

// INDUSTRY ASSETS
import AutomotiveImage from "../../assets/AutomotiveImage.png";
import AutomotiveBenefits from "../../assets/AutomotiveBenefits.png";

function Automotive() {
  const challenges = [
    "High Initial Costs",
    "Integration with Legacy Systems",
    "Workforce Training Needs",
    "Data Management Accuracy",
    "Scalability & Flexibility",
    "Maintenance & Downtime",
    "Regulatory Compliance",
    "Cybersecurity Concerns"
  ];

  return (
    <main className="bg-white text-[#0b2340] font-sans">

      {/* HERO SECTION - Large Scale */}
      <section className="relative h-[55vh] flex items-center justify-center text-center px-6">
        <img
          src={automotiveImage}
          alt="Automotive Manufacturing"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-5xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-yellow-400">
            Automotive
          </h1>
          <p className="text-xl md:text-3xl opacity-95 font-medium leading-relaxed">
            Revolutionizing productivity with AGVs, AS/RS, and intelligent SAP EWM ecosystems.
          </p>
        </div>
      </section>

      {/* INTRODUCTION - Large Text & Large Image */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-gray-700">
            <h2 className="text-4xl font-bold text-[#145ea8]">Smart Warehouse Optimization</h2>
            <p className="text-2xl leading-relaxed font-light">
              Walse Tech offers <span className="font-bold text-[#145ea8]">comprehensive SAP EWM solutions</span> that optimize automotive warehouse operations through high-end automation.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              We provide end-to-end implementation and seamless integration with automated systems such as **Automated Guided Vehicles (AGVs)** and **Automated Storage and Retrieval Systems (AS/RS)**, significantly enhancing labor efficiency and resource management.
            </p>
            <div className="p-6 bg-slate-50 rounded-2xl border-l-8 border-yellow-400 shadow-sm">
              <p className="text-lg italic text-gray-700">
                "We deliver precise monitoring and enhanced operational performance by combining real-time inventory management with data-driven decision-making."
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={AutomotiveImage}
              alt="Automotive Automation"
              className="w-full max-w-xl rounded-3xl shadow-2xl border border-gray-100 transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* CHALLENGES SECTION */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* LEFT SIDE IMAGE */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <img
                src={AutomotiveBenefits}
                alt="Automotive Benefits"
                className="w-full max-w-lg rounded-3xl shadow-2xl border border-gray-100"
              />
            </div>

            {/* RIGHT SIDE CHALLENGES */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-[#145ea8] mb-10 flex items-center gap-4">
                <Cog className="text-yellow-500" size={40} />
                Challenges in Automation
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {challenges.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <CheckCircle2 className="text-yellow-500 shrink-0" size={24} />
                    <span className="text-lg font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS CARDS - Large Scale Icons */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-[#145ea8] mb-16 text-center">Benefits of SAP EWM</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { title: "Operational Efficiency", icon: <Cpu size={40} />, desc: "Maximize throughput with integrated AGV and AS/RS workflows." },
            { title: "Data-Driven Decisions", icon: <BarChart3 size={40} />, desc: "Real-time analytics for yard and inventory management." },
            { title: "Employee Management", icon: <Users size={40} />, desc: "Advanced task interleaving to improve labor productivity." }
          ].map((benefit, i) => (
            <div key={i} className="p-10 rounded-3xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all text-center group">
              <div className="text-[#145ea8] mb-6 flex justify-center group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#0b3d91] mb-4">{benefit.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      

      {/* FOOTER SUMMARY */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100 text-left bg-white mb-10">
        <p className="text-gray-500 text-xl leading-relaxed italic max-w-4xl">
          Walsetech drives the future of automotive logistics, ensuring compliance, security, and massive cost savings through high-performance digital transformation.
        </p>
      </section>
    </main>
  );
}

export default Automotive;