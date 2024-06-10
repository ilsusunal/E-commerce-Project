import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductCard2 from "../components/ProductCard2"
import Campaigns from "../components/Campaigns"
import CarouselCard from "../components/CarouselCard"
import mockData from "../mockData"
import Hero from "../components/Hero"
import CarouselCardFlash from "../components/CarouselCardFlash"

export default function HomePage(){
    const limitedData = mockData.slice(0, 3);
    return(
        <>
        <main className="md:max-w-7xl md:my-4">
            <Hero/>
            {/*<ProductCard/>*/}
            <section className="hidden md:flex my-16">
                <CarouselCard products={mockData}/>
            </section>
            <h1 className="text-2xl text-baseText font-semibold">Products</h1>
            <section className="flex grow">
                {limitedData.map(product => (
                    <ProductCard2 key={product.id} product={product} />
                ))}
            </section>
            <section className="hidden md:flex my-16">
                <CarouselCardFlash products={mockData}/>
            </section>
        </main>
        </>
    )
}