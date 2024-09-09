import React from 'react'
import Post1 from "/post-1.png";
import Post2 from "/post-2.png";

export default function () {
  const data = [
    {
      image: Post1,
      title: "Graphic Design",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      prevPrice: 16.4,
      currPrice: 6.4,
      star: 4.9
    },
    {
      image: Post2,
      title: "Watercolor Poster",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      prevPrice: 15,
      currPrice: 7,
      star: 4.5
    }
  ]
  return (
    <>
      <main className='flex gap-24 justify-between my-24'>
        {data.map(post => (
          <div className="rounded overflow-hidden flex">
            <section className="relative">
              <img
                className='h-auto w-full'
                src={post.image}
                alt={post.title}
              />
              <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-br-lg">
                Sale
              </span>
            </section>
            <section>
              <div className="px-6 py-4">
                <div className="font-bold text-sky-400 text-sm mb-2">English Department</div>
                <div className="font-bold text-xl mb-2">{post.title}</div>
                <p className="text-gray-400 text-base">{post.description}</p>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-center text-gray-700 text-sm mb-2">
                  <span className="mr-2">★ {post.star}</span>
                  <span className="ml-auto">15 Sales</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="line-through text-gray-400">${post.prevPrice}</span>
                  <span className="text-green-600 text-lg ml-2">${post.currPrice}</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full mr-2">22h</span>
                  <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full mr-2">64 Lessons</span>
                  <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">Progress</span>
                </div>
                <button className="border-2 border-sky-400 rounded-full text-gray-700 hover:bg-sky-400  hover:text-white py-2 px-4">
                  Learn More
                </button>
              </div>
            </section>
          </div>)
        )}
      </main>
    </>
  )
}
