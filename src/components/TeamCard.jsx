import React from 'react'

function TeamCard() {
    const teamData = [
        {   id: 1,
            fullName: "İlsu Sunal",
            role: "Full Stack Developer",
            picture: "ilsu.png",
            phoneNumber: "",
            linkedin: "",
            mail: "",
            about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {   id: 2,
            fullName: "Erhan Fırat",
            role: "Project Owner",
            picture: "erhan.png",
            phoneNumber: "",
            linkedin: "",
            mail: "",
            about: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {   id: 3,
            fullName: "Gökhan Özdemir",
            role: "Scrum Master",
            picture: "gokhan.png",
            phoneNumber: "",
            linkedin: "",
            mail: "",
            about: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        }
    ]
  return (
    <>
    <main className='md:flex mb-24 space-y-4'>
    {teamData.map(m=>(
    <div key={m.id} className='flex flex-col items-center justify-between px-10'>
        <div className='bg-black rounded-full w-40 h-40 border-2'></div>
        <img src={`/${m.picture}`} alt="" />
        <p className='font-semibold text-lg'>{m.fullName}</p>
        <p>{m.role}</p>
        <div className="text-sky-400 space-x-6">
            <button><i className="fa-brands fa-linkedin-in"/></button>
            <button><i className="fa-regular fa-envelope"/></button>
            <button><i className="fa-solid fa-phone"/></button>
        </div>
        <p>{m.about}</p>
    </div>
    ))}
    </main>
    </>
  )
}

export default TeamCard