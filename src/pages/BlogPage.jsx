import React from 'react'
import BlogCard from '../components/BlogCard'

function BlogPage() {
  return (
    <>
    <main className="md:max-w-7xl flex flex-col mx-4">
        <h1 className="text-baseText text-2xl font-bold my-8">Latest News</h1>
        <div className=" flex flex-wrap gap-4 justify-center">
           <BlogCard/>
        </div>
        </main>
    </>
  )
}

export default BlogPage