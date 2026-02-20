import React from 'react';
import { Network, Database, Users, ShoppingCart, Factory, BarChart4, Cpu, Smartphone, Zap, CheckCircle2, ArrowRight, Share2, Workflow } from 'lucide-react';

const SAPIntegration = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100">
      <section className="relative pt-24 pb-32 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-5 translate-x-1/4 -translate-y-1/4">
          <Network size={800} className="text-blue-600" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold uppercase tracking-[0.2em] mb-8">
              <Workflow className="w-4 h-4 mr-2" />
              WALSETECH SAP INTEGRATION SERVICES
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-10 text-slate-900 leading-[0.95]">
              Unified Data. <br/>
              <span className="text-blue-600">Cohesive Enterprise.</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl">
              We will support you in forging a cohesive SAP environment through our extensive expertise in SAP integration honed over decades. Establish a robust link between your systems and eliminate isolated data.
            </p>
            <div className="flex flex-wrap gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Singular Source of Truth</span>
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Real-time Sync</span>
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> 20+ Years Exp</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">Establish a Robust Link With SAP Connectivity</h2>
              <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                Isolated data, ineffective collaboration, and sluggish decision-making are frequent challenges arising from functioning in separate systems. Walsetech connectivity can alleviate these obstacles.
              </p>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Utilize our profound insight into SAP solutions to establish a coherent IT ecosystem and a singular source of truth for all your data organization-wide.
              </p>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-xl shadow-slate-200/60 border border-slate-100">
              <h3 className="text-2xl font-bold mb-6 flex items-center"><Zap className="text-blue-600 mr-3" /> Business Impact</h3>
              <ul className="space-y-6">
                <li className="flex items-start"><ArrowRight className="w-5 h-5 mr-4 text-blue-600 mt-1 flex-shrink-0" /><span className="text-slate-700 font-medium">Facilitating effective collaboration among departments.</span></li>
                <li className="flex items-start"><ArrowRight className="w-5 h-5 mr-4 text-blue-600 mt-1 flex-shrink-0" /><span className="text-slate-700 font-medium">Ensuring data accuracy and relevance across the company.</span></li>
                <li className="flex items-start"><ArrowRight className="w-5 h-5 mr-4 text-blue-600 mt-1 flex-shrink-0" /><span className="text-slate-700 font-medium">Accelerating decision-making through unified visibility.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-5xl font-black mb-6 tracking-tight">Systems We Integrate</h2>
            <p className="text-xl text-slate-500">Creating a unified architecture between SAP and non-SAP systems:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ConnectCard icon={<Users />} title="CRM Systems" desc="Disseminate customer info, sales orders, and service details." />
            <ConnectCard icon={<Database />} title="Supply Chain" desc="Maximize inventory oversight and streamline logistics." />
            <ConnectCard icon={<CheckCircle2 />} title="HR Management" desc="Maintain uniformity and precision of HR information." />
            <ConnectCard icon={<ShoppingCart />} title="E-Commerce" desc="Real-time data interchange and proficient order management." />
            <ConnectCard icon={<Factory />} title="Manufacturing" desc="Refine production scheduling and quality assurance." />
            <ConnectCard icon={<BarChart4 />} title="BI Platforms" desc="Empower better decision-making with analytics." />
            <ConnectCard icon={<Cpu />} title="IoT Platforms" desc="Leverage real-time info for predictive maintenance." />
            <ConnectCard icon={<Smartphone />} title="Mobile Apps" desc="Enhanced access to SAP data at any time or location." />
            <ConnectCard icon={<Zap />} title="Financial Systems" desc="Precise financial reporting and expense governance." />
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Integration Tools & Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TechItem title="SAP PI/PO" text="Centralized platform for message interchange, mapping, and routing." />
            <TechItem title="SAP Integration Suite" text="Connects SAP apps with external services and cloud-based apps." />
            <TechItem title="APIs & ESB" text="Middleware for merging various software systems and mobile solutions." />
            <TechItem title="Walsetech DataLark" text="Proprietary solution for migration, transformation, and validation." />
          </div>
        </div>
      </section>

      <footer className="py-16 bg-white border-t border-slate-100 text-center text-slate-500">
        © 2026 Walsetech. All rights reserved.
      </footer>
    </div>
  );
};

const ConnectCard = ({ icon, title, desc }) => (
  <div className="p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-blue-600 hover:shadow-2xl transition-all duration-500">
    <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8">{React.cloneElement(icon, { size: 30 })}</div>
    <h3 className="text-2xl font-bold mb-4 text-slate-900">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
  </div>
);

const TechItem = ({ title, text }) => (
  <div className="p-8 bg-slate-800 rounded-3xl border border-slate-700">
    <h4 className="text-blue-400 font-bold text-xl mb-2">{title}</h4>
    <p className="text-slate-300 text-sm">{text}</p>
  </div>
);

export default SAPIntegration;