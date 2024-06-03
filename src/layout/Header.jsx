export default function Header(){
    return(
        <>
        <main className="grow justify-end w-full">
            <section className="hidden md:flex md:min-h-14 bg-pgreen text-white px-12 py-4">
                contacts
            </section>
            <section className="md:flex md:min-h-14 px-12 py-8 justify-between font-bold">
                <div className="md:flex items-center">
                    <h1 className="text-2xl">PazarYeri</h1>
                    <ul className="md:flex md:mx-16 md:space-x-4 text-secondtext ">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Shop</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Pages</a></li>
                    </ul>
                </div>
                <div>
                    kayıt ol vb
                </div>
            </section>
        </main>
        
        </>
    )
}