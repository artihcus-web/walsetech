import React from 'react';
import { 
  Rocket, 
  Settings2, 
  Database, 
  Users, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  FileText, 
  MousePointer2, 
  Layers, 
  PlayCircle, 
  Activity
} from 'lucide-react';

const SAPImplementation = () => {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-blue-100">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-5 translate-x-1/4 -translate-y-1/4">
          <Rocket size={800} className="text-blue-600" />
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold uppercase tracking-[0.2em] mb-8">
              <Zap className="w-4 h-4 mr-2" />
              WALSETECH IMPLEMENTATION EXCELLENCE
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-10 text-slate-900 leading-[0.95]">
              Flawless Execution. <br/>
              <span className="text-blue-600">Global Value.</span>
            </h1>
            <p className="text-2xl text-slate-600 mb-12 leading-relaxed max-w-4xl">
              We assist you in discovering new efficiencies, achieving one flawless SAP implementation at a time. Empower your business to attain growth, agility, and value with a partner that gets it right the first time.
            </p>
            
            <div className="flex flex-wrap gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> On-Time Delivery</span>
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Budget Focused</span>
              <span className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-3 text-blue-600" /> Sector Expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-slate-900">Challenges We Tackle</h2>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                SAP implementations are intricate. Walsetech specialists bring extensive knowledge and a proven history of success across various sectors to mitigate risks.
              </p>
              <div className="space-y-6">
                <ChallengeItem 
                  title="Managing Complexity" 
                  desc="Meticulous planning and execution of essential configurations across the extensive array of SAP modules." 
                />
                <ChallengeItem 
                  title="Balance: Custom vs Standard" 
                  desc="Finding the optimal equilibrium between necessary customizations and standard SAP procedures without heightening costs." 
                />
                <ChallengeItem 
                  title="Data Migration" 
                  desc="Transferring vast amounts of data from legacy systems while ensuring complete integrity and accuracy." 
                />
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-600 p-12 rounded-[3.5rem] text-white shadow-2xl">
                <h3 className="text-3xl font-bold mb-6">Rapid Time-to-Value</h3>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Leveraging well-established techniques, our experts can enhance your ROI. Depending on the project, we move from analysis to launch in as little as <strong>six months</strong>.
                </p>
                <div className="flex gap-4">
                  <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/20 text-sm font-bold">Industry Standards</div>
                  <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/20 text-sm font-bold">Agile Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 6-Phase Roadmap */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-6 tracking-tight">Our Implementation Roadmap</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">A structured methodology designed for transparency and success at every milestone.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <PhaseCard 
              num="01" icon={<Search />} title="Discover" 
              desc="Ascertaining implementation strategy, recommending high-level architecture, and defining the core methodology." 
            />
            <PhaseCard 
              num="02" icon={<FileText />} title="Prepare" 
              desc="Kick-off meetings to confirm documentation, project plans, tracking mechanisms, and roles/responsibilities." 
            />
            <PhaseCard 
              num="03" icon={<MousePointer2 />} title="Explore" 
              desc="Examining business processes using AS-IS models and performing fit/gap analysis for the final TO-BE model." 
            />
            <PhaseCard 
              num="04" icon={<Layers />} title="Realize" 
              desc="Customizing SAP solutions, integrating infrastructure, conducting rigorous testing, and developing new functions." 
            />
            <PhaseCard 
              num="05" icon={<PlayCircle />} title="Deploy" 
              desc="Final system go-live, data transfer from legacy systems, role verification, and end-user training." 
            />
            <PhaseCard 
              num="06" icon={<Activity />} title="Run" 
              desc="Resolving lingering issues, completing Solution Manager integration, and providing full go-live assistance." 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-slate-500 font-medium text-lg">
            © 2026 Walsetech. All rights reserved.
          </div>
          <div className="mt-8 md:mt-0 flex flex-wrap justify-center gap-8 text-xs font-black uppercase tracking-[0.4em] text-slate-900">
            <span className="flex items-center"><Settings2 className="w-4 h-4 mr-2 text-blue-600" /> S/4HANA</span>
            <span className="flex items-center"><Database className="w-4 h-4 mr-2 text-blue-600" /> Integration</span>
            <span className="flex items-center"><Users className="w-4 h-4 mr-2 text-blue-600" /> Education</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sub-components
const ChallengeItem = ({ title, desc }) => (
  <div className="flex gap-5 group">
    <div className="mt-1 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
      <ArrowRight className="w-3 h-3 text-blue-600 group-hover:text-white" />
    </div>
    <div>
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="text-slate-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const PhaseCard = ({ num, icon, title, desc }) => (
  <div className="relative p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-blue-600 hover:shadow-2xl transition-all duration-500">
    <div className="absolute top-6 right-10 text-5xl font-black text-slate-50">{num}</div>
    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-8 relative z-10">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h3 className="text-2xl font-black mb-4 relative z-10">{title}</h3>
    <p className="text-slate-500 leading-relaxed text-sm relative z-10">{desc}</p>
  </div>
);

export default SAPImplementation;