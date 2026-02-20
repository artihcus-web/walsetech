import React from 'react';
import { 
  LifeBuoy, 
  ShieldAlert, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Settings, 
  Box, 
  Users, 
  ShoppingCart, 
  FileCheck, 
  BarChart3, 
  Globe,
  MonitorCheck,
  ShieldCheck
} from 'lucide-react';

const SAPSupport = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-5 translate-x-1/4 -translate-y-1/4">
          <LifeBuoy size={800} className="text-blue-600 animate-spin-slow" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold uppercase tracking-[0.2em] mb-8">
              <MonitorCheck className="w-4 h-4 mr-2" />
              WALSETECH SAP ASSISTANCE SERVICE
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-10 text-slate-900 leading-[0.95]">
              Expert Support. <br/>
              <span className="text-blue-600">Total Stability.</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl">
              Delegate the upkeep of your systems to a reliable partner. We ensure your platform remains current, troubleshoot issues instantly, and make enhancements for optimal performance.
            </p>
            
            <div className="flex flex-wrap gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Guaranteed SLAs</span>
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Crisis Resolution</span>
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> 24/7 Monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Support Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <SupportTypeCard 
              icon={<Settings />}
              title="Post-Implementation"
              desc="Customized client success strategies to address launch problems and refine system performance for sustained success."
            />
            <SupportTypeCard 
              icon={<ShieldAlert />}
              title="Crisis Support"
              desc="Swiftly pinpointing root causes for regulatory changes, technical faults, or turnover to safeguard operational stability."
              highlight={true}
            />
            <SupportTypeCard 
              icon={<Zap />}
              title="Application Oversight"
              desc="Delegated management of your SAP instance with a focus on cost reduction and minimizing potential errors."
            />
          </div>
        </div>
      </section>

      {/* Solutions Coverage Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 tracking-tight">Comprehensive Module Support</h2>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">Our specialized team provides end-to-end assistance across the entire SAP Intelligent Enterprise suite.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <ModuleGroup 
              title="Sourcing & Procurement" 
              icon={<ShoppingCart className="text-blue-600" />}
              items={["SAP Ariba (Sourcing, Catalog, Risk)", "S/4HANA Central Acquisition", "Supplier Lifecycle Mgmt", "Purchasing & Billing"]}
            />
            <ModuleGroup 
              title="Human Capital (HCM)" 
              icon={<Users className="text-blue-600" />}
              items={["SAP SuccessFactors", "Employee Central", "Recruitment & Onboarding", "Payroll & Time Tracking", "SAP Concur"]}
            />
            <ModuleGroup 
              title="Customer Experience" 
              icon={<Globe className="text-blue-600" />}
              items={["SAP Commerce Cloud", "SAP Marketing Cloud", "SAP Sales Cloud", "SAP Qualtrics"]}
            />
            <ModuleGroup 
              title="Process Management" 
              icon={<BarChart3 className="text-blue-600" />}
              items={["SAP Signavio", "SAP Celonis Process Analysis", "Intelligent Process Governance"]}
            />
            <ModuleGroup 
              title="Integration Tech" 
              icon={<Box className="text-blue-600" />}
              items={["SAP NetWeaver PI/BPM", "Business Objects Data Services", "BTP Integration Suite", "Cloud Platform Integration"]}
            />
            <ModuleGroup 
              title="GRC & Security" 
              icon={<ShieldCheck className="text-blue-600" />}
              items={["SAP Enterprise Threat Detection", "SAP GRC", "Identity Management", "Single Sign-On (SSO)"]}
            />
          </div>
        </div>
      </section>

      {/* Strategic Outcome Section */}
      <section className="py-24 bg-slate-900 text-white rounded-[4rem] mx-4 mb-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 leading-tight">Maintain Peak Performance <br/>Without the Overhead</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Walsetech provides the safety net your business needs. By leveraging our specialized support, you eliminate the risk of downtime and ensure your SAP investment continues to deliver value.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold">1</div>
                  <span className="text-slate-200">Adherence to strict, prescribed SLAs.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold">2</div>
                  <span className="text-slate-200">Root-cause analysis and preventive measures.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold">3</div>
                  <span className="text-slate-200">Scalable assistance for any organization size.</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm text-center">
                <div className="text-4xl font-black text-blue-500 mb-2">24/7</div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-400">Availability</div>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm text-center">
                <div className="text-4xl font-black text-blue-500 mb-2">99%</div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-400">SLA Success</div>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm text-center">
                <div className="text-4xl font-black text-blue-500 mb-2">20+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-400">Years Expertise</div>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm text-center">
                <div className="text-4xl font-black text-blue-500 mb-2">Global</div>
                <div className="text-xs uppercase tracking-widest font-bold text-slate-400">Coverage</div>
              </div>
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
            <span className="flex items-center"><LifeBuoy className="w-4 h-4 mr-2 text-blue-600" /> Maintenance</span>
            <span className="flex items-center"><ShieldCheck className="w-4 h-4 mr-2 text-blue-600" /> Compliance</span>
            <span className="flex items-center"><Zap className="w-4 h-4 mr-2 text-blue-600" /> Agility</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sub-components
const SupportTypeCard = ({ icon, title, desc, highlight = false }) => (
  <div className={`p-12 rounded-[3rem] border transition-all duration-500 ${highlight ? 'bg-blue-600 text-white shadow-2xl shadow-blue-200 border-blue-600' : 'bg-white border-slate-200 text-slate-900 hover:border-blue-500'}`}>
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${highlight ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'}`}>
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <h3 className="text-2xl font-black mb-4 tracking-tight">{title}</h3>
    <p className={`leading-relaxed ${highlight ? 'text-blue-50' : 'text-slate-500'}`}>{desc}</p>
  </div>
);

const ModuleGroup = ({ title, icon, items }) => (
  <div className="group">
    <div className="flex items-center gap-4 mb-6">
      <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h4 className="font-black text-xl tracking-tight text-slate-800">{title}</h4>
    </div>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-center text-slate-500 text-sm font-medium border-b border-slate-50 pb-2">
          <ArrowRight className="w-3 h-3 mr-3 text-blue-600 opacity-50" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default SAPSupport;