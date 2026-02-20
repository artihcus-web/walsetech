import React from "react";
import { 
  Laptop, 
  Settings, 
  Palette, 
  Rocket, 
  ShieldCheck, 
  ChevronRight 
} from "lucide-react";

// Standard Image Import
import ecommerceImg from "../../assets/ecommerce.jpg";

// INDUSTRY ASSETS
import EcommerceChallenges from "../../assets/EcommerceChallenges.png";
import EcommerceSolutions from "../../assets/EcommerceSolutions.png";

function Ecommerce() {
  return (
    <main className="bg-white text-[#0b2340] font-sans tracking-tight selection:bg-blue-100 overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-[40vh] flex items-center justify-center text-center px-6">
        <img 
          src={ecommerceImg} 
          alt="E-Commerce" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-5xl text-white">
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter uppercase">
            E-Commerce Solutions
          </h1>
          <p className="text-lg md:text-xl opacity-90 font-medium max-w-2xl mx-auto">
            Empowering your digital business with cutting-edge e-commerce platforms and solutions.
          </p>
        </div>
      </section>

      {/* INTRODUCTION - Tightened Gap */}
      <section className="max-w-[90%] xl:max-w-[1300px] mx-auto px-4 py-16 bg-white">
        <div className="grid lg:grid-cols-2 gap-8 items-center text-left">
          <div className="space-y-5">
            <p className="text-xl lg:text-2xl leading-snug font-semibold text-slate-800">
              Capitalize on our skills in creating <span className="text-[#145ea8]">E-commerce solutions</span> and benefit from reliable, expertly made, and formidable IT solutions.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Latest studies conducted by AI Multiple indicate that E-commerce is experiencing a significant shift due to changes in consumer habits and technology. This brings several challenges for E-commerce companies.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              At <span className="font-bold text-[#145ea8]">walsetech</span>, we boast extensive experience in E-commerce, excelling in crafting cutting-edge business solutions on platforms like Shopify, Adobe Commerce, BigCommerce, SAP Commerce Cloud, Magento, and WooCommerce.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src={EcommerceSolutions} 
              alt="Ecommerce Solutions" 
              className="w-full max-w-md rounded-lg shadow-xl border border-gray-100 object-contain" 
            />
          </div>
        </div>
      </section>

      {/* CHALLENGES - Compact Layout */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-[90%] xl:max-w-[1300px] mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center text-left">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <img 
              src={EcommerceChallenges} 
              alt="Ecommerce Challenges" 
              className="w-full max-w-sm rounded-lg shadow-lg border border-gray-100" 
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-black text-[#145ea8] mb-6 tracking-tight uppercase">
              Challenges in E-Commerce
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
              {[
                "Utilizing data effectively",
                "Building trust in platforms",
                "Retaining customer loyalty",
                "Supply chain management",
                "International operations",
                "User-friendly platforms",
                "Mobile shopping experience",
                "Return & refund procedures",
                "Content quality",
                "Online customer support"
              ].map((challenge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                  <ChevronRight size={16} className="text-blue-600 flex-shrink-0" />
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS LIST - Reduced Card Padding */}
      <section className="max-w-[90%] xl:max-w-[1300px] mx-auto px-4 py-20 text-left">
        <h2 className="text-3xl md:text-4xl font-black text-[#145ea8] mb-12 tracking-tighter uppercase">
          walsetech E-Commerce Solutions for Business
        </h2>
        
        <div className="grid gap-4">
          {[
            {
              title: "Development of bespoke e-commerce software",
              icon: <Laptop size={20} />,
              desc: "Are you trying to find a seamless internet experience? Our group will create a tailored e-commerce solution to satisfy your unique business needs."
            },
            {
              title: "Development of solutions based on e-commerce platforms",
              icon: <Settings size={20} />,
              desc: "Make the most of your e-commerce potential by utilising contemporary tools and platforms. Our professionals can use industry-standard solutions to make your ideas a reality."
            },
            {
              title: "Customisation, redesign, and integration of online stores",
              icon: <Palette size={20} />,
              desc: "We effortlessly link with ERPs, payment gateways, third-party services, and more while customising and implementing contemporary UI/UX design."
            },
            {
              title: "Delivery, deployment, and store migration",
              icon: <Rocket size={20} />,
              desc: "Your infrastructure requirements are met by walsetech. We automate, move, and optimise deployments to improve performance."
            },
            {
              title: "Evaluation of solutions, advice, and assistance",
              icon: <ShieldCheck size={20} />,
              desc: "Experts from walsetech examine your solutions and offer a plan to improve security, compatibility, and performance."
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-5 rounded-lg bg-white border border-slate-100 hover:border-blue-200 shadow-sm transition-all border-l-4 border-l-blue-600">
              <div className="text-blue-600 mt-1 flex-shrink-0">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-[#0b3d91] tracking-tight">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER SUMMARY */}
      <section className="max-w-[90%] xl:max-w-[1300px] mx-auto px-4 py-12 border-t border-slate-100 text-left mb-10">
        <p className="text-slate-500 text-base leading-relaxed italic">
          Walsetech delivers innovative SAP and digital transformation solutions that help organizations optimize operations, enhance efficiency, and drive sustainable growth.
        </p>
      </section>
    </main>
  );
}

export default Ecommerce;