'use client';
import products from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductDetail({params}) {
    const router = useRouter();
    const { addTocart, stockData } = useCart();

    const productId = parseInt(params.id);
    const product = products.find((pd) => pd.id === productId);
    if(!product) {
        return <div>Produk tidak ditemukan!!!</div>
    }

    const currentStock = stockData[product.id] ?? product.stok;
    const handleClick = () => {
        addTocart(product)
    }
    const handleRoute = () => {
        router.push('/productDetail/cart');
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
            <div className="relative">
                <FaShoppingCart 
                    onClick={handleRoute}
                    className="text-black cursor-pointer absolute top-2 right-2"/>
            </div>
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl font-semibold ">Rp {product.price.toLocaleString()}</p>
            <p className="mt-1 text-sm">{product.category}</p>
            <p className="mt-1 text-sm">stok : {currentStock}</p>
            <div className="py-5 mt-4">
            <button 
            onClick={handleClick}
            disabled={currentStock <= 0}
            className="bg-green-600 hover:bg-green-800 rounded-md flex py-2 px-8 items-center justify-center cursor-pointer">
                <FaShoppingCart className="text-white text-xl"/>
            </button>
            </div>
            </div>
            </div>
        </div>
    )
}