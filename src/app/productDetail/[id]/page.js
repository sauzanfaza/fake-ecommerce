import products from "@/data/products";

export default async function ProductDetail({params}) {
    const productId = parseInt(params.id);
    const product = products.find((pd) => pd.id === productId);

    if(!product) {
        return <div>Produk tidak ditemukan!!!</div>
    }

    return(
        <div className="min-h-screen flex justify-center items-center p-4">
            <div className="flex flex-col sm:flex-row gap-4 border rounded-md shadow-md w-full max-w-5xl p-4">
            
            <div className="w-full sm:w-1/2 flex justify-center items-center ">
            <img src={product.image} alt={product.category}
                className="w-auto max-h-80 0bject-contain rounded-md"
            />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col justify-center">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl font-semibold mt-2">Rp {product.price.toLocaleString()}</p>
            <p className="mt-2 text-sm">{product.category}</p>
            </div>
            </div>
        </div>
    )
}