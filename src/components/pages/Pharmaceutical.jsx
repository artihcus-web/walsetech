import React from "react";
import { CheckCircle2, ShieldCheck, Activity, ClipboardList } from "lucide-react";

// Hero Image Import
import heroImage from "../../assets/pharmaceutical.jpg"; 

// INDUSTRY ASSETS
import PharmaceuticalImage from "../../assets/PharmaceuticalImage.png";
import PharmaceuticalBenefits from "../../assets/PharmaceuticalBenefits.png";

function Pharmaceutical() {
  const benefits = [
    "Compliance with Regulations",
    "Enhanced Traceability",
    "Improved Stock Accuracy",
    "Efficient Storage Management",
    "Streamlined Batch Release and Recall",
    "Quality Management Integration",
    "Compliance with GMP Requirements",
    "Sample Management",
    "Real-Time Monitoring and Reporting",
    "Seamless ERP Integration",
  ];

  return (
    <main className="bg-white text-[#0b2340] font-sans">
      
      {/* HERO SECTION - Taller for more impact */}
      <section className="relative h-[55vh] flex items-center justify-center text-center px-6">
        <img 
          src={heroImage} 
          alt="Pharmaceutical Industry" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="relative z-10 max-w-5xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#3b82f6]">
            Pharmaceutical Industry
          </h1>
          <p className="text-xl md:text-3xl opacity-90 font-medium">
            Ensuring compliance, serialization, and traceability with SAP EWM solutions.
          </p>
        </div>
      </section>

      {/* DESCRIPTION SECTION - Increased text and image sizes */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE IMAGE - Enlarged */}
          <div className="flex justify-center">
            <img 
              src={PharmaceuticalImage} 
              alt="Pharmaceutical Lab" 
              className="w-full max-w-xl rounded-3xl shadow-2xl border border-gray-100 object-cover transform hover:scale-105 transition-transform duration-500" 
            />
          </div>

          {/* RIGHT SIDE DESCRIPTION - Increased text size */}
          <div className="space-y-8 text-gray-700">
            <p className="text-2xl leading-relaxed font-light">
              <span className="font-bold text-[#145ea8]">SAP EWM (Extended Warehouse Management)</span> in the pharmaceutical industry
              enables <span className="font-semibold text-black">accurate and compliant warehouse management</span>, essential when handling
              delicate items.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-600">
              It supports <strong>stringent standards and traceability requirements</strong> by providing real-time inventory visibility and precise tracking through RFID and barcode scanning. Walse Tech has successfully implemented SAP EWM while adhering to <strong>pharmaceutical product serialization rules</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-6">
              <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                <ShieldCheck className="text-blue-600 shrink-0" size={32} />
                <span className="text-lg font-bold text-[#0b3d91]">Serialization & Traceability</span>
              </div>
              <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                <Activity className="text-blue-600 shrink-0" size={32} />
                <span className="text-lg font-bold text-[#0b3d91]">Batch & Serial Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION - Increased layout and tag sizes */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* LEFT SIDE BENEFITS */}
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-bold text-[#145ea8] mb-10 flex items-center gap-4">
                <ClipboardList className="text-blue-500" size={40} />
                Benefits of SAP EWM
              </h2>
              
              <div className="flex flex-wrap gap-4">
                {benefits.map((item, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-blue-50 text-[#145ea8] rounded-full text-sm md:text-base font-bold border border-blue-200 hover:bg-[#145ea8] hover:text-white transition-all cursor-default shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE IMAGE - Enlarged */}
            <div className="lg:col-span-5 flex justify-center">
              <img 
                src={PharmaceuticalBenefits} 
                alt="EWM Benefits" 
                className="w-full max-w-lg rounded-3xl shadow-2xl border border-gray-100" 
              />
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER SUMMARY - Increased text size */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100 text-left bg-white mb-10">
        <p className="text-gray-500 text-lg leading-relaxed italic max-w-4xl">
          Walsetech delivers high-compliance SAP solutions tailored for the Life Sciences and Pharmaceutical sectors, ensuring safety, accuracy, and full regulatory alignment across the global supply chain.
        </p>
      </section>
    </main>
  );
}

export default Pharmaceutical;