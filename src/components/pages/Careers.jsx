import React, { useState } from "react";
import { 
  Users, 
  Rocket, 
  Heart, 
  Briefcase, 
  GraduationCap, 
  Upload, 
  CheckCircle2, 
  Globe, 
  ChevronRight 
} from "lucide-react";

function Careers() {
  const [agreed, setAgreed] = useState(false);

  return (
    <main className="bg-[#fcfcfd] text-[#0b2340] font-sans selection:bg-blue-100">
      
      {/* HERO SECTION */}
      <section className="relative h-[45vh] flex items-center justify-start px-8 md:px-24 bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,#1e40af_0%,transparent_50%)]"></div>
        </div>

        <div className="relative z-10 text-white max-w-4xl text-left">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-blue-500"></span>
            <span className="text-blue-500 font-black uppercase tracking-widest text-xs">Join Our Journey</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase tracking-tighter italic">
            Careers at <span className="text-blue-500">Walsetech</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-slate-300 max-w-2xl leading-relaxed">
            Empowering innovation through a culture of **collaboration** and **personal growth**.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <section className="max-w-7xl mx-auto px-8 md:px-24 py-16">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* TEXTUAL CONTENT */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <h2 className="text-3xl font-black text-[#0b2340] mb-6 uppercase tracking-tight border-b-2 border-blue-600 pb-2 inline-block">
                Start Your New Career
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At **Walsetech**, we empower our employees to excel in their careers while making a **meaningful impact** in the industry. Whether you’re just starting out or looking to take the next step in your professional journey, we provide the environment to thrive.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-slate-100 shadow-sm rounded-3xl">
                <h3 className="text-lg font-black text-blue-600 mb-3 uppercase">Who We Are</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We recognize that the passion and drive of our employees are the keys to our success. We offer a **vibrant ecosystem** where innovation meets execution.
                </p>
              </div>
              <div className="p-8 bg-white border border-slate-100 shadow-sm rounded-3xl">
                <h3 className="text-lg font-black text-blue-600 mb-3 uppercase">Our Vision</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  To be a community that values **hard work**, **dedication**, and the pursuit of excellence in every digital solution we deliver.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-black text-[#0b2340] mb-6 uppercase italic">Benefits & Opportunities</h3>
              <div className="grid gap-4">
                {[
                  "Recent Graduate & Internship Programs",
                  "Mid-career Professional Development",
                  "Expert-level Consulting Roles"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                    <span className="text-sm font-bold text-slate-700 uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FORM AREA - Cleaned Form */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-2xl font-black text-slate-900 uppercase italic">Application Portal</h2>
                <div className="h-1 w-10 bg-blue-600 mt-2"></div>
              </div>
              
              <form className="space-y-5">
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Full Name *</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:bg-white outline-none transition-all" required />
                  </div>
                  
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Email Address *</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:bg-white outline-none transition-all" required />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Contact Number *</label>
                      <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:bg-white outline-none transition-all" required />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Qualification *</label>
                      <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:border-blue-500 focus:bg-white outline-none transition-all" required />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Resume Upload *</label>
                    <div className="relative group cursor-pointer">
                      <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" required />
                      <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg p-6 text-center group-hover:border-blue-500 group-hover:bg-blue-50/30 transition-all">
                        <Upload className="mx-auto mb-2 text-slate-400 group-hover:text-blue-600" size={20} />
                        <p className="text-xs font-bold text-slate-500">Select File</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        checked={agreed}
                        onChange={() => setAgreed(!agreed)}
                      />
                      <span className="text-[11px] leading-tight text-slate-500 group-hover:text-slate-700 transition-colors">
                        I agree to Walsetech using my personal data as per the **Privacy Policy**. 
                        By submitting, I authorize data processing for recruitment purposes.
                      </span>
                    </label>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 bg-[#0b2340] hover:bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-lg transition-all shadow-lg active:scale-[0.98]"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-slate-900 py-16 px-8 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tight mb-2">
              So, what are you waiting for?
            </h2>
            <p className="text-slate-400 text-sm font-medium">
              Join a community that values your passion and hard work. Your future at Walsetech starts here.
            </p>
          </div>
          <button className="flex items-center gap-2 text-blue-500 font-black uppercase text-xs tracking-[0.3em] hover:text-white transition-colors">
            Explore Open Roles <ChevronRight size={16} />
          </button>
        </div>
      </section>

    </main>
  );
}

export default Careers;