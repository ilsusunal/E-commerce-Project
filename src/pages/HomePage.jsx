import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import Campaigns from "../components/Campaigns"
import CarouselCard from "../components/CarouselCard"
import mockData from "../mockData"

export default function HomePage(){
    const limitedData = mockData.slice(0, 4);
    return(
        <>
        <main className="md:max-w-5xl md:my-4">
            <Campaigns/>
            {/*<ProductCard/>*/}
            <section className="hidden md:flex my-16">
                <CarouselCard products={mockData}/>
            </section>
            <section className="flex gap-4">
                {limitedData.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </section>
        </main>
        </>
    )
}