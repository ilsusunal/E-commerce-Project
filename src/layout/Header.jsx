export default function Header(){
    return(
        <>
        <main className="justify-end">
            <section className="hidden md:flex md:min-h-14 bg-pgreen text-white px-8 py-4">
                contacts
            </section>
            <section className="md:flex md:min-h-14 px-8 py-4 justify-between">
                <div className="md:flex">
                    <h1 className="text-2xl">PazarYeri</h1>
                    <ul className="md:flex">
                        <li><a href="/">Home</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/pages">Pages</a></li>
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