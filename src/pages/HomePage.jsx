import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import Campaigns from "../components/Campaigns"
import ProductCard2 from "../components/ProductCard2"
import CarouselCard from "../components/CarouselCard"

export default function HomePage(){
    
    return(
        <>
        <main className="md:max-w-4xl md:my-8 ">
            <Campaigns/>
            {/*<ProductCard/>*/}
            <section>
                <CarouselCard/>
            </section>
        </main>
        </>
    )
}