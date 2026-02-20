import React from 'react';
import { 
  Settings, 
  ShieldCheck, 
  Activity, 
  Globe, 
  Clock, 
  TrendingUp, 
  Zap, 
  Users, 
  FileText, 
  Code, 
  Database, 
  CheckCircle2,
  ArrowRight,
  Headphones
} from 'lucide-react';

const SAPApplicationManagementServices = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100">
      
      {/* Hero Section - Reliability & Focus */}
      <section className="relative pt-24 pb-32 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-5 translate-x-1/4 -translate-y-1/4">
          <Settings size={800} className="text-blue-600 animate-spin-slow" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold uppercase tracking-[0.2em] mb-8">
              <Activity className="w-4 h-4 mr-2" />
              WALSETECH SAP AMS
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-10 text-slate-900 leading-[0.95]">
              Flawless SAP <br/>
              <span className="text-blue-600">Operations.</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl">
              Guarantee long-lasting application functionality and readily adapt them to suit your evolving business requirements. We introduce a unique engagement model leveraging the <strong>Maintain-Implement-Improve</strong> strategy.
            </p>
            
            <div className="flex flex-wrap gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Performance</span>
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Cost Reduction</span>
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Peace of Mind</span>
            </div>
          </div>
        </div>
      </section>

      {/* Maintain-Implement-Improve Strategy */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">Why Does Your Business Require SAP AMS?</h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Our Application Management Services encompass more than mere assistance. We allow you to concentrate on the essence of your operations while we take care of the seamless functionality of your entire SAP ecosystem.
              </p>
              <div className="bg-blue-600 p-10 rounded-[2.5rem] text-white shadow-xl shadow-blue-200">
                <h4 className="font-bold text-2xl mb-4">The walsetech Advantage</h4>
                <p className="text-blue-50 leading-relaxed mb-6">
                  Employ the pertinent knowledge and expertise of specialists to unleash the full potential of your SAP applications, lower maintenance expenses, and reduce mistakes.
                </p>
                <div className="flex gap-4">
                  <div className="bg-white/20 px-4 py-2 rounded-lg text-xs font-bold tracking-widest uppercase">SAP Gold Partner</div>
                  <div className="bg-white/20 px-4 py-2 rounded-lg text-xs font-bold tracking-widest uppercase">20+ Years Exp</div>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <AMSServiceCard 
                icon={<Code />} 
                title="Technical Support" 
                list={[
                  "Establishing and managing system architecture",
                  "Configuring OS, Database, and SAP instances",
                  "Developing tailored ABAP and Node.js/React programs",
                  "Overseeing logs and troubleshooting incidents"
                ]} 
              />
              <AMSServiceCard 
                icon={<FileText />} 
                title="Functional Support" 
                list={[
                  "Adjusting modules (FI, CO, MM, SD, etc.)",
                  "Defining master data and organizational structures",
                  "Facilitating user training and validation",
                  "Advising on best practices for effective usage"
                ]} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* SAP Basis Administration Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-5xl font-black mb-8 tracking-tight">SAP Basis Administration</h2>
              <p className="text-xl text-slate-500 mb-10">Valuable for organizations managing multiple applications or interfacing with additional operating systems simultaneously.</p>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  "Installation and Upgrades", "Performance Monitoring",
                  "User and Permission Management", "Backup and Recovery",
                  "High-Availability Strategies", "Security Compliance"
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-slate-800 font-bold border-b border-slate-100 pb-4">
                    <ArrowRight className="w-5 h-5 mr-3 text-blue-600" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 bg-slate-900 rounded-[3rem] p-12 text-white">
              <h3 className="text-3xl font-bold mb-8">Business Benefits</h3>
              <div className="space-y-8">
                <BenefitItem title="Cost Optimization" desc="Global crew removes the need for extra infrastructure expenses, resulting in notable savings." />
                <BenefitItem title="Global Reach" desc="Round-the-clock maintenance and immediate tracking of system modifications." />
                <BenefitItem title="Rapid Resolution" desc="Functioning across time zones to pinpoint root causes and reduce downtime." />
                <BenefitItem title="Improved Security" desc="Adherence to GDPR, ISO/IEC 27001, and SAP's security directives." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Frameworks - Three Pillars */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black mb-20 tracking-tight">Support Frameworks</h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <FrameworkCard 
              title="Managed SAP Support"
              subtitle="Total Responsibility"
              points={[
                "Custom SLA-based assistance",
                "Proactive supervision",
                "Dedicated expert team",
                "Continuous improvement",
                "Predictable cost framework"
              ]}
            />
            <FrameworkCard 
              title="On-Demand Support"
              subtitle="Instant Assistance"
              points={[
                "Access for urgent initiatives",
                "Adaptable short-term help",
                "Pay-as-you-go pricing",
                "Reduced downtime",
                "Economical support usage"
              ]}
              highlight={true}
            />
            <FrameworkCard 
              title="Staff Expansion"
              subtitle="Specialized Expertise"
              points={[
                "Highly proficient consultants",
                "Peak demand assistance",
                "Flexible staffing solutions",
                "Faster project execution",
                "Seamless integration"
              ]}
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
            <span className="flex items-center"><Headphones className="w-4 h-4 mr-2 text-blue-600" /> Support</span>
            <span className="flex items-center"><Database className="w-4 h-4 mr-2 text-blue-600" /> AMS Basis</span>
            <span className="flex items-center"><Zap className="w-4 h-4 mr-2 text-blue-600" /> Performance</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sub-components
const AMSServiceCard = ({ icon, title, list }) => (
  <div className="p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-blue-500 transition-all duration-300">
    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h3 className="text-2xl font-bold mb-6">{title}</h3>
    <ul className="space-y-4">
      {list.map((item, i) => (
        <li key={i} className="text-slate-500 text-sm flex items-start">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 mr-3 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const BenefitItem = ({ title, desc }) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
      <CheckCircle2 className="text-blue-400 w-6 h-6" />
    </div>
    <div>
      <h4 className="font-bold text-lg text-white">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const FrameworkCard = ({ title, subtitle, points, highlight = false }) => (
  <div className={`p-12 rounded-[3.5rem] border transition-all duration-500 ${highlight ? 'bg-white border-blue-600 shadow-2xl scale-105 z-10' : 'bg-white border-slate-200'}`}>
    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-2">{subtitle}</h4>
    <h3 className="text-3xl font-black mb-10 text-slate-900">{title}</h3>
    <ul className="space-y-6 text-left">
      {points.map((point, i) => (
        <li key={i} className="flex items-center text-slate-600 font-medium">
          <ArrowRight className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
          {point}
        </li>
      ))}
    </ul>
  </div>
);

export default SAPApplicationManagementServices;