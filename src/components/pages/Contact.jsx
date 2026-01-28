import React from 'react'

const contactStyles = {
  page: {
    minHeight: 'calc(100vh - 150px)',
    padding: '2.5rem 2rem',
    backgroundColor: '#f5f7fb',
    color: '#0b2340',
  },
  heading: {
    fontSize: '1.8rem',
    fontWeight: 700,
    marginBottom: '1rem',
    color: '#145ea8',
  },
  text: {
    fontSize: '0.96rem',
    lineHeight: 1.7,
    maxWidth: '40rem',
    color: '#4a5568',
    marginBottom: '1.75rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1.2fr)',
    gap: '2rem',
    alignItems: 'flex-start',
  },
  card: {
    padding: '1.6rem 1.5rem',
    borderRadius: '0.9rem',
    backgroundColor: '#ffffff',
    border: '1px solid #dde5f3',
    boxShadow: '0 8px 20px rgba(11, 44, 95, 0.05)',
  },
  label: {
    display: 'block',
    fontSize: '0.82rem',
    fontWeight: 600,
    marginBottom: '0.25rem',
    color: '#4a5568',
  },
  input: {
    width: '100%',
    padding: '0.55rem 0.7rem',
    borderRadius: '0.5rem',
    border: '1px solid #cbd5e0',
    fontSize: '0.9rem',
    marginBottom: '0.9rem',
    outline: 'none',
  },
  textarea: {
    width: '100%',
    minHeight: '110px',
    padding: '0.55rem 0.7rem',
    borderRadius: '0.5rem',
    border: '1px solid #cbd5e0',
    fontSize: '0.9rem',
    resize: 'vertical',
    outline: 'none',
    marginBottom: '1rem',
  },
  button: {
    padding: '0.7rem 1.5rem',
    borderRadius: '999px',
    border: 'none',
    background:
      'linear-gradient(135deg, #145ea8 0%, #0b2c5f 100%)',
    color: '#ffffff',
    fontWeight: 600,
    fontSize: '0.9rem',
    cursor: 'pointer',
  },
  detailsList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    fontSize: '0.9rem',
    lineHeight: 1.8,
    color: '#4a5568',
  },
  detailLabel: {
    fontWeight: 600,
    color: '#0b2c5f',
  },
}

function Contact() {
  return (
    <main style={contactStyles.page}>
      <h1 style={contactStyles.heading}>Contact Us</h1>
      <p style={contactStyles.text}>
        Share your SAP supply chain and SEM challenges with us and we&apos;ll
        outline how WALSE Tech can help. Send a message and our team will come
        back to you with next steps and potential workshop dates.
      </p>

      <div style={contactStyles.grid}>
        <div style={contactStyles.card}>
          <label style={contactStyles.label} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            style={contactStyles.input}
          />

          <label style={contactStyles.label} htmlFor="email">
            Business email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            style={contactStyles.input}
          />

          <label style={contactStyles.label} htmlFor="message">
            How can we help?
          </label>
          <textarea
            id="message"
            placeholder="Tell us about your SAP supply chain or SEM initiative..."
            style={contactStyles.textarea}
          />

          <button type="button" style={contactStyles.button}>
            Submit enquiry
          </button>
        </div>

        <div style={contactStyles.card}>
          <ul style={contactStyles.detailsList}>
            <li>
              <span style={contactStyles.detailLabel}>Email:&nbsp;</span>
              contact@walse.tech
            </li>
            <li>
              <span style={contactStyles.detailLabel}>Focus:&nbsp;</span>
              SAP Supply Chain Management (SEM), planning and performance
              management.
            </li>
            <li>
              <span style={contactStyles.detailLabel}>Engagements:&nbsp;</span>
              Assessments, roadmap design, implementation projects and
              continuous optimization programs.
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default Contact

