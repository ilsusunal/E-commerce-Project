import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductCard2 from "../components/ProductCard2"
import Campaigns from "../components/Campaigns"
import CarouselCard from "../components/CarouselCard"
import mockData from "../mockData"
import Hero from "../components/Hero"
import CarouselCardFlash from "../components/CarouselCardFlash"

export default function HomePage(){
    const limitedData = mockData.slice(0, 4);
    const limitedData2 = mockData.slice(4, 8);
    return(
        <>
        <main className="md:max-w-7xl md:my-4">
            <Hero/>
            {/*<ProductCard/>*/}
            
            <h1 className="text-2xl text-center my-12 text-baseText font-semibold">Featured Products</h1>
            <section className="p-4">
                <div className="md:flex justify-between gap-4 mb-4 space-y-4 md:space-y-0">
                {limitedData.map(product => (
                    <ProductCard2 key={product.id} product={product} />
                ))}
                </div>
                <div className="md:flex justify-between gap-4">
                {limitedData2.map(product => (
                    <ProductCard2 key={product.id} product={product} />
                ))}
                </div>
            </section>
            <section className="hidden md:flex my-16">
                <CarouselCard products={mockData}/>
            </section>
        </main>
        </>
    )
}