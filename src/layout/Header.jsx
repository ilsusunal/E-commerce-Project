import { useState } from "react"

export default function Header(){
    const [hamburger, setHamburger] = useState(false);

    const handleHamburger = ()=> {
        if(!hamburger) {
            setHamburger(true);
        } else {
            setHamburger(false);
        }
    }
    
    return(
        <>
        <main className="grow justify-end w-full">
            <section className="hidden md:flex md:min-h-14 bg-pgreen text-white px-12 py-4 gap-8 justify-between">
                <div className="flex gap-4">
                    <p><i className="fa-solid fa-phone mr-2"/>(225) 555-0118</p>
                    <p><i className="fa-regular fa-envelope mr-2"/>michelle.rivera@example.com</p>
                </div>
                <p>Follow Us  and get a chance to win 80% off</p>
                <div className="flex gap-4">
                    <p>Follow Us : </p>
                    <a href="/"><i class="fa-brands fa-instagram"/></a>
                    <a href="/"><i class="fa-brands fa-youtube"/></a>
                    <a href="/"><i class="fa-brands fa-facebook"/></a>
                    <a href="/"><i class="fa-brands fa-twitter"/></a>
                </div>
            </section>
            <section className="hidden md:flex md:min-h-14 px-12 py-8 justify-between font-bold">
                <div className="md:flex items-center">
                    <h1 className="text-2xl">PazarYeri</h1>
                    <ul className="md:flex md:mx-16 md:space-x-4 text-secondtext">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Shop</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Pages</a></li>
                    </ul> 
                </div>
                <div className="text-sky-400 space-x-6">
                    <button><i className="fa-regular fa-user mr-2"/>Login / Register</button>
                    <button><i class="fa-solid fa-magnifying-glass"/></button>
                    <button><i className="fa-solid fa-cart-shopping mr-2"/></button>
                    <button><i className="fa-regular fa-heart mr-2"/></button>
                </div>
                
            </section>
            <section className="flex flex-col md:hidden p-8 font-bold">
                <div className="flex justify-between">
                    <h1 className="text-2xl">PazarYeri</h1>
                    <div className="space-x-6">
                        <button><i class="fa-solid fa-magnifying-glass"/></button>
                        <button><i className="fa-solid fa-cart-shopping mr-2"/></button>
                        <button onClick={handleHamburger}><i className="fa-solid fa-bars"/></button>
                    </div>
                </div>
                {hamburger ? (<ul className="flex flex-col items-center justify-center text-secondtext text-xl gap-4 my-8">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Product</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>) : ''}
            </section>
        </main>
        
        </>
    )
}