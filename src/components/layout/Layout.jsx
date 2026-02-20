import React, { useEffect } from 'react'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Routers from '../routers/Routers'

// Internal component to force "Top of Page" on navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This fixes the "showing downwards" issue
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // 'instant' ensures it doesn't "slide" up, it just starts at top
    });
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <Router>
      {/* 1. Reset scroll position on every route change */}
      <ScrollToTop />
      
      {/* 2. Permanent Header */}
      <Header />
      
      {/* 3. Dynamic Page Content (Home, Modules, Services, etc.) */}
      <main>
        <Routers />
      </main>
      
      {/* 4. Permanent Footer */}
      <Footer />
    </Router>
  )
}

export default Layout