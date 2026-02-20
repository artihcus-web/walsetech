import React from 'react';
import { Cloud, CloudLightning, CheckCircle2, ArrowRight, Server, Zap, Globe, Layers } from 'lucide-react';

const SAPMigrationToCloud = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100">
      <section className="relative pt-24 pb-32 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-5">
          <Cloud size={600} className="text-blue-600" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold uppercase tracking-[0.2em] mb-8">
              <CloudLightning className="w-4 h-4 mr-2" />
              WALSETECH SAP S/4HANA MIGRATION
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-10 text-slate-900 leading-[0.95]">
              SAP S/4HANA <br/>
              <span className="text-blue-600">in the Cloud.</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl">
              Transform your business into a sustainable, intelligent enterprise. We provide individual tenant environments, maximized uniqueness, and secure investments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Cloud Migration Options</h2>
          <div className="grid gap-12">
            <PlatformCard name="SAP ON AWS" text="Decreases overall cost of ownership. Offers 200+ services for innovation and specialized automation tools to simplify management." />
            <PlatformCard name="SAP ON AZURE" text="Enterprise-ready innovation with VMs ranging from 192GB to 12TB. Seamless integration with the Microsoft platform and advanced threat protection." />
            <PlatformCard name="SAP ON GOOGLE CLOUD" text="Leverage Google's global fiber network for secure, scalable infrastructure. Features live migration to reduce maintenance downtime." />
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-4xl font-bold mb-8">Key Advantages</h3>
            <div className="space-y-6">
              <AdvItem title="Updated Systems" desc="Fast-track transformation with optimal performance and essential updates." />
              <AdvItem title="Greater Efficiency" desc="Standardized processes and industry-specific tailored roadmaps." />
              <AdvItem title="Operational Excellence" desc="Swift delivery of reproducible and reusable SAP systems." />
              <AdvItem title="Rapid Innovation" desc="Quarterly innovation cycles for predictive analytics and ML." />
            </div>
          </div>
          <div className="bg-slate-900 rounded-[3rem] p-12 text-white">
            <h3 className="text-3xl font-bold mb-8">Technology Stack</h3>
            <ul className="space-y-6">
              <li><strong className="text-blue-400 block mb-1">S/4HANA Core:</strong> Sourcing, Finance, Manufacturing, Quality Mgmt.</li>
              <li><strong className="text-blue-400 block mb-1">SAP BTP Services:</strong> Mobile Services, Extensions, Integration Suite.</li>
              <li><strong className="text-blue-400 block mb-1">Analytics & AI:</strong> SAP Analytics Cloud and BTP AI Services.</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-white border-t border-slate-100 text-center text-slate-500">
        © 2026 Walsetech. All rights reserved.
      </footer>
    </div>
  );
};

const PlatformCard = ({ name, text }) => (
  <div className="p-12 rounded-[3.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all">
    <h3 className="text-3xl font-black mb-4 text-blue-600">{name}</h3>
    <p className="text-slate-600 text-lg leading-relaxed">{text}</p>
  </div>
);

const AdvItem = ({ title, desc }) => (
  <div className="flex items-start gap-4">
    <CheckCircle2 className="text-blue-600 w-6 h-6 mt-1 flex-shrink-0" />
    <div><h4 className="font-bold text-xl">{title}</h4><p className="text-slate-500">{desc}</p></div>
  </div>
);

export default SAPMigrationToCloud;