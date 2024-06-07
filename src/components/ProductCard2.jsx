import React from 'react';

function ProductCard2({ product }) {
  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img className="w-full" src={product.image} alt={product.title} />
        <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-br">
          NEW
        </span>
      </div>
      <div className="p-4">
        <div className="flex space-x-2 mb-2">
          <span className="text-gray-500 text-xs">Google</span>
          <span className="text-gray-500 text-xs">Trending</span>
          <span className="text-gray-500 text-xs">New</span>
        </div>
        <h2 className="font-bold text-xl mb-2">{product.title}</h2>
        <p className="text-gray-700 text-base">{product.description}</p>
        <div className="flex justify-between text-gray-500 text-sm mt-8">
          <span>
            <i className="fa-regular fa-clock text-sky-400 mr-2"/>
            {product.date}
          </span>
          <span>
            <i className="fa-solid fa-chart-line text-green-500 mr-2"/>
            {product.comments} comments
          </span>
        </div>
        <a href="#" className="text-sky-400 font-semibold my-8 block">
          Learn More
          <i className="fa-solid fa-chevron-right ml-4"/>
        </a>
      </div>
    </div>
    </>
  )
}

export default ProductCard2;