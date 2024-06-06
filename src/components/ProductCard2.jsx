import React from 'react';

function ProductCard2() {
    const products = [
    {
        image: 'https://picsum.photos/id/493/800/600',
        title: 'Product 1',
        description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
        date: '22 April 2021',
        comments: '10'
    },
    {
        image: 'https://picsum.photos/id/494/800/600',
        title: 'Product 2',
        description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
        date: '22 April 2021',
        comments: '10'
    },
    {
        image: 'https://picsum.photos/id/495/800/600',
        title: 'Product 3',
        description: 'We focus on ergonomics and meeting you where you work. It\'s only a keystroke away.',
        date: '22 April 2021',
        comments: '10'
    },
    ];

  return (
    <>
    <main>
        
    </main>
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
        <div className="flex items-center text-gray-500 text-sm mt-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l-3.5 3.5L12 21m0 0l3.5-3.5M12 21v-4M12 3a9 9 0 100 18 9 9 0 000-18z" />
          </svg>
          <span>{product.date}</span>
          <svg className="w-4 h-4 ml-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4M7 16h10M5 12h.01M5 16h.01M5 8h.01M20 12h.01M20 16h.01M20 8h.01M12 3v4m-3.091 1.65A9.003 9.003 0 0021 12h-4M3.049 7.042a9 9 0 1013.4 0" />
          </svg>
          <span>{product.comments} comments</span>
        </div>
        <a href="#" className="text-blue-500 text-sm font-semibold mt-4 block">Learn More</a>
      </div>
    </div>
    </>
  )
}

export default ProductCard2;