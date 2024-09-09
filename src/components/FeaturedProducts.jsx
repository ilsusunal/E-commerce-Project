import React from 'react'
import Featured from "/featured-products.png";

export default function FeaturedProducts() {
  return (
    <>
      <main className='mt-16 mb-8 flex gap-12 items-center'>
        <div className='flex-1'>
          <img src={Featured} alt="Featured" className="w-full h-auto my-8 hidden md:block" />
        </div>
        <div className='flex-1 flex flex-col items-start gap-4'>
          <h2 className="text-2xl text-sky-400 font-semibold">Featured Products</h2>
          <h1 className="text-5xl my-4 text-baseText font-semibold">We love what we do</h1>
          <p className="text-lg text-baseText/50 font-semibold">
            PazarYeri is the global marketplace for unique and creative goods. It’s home to a universe of special, extraordinary items, from unique handcrafted pieces to vintage treasures. </p>
          </div>
      </main>
    </>
  )
}
