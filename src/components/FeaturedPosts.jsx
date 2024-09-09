import React from 'react'
import PostCard from './cards/PostCard'

export default function () {
    return (
        <>
            <main className='mt-24 mb-8 gap-12 items-center'>
                <div className='flex-1 flex flex-col gap-4 text-center'>
                    <h2 className="text-2xl  text-sky-400 font-semibold">Practice Advice</h2>
                    <h1 className="text-5xl my-4 text-baseText font-semibold">Featured Posts</h1>
                </div>
                <div>
                    <PostCard/>
                </div>
            </main>
        </>
    )
}
