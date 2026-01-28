import React from 'react'

const footerStyles = {
  container: {
    marginTop: '3rem',
    padding: '1.5rem 2rem',
    backgroundColor: '#0b2c5f',
    color: '#f4f7fb',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.85rem',
  },
  left: {
    opacity: 0.9,
  },
  right: {
    display: 'flex',
    gap: '1.5rem',
    opacity: 0.8,
  },
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={footerStyles.container}>
      <div style={footerStyles.left}>
        © {year} WALSE Tech
      </div>
      <div style={footerStyles.right}>
        <span>Delivering reliable SAP SEM solutions</span>
      </div>
    </footer>
  )
}

export default Footer
