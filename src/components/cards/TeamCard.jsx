import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'

function TeamCard() {
    const teamData = [
        {   id: 1,
            fullName: "İlsu Sunal",
            role: "Full Stack Developer",
            picture: "ilsu.png",
            phoneNumber: "",
            linkedin: "https://www.linkedin.com/in/ilsu-sunal/",
            mail: "",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {   id: 2,
            fullName: "Erhan Fırat",
            role: "Project Owner",
            picture: "erhan.jpeg",
            phoneNumber: "",
            linkedin: "",
            mail: "",
            about: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {   id: 3,
            fullName: "Gökhan Özdemir",
            role: "Scrum Master",
            picture: "gokhan.jpeg",
            phoneNumber: "",
            linkedin: "",
            mail: "",
            about: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
    ]
  return (
    <>
    <main className='md:flex mb-24'>
    {teamData.map(m=>(
    <div key={m.id} className='flex flex-col items-center justify-between px-10'>
        <div className='bg-black '></div>
        <img src={`/${m.picture}`} alt="" className='rounded-full w-40 h-40 border-2 mb-2'/>
        <p className='font-semibold text-lg'>{m.fullName}</p>
        <p className='text-zinc-700'>{m.role}</p>
        <div className="text-sky-400 space-x-6 flex mb-2">
            <a href={m.linkedin} ><i className="fa-brands fa-linkedin-in"/></a>
            <a href={m.mail} ><i className="fa-regular fa-envelope"/></a>
            <a href={m.phoneNumber} ><i className="fa-solid fa-phone"/></a>
        </div>
        <p className='text-sm'>{m.about}</p>
    </div>
    ))}
    </main>
    </>
  )
}

export default TeamCard