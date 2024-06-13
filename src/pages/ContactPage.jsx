import React from 'react'
import ContactCard from '../components/ContactCard'

function ContactPage() {
    
  return (
    <>
    <main className='flex'>
        <section>
            <h1>Contact us</h1>
        </section>
        <section>
            <ContactCard/>
        </section>
    </main>
    </>
  )
}

export default ContactPage