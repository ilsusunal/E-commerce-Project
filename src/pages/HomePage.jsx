import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import Campaigns from "../components/Campaigns"
import ProductCard2 from "../components/ProductCard2"
import CarouselCard from "../components/CarouselCard"

export default function HomePage(){
    
    return(
        <>
        <main className="md:max-w-5xl md:my-4">
            <Campaigns/>
            {/*<ProductCard/>*/}
            <section className="hidden md:flex my-16">
                <CarouselCard/>
            </section>
            <section className="flex gap-4">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </section>
        </main>
        </>
    )
}