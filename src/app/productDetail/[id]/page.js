'use client';
import products from "@/data/products";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductDetail({params}) {
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
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl font-semibold ">Rp {product.price.toLocaleString()}</p>
            <p className="mt-1 text-sm">{product.category}</p>
            <p className="mt-1 text-sm">stok : {product.stok}</p>
            <div className="py-5 mt-4">
            <button 
            className="bg-green-600 hover:bg-green-800 rounded-md flex py-2 px-8 items-center justify-center cursor-pointer">
                <FaShoppingCart className="text-white text-xl"/>
            </button>
            </div>
            </div>
            </div>
        </div>
    )
}