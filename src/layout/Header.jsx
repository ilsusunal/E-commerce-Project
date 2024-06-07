import { useState } from "react"

export default function Header(){
    const [hamburger, setHamburger] = useState(false);
    const [shopDropdown, setShopDropdown] = useState(false);

    const handleHamburger = ()=> {
        if(!hamburger) {
            setHamburger(true);
        } else {
            setHamburger(false);
        }
    }

    const toggleShopDropdown = () => {
        setShopDropdown(!shopDropdown);
    };
    
    return(
        <>
        <main className="md:grow justify-end w-full">
            <section className="hidden md:flex md:min-h-10 bg-pgreen text-white px-12 py-4 gap-8 justify-between text-sm">
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
                    <button className="text-2xl"><a href="/">PazarYeri</a></button>
                    <ul className="md:flex md:mx-16 md:space-x-4 text-secondtext">
                        <li><a href="/">Home</a></li>
                        <li className="relative">
                            <a href="/shop">Shop</a>
                            <button onClick={toggleShopDropdown}><i class="fa-solid fa-chevron-down ml-2"/></button>
                            {shopDropdown && (
                                <div className="absolute left-0 top-full mt-2 bg-white text-black py-8 px-24 flex gap-8 w-max z-50">
                                <div>
                                    <h3 className="font-bold mb-2">Shop Layout</h3>
                                    <ul className="font-semibold text-secondtext space-y-2 mt-4">
                                        <li>Full Width</li>
                                        <li>Sidebar Right</li>
                                        <li>Sidebar Left</li>
                                        <li>List View</li>
                                        <li>Checkout</li>
                                        <li>Card</li>
                                        <li>Wishlist</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">Product Layout</h4>
                                    <ul className="font-semibold text-secondtext space-y-2 mt-4">
                                        <li>Big Image Scrolling</li>
                                        <li>Simple Product</li>
                                        <li>Vertical Right</li>
                                        <li>Vertical Left</li>
                                        <li>Vertical Horizontal</li>
                                        <li>Collection</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">Product Type</h4>
                                    <ul className="font-semibold text-secondtext space-y-2 mt-4">
                                        <li>Simple Product</li>
                                        <li>Vertical Product</li>
                                        <li>Left Product</li>
                                        <li>Right Product</li>
                                        <li>Special Products</li>
                                        <li>Outstock store</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold mb-2">Product Categories</h4>
                                    <ul className="font-semibold text-secondtext space-y-2 mt-4">
                                        <li>Bedroom</li>
                                        <li>Outdoor</li>
                                        <li>Decoration</li>
                                        <li>Kitchen</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        </li>
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