import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import ProductCard from "../components/ProductCard"

export default function HomePage(){
    
    return(
        <>
        <main className="mx-auto min-h-screen md:max-w-6xl">
            <section className="md:grid md:grid-cols-3 md:grid-rows-2 min-h-full">
                <div className="rounded-3xl md:col-span-1 md:row-span-2 bg-slate-600 m-4">Card 1</div>
                <div className="rounded-3xl md:col-span-2 md:row-span-1 bg-slate-600 m-4">Card 2</div>
                <div className="rounded-3xl md:col-span-1 md:row-span-1 bg-slate-600 m-4">Card 3</div>
                <div className="rounded-3xl md:col-span-1 md:row-span-1 bg-slate-600 m-4">Card 4</div>
            </section>
        </main>
        </>
    )
}