import React from 'react'

function Contact() {
  return (
    <main className="min-h-[calc(100vh-150px)] py-10 px-8 bg-[#f5f7fb] text-[#0b2340]">
      <h1 className="text-[1.8rem] font-bold mb-4 text-[#145ea8]">
        Contact Us
      </h1>
      <p className="text-[0.96rem] leading-relaxed max-w-[40rem] text-[#4a5568] mb-7">
        Share your SAP supply chain and SCM challenges with us and we&apos;ll
        outline how WALSE Tech can help. Send a message and our team will come
        back to you with next steps and potential workshop dates.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1.2fr] gap-8 items-start">
        <div className="p-6 rounded-lg bg-white border border-[#dde5f3] shadow-sm">
          <label
            htmlFor="name"
            className="block text-[0.82rem] font-semibold mb-1 text-[#4a5568]"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your full name"
            className="w-full py-2 px-3 rounded-md border border-[#cbd5e0] text-[0.9rem] mb-4 outline-none"
          />

          <label
            htmlFor="email"
            className="block text-[0.82rem] font-semibold mb-1 text-[#4a5568]"
          >
            Business email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@company.com"
            className="w-full py-2 px-3 rounded-md border border-[#cbd5e0] text-[0.9rem] mb-4 outline-none"
          />

          <label
            htmlFor="message"
            className="block text-[0.82rem] font-semibold mb-1 text-[#4a5568]"
          >
            How can we help?
          </label>
          <textarea
            id="message"
            placeholder="Tell us about your SAP supply chain or SCM initiative..."
            className="w-full min-h-[110px] py-2 px-3 rounded-md border border-[#cbd5e0] text-[0.9rem] resize-y outline-none mb-4"
          />

          <button
            type="button"
            className="py-2.5 px-6 rounded-full border-none bg-gradient-to-br from-[#145ea8] to-[#0b2c5f] text-white font-semibold text-[0.9rem] cursor-pointer"
          >
            Submit enquiry
          </button>
        </div>

        <div className="p-6 rounded-lg bg-white border border-[#dde5f3] shadow-sm">
          <ul className="list-none p-0 m-0 text-[0.9rem] leading-loose text-[#4a5568]">
            <li>
              <span className="font-semibold text-[#0b2c5f]">Email:&nbsp;</span>
              contact@walse.tech
            </li>
            <li>
              <span className="font-semibold text-[#0b2c5f]">Focus:&nbsp;</span>
              SAP Supply Chain Management (SCM), planning and performance
              management.
            </li>
            <li>
              <span className="font-semibold text-[#0b2c5f]">
                Engagements:&nbsp;
              </span>
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
