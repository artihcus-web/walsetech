import React from 'react';
import { 
  CloudIcon, 
  CommandLineIcon, 
  ChartBarSquareIcon, 
  ArrowsRightLeftIcon, 
  CalendarDaysIcon, 
  CpuChipIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

// --- IMAGE IMPORTS ---
import introImage from '../../assets/SAPBTPIntroduction.png'; 
import appImage from '../../assets/SAPBTPApplication.png';
import dataImage from '../../assets/SAPBTPDataAnalytics.png';
import integrationImage from '../../assets/SAPBTPIntegration.png';
import planningImage from '../../assets/SAPBTPPlanning.png';
import aiImage from '../../assets/SAPBTPArtificialIntelligence.png'; 

const SAPBTP = () => {
  const sections = [
    { id: 'intro', title: 'Introduction', icon: <CloudIcon className="w-5 h-5" /> },
    { id: 'dev-auto', title: 'App Dev & Automation', icon: <CommandLineIcon className="w-5 h-5" /> },
    { id: 'data-analytics', title: 'Data & Analytics', icon: <ChartBarSquareIcon className="w-5 h-5" /> },
    { id: 'integration', title: 'Integration', icon: <ArrowsRightLeftIcon className="w-5 h-5" /> },
    { id: 'planning', title: 'Extended Planning', icon: <CalendarDaysIcon className="w-5 h-5" /> },
    { id: 'ai', title: 'Artificial Intelligence', icon: <CpuChipIcon className="w-5 h-5" /> },
  ];

  const ImageWrapper = ({ src, alt, className }) => (
    <div className="w-full h-full bg-slate-50 flex items-center justify-center rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
      <img 
        src={src} 
        alt={alt} 
        className={`${className} object-cover`}
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = "https://placehold.co/1200x600?text=Image+Missing+In+Assets";
        }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-black text-[#0b2340]">WALSETECH</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          {/* Navigation links can be added here */}
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 bg-slate-50 border-r border-slate-200 sticky top-20 h-[calc(100vh-80px)] hidden xl:block">
          <nav className="p-4 space-y-1">
            {sections.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-600 hover:bg-blue-600 hover:text-white rounded-lg transition-all group">
                <span className="text-slate-400 group-hover:text-white">{item.icon}</span>
                {item.title}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 max-w-5xl mx-auto px-6 py-10 lg:px-16">
          
          {/* Header Image was removed from here */}

          <header className="mb-20">
            <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Role Of SAP BTP For Warehousing Needs</h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              Walsetech leverages the SAP Business Technology Platform to provide a comprehensive, open, multi-cloud platform-as-a-service (PaaS) offering that supports the development, integration, and extension of supply chain solutions.
            </p>
          </header>

          {/* Intro Section */}
          <section id="intro" className="mb-20 scroll-mt-24">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-blue-600 pl-4">Introduction of SAP BTP</h2>
            <div className="mb-8">
              <ImageWrapper src={introImage} alt="SAP BTP Architecture" className="w-full h-auto" />
            </div>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>SAP BTP allows businesses to build, integrate, and operate applications more efficiently in the cloud. It enables real-time data management, advanced analytics, seamless system connection, rapid development of bespoke solutions, and creation of add-ons for already-existing ones.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Make informed decisions based on AI-powered predictive projections.</li>
                <li>Seamlessly connect with partner, supplier, and customer systems to improve collaboration and streamline operations.</li>
                <li>Free up resources for crucial initiatives by automating manual processes and reducing human error.</li>
                <li>Foster continuous improvement to preserve your organization's position as a leader.</li>
              </ul>
            </div>
          </section>

          {/* App Dev Section */}
          <section id="dev-auto" className="mb-20 scroll-mt-24">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-blue-600 pl-4">Application Development and Automation</h2>
            <div className="mb-8">
              <ImageWrapper src={appImage} alt="SAP Build Portfolio" className="w-full h-auto" />
            </div>
            <p className="text-slate-700 mb-6">Walsetech leverages the SAP Build Portfolio to enhance company applications and boost efficiency through "Clean Core" add-ons for SAP S/4HANA, SuccessFactors, and Ariba.</p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: 'SAP Build Code', desc: 'AI-driven code creation with Joule copilot for Java, JavaScript, and Node.js development.' },
                { name: 'SAP Build Apps', desc: 'Develop business applications, automate tasks, and design websites with no-code tools.' },
                { name: 'SAP Build Work Zone', desc: 'A unified platform for brainstorming, prototyping, and project management.' },
                { name: 'SAP Build Process Automation', desc: 'Workflow optimization through robotic process automation (RPA) bots and workflow management.' },
                { name: 'SAP BTP ABAP Environment', desc: 'Launch ABAP cloud applications and specialized add-ons with ease.' },
                { name: 'SAP Fiori', desc: 'Boost productivity with contemporary design and a flexible user interface.' }
              ].map(item => (
                <div key={item.name} className="p-5 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors">
                  <h4 className="font-bold text-blue-700 mb-1">{item.name}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Data & Analytics Section */}
          <section id="data-analytics" className="mb-20 scroll-mt-24">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-blue-600 pl-4">Data and Analytics</h2>
            <div className="mb-8">
              <ImageWrapper src={dataImage} alt="SAP Data Analytics" className="w-full h-auto" />
            </div>
            <p className="text-slate-700 mb-6">Gain useful insights through comprehensive governance, aggregation, and management of business data regardless of its location.</p>
            
            <div className="bg-[#0b2340] text-white p-8 rounded-3xl shadow-xl space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-blue-400 mb-2"><ShieldCheckIcon className="w-5 h-5"/> SAP HANA Cloud</h4>
                  <p className="text-sm opacity-80 leading-relaxed">Future-focused in-memory database to create smart data solutions on a large scale.</p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-blue-400 mb-2"><SparklesIcon className="w-5 h-5"/> SAP Analytics Cloud</h4>
                  <p className="text-sm opacity-80 leading-relaxed">Strategic planning and detailed analytics through seamless system integration.</p>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-700 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-blue-400 mb-2">SAP Datasphere</h4>
                  <p className="text-sm opacity-80 leading-relaxed">Boosts efficiency by merging cataloging, semantic modeling, and workload virtualization for SAP and non-SAP data.</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-400 mb-2">SAP Master Data Governance</h4>
                  <p className="text-sm opacity-80 leading-relaxed">Ensures accuracy and uniformity of essential business data through a centralized management approach.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Integration Section */}
          <section id="integration" className="mb-20 scroll-mt-24">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-blue-600 pl-4">Integration</h2>
            <div className="mb-8">
              <ImageWrapper src={integrationImage} alt="SAP Integration Suite" className="w-full h-auto" />
            </div>
            <div className="p-8 border-2 border-dashed border-blue-200 rounded-3xl bg-blue-50/30">
              <h3 className="text-xl font-bold mb-4 text-slate-800">SAP Integration Suite</h3>
              <p className="text-slate-700 leading-relaxed mb-4">Walsetech streamlines business processes across diverse systems with AI-powered development tools and thousands of prebuilt connectors.</p>
              <p className="text-slate-700">Interface and automate business processes easily to ensure faster profit from investment and practical growth.</p>
            </div>
          </section>

          {/* Planning Section */}
          <section id="planning" className="mb-20 scroll-mt-24">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-blue-600 pl-4">Extended Planning and Analysis</h2>
            <div className="mb-8">
              <ImageWrapper src={planningImage} alt="Extended Planning" className="w-full h-auto" />
            </div>
            <p className="text-slate-700 mb-6">Walsetech helps drive critical business benefits by moving beyond simple item contributions to a "Canny Endeavor" through strategic data use across all planning layers.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Financial Planning', desc: 'Direct moment analysis for arranging and actuals within one integrated solution.' },
                { title: 'Supply Chain Planning', desc: 'Tailored solutions to increase supply chain resilience and productivity.' },
                { title: 'Workforce Planning', desc: 'Optimal utilization of resources and talent to drive positive change.' },
                { title: 'Sales Planning', desc: 'Unlock growth opportunities and maximize revenue and sales quotas.' }
              ].map(item => (
                <div key={item.title} className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-blue-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* AI Section */}
          <section id="ai" className="mb-20 scroll-mt-24">
            <h2 className="text-3xl font-bold text-blue-900 mb-6 border-l-4 border-blue-600 pl-4">Artificial Intelligence</h2>
            <div className="mb-8">
              <ImageWrapper src={aiImage} alt="SAP AI Portfolio" className="w-full h-auto" />
            </div>
            <div className="space-y-6">
              <p className="text-slate-700">Walsetech helps you infuse applications with computer-based intelligence using pre-trained, business-specific models while ensuring ethical transparency and data privacy.</p>
              <div className="p-8 bg-blue-50 border border-blue-100 rounded-3xl flex items-start gap-6">
                <CpuChipIcon className="w-12 h-12 text-blue-600 flex-shrink-0" />
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-1">SAP AI Business Services</h4>
                    <p className="text-slate-700 text-sm">Improve applications with knowledge using models pre-trained on business-relevant data for rapid integration.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-1">SAP AI Core & AI Launchpad</h4>
                    <p className="text-slate-700 text-sm">Achieve consistent deployment and centralized management of machine learning lifecycles while focusing on data protection.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900 mb-1">Gen AI Hub</h4>
                    <p className="text-slate-700 text-sm">A centralized platform that encourages the creation of AI models, algorithms, and best practices across your organization.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-32 pt-16 border-t border-slate-200 text-center">
            <div className="text-3xl font-black text-[#0b2340] mb-4">WALSETECH</div>
            <p className="text-slate-500 mb-2 font-medium leading-relaxed max-w-lg mx-auto">
              Delivering reliable SAP SCM solutions with BTP excellence across global markets.
            </p>
            <p className="text-slate-400 text-xs">© 2026 Walsetech. All rights reserved.</p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default SAPBTP;