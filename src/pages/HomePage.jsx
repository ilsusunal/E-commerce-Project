import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductCard2 from "../components/cards/ProductCard2"
import CarouselCard from "../components/Carousel"
import mockData from "../mockData"
import Hero from "../components/Hero"
import Clients from "/desktop-clients.png";
import BestSellers from "../components/BestSellers"
import FeaturedProducts from "../components/FeaturedProducts"
import BestServices from "../components/BestServices"
import FeaturedPosts from "../components/FeaturedPosts"

export default function HomePage(){
    const limitedData = mockData.slice(0, 4);
    const limitedData2 = mockData.slice(4, 8);
    return(
        <>
        <main className="md:max-w-7xl md:my-4">
            <Hero/>
            {/*<ProductCard/>*/}
            <img src={Clients} alt="Clients" className="w-full h-auto my-24 hidden md:block" />
            <BestSellers/>
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
            <FeaturedProducts/>
            <BestServices/>
            <FeaturedPosts/>
        </main>
        </>
    )
}