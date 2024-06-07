import introCard1 from "/introCard1.png";
import introCard2 from "/introCard2.png";
import introCard3 from "/introCard3.png";
import introCard4 from "/introCard4.png";

export default function Campaigns(){
    return(
        <>
        <main className="w-full overflow-x-hidden">
            <div className="md:flex items-center w-full">
            <section className="md:w-auto md:h-full w-full">
                <div className=" m-2 relative">
                <div className="font-bold p-4 absolute">
                    <p className="text-successText">5 items</p>
                    <h1 className="text-baseText text-2xl my-1">FURNITURE</h1>
                    <button className="text-baseText ">Read more</button>
                </div>
                    <img src={introCard1} alt="Intro Image 1" className="w-full md:h-auto h-40 object-cover"/>
                </div>
            </section>
            <section className="md:w-auto md:h-full w-full">
            <div className=" m-2 relative">
                <div className="font-bold p-4 absolute">
                    <p className="text-successText text-xs">5 items</p>
                    <h1 className="text-baseText text-lg">FURNITURE</h1>
                    <button className="text-baseText text-xs">Read more</button>
                </div>
                <img src={introCard2} alt="Intro Image 2" className="w-full md:h-auto h-40 object-cover"/>
            </div>

            <section className="md:w-auto md:h-full md:flex w-full">
            <div className=" m-2 relative">
                <div className="font-bold p-4 absolute">
                    <p className="text-successText text-xs">5 items</p>
                    <h1 className="text-baseText text-lg">FURNITURE</h1>
                    <button className="text-baseText text-xs">Read more</button>
                </div>
                <img src={introCard3} alt="Intro Image 3" className="w-full md:h-auto h-40 object-cover"/>
            </div>
            <div className=" m-2 relative">
                <div className="font-bold p-4 absolute">
                    <p className="text-successText text-xs">5 items</p>
                    <h1 className="text-baseText text-lg">FURNITURE</h1>
                    <button className="text-baseText text-xs">Read more</button>
                </div>
                <img src={introCard4} alt="Intro Image 4" className="w-full md:h-auto h-40 object-cover"/>
            </div>
            </section>
            </section>
            </div>
        </main>
        </>
    )
}