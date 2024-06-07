import mockData from "../mockData"

export default function ProductCard({ product }){
  
    return(
        <>
        <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <section>
          <img
            src={product.image}
            alt="card image"
            className="aspect-video w-full"
          />
        </section>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              {product.title}
            </h3>
            <p className=" text-slate-400">${product.price}</p>
          </header>
          <p>
            {product.description}
          </p>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className="flex justify-end p-6 pt-0">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
            <span>Order now!</span>
          </button>
        </div>
      </div>
        </>
    )
}