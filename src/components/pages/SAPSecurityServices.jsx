import React from 'react';
import { ShieldCheck, Lock, UserCheck, Eye, Activity, RefreshCcw, CheckCircle2, FileText, ShieldAlert, Fingerprint } from 'lucide-react';

const SAPSecurityServices = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100">
      <section className="relative pt-24 pb-32 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold uppercase tracking-[0.2em] mb-8">
              <ShieldCheck className="w-4 h-4 mr-2" />
              WALSETECH SAP SECURITY SERVICES
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-10 text-slate-900 leading-[0.95]">
              Safeguard & <br/>
              <span className="text-blue-600">Enhance Your SAP.</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl">
              With 20+ years of experience, we excel in protecting your SAP systems from threats, ensuring compliance, and maintaining data integrity throughout your SAP lifecycle.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <SecurityBlock icon={<FileText />} title="Security Assessment" desc="Detailed audits to uncover vulnerabilities and deliver actionable insights for your security stance." />
          <SecurityBlock icon={<UserCheck />} title="User & Role Management" desc="Optimizing user provisioning and role design to prevent unauthorized access and reduce administrative workload." />
          <SecurityBlock icon={<Activity />} title="GRC Solutions" desc="Proactively manage risks, supervise compliance, and enforce governance policies within your environment." />
          <SecurityBlock icon={<ShieldAlert />} title="Monitoring & Response" desc="Continuous surveillance for early detection of threats and rapid incident response to minimize breach effects." />
          <SecurityBlock icon={<Fingerprint />} title="Data Protection" desc="Robust encryption techniques and secure transfer protocols to safeguard sensitive information and ensure integrity." />
          <SecurityBlock icon={<RefreshCcw />} title="Patch Management" desc="Consistently update and fortify systems to prevent exploitation and enhance the overall framework." />
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Security Specializations</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <SpecCard title="Secure Development" list={["ABAP Code Analysis", "Custom Vulnerability checks", "Dynamic Authorization Management (DAM)"]} />
            <SpecCard title="Secure Infrastructure" list={["SAP Data Custodian", "Information Lifecycle Management (ILM)", "Cloud Platform Identity Provisioning"]} />
            <SpecCard title="Secure Operations" list={["GRC Access Control", "Enterprise Threat Detection", "Single Sign-On (SSO)", "Identity Management (IDM)"]} />
          </div>
        </div>
      </section>

      <footer className="py-16 bg-white border-t border-slate-100 text-center text-slate-500">
        © 2026 Walsetech. All rights reserved.
      </footer>
    </div>
  );
};

const SecurityBlock = ({ icon, title, desc }) => (
  <div className="p-12 rounded-[3.5rem] bg-white border border-slate-200 hover:border-blue-600 transition-all duration-500">
    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8">{React.cloneElement(icon, { size: 32 })}</div>
    <h3 className="text-3xl font-black mb-4">{title}</h3>
    <p className="text-slate-600 text-lg">{desc}</p>
  </div>
);

const SpecCard = ({ title, list }) => (
  <div className="p-10 bg-slate-800 rounded-3xl border border-slate-700">
    <h4 className="text-blue-400 font-bold text-xl mb-6">{title}</h4>
    <ul className="space-y-3">
      {list.map((item, i) => (
        <li key={i} className="text-slate-300 text-sm flex items-center">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3" /> {item}
        </li>
      ))}
    </ul>
  </div>
);

export default SAPSecurityServices;