import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import Campaigns from "../components/Campaigns"

export default function HomePage(){
    
    return(
        <>
        <main className="mx-auto min-h-screen md:max-w-6xl">
            <Campaigns/>
        </main>
        </>
    )
}