import React from 'react'

const homeStyles = {
  page: {
    minHeight: 'calc(100vh - 150px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    padding: '2.5rem 2rem',
    background:
      'radial-gradient(circle at top left, #e3f2ff 0, #ffffff 45%, #f1f5fb 100%)',
    color: '#0b2340',
  },
  hero: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 2.2fr) minmax(0, 1.8fr)',
    gap: '2.5rem',
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: '2.3rem',
    fontWeight: 700,
    marginBottom: '1rem',
  },
  highlight: {
    color: '#145ea8',
  },
  heroText: {
    fontSize: '1rem',
    lineHeight: 1.7,
    marginBottom: '1.25rem',
    maxWidth: '38rem',
  },
  badgeRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    marginBottom: '1.75rem',
  },
  badge: {
    padding: '0.3rem 0.75rem',
    borderRadius: '999px',
    border: '1px solid rgba(20, 94, 168, 0.25)',
    backgroundColor: 'rgba(227, 242, 255, 0.7)',
    fontSize: '0.78rem',
    fontWeight: 600,
    color: '#145ea8',
  },
  ctaRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
    alignItems: 'center',
  },
  primaryBtn: {
    padding: '0.75rem 1.6rem',
    borderRadius: '999px',
    border: 'none',
    background:
      'linear-gradient(135deg, #145ea8 0%, #0b2c5f 100%)',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '0.95rem',
    cursor: 'pointer',
    boxShadow: '0 10px 25px rgba(9, 58, 120, 0.3)',
  },
  secondaryLink: {
    fontSize: '0.9rem',
    color: '#145ea8',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
  heroPanel: {
    padding: '1.8rem 1.6rem',
    borderRadius: '1.1rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 18px 45px rgba(7, 33, 65, 0.16)',
    border: '1px solid #e0e7f3',
  },
  panelTitle: {
    fontSize: '1.05rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: '#145ea8',
  },
  panelList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    fontSize: '0.9rem',
  },
  section: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: '1.5rem',
  },
  card: {
    padding: '1.5rem 1.4rem',
    borderRadius: '0.9rem',
    backgroundColor: '#ffffff',
    border: '1px solid #dde5f3',
    boxShadow: '0 8px 20px rgba(11, 44, 95, 0.06)',
  },
  cardTitle: {
    fontSize: '1rem',
    fontWeight: 600,
    marginBottom: '0.55rem',
    color: '#0b2c5f',
  },
  cardText: {
    fontSize: '0.87rem',
    lineHeight: 1.6,
    color: '#4a5568',
  },
  sectionHeading: {
    fontSize: '1.2rem',
    fontWeight: 600,
    marginBottom: '1rem',
  },
}

function Home() {
  return (
    <main style={homeStyles.page}>
      <section style={homeStyles.hero}>
        <div>
          <h1 style={homeStyles.heroTitle}>
            SAP Supply Chain Management{' '}
            <span style={homeStyles.highlight}>(SCM)</span> that keeps your
            business moving.
          </h1>
          <p style={homeStyles.heroText}>
            WALSE Tech helps organizations design, implement and optimize SAP
            Supply Chain Management (SCM) solutions so that planning,
            forecasting and logistics run as one connected flow. From demand and
            inventory planning to performance management, we transform your SAP
            landscape into a resilient, data‑driven supply chain platform.
          </p>

          <div style={homeStyles.badgeRow}>
            <span style={homeStyles.badge}>SAP Supply Chain Management (SCM)</span>
            <span style={homeStyles.badge}>End‑to‑end planning visibility</span>
            <span style={homeStyles.badge}>Process optimization &amp; KPIs</span>
          </div>

          <div style={homeStyles.ctaRow}>
            <button type="button" style={homeStyles.primaryBtn}>
              Talk to a SAP SCM expert
            </button>
            <span style={homeStyles.secondaryLink}>
              Learn how we modernize supply chains
            </span>
          </div>
        </div>

        <aside style={homeStyles.heroPanel}>
          <h2 style={homeStyles.panelTitle}>
            What SAP SCM means for your supply chain
          </h2>
          <ul style={homeStyles.panelList}>
            <li>
              • Integrated strategic enterprise management for supply chain
              planning, budgeting and simulation.
            </li>
            <li>
              • Scenario‑based planning to balance service levels, cost and
              capacity in real time.
            </li>
            <li>
              • KPI tracking and dashboards that align operations with
              corporate strategy.
            </li>
            <li>
              • Proven implementation templates tailored to your industry and
              SAP landscape.
            </li>
          </ul>
        </aside>
      </section>

      <section>
        <h2 style={homeStyles.sectionHeading}>How WALSE Tech supports SAP Supply Chain Management</h2>
        <div style={homeStyles.section}>
          <div style={homeStyles.card}>
            <h3 style={homeStyles.cardTitle}>SAP SCM Roadmapping</h3>
            <p style={homeStyles.cardText}>
              Define a clear SCM roadmap covering strategy, process design, data
              model, and governance so that every supply chain initiative is
              traceable back to measurable business objectives.
            </p>
          </div>
          <div style={homeStyles.card}>
            <h3 style={homeStyles.cardTitle}>Implementation &amp; Roll‑out</h3>
            <p style={homeStyles.cardText}>
              Configure and deploy SAP SCM modules with best‑practice templates,
              integration to ECC/S4HANA, and change‑management support for
              planners and business users.
            </p>
          </div>
          <div style={homeStyles.card}>
            <h3 style={homeStyles.cardTitle}>Continuous Optimization</h3>
            <p style={homeStyles.cardText}>
              Monitor performance, tune planning parameters and enhance
              reporting so your supply chain keeps pace with market volatility
              and customer expectations.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
