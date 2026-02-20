import React from 'react';
import { 
  Globe, 
  Settings, 
  MapPin, 
  Database, 
  Share2, 
  ClipboardCheck, 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Maximize,
  TrendingUp,
  FileSpreadsheet,
  Users
} from 'lucide-react';

const SAPRollouts = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100">
      
      {/* Hero Section - Global Expansion Focus */}
      <section className="relative pt-24 pb-32 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-5 translate-x-1/4 -translate-y-1/4">
          <Globe size={800} className="text-blue-600" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold uppercase tracking-[0.2em] mb-8">
              <MapPin className="w-4 h-4 mr-2" />
              WALSETECH SAP ROLLOUT SERVICES
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-10 text-slate-900 leading-[0.95]">
              Deploy Global <br/>
              <span className="text-blue-600">SAP Excellence.</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl">
              Deploy your pre-configured and established SAP procedures across various geographical areas or business divisions. We unify business procedures and data management while tailoring for local necessities.
            </p>
            
            <div className="flex flex-wrap gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Uniformity</span>
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Localization</span>
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Optimization</span>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Initiative Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">What is SAP Implementation Rollout?</h2>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                It is the tactical initiative of disseminating an already established SAP system configuration from one site or unit within a corporation to additional ones.
              </p>
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm mt-8">
                <h4 className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">Core Objectives</h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="font-medium text-slate-800">Unify business procedures and data management.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="font-medium text-slate-800">Account for local legal and regulatory stipulations.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0 mt-1" />
                    <span className="font-medium text-slate-800">Facilitate rapid business expansion and risk management.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <RolloutBenefitCard icon={<Maximize />} title="Standardization" text="Maintain uniformity and consistency in business processes across all branches." />
              <RolloutBenefitCard icon={<TrendingUp />} title="Efficiency" text="Eradicate redundancies and enhance workflows by standardizing operations." />
              <RolloutBenefitCard icon={<Database />} title="Data Accuracy" text="Guarantee consistent and precise information across every geographical area." />
              <RolloutBenefitCard icon={<ShieldCheck />} title="Compliance" text="Adhere to various standards and regulations, minimizing legal vulnerabilities." />
            </div>
          </div>
        </div>
      </section>

      {/* Seven Phases - Roadmap Style */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 tracking-tight">Path to Success</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Achieving global synchronization involves seven key phases customized to your unique business needs.</p>
          </div>
          
          <div className="relative">
            {/* Background Line for Roadmap */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-slate-100 hidden lg:block" />

            <div className="space-y-12">
              <PhaseRow 
                number="01" 
                title="Evaluation & Strategy" 
                desc="Assessing current business functions and IT framework to identify rollout objectives, project scope, and necessary resources."
              />
              <PhaseRow 
                number="02" 
                title="Template Creation" 
                desc="Our team develops a standardized template that specifies principal business operations to act as the foundational plan."
              />
              <PhaseRow 
                number="03" 
                title="Localization" 
                desc="Customizing the template for specific legal and business needs, including local taxation, language, and currency."
              />
              <PhaseRow 
                number="04" 
                title="Data Transfer" 
                desc="Migrating existing data into new systems with precise mapping and transformation to ensure total data integrity."
              />
              <PhaseRow 
                number="05" 
                title="Integration" 
                desc="Interconnecting new SAP systems with existing platforms and third-party applications for seamless global data flow."
              />
              <PhaseRow 
                number="06" 
                title="Testing & Confirmation" 
                desc="Thorough unit testing, integration testing, and user acceptance testing in regulated settings before official launch."
              />
              <PhaseRow 
                number="07" 
                title="Training & Assistance" 
                desc="Instructing end users for high acceptance and providing continuous support to resolve any post-deployment issues."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary - Dark Mode */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h3 className="text-4xl font-bold mb-6">Our Rollout Capabilities</h3>
              <p className="text-slate-400 text-lg">We provide the groundwork and the technical execution required for a cohesive enterprise environment.</p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              <CapabilityItem title="Standard Templates" text="Foundational plans encompassing fundamental business processes and system settings." />
              <CapabilityItem title="Regulatory Adherence" text="Templates modified to align with local business customs and legal stipulations." />
              <CapabilityItem title="System Connectivity" text="Linking SAP with third-party applications to guarantee effectiveness throughout the organization." />
              <CapabilityItem title="Expert Training" text="Detailed programs to ensure all users are adept at navigating the new global system." />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-500 font-medium text-lg">
            © 2026 Walsetech. All rights reserved.
          </div>
          <div className="mt-6 md:mt-0 flex gap-10 text-xs font-black uppercase tracking-[0.4em] text-slate-900">
            <span className="flex items-center"><Globe className="w-3 h-3 mr-2 text-blue-600" /> Global</span>
            <span className="flex items-center"><Settings className="w-3 h-3 mr-2 text-blue-600" /> Standardized</span>
            <span className="flex items-center"><Users className="w-3 h-3 mr-2 text-blue-600" /> Expert-Led</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sub-components
const RolloutBenefitCard = ({ icon, title, text }) => (
  <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-500 transition-all duration-300 shadow-sm">
    <div className="text-blue-600 mb-4">{React.cloneElement(icon, { size: 32 })}</div>
    <h4 className="font-bold text-lg mb-2">{title}</h4>
    <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
  </div>
);

const PhaseRow = ({ number, title, desc }) => (
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
    <div className="flex-1 lg:text-right hidden lg:block">
      {parseInt(number) % 2 !== 0 && (
        <p className="text-slate-500 max-w-sm ml-auto">{desc}</p>
      )}
    </div>
    <div className="relative flex items-center justify-center">
      <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl z-10 shadow-xl shadow-blue-200">
        {number}
      </div>
    </div>
    <div className="flex-1">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 lg:hidden">{desc}</p>
      {parseInt(number) % 2 === 0 && (
        <p className="text-slate-500 max-w-sm hidden lg:block">{desc}</p>
      )}
    </div>
  </div>
);

const CapabilityItem = ({ title, text }) => (
  <div className="p-8 bg-slate-800 rounded-3xl border border-slate-700">
    <h4 className="text-blue-400 font-bold text-xl mb-3">{title}</h4>
    <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
  </div>
);

export default SAPRollouts;