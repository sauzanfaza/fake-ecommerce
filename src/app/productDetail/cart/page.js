'use client'
import { useCart } from "@/context/CartContext"

export default function Cart() {
    const {cart} = useCart()

    return(
        <>
        {/* header */}
        <header className="w-full p-4 flex items-center justify-between mb-5 bg-slate-300">
            <div className="flex items-center">FAKE E-COMMERCE</div>
            <div className="flex-1"></div>
            <div className="flex items-center mr-2">
                <h1 className="text-md font-semibold">Ayo Check Out!!</h1>
            </div>
        </header>
        
        <div className="p-8">
            {cart.length === 0 ? (
                <div className="text-center text-gray-500">
                    Keranjang belanja Anda kosong.
                </div>
            ) : (
                <div className=" flex flex-col gap-4">
                {cart.map((item, index) => (
                    <div
                    key={index}
                    className="bg-white p-4 rounded-md shadow-md border flex gap-4 items-center"
                    >
                    <div className="w-24 h-24 flex-shrink-0">
                        <img src={item.image} alt={item.name} 
                        className="w-full h-full object-contain rounded-md"
                        />
                    </div>

                    <div className="flex flex-col justify-between flex-1">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="font-semibold text-xl">{item.price.toLocaleString()}</p>
                    </div>
                    </div>
                ))}
                </div>
            )}
        </div>
        </>
    )
} 