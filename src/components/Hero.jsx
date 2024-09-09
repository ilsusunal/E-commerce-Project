import React from 'react';
import HeroGirl from "/hero-girl.png";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
    <div className="md:flex justify-between items-center bg-gradient-to-r from-blue-200  to-green-200 rounded-lg m-4">
      <div className="flex flex-col items-center  md:block md:flex-1 text-gray-900 px-16">
        <p className="text-sm font-semibold mt-12 text-blue-500">SUMMER 2020</p>
        <h1 className="text-4xl font-bold my-8 items-center">NEW COLLECTION</h1>
        <p className="text-lg mb-6">We know how large objects will act, but things on a small scale.</p>
        <Link to="/shop">
        <button className="bg-blue-400 mb-12 w-48 font-bold text-white py-2 px-4 rounded-md hover:bg-blue-500">SHOP NOW</button>
        </Link>
      </div>
      <div className="flex-1">
        <img src={HeroGirl} alt="New Collection" className="w-full h-auto" />
      </div>
    </div>
    </>
  )
}

export default Hero