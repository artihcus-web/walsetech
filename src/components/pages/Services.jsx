import React from "react";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  // Unified names to match the final Home.jsx perfectly
  const services = [
    { 
      title: "SAP Implementation", 
      path: "/sap-implementation", 
      description: "End-to-end execution of SAP S/4HANA and EWM modules." 
    },
    { 
      title: "SAP Rollouts", 
      path: "/sap-rollouts", 
      description: "Scaling business globally with standard SAP templates." 
    },
    { 
      title: "SAP Support", 
      path: "/sap-support", 
      description: "24/7 maintenance to ensure zero downtime." 
    },
    { 
      title: "SAP Migration", 
      path: "/sap-migration", 
      description: "Moving legacy data to advanced EWM environments." 
    },
    { 
      title: "SAP Application Management Services", 
      path: "/sap-ams", 
      description: "Holistic management to optimize SAP applications and lifecycle support." 
    },
    { 
      title: "SAP Security Services", 
      path: "/sap-security-services", 
      description: "Advanced GRC and security protocols for enterprise data protection." 
    },
    { 
      title: "SAP Integration", 
      path: "/sap-integration", 
      description: "Connecting SAP with external systems, APIs, and hardware." 
    },
    { 
      title: "SAP Migration to Cloud", 
      path: "/sap-cloud-migration", 
      description: "Transitioning workloads securely to SAP cloud environments." 
    },
    { 
      title: "SAP On Premise", 
      path: "/sap-on-premise", 
      description: "Full control ERP deployment on local enterprise infrastructure." 
    },
    { 
      title: "RISE with SAP", 
      path: "/rise-with-sap", 
      description: "Business Transformation as a Service for the modern enterprise." 
    },
    { 
      title: "Grow With SAP", 
      path: "/grow-with-sap", 
      description: "Agile cloud-native ERP solutions for growing companies." 
    }
  ];

  return (
    <div className="px-8 py-24 bg-[#f5f7fa] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 border border-[#145ea8] rounded-full mb-4">
            <span className="text-[#145ea8] text-[10px] font-bold uppercase tracking-widest">Global Expertise</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-[#0b2340] uppercase tracking-tighter">
            Our <span className="text-[#145ea8]">Services</span>
          </h1>
          <div className="w-20 h-1.5 bg-[#39FF14] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-[2.5rem] p-10 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Fixed height for title area ensures grid alignment even with long names */}
                <div className="min-h-[80px] flex items-start">
                  <h2 className="text-2xl font-black text-[#0b2340] uppercase leading-none tracking-tight group-hover:text-[#145ea8] transition-colors">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-500 mt-6 mb-8 text-sm leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
              
              <button
                onClick={() => navigate(service.path)}
                className="w-fit flex items-center gap-3 text-[#145ea8] font-black text-[11px] uppercase tracking-[0.2em] group-hover:gap-5 transition-all"
              >
                Explore Solution 
                <span className="bg-[#39FF14]/20 p-2 rounded-full group-hover:bg-[#39FF14] transition-colors text-black">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;