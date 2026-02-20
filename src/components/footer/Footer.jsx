import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Footer() {
  // Function to ensure page starts at top when clicking footer links
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#0b2340", color: "#ffffff", width: "100%" }}>
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "80px 20px 60px",
        }}
      >
        {/* Top Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: "50px",
          }}
        >
          {/* Company Info & Logo */}
          <div>
            <Link to="/" onClick={scrollToTop}>
              <img
                src={logo}
                alt="Walsetech Logo"
                style={{ 
                  width: "180px", 
                  marginBottom: "25px",
                  display: "block"
                }}
              />
            </Link>
            <p
              style={{
                lineHeight: "1.8",
                fontSize: "15px",
                color: "#cbd5e1",
              }}
            >
              Walsetech delivers innovative SAP and digital transformation
              solutions that help organizations optimize operations, enhance
              efficiency, and drive sustainable growth.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h3 style={headingStyle}>Company</h3>
            <ul style={listStyle}>
              <li><Link to="/careers" style={linkStyle} onClick={scrollToTop}>Careers</Link></li>
              <li><Link to="/events" style={linkStyle} onClick={scrollToTop}>Events</Link></li>
              <li><Link to="/news" style={linkStyle} onClick={scrollToTop}>News</Link></li>
              <li><Link to="/blog" style={linkStyle} onClick={scrollToTop}>Blog</Link></li>
              <li><Link to="/contact" style={linkStyle} onClick={scrollToTop}>Contact</Link></li>
            </ul>
          </div>

          {/* SAP Modules */}
          <div>
            <h3 style={headingStyle}>SAP Modules</h3>
            <ul style={listStyle}>
              <li><Link to="/modules/sap-ewm" style={linkStyle} onClick={scrollToTop}>SAP EWM</Link></li>
              <li><Link to="/modules/sap-mfs" style={linkStyle} onClick={scrollToTop}>SAP MFS</Link></li>
              <li><Link to="/modules/sap-tm" style={linkStyle} onClick={scrollToTop}>SAP TM</Link></li>
              <li><Link to="/modules/sap-btp" style={linkStyle} onClick={scrollToTop}>SAP BTP</Link></li>
              <li><Link to="/modules/sap-cpi" style={linkStyle} onClick={scrollToTop}>SAP CPI</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 style={headingStyle}>Industries</h3>
            <ul style={listStyle}>
              <li><Link to="/industries/fashion-retail" style={linkStyle} onClick={scrollToTop}>Fashion & Retail</Link></li>
              <li><Link to="/industries/fmcg" style={linkStyle} onClick={scrollToTop}>FMCG</Link></li>
              <li><Link to="/industries/manufacturing" style={linkStyle} onClick={scrollToTop}>Manufacturing</Link></li>
              <li><Link to="/industries/pharmaceutical" style={linkStyle} onClick={scrollToTop}>Pharmaceutical</Link></li>
              <li><Link to="/industries/automotive" style={linkStyle} onClick={scrollToTop}>Automotive</Link></li>
            </ul>
          </div>
        </div>

        {/* Address Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "30px",
            marginTop: "50px",
          }}
        >
          <div>
            <h4 style={subHeadingStyle}>India Office</h4>
            <p style={addressStyle}>
              Walsetech Private Limited <br />
              Plot No. XX, Tech Park Towers, <br />
              Hyderabad, Telangana, India.
            </p>
          </div>

          <div>
            <h4 style={subHeadingStyle}>USA Office</h4>
            <p style={addressStyle}>
              Walsetech Inc <br />
              Suite XXX, Business Plaza, <br />
              Texas, USA.
            </p>
          </div>

          <div>
            <h4 style={subHeadingStyle}>UAE Office</h4>
            <p style={addressStyle}>
              Walsetech Technologies LLC <br />
              Dubai, United Arab Emirates.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          backgroundColor: "#081b31",
          textAlign: "center",
          padding: "20px",
          fontSize: "13px",
          color: "#94a3b8",
          letterSpacing: "0.05em",
          borderTop: "1px solid rgba(255, 255, 255, 0.05)"
        }}
      >
        © {new Date().getFullYear()} <span style={{ color: "#10b981", fontWeight: "bold" }}>WALSETECH</span>. All Rights Reserved.
      </div>
    </footer>
  );
}

/* Internal Styles */
const headingStyle = {
  fontSize: "16px",
  marginBottom: "25px",
  fontWeight: "700",
  color: "#10b981",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
};

const subHeadingStyle = {
  fontSize: "13px",
  marginBottom: "12px",
  fontWeight: "600",
  color: "#ffffff",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  lineHeight: "2.4",
};

const linkStyle = {
  textDecoration: "none",
  color: "#94a3b8",
  fontSize: "14px",
  transition: "color 0.2s ease",
};

const addressStyle = {
  fontSize: "13px",
  color: "#94a3b8",
  lineHeight: "1.7",
};

export default Footer;