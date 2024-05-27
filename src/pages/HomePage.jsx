import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import Campaigns from "../components/Campaigns"

export default function HomePage(){
    
    return(
        <>
        <main className="flex md:flex-col  items-center md:max-w-6xl md:my-12">
            <Campaigns/>
        </main>
        </>
    )
}