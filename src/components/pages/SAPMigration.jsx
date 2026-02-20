import React from 'react';
import { 
  Cloud, 
  RefreshCw, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Layout, 
  Database, 
  Cpu, 
  LineChart, 
  Activity,
  Layers
} from 'lucide-react';

const SAPMigration = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-5 translate-x-1/4 -translate-y-1/4">
          <Cloud size={800} className="text-blue-600" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold uppercase tracking-[0.2em] mb-8">
              <RefreshCw className="w-4 h-4 mr-2 animate-spin-slow" />
              WALSETECH SAP MIGRATION SERVICES
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-10 text-slate-900 leading-[0.95]">
              Seamless. Secure. <br/>
              <span className="text-blue-600">Modernized Cloud.</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl">
              Transition SAP and essential supporting applications to the cloud safely, ensuring minimal disruption to business operations. Fast-track your modernization journey for greater scalability, flexibility, and operational value.
            </p>
            
            <div className="flex flex-wrap gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Cost-Effective</span>
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Secure & Agile</span>
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Minimal Disruption</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strategy Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">Simplify and Accelerate Your SAP Transition</h2>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                As pioneers in migrating SAP to the public cloud, Walsetech employs a thoroughly designed cloud adoption framework complemented by automation to lower complexity and cut costs compared to traditional methods.
              </p>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Whether it's upgrades to SAP HANA and S/4HANA, transformation with RISE with SAP, or comprehensive data center modernization, we concentrate on delivering measurable business results.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-slate-200/60 border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Layers className="text-blue-600 mr-3" /> Targeted Modernization
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-lg">SAP S/4HANA & HANA Upgrades</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-lg">Transformation with RISE with SAP</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-lg">Comprehensive Data Center Modernization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-5xl font-black mb-6 tracking-tight">Our Migration Offerings</h2>
            <p className="text-xl text-slate-500 max-w-2xl">Proven expertise to migrate and upgrade even the most intricate enterprise systems.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCard 
              icon={<LineChart />} 
              title="Cloud Migration Evaluation" 
              desc="In-depth evaluation and a detailed plan overseen by experts in SAP and enterprise cloud transformation. Includes estimates on cost, timeline, and target architecture." 
            />
            <ServiceCard 
              icon={<Database />} 
              title="SAP Migration & Integration" 
              desc="Transitioning and integrating SAP ECC, BW, Business Suite on HANA, or S/4HANA along with adjacent applications (Vertex, OpenText, etc.) from any setting." 
            />
            <ServiceCard 
              icon={<Layout />} 
              title="Data Center Transformation" 
              desc="Extensive expertise in transforming data centers, including custom applications and integrations, to deliver modern business capabilities in the cloud." 
            />
            <ServiceCard 
              icon={<Zap />} 
              title="Automated Management Platform" 
              desc="Coordination of Azure Migrate, SUM/DMO, and HSR alongside proprietary automations to ensure high quality and the quickest timelines." 
            />
          </div>
        </div>
      </section>

      {/* Expertise & Support Section */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 mb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">Unmatched SAP Expertise</h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto">
              Walsetech provides SAP Certified solutions across the world's leading cloud providers to guarantee visibility and ongoing support.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <ExpertiseBox 
              title="Certified Platforms" 
              items={["Amazon Web Services (AWS)", "Google Cloud", "Microsoft Azure"]}
            />
            <ExpertiseBox 
              title="Ongoing Support" 
              items={["Complete Visibility", "24/7 Monitoring", "SAP Basis Specialists", "Cloud Transformation Experts"]}
            />
            <ExpertiseBox 
              title="Business Outcomes" 
              items={["Scalable Infrastructure", "Reduced Complexity", "Optimized Costs", "Enhanced Performance"]}
            />
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
            <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-blue-600" /> Secure</span>
            <span className="flex items-center"><Activity className="w-4 h-4 mr-2 text-blue-600" /> Monitored</span>
            <span className="flex items-center"><Cpu className="w-4 h-4 mr-2 text-blue-600" /> Optimized</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sub-components
const ServiceCard = ({ icon, title, desc }) => (
  <div className="p-12 rounded-[2.5rem] bg-white border border-slate-200 hover:border-blue-600 hover:shadow-2xl transition-all duration-500 group">
    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
      {React.cloneElement(icon, { size: 30 })}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-lg">{desc}</p>
  </div>
);

const ExpertiseBox = ({ title, items }) => (
  <div className="p-10 bg-slate-800/50 rounded-[2.5rem] border border-slate-700">
    <h4 className="text-xl font-bold mb-6 text-blue-400 uppercase tracking-widest">{title}</h4>
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-slate-200">
          <CheckCircle2 className="w-5 h-5 mr-3 text-blue-500" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default SAPMigration;