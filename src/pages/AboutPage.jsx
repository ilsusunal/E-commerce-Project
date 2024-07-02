import React from 'react'
import TeamCard from '../components/TeamCard'

function AboutPage() {
  return (
    <>
    <main className="md:max-w-7xl flex flex-col mx-4">
      <section className='max-h-screen flex flex-col md:flex-row items-center mb-8'>
        <h1 className="text-4xl font-bold items-center justify-center text-darkbg flex-1">Who are we?</h1>
        <div className='text-xl gap-4 flex-1'>
          <p className='my-4'>PazarYeri is the global marketplace for unique and creative goods. It’s home to a universe of special, extraordinary items, from unique handcrafted pieces to vintage treasures.</p>
          <p>In a time of increasing automation, it’s our mission to keep human connection at the heart of commerce. That’s why we built a place where creativity lives and thrives because it’s powered by people. We help our community of sellers turn their ideas into successful businesses. Our platform connects them with millions of buyers looking for an alternative—something special with a human touch, for those moments in life that deserve imagination.</p>
        </div>
      </section>
      <section>
        <h1 className="text-2xl text-center my-12 text-baseText font-semibold">Meet the Team</h1>
        <TeamCard/>
      </section>
    </main>
    </>
  )
}

export default AboutPage