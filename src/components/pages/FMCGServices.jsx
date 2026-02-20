import React from "react";
import { 
  Truck, 
  Cloud, 
  Workflow, 
  Boxes, 
  Server, 
  RefreshCcw, 
  Maximize, 
  Zap, 
  Layout 
} from "lucide-react";

// Standard Image Imports
import fmcgImage from "../../assets/fmcg.jpg"; 

// INDUSTRY ASSETS
import FMCGSolutions from "../../assets/FMCGSolutions.png";
import FMCGWareHouse from "../../assets/FMCGWareHouse.png";

function FMCGServices() {
  const offerings = [
    {
      title: "Lean and Nimble",
      icon: <Zap size={28} className="text-blue-600" />,
      desc: "Helping retailers run efficiently, deliver flexibility, availability, and cost savings."
    },
    {
      title: "Future-ready Core",
      icon: <Workflow size={28} className="text-blue-600" />,
      desc: "Transforming the warehousing system to drive enterprise agility and deliver on growth promises."
    },
    {
      title: "Omnichannel Experiences",
      icon: <Cloud size={28} className="text-blue-600" />,
      desc: "Developing seamless customer experience across channels & providing personalized offers leveraging customer insights & Operational patterns."
    },
    {
      title: "Supply Chain Optimization",
      icon: <Truck size={28} className="text-blue-600" />,
      desc: "Addressing the Supply chain disruption challenges through insights driven forecasting, E2E visibility, optimization of logistics & warehousing network."
    },
    {
      title: "SAP MFS Implementation & IoT Enablement",
      icon: <Server size={28} className="text-blue-600" />,
      desc: "Providing fully customized Material Flow Technology for Distribution Centres & IOT enablement without the need for an additional Warehouse Control Unit (WCU) or Warehouse Control System (WCS)."
    },
    {
      title: "Retail-Specific Master Data",
      icon: <RefreshCcw size={28} className="text-blue-600" />,
      desc: "Helping retailers to maintain retail-specific master data. Extended Warehouse Management (EWM) provides you with new fields that can be defined in EWM only In addition to SAP ERP Master Data."
    }
  ];

  return (
    <main className="bg-white text-[#0b2340] font-sans overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <img
          src={fmcgImage}
          alt="FMCG & Services"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            FMCG & Services
          </h1>
          <p className="text-xl md:text-2xl opacity-90 font-medium">
            Welcome to the new era of commerce and Future-ready ecosystems. Fulfilling omnichannel demand and sustainable consumption.
          </p>
        </div>
      </section>

      {/* ENTERPRISE SOLUTIONS - Expanded Width */}
      <section className="max-w-[95%] xl:max-w-[1400px] mx-auto px-4 py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#145ea8] mb-6">
              Enterprise Solutions for FMCG
            </h2>
            <p className="text-xl font-semibold text-[#0b3d91] mb-6">
              We help you improve the consumer experience in FMCG & Services through digitalization and innovative SCM solutions.
            </p>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg mb-6">
              We offer the right SCM solutions and designs for digitalization, secure and innovative solutions. We help you improve the consumer experience in FMCG & Services, on-the-go transactions that speed up and simplify the Inbound & Outbound process as well as inventory management and delivery using SAP EWM (Extended Warehouse Management) for Warehouse Management and SAP BTP solutions for Mobile and hand-held devices.
            </p>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              SAP EWM provides real-time visibility into inventory levels, enabling FMCG companies to optimize their inventory management processes, accurate demand forecasting, automated replenishment, and dynamic inventory allocation. By adopting SAP EWM, companies can reduce inventory costs, improve labor productivity, reduce labor costs and increase operational efficiency.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src={FMCGSolutions} 
              alt="FMCG Solutions" 
              className="w-full max-w-2xl rounded-2xl shadow-xl border border-gray-100" 
            />
          </div>
        </div>
      </section>

      {/* INDUSTRY CHALLENGES - Expanded Width */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-[95%] xl:max-w-[1400px] mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center text-left">
          <div className="flex justify-center order-2 lg:order-1">
            <img 
              src={FMCGWareHouse} 
              alt="FMCG Warehousing" 
              className="w-full max-w-2xl rounded-2xl shadow-xl border border-gray-100" 
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#145ea8] mb-6">
              Challenges Facing FMCG Retailers
            </h2>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
              FMCG companies face various challenges in warehousing, including limited warehouse space, inefficient inventory management, high labor costs, and complex supply chain networks.
            </p>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              SAP EWM (Extended Warehouse Management) provides advanced Warehouse management capabilities to the FMCG industry. One of the key benefits of SAP EWM is its ability to optimize warehouse space and increase storage capacity efficiently using space-saving strategies.
            </p>
          </div>
        </div>
      </section>

      {/* WAREHOUSING RESOLUTIONS - Expanded Width */}
      <section className="max-w-[95%] xl:max-w-[1400px] mx-auto px-4 py-20 text-left bg-white">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#145ea8] mb-12">
          How SAP EWM resolves challenges with Warehousing Management:
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Warehouse Space Optimization */}
          <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-blue-600 shadow-sm transition-all hover:shadow-lg group">
            <h3 className="text-xl font-bold text-[#0b3d91] mb-4 flex items-center gap-3">
              <Maximize size={24} /> Space Optimization
            </h3>
            <div className="text-gray-600 text-sm lg:text-base leading-relaxed space-y-3">
              <p>Utilize vertical space using multi-level racking, stacking pallets or cartons to increase storage capacity significantly.</p>
              <p>Dynamic slotting enables companies to optimize warehouse storage by placing fast-moving items in easily accessible locations.</p>
            </div>
          </div>

          {/* Efficient Inventory Management */}
          <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-indigo-500 shadow-sm transition-all hover:shadow-lg group">
            <h3 className="text-xl font-bold text-indigo-700 mb-4 flex items-center gap-3">
              <Boxes size={24} /> Inventory Management
            </h3>
            <div className="text-gray-600 text-sm lg:text-base leading-relaxed space-y-3">
              <p>Real-time inventory tracking and automated order processing ensure accuracy across the supply chain.</p>
              <p>Intelligent route planning allows the FMCG industry to maximize available warehouse space and reduce warehousing expenses.</p>
            </div>
          </div>

          {/* Supply Chain Management */}
          <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-sky-500 shadow-sm transition-all hover:shadow-lg group">
            <h3 className="text-xl font-bold text-sky-700 mb-4 flex items-center gap-3">
              <Layout size={24} /> Streamlined Supply Chain
            </h3>
            <div className="text-gray-600 text-sm lg:text-base leading-relaxed space-y-3">
              <p>By deploying SAP EWM, the FMCG industry can improve overall supply chain efficiency and labor productivity.</p>
              <p>Reduced labor costs and increased visibility drive performance and innovation across the digital ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR OFFERINGS - Expanded Width */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-[95%] xl:max-w-[1400px] mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 text-[#145ea8]">Our Offerings</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200 text-left hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-6">{item.icon}</div>
                <h4 className="font-bold text-lg mb-4 text-[#0b3d91]">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SUMMARY - Expanded Width */}
      <section className="max-w-[95%] xl:max-w-[1400px] mx-auto px-4 py-16 border-t border-gray-100 text-left bg-white mb-10">
        <p className="text-gray-500 text-lg leading-relaxed max-w-5xl">
          Walsetech delivers innovative SAP and digital transformation solutions that help organizations optimize operations, enhance efficiency, and drive sustainable growth. Our end-to-end services empower businesses to stay competitive in today’s evolving technology landscape.
        </p>
      </section>
    </main>
  );
}

export default FMCGServices;