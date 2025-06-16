import products from "@/data/products";

export default async function ProductDetail({params}) {
    const productId = parseInt(params.id);
    const product = products.find((pd) => pd.id === productId);

    if(!product) {
        return <div>Produk tidak ditemukan!!!</div>
    }

    return(
        <main className="p-8">
            <div>
            <img src={product.image} alt={product.category}
                className="w-full max-w-md h-full obejct-contain rounded-md"
            />
            </div>
            <div>
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl font-semibold mt-2">Rp {product.price.toLocaleString()}</p>
            <p className="mt-2 text-sm">{product.category}</p>
            </div>
            
        </main>
    )
}