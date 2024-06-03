import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import Campaigns from "../components/Campaigns"

export default function HomePage(){
    
    return(
        <>
        <main className="flex md:max-w-4xl md:my-8 h-screen">
            <Campaigns/>
        </main>
        </>
    )
}