import React from 'react'

function ContactForm() {
  return (
    <>
    <main className="grow h-auto justify-end bg-white py-10 px-14 rounded-2xl border-2 w-full">
        <h2 className="text-xl mb-4 text-center">Contact Us</h2>
        <h3 className="text-2xl  font-bold  mb-6 text-center">Share Your Ideas</h3>
        <form className="">
        <div className="mb-4 md:flex md:gap-4">
          <input
            type="text"
            id="fullName"
            className="w-full mb-4 md:mb-0 px-3 py-2 border border-gray-300 bg-stone-50 rounded"
            required
            placeholder='Full Name *'
          />
            <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 bg-stone-50 rounded"
            required
            placeholder='Email *'
          />
        </div>
        <div className="mb-4">
          <select
            id="subject"
            className="w-full px-3 py-2 border border-gray-300 bg-stone-50 rounded"
            required
            placeholder="Subject *"
          >
            <option value="" disabled>Please Select</option>
            <option value="Subject 1">Recommendation</option>
            <option value="Subject 2">Complaint</option>
          </select>
        </div>
        <div className="mb-4 flex flex-col items-center">
          <textarea
            id="message"
            className="w-full px-3 py-2 border border-gray-300 bg-stone-50 rounded mb-8"
            rows="4"
            placeholder='Message'
          ></textarea>
          <button
          type="submit"
          className="w-48 bg-sky-400 text-white px-3 py-2 rounded hover:bg-darkbg"
        >
          Send
        </button>
        </div>
        
      </form>
    </main>

    </>
  )
}

export default ContactForm