import ProductCard from "../components/ProductCard";

export default function ShopPage(){
    return(
        <>
        <main className="md:min-w-[1024px] flex flex-col md:mx-24 mx-4">
        <h1 className="text-baseText text-2xl font-bold my-8">Products</h1>
        <div className="grow md:flex gap-4 my-4">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        <div className="grow md:flex gap-4 my-4">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        <div className="grow md:flex gap-4 my-4">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        </main>
        </>
    )
}