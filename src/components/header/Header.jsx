import React, { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import CustomCursor from "./CustomCursor";

// Helper for the falling letter animation
const FallingText = ({ text }) => {
  return (
    <span className="flex overflow-hidden">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-1 group-hover:text-[#145ea8]"
          style={{ transitionDelay: `${index * 30}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

// Styled Arrow Component for Dropdown Buttons
const MenuArrow = () => (
  <span className="ml-2 inline-flex items-center justify-center w-5 h-5 rounded-full border border-gray-300 group-hover:border-[#145ea8] group-hover:bg-[#145ea8] group-hover:text-white transition-all duration-300 transform group-hover:rotate-180">
    <svg 
      width="8" 
      height="6" 
      viewBox="0 0 10 7" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M1 1L5 5L9 1" />
    </svg>
  </span>
);

function Header() {
  const [dropdownIndustries, setDropdownIndustries] = useState(false);
  const [dropdownModules, setDropdownModules] = useState(false);
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownServices, setDropdownServices] = useState(false);
  
  // States for Scroll-to-Hide logic
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const [cursorHover, setCursorHover] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const industries = [
    { name: "Fashion & Retail", slug: "fashion-retail" },
    { name: "FMCG & Services", slug: "fmcg" },
    { name: "E-Commerce", slug: "e-commerce" },
    { name: "Manufacturing", slug: "manufacturing" },
    { name: "Pharmaceutical", slug: "pharmaceutical" },
    { name: "Automotive", slug: "automotive" },
    { name: "Food & Beverage", slug: "food-beverage" }
  ];

  const modules = ["SAP EWM", "SAP TM", "SAP MFS", "SAP YL", "SAP BTP", "SAP CPI"];

  const services = [
    "SAP Implementation", "SAP Rollouts", "SAP Support", "SAP Migration",
    "SAP Application Management Services", "SAP Security Services", "SAP Integration", "SAP Migration to Cloud", 
    "SAP On Premise", "RISE with SAP", "GROW with SAP"
  ];

  const aboutMenu = [
    { name: "Careers", path: "/careers" },
    { name: "Events", path: "/events" },
    { name: "Blogs", path: "/blogs" }
  ];

  const toggleCursor = () => setCursorHover(prev => !prev);

  // Scroll Handler: Hides on scroll down, shows on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling Down
        setHidden(true);
      } else {
        // Scrolling Up
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isActive = (path) => location.pathname === path;

  return (
    <div className="cursor-none relative z-[100]">
      <CustomCursor isHoveringParent={cursorHover} />

      <nav
        className={`flex justify-between items-center px-8 py-4 bg-white shadow-sm fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Logo */}
        <div onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}>
          <Link to="/">
            <img src={logo} alt="Walsetech" className="h-14 lg:h-16" />
          </Link>
        </div>

        {/* Navigation */}
        <ul className="flex gap-2 lg:gap-4 items-center">
          
          {/* Home */}
          <li>
            <Link
              to="/"
              onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}
              className={`group font-bold px-4 py-2 flex items-center transition-all ${
                isActive("/") ? "text-[#145ea8]" : "text-gray-700 hover:text-[#145ea8]"
              }`}
            >
              <FallingText text="Home" />
            </Link>
          </li>

          {/* Services */}
          <li className="relative group" onMouseEnter={() => setDropdownServices(true)} onMouseLeave={() => setDropdownServices(false)}>
            <button
              onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}
              className={`group font-bold px-3 py-2 flex items-center transition-all ${location.pathname.startsWith("/services") ? "text-[#145ea8]" : "text-gray-700 hover:text-[#145ea8]"}`}
            >
              <FallingText text="Services" />
              <MenuArrow />
            </button>
            {dropdownServices && (
              <div className="absolute top-full left-0 mt-0 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-white shadow-2xl rounded-xl w-72 border border-gray-100 py-3 overflow-hidden">
                  {services.map((s, i) => (
                    <button 
                      key={i} 
                      onClick={() => navigate(`/services/${s.toLowerCase().replace(/\s+/g, "-")}`)} 
                      className="w-full text-left px-5 py-2.5 text-gray-600 hover:bg-[#145ea8] hover:text-white transition-colors text-sm font-semibold"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* Modules */}
          <li className="relative group" onMouseEnter={() => setDropdownModules(true)} onMouseLeave={() => setDropdownModules(false)}>
            <button
              onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}
              className={`group font-bold px-3 py-2 flex items-center transition-all ${location.pathname.startsWith("/modules") ? "text-[#145ea8]" : "text-gray-700 hover:text-[#145ea8]"}`}
            >
              <FallingText text="Modules" />
              <MenuArrow />
            </button>
            {dropdownModules && (
              <div className="absolute top-full left-0 mt-0 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-white shadow-2xl rounded-xl w-56 border border-gray-100 py-3 overflow-hidden">
                  {modules.map((m, i) => (
                    <button 
                      key={i} 
                      onClick={() => navigate(`/modules/${m.toLowerCase().replace(/\s+/g, "-")}`)} 
                      className="w-full text-left px-5 py-2.5 text-gray-600 hover:bg-[#145ea8] hover:text-white transition-colors text-sm font-semibold"
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* Industries */}
          <li className="relative group" onMouseEnter={() => setDropdownIndustries(true)} onMouseLeave={() => setDropdownIndustries(false)}>
            <button
              onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}
              className={`group font-bold px-3 py-2 flex items-center transition-all ${location.pathname.startsWith("/industries") ? "text-[#145ea8]" : "text-gray-700 hover:text-[#145ea8]"}`}
            >
              <FallingText text="Industries" />
              <MenuArrow />
            </button>
            {dropdownIndustries && (
              <div className="absolute top-full left-0 mt-0 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-white shadow-2xl rounded-xl w-60 border border-gray-100 py-3 overflow-hidden">
                  {industries.map((ind, i) => (
                    <button 
                      key={i} 
                      onClick={() => navigate(`/industries/${ind.slug}`)} 
                      className="w-full text-left px-5 py-2.5 text-gray-600 hover:bg-[#145ea8] hover:text-white transition-colors text-sm font-semibold"
                    >
                      {ind.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* About */}
          <li className="relative group" onMouseEnter={() => setDropdownAbout(true)} onMouseLeave={() => setDropdownAbout(false)}>
            <button
              onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}
              className={`group font-bold px-3 py-2 flex items-center transition-all ${location.pathname.startsWith("/about") ? "text-[#145ea8]" : "text-gray-700 hover:text-[#145ea8]"}`}
            >
              <FallingText text="About" />
              <MenuArrow />
            </button>
            {dropdownAbout && (
              <div className="absolute top-full left-0 mt-0 pt-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="bg-white shadow-2xl rounded-xl w-52 border border-gray-100 py-3 overflow-hidden">
                  {aboutMenu.map((item, i) => (
                    <button 
                      key={i} 
                      onClick={() => navigate(item.path)} 
                      className="w-full text-left px-5 py-2.5 text-gray-600 hover:bg-[#145ea8] hover:text-white transition-colors text-sm font-semibold"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </li>

          {/* Contact - Styled as a Button */}
          <li>
            <Link
              to="/contact"
              onMouseEnter={toggleCursor} onMouseLeave={toggleCursor}
              className="ml-4 bg-[#145ea8] text-white px-6 py-2.5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-[#0b2340] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;