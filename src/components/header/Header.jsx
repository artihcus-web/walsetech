import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/log.png'

const headerStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    color: '#111827',
    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logo: {
    height: '70px',
    width: 'auto',
  },
  titleBlock: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: 1.2,
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 700,
    letterSpacing: '0.04em',
  },
  subtitle: {
    fontSize: '0.8rem',
    opacity: 0.8,
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    fontSize: '0.95rem',
  },
  linkBase: {
    textDecoration: 'none',
    color: '#111827',
    fontWeight: 500,
    paddingBottom: '0.15rem',
    borderBottom: '2px solid transparent',
    transition: 'color 0.2s ease, border-color 0.2s ease',
  },
  linkActive: {
    color: '#145ea8',
    borderBottomColor: '#145ea8',
  },
}

function Header() {
  const renderLink = (to, label) => (
    <NavLink
      key={to}
      to={to}
      style={({ isActive }) => ({
        ...headerStyles.linkBase,
        ...(isActive ? headerStyles.linkActive : null),
      })}
    >
      {label}
    </NavLink>
  )

  return (
    <header style={headerStyles.container}>
      <div style={headerStyles.brand}>
        <img src={logo} alt="WALSE Tech logo" style={headerStyles.logo} />
        <div style={headerStyles.titleBlock}>
          <span style={headerStyles.title}>WALSE Tech</span>
          <span style={headerStyles.subtitle}>SAP Supply Chain Consulting</span>
        </div>
      </div>
      <nav style={headerStyles.nav}>
        {renderLink('/', 'Home')}
        {renderLink('/about', 'About')}
        {renderLink('/contact', 'Contact Us')}
      </nav>
    </header>
  )
}

export default Header
