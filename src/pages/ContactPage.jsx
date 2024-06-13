import React from 'react'
import ContactCard from '../components/ContactCard'

function ContactPage() {
    
  return (
    <>
    <main className='md:flex p-4 justify-around w-full md:max-w-7xl md:my-4 gap-12'>
        <section className='flex-1 m-4 md:mr-16 md:my-48 flex flex-col items-center md:items-start'>
            <h1 className="text-4xl font-bold mb-8 items-center text-darkbg" >GET IN TOUCH</h1>
            <p>Need to get in touch with us? Either fill out the form with your inquiry or find the department email above the page.</p>
        </section>
        <section className='flex-1'>
            <ContactCard/>
        </section>
    </main>
    </>
  )
}

export default ContactPage