import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/log.png'

function Header() {
  const linkClass = ({ isActive }) =>
    `font-medium pb-0.5 border-b-2 transition-colors duration-200 ${
      isActive
        ? 'text-[#145ea8] border-[#145ea8]'
        : 'text-[#111827] border-transparent hover:text-[#145ea8]'
    }`

  return (
    <header className="h-16 flex items-center justify-between px-6 bg-white/40 text-[#111827] shadow-sm sticky top-0 z-[1000] backdrop-blur-[12px]">
      <div className="flex items-center h-full">
        <img src={logo} alt="WALSE Tech logo" className="h-40 w-auto object-contain" />
      </div>
      <nav className="flex items-center gap-6 text-[0.95rem]">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact Us
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
