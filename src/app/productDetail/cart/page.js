'use client'
import { useCart } from "@/context/CartContext"

export default function Cart() {
    const {cart} = useCart()

    if(cart.length === 0) return <p className="p-4">Keranjang Anda Kosong <span>Silahkan Pilih Item</span></p>

    return(
        <div className="p-8">
            <h2 className="text-xl font-bold mb-4">Keranjang Belanja Anda</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index} className="mb-2">
                        {item.name} - Rp {item.price.toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    )
} 