import React from "react";
import { Truck, Cloud, Workflow, Boxes, Server, RefreshCcw, MapPin, Mail, Phone } from "lucide-react";

// Standard Image Import
import fashionImage from "../../assets/fashion.jpg";

// INDUSTRY ASSETS
import FashionRetailAutomation from "../../assets/FashionRetailAutomation.png";
import FashionRetailChallenges from "../../assets/FashionRetailChallenges.png";
import FashionRetailDeployment from "../../assets/FashionRetailDeployment.png";
import FashionRetailOptions from "../../assets/FashionRetailOptions.png";
import FashionRetailTechnology from "../../assets/FashionRetailTechnology.png";

function FashionRetail() {
  const offerings = [
    {
      title: "Lean and Nimble",
      icon: <Boxes size={28} className="text-blue-600" />,
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
      desc: "Providing fully customized Material Flow Technology for Distribution Centres & IOT enablement without the need for an additional WCU or WCS."
    },
    {
      title: "Retail-Specific Master Data",
      icon: <RefreshCcw size={28} className="text-blue-600" />,
      desc: "Helping retailers maintain retail-specific master data. EWM provides new fields in addition to SAP ERP Master Data."
    }
  ];

  return (
    <main className="bg-white text-[#0b2340] font-sans overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-[50vh] flex items-center justify-center text-center px-6">
        <img src={fashionImage} alt="Fashion & Retail" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-white max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Fashion & Retail</h1>
          <p className="text-xl md:text-2xl opacity-90 font-medium leading-relaxed">
            Leveraging technology to enable the next generation of fashion and retail automation and management systems.
          </p>
        </div>
      </section>

      {/* AUTOMATION SOLUTIONS - Expanded Width */}
      <section className="max-w-[95%] xl:max-w-[1400px] mx-auto px-4 py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center text-left">
          <div>
            <h2 className="text-3xl font-bold text-[#145ea8] mb-6">Automation Solutions for Retail</h2>
            <p className="text-xl font-semibold text-[#0b3d91] mb-6">Enable the next generation of fashion and retail warehouse automation and supply chain systems.</p>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
              We offer the right SCM (Supply Chain Management) solutions and designs for digitalization, providing secure and innovative solutions. We help you enhance the consumer experience in fashion and retail by streamlining on-the-go transactions, accelerating and simplifying the outbound process, and improving inventory management, online orders, and delivery. SAP EWM (Extended Warehouse Management) supports warehouse management, while SAP BTP solutions empower mobile and handheld devices for seamless operations.
              <br /><br />
              The insights and customer wins from SAP EWM are being incorporated into our future enterprise solutions, enhancing SCM software systems and supporting digital transformation initiatives to deliver success.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={FashionRetailAutomation} alt="Automation" className="w-full max-w-2xl rounded-2xl shadow-xl border border-gray-100" />
          </div>
        </div>
      </section>

      {/* WHY RETAILERS NEED NEW TECHNOLOGY - Expanded Width */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-[95%] xl:max-w-[1400px] mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center text-left">
          <div className="flex justify-center order-2 lg:order-1">
            <img src={FashionRetailTechnology} alt="Technology" className="w-full max-w-2xl rounded-2xl shadow-xl border border-gray-100" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-[#145ea8] mb-6">Why retailers need new technology</h2>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              The e-commerce environment will continue to be a complex and demanding challenge for large, traditional retailers who need to adapt their processes to support multiple sales channels.
              <br /><br />
              In a typical large fashion and retail store, multiple partners interact, receiving goods from distribution centers and vendors, and managing returns from customers. These activities include picking and shipping for B2B, B2C, e-commerce, and Click and Collect orders. Ensuring goods are available quickly for customers is the primary challenge faced by store managers.
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGES - Expanded Width */}
      <section className="max-w-[95%] xl:max-w-[1400px] mx-auto px-4 py-20 text-left bg-white">
        <h2 className="text-3xl font-bold text-[#145ea8] mb-10">How SAP EWM resolves 3 challenges facing retailers with Warehousing Management:</h2>
        <div className="mb-16 flex justify-center">
            <img src={FashionRetailChallenges} alt="Challenges" className="w-full max-w-4xl rounded-2xl" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-slate-50 rounded-xl border-l-8 border-blue-600 shadow-sm">
            <h3 className="text-xl font-bold text-[#0b3d91]">Coordinating Inbound</h3>
          </div>
          <div className="p-8 bg-slate-50 rounded-xl border-l-8 border-blue-600 shadow-sm">
            <h3 className="text-xl font-bold text-[#0b3d91]">Managing the picking area</h3>
          </div>
          <div className="p-8 bg-slate-50 rounded-xl border-l-8 border-blue-600 shadow-sm">
            <h3 className="text-xl font-bold text-[#0b3d91]">Simplifying the picking location</h3>
          </div>
        </div>
      </section>

      {/* OFFERINGS SECTION - Grid Width adjusted */}
      <section className="bg-white py-20">
        <div className="max-w-[95%] xl:max-w-[1400px] mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#145ea8]">Our Offerings</h2>
          <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
            Comprehensive SAP-driven solutions designed to transform retail warehouse efficiency, 
            streamline operations, and enhance customer satisfaction across all retail channels.
          </p>
          
          <div className="mb-16 flex justify-center">
             <img 
               src={FashionRetailOptions} 
               alt="Offerings" 
               className="w-full max-w-xl rounded-2xl shadow-2xl border border-gray-100" 
             />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offerings.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 text-left hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                <div className="mb-6">{item.icon}</div>
                <h4 className="font-bold text-lg mb-4 text-[#0b3d91]">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT MAP */}
      <section className="py-16 max-w-[95%] xl:max-w-[1400px] mx-auto px-4 flex justify-center bg-white">
          <img src={FashionRetailDeployment} alt="Deployment" className="w-full max-w-4xl rounded-2xl shadow-inner" />
      </section>

      {/* ABOUT SUMMARY */}
      <section className="max-w-[95%] xl:max-w-[1400px] mx-auto px-4 py-16 border-t border-gray-100 text-left bg-white mb-20">
        <p className="text-gray-500 text-lg leading-relaxed max-w-5xl">
          Walsetech delivers innovative SAP and digital transformation solutions that help organizations optimize operations, enhance efficiency, and drive sustainable growth. Our end-to-end services empower businesses to stay competitive in today’s evolving technology landscape.
        </p>
      </section>
    </main>
  );
}

export default FashionRetail;