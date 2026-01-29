import React from 'react'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-12 py-6 px-8 bg-[#0b2c5f] text-[#f4f7fb] flex justify-between items-center text-[0.85rem]">
      <div className="opacity-90">© {year} WALSE Tech</div>
      <div className="flex gap-6 opacity-80">
        <span>Delivering reliable SAP SCM solutions</span>
      </div>
    </footer>
  )
}

export default Footer
