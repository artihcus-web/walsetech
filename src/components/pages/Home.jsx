import React, { useState, useEffect, useRef, createElement, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { gsap } from "gsap";
// FIXED PATH: Moving up one level to reach the 'ui' folder
import SplitText from "../ui/SplitText"; 

// Assets
import image1 from "../../assets/image.jpg";
import visionImg from "../../assets/vision.jpg";
import missionImg from "../../assets/mission.jpg";
import pharmaceutical from "../../assets/pharmaceutical.jpg";
import fashion from "../../assets/fashion.jpg";
import fmcg from "../../assets/fmcg.jpg";
import ecommerce from "../../assets/ecommerce.jpg";
import manufacturing from "../../assets/manufacturing.jpg";
import automotive from "../../assets/automotive.jpg";
import food from "../../assets/food.jpg";

import { 
  Boxes, Truck, Workflow, Cloud, RefreshCcw, 
  ShieldCheck, Zap, Layers, Settings, Globe, 
  BarChart3, Database, Cpu, Target, Lightbulb, Link,
  Quote, Mail, Phone
} from "lucide-react";

// --- INTERNAL TEXTTYPE COMPONENT ---
const TextType = ({
  text, as: Component = 'div', typingSpeed = 50, initialDelay = 0, pauseDuration = 2000,
  deletingSpeed = 30, loop = true, className = '', showCursor = true, cursorCharacter = '|',
  cursorClassName = '', cursorBlinkDuration = 0.5, textColors = [], reverseMode = false, ...props
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.to(cursorRef.current, { opacity: 0, duration: cursorBlinkDuration, repeat: -1, yoyo: true });
    }
  }, [showCursor, cursorBlinkDuration]);

  useEffect(() => {
    let timeout;
    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;

    const execute = () => {
      if (isDeleting) {
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
        } else {
          timeout = setTimeout(() => setDisplayedText(prev => prev.slice(0, -1)), deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev + processedText[currentCharIndex]);
            setCurrentCharIndex(prev => prev + 1);
          }, typingSpeed);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };
    execute();
    return () => clearTimeout(timeout);
  }, [currentCharIndex, displayedText, isDeleting, currentTextIndex, textArray, typingSpeed, deletingSpeed, pauseDuration, reverseMode]);

  return createElement(Component, { ref: containerRef, className: `inline-block ${className}`, ...props }, 
    <span style={{ color: textColors[currentTextIndex % textColors.length] || 'inherit' }}>{displayedText}</span>,
    showCursor && <span ref={cursorRef} className={cursorClassName}>{cursorCharacter}</span>
  );
};

// --- STYLED COMPONENTS ---
const ModuleTooltipWrapper = styled.div`
  .tooltip-container { position: relative; cursor: pointer; transition: all 0.2s; }
  .tooltip {
    position: absolute; top: 0; left: 50%; transform: translateX(-50%);
    padding: 10px; opacity: 0; pointer-events: none; transition: all 0.3s;
    border-radius: 15px; width: 220px; z-index: 50;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2), inset -5px -5px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.3);
  }
  .profile { background: #0b2340; border-radius: 10px 15px; padding: 12px; border: 1px solid #145ea8; }
  .tooltip-container:hover .tooltip { top: -160px; opacity: 1; pointer-events: auto; }
  .icon-btn { text-decoration: none; color: #fff; display: block; position: relative; background: none; border: none; padding: 0; }
  .icon-btn .layer {
    width: 80px; height: 80px; border: 3px solid #10b981; border-radius: 50%;
    transition: transform 0.3s, border 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 0 15px rgba(16, 185, 129, 0.4); display: flex; align-items: center; justify-content: center; position: relative;
  }
  .icon-btn:hover .layer { transform: rotate(-35deg) skew(20deg); box-shadow: 0 0 30px rgba(16, 185, 129, 0.6); }
  .module-icon-svg { z-index: 10; display: flex; align-items: center; justify-content: center; color: #10b981; background: #0b2340; width: 100%; height: 100%; border-radius: 50%; transition: all 0.3s; }
  .icon-btn:hover .module-icon-svg { background: #10b981; color: #0b2340; transform: translate(20px, -20px); }
  .user { display: flex; gap: 10px; align-items: center; }
  .img-box { width: 40px; height: 40px; font-size: 18px; font-weight: 700; border: 1px solid #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: center; background: #fff; color: #0b2340; }
  .module-name-label { font-size: 15px; font-weight: 700; color: #10b981; }
  .about { color: #ccc; padding-top: 8px; font-size: 12px; line-height: 1.4; text-align: left;}
`;

function Home() {
  const navigate = useNavigate();
  const [testiIndex, setTestiIndex] = useState(0);

  const dynamicDescriptions = [
    "pioneering the next generation of warehouse automation.",
    "delivering seamless SAP EWM & TM integrations.",
    "transforming supply chains with AI-driven intelligence.",
    "your strategic partner in digital logistics excellence."
  ];

  const testimonials = [
    { text: "Walsetech transformed our warehouse from a bottleneck into our greatest competitive advantage." },
    { text: "The integration speed was breathtaking. We moved to S/4 HANA with zero downtime." },
    { text: "Truly intelligent solutions. They re-engineer your entire operational workflow." },
    { text: "Their team's deep knowledge of MFS and automation saved us months of trial and error." }
  ];

  useEffect(() => {
    const testiInterval = setInterval(() => {
      setTestiIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(testiInterval);
  }, [testimonials.length]);

  const modules = [
    { name: "SAP EWM", icon: <Boxes size={28} />, path: "/modules/sap-ewm", desc: "Advanced warehouse management for high-volume logistics." },
    { name: "SAP TM", icon: <Truck size={28} />, path: "/modules/sap-tm", desc: "Consolidated transportation planning and execution." },
    { name: "SAP MFS", icon: <Cpu size={28} />, path: "/modules/sap-mfs", desc: "Direct PLC integration for automated warehouse equipment." },
    { name: "SAP YL", icon: <Workflow size={28} />, path: "/modules/sap-yl", desc: "Streamlining truck and yard movements in real-time." },
    { name: "SAP BTP", icon: <Cloud size={28} />, path: "/modules/sap-btp", desc: "Unified platform for integration and app development." },
    { name: "SAP CPI", icon: <RefreshCcw size={28} />, path: "/modules/sap-cpi", desc: "Seamless cloud-to-cloud and cloud-to-on-premise links." }
  ];

  const services = [
    { title: "SAP Implementation", icon: <Settings size={45} />, path: "/services/sap-implementation" },
    { title: "SAP Rollouts", icon: <Globe size={45} />, path: "/services/sap-rollouts" },
    { title: "SAP Support", icon: <ShieldCheck size={45} />, path: "/services/sap-support" },
    { title: "SAP Migration", icon: <Database size={45} />, path: "/services/sap-migration" },
    { title: "SAP AMS", icon: <BarChart3 size={45} />, path: "/services/sap-ams" },
    { title: "SAP Security", icon: <ShieldCheck size={45} />, path: "/services/sap-security" },
    { title: "SAP Integration", icon: <Workflow size={45} />, path: "/services/sap-integration" },
    { title: "Cloud Migration", icon: <Cloud size={45} />, path: "/services/cloud-migration" },
    { title: "SAP On Premise", icon: <Layers size={45} />, path: "/services/sap-on-premise" },
    { title: "RISE with SAP", icon: <Zap size={45} />, path: "/services/rise-with-sap" },
    { title: "GROW with SAP", icon: <RefreshCcw size={45} />, path: "/services/grow-with-sap" }
  ];

  const industries = [
    { name: "Fashion & Retail", img: fashion, path: "/industries/fashion-retail", desc: "Revolutionizing retail agility with real-time inventory precision." },
    { name: "FMCG", img: fmcg, path: "/industries/fmcg", desc: "Streamlining high-volume distribution for fast-moving markets." },
    { name: "E-Commerce", img: ecommerce, path: "/industries/ecommerce", desc: "Scaling digital storefronts with hyper-efficient fulfillment." },
    { name: "Manufacturing", img: manufacturing, path: "/industries/manufacturing", desc: "Integrating shop-floor automation with enterprise intelligence." },
    { name: "Pharmaceutical", img: pharmaceutical, path: "/industries/pharmaceutical", desc: "Ensuring compliance and cold-chain integrity across the globe." },
    { name: "Automotive", img: automotive, path: "/industries/automotive", desc: "Driving JIT efficiency in complex global assembly lines." },
    { name: "Food & Beverage", img: food, path: "/industries/food-beverage", desc: "Optimizing freshness and traceability through smart logistics." }
  ];

  return (
    <main className="bg-white text-[#0b2340] overflow-x-hidden font-sans">
      {/* 1. HERO */}
      <section className="relative h-[85vh] flex items-center bg-[#020617] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={image1} className="w-full h-full object-cover opacity-60 grayscale-[40%]" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/70 to-transparent"></div>
        </div>
        <div className="relative z-10 px-8 md:px-24 w-full max-w-7xl mx-auto">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[1px] bg-[#10b981]"></span>
              <span className="text-[#10b981] text-[10px] font-bold uppercase tracking-[0.4em]">Walsetech Group</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight">
              DRIVING <br /> <span className="text-white/40 font-light">THE FUTURE OF </span> <br />
              <span className="text-white relative inline-block">LOGISTICS<span className="text-[#10b981]">.</span></span>
            </h1>
            <div className="min-h-[60px] md:min-h-[80px]">
                <TextType text={dynamicDescriptions} as="p" className="text-lg md:text-xl text-slate-300 font-medium leading-relaxed italic" cursorCharacter="▋" cursorClassName="text-[#10b981]" textColors={["#cbd5e1", "#10b981"]} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. MODULES */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] mb-20 text-[#145ea8]">Core Modules</h2>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-20">
            {modules.map((m, i) => (
              <ModuleTooltipWrapper key={i}>
                <div className="tooltip-container">
                  <div className="tooltip"><div className="profile"><div className="user"><div className="img-box">W</div><div className="module-name-label">{m.name}</div></div><div className="about">{m.desc}</div></div></div>
                  <button className="icon-btn" onClick={() => navigate(m.path)}><div className="layer"><div className="module-icon-svg">{m.icon}</div></div></button>
                </div>
              </ModuleTooltipWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services" className="py-24 px-6 bg-[#020617]">
        <h2 className="text-4xl font-black text-white text-center mb-16 uppercase italic">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {services.map((s, i) => (
            <div 
              key={i} 
              onClick={() => navigate(s.path)} 
              className="group relative h-64 bg-slate-900/50 rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 cursor-pointer active:scale-95"
            >
              <div className="absolute inset-[1px] bg-[#0b2340] rounded-2xl z-10 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 group-hover:bg-[#0b2340]/80">
                <div className="text-[#10b981] mb-5 transform group-hover:-translate-y-2 transition-transform duration-500">
                  {s.icon}
                </div>
                <h3 className="text-white text-[10px] font-black uppercase tracking-[0.2em] leading-tight">
                  {s.title}
                </h3>
              </div>

              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 flex flex-col justify-center items-center p-6 text-center">
                <h3 className="text-sm font-black text-[#0b2340] mb-2 uppercase">{s.title}</h3>
                <div className="mt-4 px-4 py-2 border border-[#0b2340] text-[9px] font-black uppercase tracking-tighter">
                  Explore Implementation
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MISSION - SplitText Added Here */}
      <section className="py-32 px-6 bg-white border-y border-gray-100">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h4 className="text-[#145ea8] text-xs font-bold uppercase tracking-[0.4em] mb-6">Our Core Strategy</h4>
            
            <SplitText 
              text="OUR MISSION." 
              className="text-6xl md:text-8xl font-black text-[#0b2340] mb-10 tracking-tighter uppercase leading-[0.85]" 
              tag="h2"
              textAlign="left"
              delay={40}
            />

            <div className="space-y-8">
              <SplitText 
                text="To revolutionize global logistics by deploying Intelligent SAP EWM Solutions that drive absolute efficiency and technological superiority."
                className="text-2xl md:text-3xl font-black text-[#0b2340] leading-tight italic border-l-4 border-[#10b981] pl-6"
                tag="p"
                textAlign="left"
                splitType="words"
                delay={30}
              />

              <p className="text-lg font-medium leading-relaxed text-gray-600">At Walsetech, we re-engineer the heartbeat of the modern supply chain. Our mission is to bridge the gap between complex logistical challenges and seamless digital execution through strategic innovation.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <div className="flex flex-col gap-2"><Target className="text-[#145ea8]" size={32} /><h5 className="font-black uppercase text-sm">Precision</h5></div>
                <div className="flex flex-col gap-2"><Lightbulb className="text-[#145ea8]" size={32} /><h5 className="font-black uppercase text-sm">Innovation</h5></div>
                <div className="flex flex-col gap-2"><Link className="text-[#145ea8]" size={32} /><h5 className="font-black uppercase text-sm">Connectivity</h5></div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-[400px] md:h-[650px] relative">
            <div className="w-full h-full rounded-[4rem] overflow-hidden shadow-2xl bg-gray-50">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${missionImg})` }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES */}
      <section className="py-24 px-6 bg-[#f8fafc]">
        <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-widest text-[#0b2340]">Industries We Empower</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
          {industries.map((ind, i) => (
            <div key={i} onClick={() => navigate(ind.path)} className="group relative rounded-[3rem] overflow-hidden h-[450px] shadow-2xl cursor-pointer bg-[#0b2340]">
              <img src={ind.img} alt={ind.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2340] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0">
                <h3 className="font-black text-3xl text-[#10b981] uppercase mb-3 leading-none">{ind.name}</h3>
                <p className="text-white/80 text-sm font-bold uppercase tracking-wider mb-6 leading-relaxed">{ind.desc}</p>
                <button className="w-fit px-8 py-3 rounded-full bg-[#10b981] text-[#020617] text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors duration-300">Explore More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. VISION */}
      <section className="py-24 flex flex-col md:flex-row items-center bg-white">
        <div className="md:w-1/2 h-[400px] md:h-[600px] p-6 md:p-10">
          <div className="w-full h-full bg-cover bg-center rounded-[3rem] md:rounded-[4rem] shadow-xl" style={{ backgroundImage: `url(${visionImg})` }}></div>
        </div>
        <div className="md:w-1/2 p-12 text-[#0b2340]">
          <h4 className="text-[#145ea8] font-black uppercase text-xs mb-4 tracking-widest">Our Vision</h4>
          <h2 className="text-6xl md:text-7xl font-black mb-10 uppercase tracking-tighter leading-tight">THE FUTURE OF <br/> <span className="italic text-[#145ea8]">SUPPLY CHAIN.</span></h2>
          <div className="space-y-6">
            <p className="text-2xl text-gray-700 font-bold italic border-l-4 border-[#10b981] pl-6 leading-relaxed">We aim to be the global benchmark for autonomous logistics, where intelligence meets execution.</p>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0b2340] mb-16 leading-none">WHAT OUR <br/><span className="italic text-[#145ea8]">PARTNERS SAY.</span></h2>
            <div className="relative h-40 md:h-32">
               {testimonials.map((t, i) => (
                 <div key={i} className={`absolute inset-0 transition-all duration-700 flex flex-col items-center justify-center ${i === testiIndex ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"}`}>
                   <Quote className="text-[#10b981] mb-4 opacity-50" size={32} />
                   <p className="text-xl md:text-2xl font-bold text-[#0b2340] leading-snug max-w-2xl italic">"{t.text}"</p>
                 </div>
               ))}
            </div>
        </div>
      </section>

      {/* 8. CONTACT */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-100">
          <div className="lg:w-2/5 bg-[#0b2340] p-12 lg:p-20 text-white flex flex-col">
            <h2 className="text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">SECURE YOUR <br/><span className="text-[#10b981] italic">TRANSFORMATION.</span></h2>
            <div className="mt-auto space-y-4 pt-10 border-t border-white/10">
              <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest"><Phone size={18} className="text-[#10b981]" /> +1 (234) 567-890</div>
              <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest"><Mail size={18} className="text-[#10b981]" /> solutions@walsetech.com</div>
            </div>
          </div>
          <div className="lg:w-3/5 p-12 lg:p-20">
            <h3 className="text-3xl font-black text-[#0b2340] uppercase tracking-tighter mb-12">Project Discovery</h3>
            <form className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <input type="text" placeholder="Contact Name" required className="w-full py-4 bg-transparent border-b-2 border-gray-100 outline-none focus:border-[#145ea8] font-bold" />
                <input type="email" placeholder="Business Email" required className="w-full py-4 bg-transparent border-b-2 border-gray-100 outline-none focus:border-[#145ea8] font-bold" />
              </div>
              <button className="w-full bg-[#145ea8] text-white py-6 rounded-3xl font-black uppercase tracking-widest hover:bg-[#10b981] transition-all shadow-2xl">Submit Request</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;