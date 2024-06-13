import React from 'react'

function ContactCard() {
  return (
    <>
    <main className="grow flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
        <h3 className="text-xl mb-6 text-center">Make an Appointment</h3>
        <div className="mb-4">
          <label className="block mb-1 font-bold" htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold" htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold" htmlFor="service">Service *</label>
          <select
            id="service"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          >
            <option value="" disabled>Please Select</option>
            <option value="Service 1">Service 1</option>
            <option value="Service 2">Service 2</option>
            <option value="Service 3">Service 3</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold" htmlFor="time">Time *</label>
          <select
            id="time"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          >
            <option value="" disabled>Select a Time</option>
            <option value="4:00">4:00 Available</option>
            <option value="5:00">5:00 Available</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-700"
        >
          Book Appointment
        </button>
      </form>
    </main>

    </>
  )
}

export default ContactCard