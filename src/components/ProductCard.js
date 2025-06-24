'use client';
import products from "@/data/products";
import { useRouter } from "next/navigation";

export default function ProductCard() {
    const router = useRouter();

    const handleClick = (id) => {
        router.push(`/productDetail/${id}`);
    }
    return(
        <section>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4 cursor-pointer">
                {products.map((product) => (
                <div 
                    onClick={() => handleClick(product.id)}
                    key={product.id}    
                    className="bg-white p-4 rounded-md border shadow aspect-square hover:scale-105 transition-transform duration-300">
                        <div className="w-full h-full bg-white rounded-md overflow-hidden flex items-center justify-center mb-2">
                        <img src={product.image} alt={product.category} 
                        className="object-contain"
                        />
                        </div>
                        <div>
                        <h1>{product.name}</h1>
                        <p>Rp {product.price.toLocaleString()}</p>
                        <p>{product.category}</p>
                        </div>
                        
                </div>
                ))}
            </div>
        </section>
    )
}