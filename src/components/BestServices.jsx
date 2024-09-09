import React from 'react'
import Service1 from "/service-1.png";
import Service2 from "/service-2.png";
import Service3 from "/service-3.png";

export default function BestServices() {
    const data = [
        {
            id: 1,
            img: Service1,
            title: "Easy Wins",
            description: "Get your best looking smile now!"
        },
        {
            id: 2,
            img: Service2,
            title: "Concrete",
            description: "Defalcate is most focused in helping you discover your most beautiful smile"
        },
        {
            id: 3,
            img: Service3,
            title: "Hack Growth",
            description: "Overcame any hurdle or any other problem."
        }
    ]
    return (
        <>
            <main>
                <section className='mt-16 mb-8'>
                    <h2 className="text-2xl text-center text-baseText/50 font-semibold">Featured Products</h2>
                    <h1 className="text-3xl text-center my-4 text-baseText font-semibold">THE BEST SERVICES</h1>
                    <p className="text-lg text-center text-baseText/50 font-semibold">Problems trying to resolve the conflict between</p>
                </section>
                <section className='flex justify-between my-24'>
                    {data.map(service => (
                        <div key={service.id} className='flex flex-col items-center w-60'>
                            <img src={service.img} alt={service.title} />
                            <h1 className="text-3xl text-center my-4 text-baseText font-semibold">{service.title}</h1>
                            <p className="text-lg text-center text-baseText/50 font-semibold">{service.description}</p>
                        </div>
                    ))}
                </section>
            </main>
        </>
    )
}
