import ProductCard from "../components/ProductCard";
import mockData from "../mockData";

export default function ShopPage(){
    
    return(
        <>
        <main className="md:min-w-[1024px] flex flex-col md:mx-24 mx-4">
        <h1 className="text-baseText text-2xl font-bold my-8">Products</h1>
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