import products from "@/data/products";

export default function ProductCard() {
    return(
        <section>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
                {products.map((product) => (
                <div 
                    key={product.id}    
                    className="bg-white p-4 rounded-md border shadow aspect-square">
                        <img src={product.image} alt={product.category} 
                        className="rounded-md"
                        />
                        <h1>{product.name}</h1>
                        <p>Rp {product.price.toLocaleString()}</p>
                        <button>info</button>
                </div>
                ))}
            </div>
        </section>
    )
}