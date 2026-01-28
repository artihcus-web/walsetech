import React from 'react'

const aboutStyles = {
  page: {
    minHeight: 'calc(100vh - 150px)',
    padding: '2.5rem 2rem',
    backgroundColor: '#ffffff',
    color: '#0b2340',
  },
  heading: {
    fontSize: '1.8rem',
    fontWeight: 700,
    marginBottom: '1.5rem',
    color: '#145ea8',
  },
  sectionTitle: {
    fontSize: '1.1rem',
    fontWeight: 600,
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
  },
  text: {
    fontSize: '0.96rem',
    lineHeight: 1.7,
    maxWidth: '48rem',
    color: '#4a5568',
  },
  list: {
    marginTop: '0.75rem',
    paddingLeft: '1.2rem',
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: '#4a5568',
  },
}

function About() {
  return (
    <main style={aboutStyles.page}>
      <h1 style={aboutStyles.heading}>About WALSE Tech</h1>
      <p style={aboutStyles.text}>
        WALSE Tech is a consulting partner focused exclusively on SAP Supply
        Chain Management, including SAP Strategic Enterprise Management (SEM).
        We combine deep process knowledge with hands‑on SAP delivery to help
        organizations build supply chains that are responsive, transparent and
        aligned with corporate strategy.
      </p>

      <h2 style={aboutStyles.sectionTitle}>Our focus areas</h2>
      <ul style={aboutStyles.list}>
        <li>Design and optimization of SAP SEM solutions for planning and KPIs.</li>
        <li>Integration of SEM with SAP ERP and S/4HANA supply chain modules.</li>
        <li>Blueprinting, implementation and roll‑out of end‑to‑end processes.</li>
        <li>Continuous improvement programs and capability building for planners.</li>
      </ul>

      <h2 style={aboutStyles.sectionTitle}>How we work</h2>
      <p style={aboutStyles.text}>
        Every engagement starts with understanding your supply chain strategy
        and pain points. From there we co‑create a roadmap, prioritize use cases
        and deliver SAP SEM capabilities in short, value‑driven iterations. Our
        consultants work closely with both IT and business teams to ensure your
        SAP solutions are adopted, sustainable and ready to scale.
      </p>
    </main>
  )
}

export default About

