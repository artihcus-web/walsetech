import React, { useState } from "react";
import { 
  ChevronDown, 
  ChevronUp, 
  Leaf, 
  ShieldCheck, 
  ClipboardList, 
  BarChart4 
} from "lucide-react";

// Hero Image Import
import heroImage from "../../assets/food.jpg";

// INDUSTRY ASSETS
import FoodBeverageImage from "../../assets/FoodBeverageImage.png";
import FoodBeverageBenefits from "../../assets/FoodBeverageBenefits.png";
import FoodBeverageOfferings from "../../assets/FoodBeverageOfferings.png";

function FoodBeverage() {
  const [expandedChallenges, setExpandedChallenges] = useState({});
  const [expandedSolutions, setExpandedSolutions] = useState({});

  const challenges = [
    "Regulatory Compliance",
    "Maintaining Product Quality and Safety",
    "Managing Perishable Inventory",
    "Demand Variability",
    "Complex Supply Chains",
    "Labor Management",
    "Sustainability and Waste Reduction",
    "Efficient Order Fulfillment",
    "Cost Control",
  ];

  const solutions = [
    "Temperature and Humidity Control",
    "Batch and Lot Management",
    "Expiration Date Management",
    "Advanced Picking Strategies",
    "Quality Control",
    "Cross-Docking and Flow-Through",
    "Labor Management",
    "Automation and Integration",
    "Yard Management",
    "Analytics and Reporting",
  ];

  const toggleChallenge = (index) => {
    setExpandedChallenges(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleSolution = (index) => {
    setExpandedSolutions(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <main className="bg-white text-[#0b2340] font-sans">
      
      {/* HERO SECTION */}
      <section className="relative h-[55vh] flex items-center justify-center text-center px-6">
        <img 
          src={heroImage} 
          alt="Food and Beverage" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-5xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Food & Beverage</h1>
          <p className="text-xl md:text-3xl opacity-90 font-medium">
            Enhancing warehouse efficiency, inventory accuracy, and regulatory compliance using SAP EWM.
          </p>
        </div>
      </section>

      {/* INTRODUCTION SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-gray-700">
            <h2 className="text-4xl font-bold text-[#145ea8]">Precision in Every Batch</h2>
            <p className="text-2xl leading-relaxed font-light">
              <span className="font-bold text-[#145ea8]">SAP EWM</span> is a powerful system that helps food businesses <strong>increase efficiency and reduce costs</strong> through automation.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              It provides a <strong>comprehensive real-time view</strong> of stock management, inventory tracking, and shipping. Reliable inventory data ensures businesses always maintain <strong>optimal stock levels</strong>, resulting in improved customer satisfaction.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={FoodBeverageOfferings} 
                alt="Our Offerings" 
                className="w-full rounded-2xl shadow-md border border-gray-100" 
              />
              <div className="bg-green-50 p-6 rounded-2xl flex flex-col justify-center border border-green-100">
                <Leaf className="text-green-600 mb-2" size={32} />
                <span className="text-lg font-bold text-green-800">Sustainable Operations</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={FoodBeverageImage} 
              alt="Food Logistics" 
              className="w-full max-w-xl rounded-3xl shadow-2xl border border-gray-100" 
            />
          </div>
        </div>
      </section>

      {/* CHALLENGES & BENEFITS GRID */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* LEFT SIDE: CHALLENGES ACCORDION */}
            <div className="lg:col-span-7">
              <h2 className="text-4xl font-bold text-[#145ea8] mb-10">Challenges We Address</h2>
              <div className="space-y-4">
                {challenges.map((item, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                    <button
                      onClick={() => toggleChallenge(index)}
                      className="w-full flex justify-between items-center p-5 text-left hover:bg-blue-50 transition-colors"
                    >
                      <span className="text-xl font-semibold text-gray-800">{item}</span>
                      {expandedChallenges[index] ? <ChevronUp className="text-blue-600" /> : <ChevronDown className="text-gray-400" />}
                    </button>
                    {expandedChallenges[index] && (
                      <div className="p-5 pt-0 text-lg text-gray-600 border-t border-gray-50">
                        Our SAP EWM implementation streamlines {item.toLowerCase()} by automating documentation and ensuring real-time visibility across the cold chain.
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: BENEFITS IMAGE */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <h2 className="text-4xl font-bold text-[#145ea8] mb-10 self-start">Key Benefits</h2>
              <img 
                src={FoodBeverageBenefits} 
                alt="Industry Benefits" 
                className="w-full rounded-3xl shadow-2xl mb-8" 
              />
              <div className="space-y-4 w-full">
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-blue-100">
                  <ShieldCheck className="text-blue-600" size={32} />
                  <span className="text-xl font-bold text-[#0b3d91]">FSMA Compliance</span>
                </div>
                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-blue-100">
                  <BarChart4 className="text-blue-600" size={32} />
                  <span className="text-xl font-bold text-[#0b3d91]">Real-time Traceability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 bg-white">
        <h2 className="text-4xl font-bold text-[#145ea8] mb-12 text-center">
          Our SAP EWM Solutions for Food & Beverage
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, index) => (
            <div 
              key={index} 
              className="p-8 bg-green-50 rounded-2xl border border-green-100 hover:shadow-lg transition-all group"
            >
              <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:bg-green-600 transition-colors">
                <ClipboardList className="text-green-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-900 mb-2">{item}</h3>
              <p className="text-gray-600">Tailored digital workflows for high-volume {item.toLowerCase()} processing.</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER SUMMARY */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100 text-left bg-white mb-10">
        <p className="text-gray-500 text-xl leading-relaxed italic max-w-4xl">
          Walsetech delivers end-to-end digital transformation for the Food & Beverage sector, ensuring your supply chain is resilient, compliant, and optimized for growth.
        </p>
      </section>
    </main>
  );
}

export default FoodBeverage;