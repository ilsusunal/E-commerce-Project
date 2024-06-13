export default function Footer(){
    return(
        <>
        <main className="hidden w-full md:block text-white">
            <section className="flex justify-around bg-darkbg  py-8 px-48">
                <div>
                    <h2 className="font-semibold text-xl mb-8">PazarYeri</h2>
                    <ul className="space-y-4 font-light">
                        <li>About</li>
                        <li>Policies</li>
                        <li>Careers</li>
                        <li>Sell on PazarYeri</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-semibold text-xl mb-8">Shop</h2>
                    <ul className="space-y-4 font-light">
                        <li>Women</li>
                        <li>Men</li>
                        <li>Children</li>
                        <li>Furniture</li>
                    </ul>
                </div>
                <div>
                    <div>
                        <h2 className="font-semibold text-xl mb-8">Help</h2>
                        <ul className="space-y-4 font-light">
                            <li>Help Center</li>
                            <li>Frequently Asked Questions</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                    <h2 className="font-semibold mb-4 mt-8">Social</h2>
                        <ul className="gap-4 font-light flex">
                            <li><a href="/"><i class="fa-brands fa-instagram"/></a></li>
                            <li><a href="/"><i class="fa-brands fa-youtube"/></a></li>
                            <li><a href="/"><i class="fa-brands fa-facebook"/></a></li>
                            <li><a href="/"><i class="fa-brands fa-twitter"/></a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="md:flex justify-center gap-8 md:min-h-8 bg-zinc-600 text-xs px-12 py-2">
                <div>@2024 by İlsu Sunal</div>
                <div>Terms of Use</div>
                <div>Privacy</div>
            </section>
        </main>
        </>
    )
}