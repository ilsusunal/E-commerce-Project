import ProductCard from "../components/ProductCard";
import mockData from "../mockData";

export default function ShopPage(){
    
    return(
        <>
        <main className="md:max-w-7xl flex flex-col mx-4">
        <h1 className="text-baseText text-2xl font-bold my-8">Shop</h1>
        <div className=" flex flex-wrap gap-4 justify-center">
            {mockData.map(product => (
                <div key={product.id} className="grow w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
                    <ProductCard product={product} />
                </div>
            ))}
        </div>
        </main>
        </>
    )
}