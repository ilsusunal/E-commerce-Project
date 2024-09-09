import React from 'react'
import TeamCard from '../components/cards/TeamCard'

function AboutPage() {
  return (
    <>
    <main className="md:max-w-7xl flex flex-col mx-8">
      <section className='md:flex p-4 justify-around w-full md:max-w-7xl md:my-4 gap-12'>
        <div className='flex-1 m-4 md:mr-16 md:my-48 flex flex-col items-center md:items-start'>
          <h1 className="text-4xl font-bold mb-8 items-center text-darkbg">Who are we?</h1>
          <p>We strive to lead with our guiding principles and to help spread ideas of sustainability and responsibility.</p>
        </div>
        <div className='text-2xl gap-4 flex-1'>
          <p className='mb-8'>PazarYeri is the global marketplace for unique and creative goods. It’s home to a universe of special, extraordinary items, from unique handcrafted pieces to vintage treasures.</p>
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