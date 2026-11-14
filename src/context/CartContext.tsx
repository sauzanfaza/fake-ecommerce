'use client'
import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "@/types/products"
import { CartItem } from "@/types/cartItem";

type CartContextType = {
    cart: CartItem[]
    stockData: Record<number, number>
    addTocart: (product: Product) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({children} : { children: ReactNode}) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [stockData, setStockData] = useState<Record<number, number>>({});

    const addTocart = (product: Product) => {
        const currentStock = stockData[product.id] ?? product.stok
        
        if(currentStock <= 0) return

        //kurangi stok
        setStockData(prev => ({
            ...prev, 
            [product.id]: currentStock - 1
        }))

        //tambah ke cart
        setCart(prev => {
            // cari apakah produk ini sudah ada di keranjang
            const productExist = prev.find(item => item.product.id === product.id)

            if(productExist) {
                return prev.map(item => 
                    item.product.id === product.id
                    ? {...item, quantity: item.quantity + 1}
                    : item
                )
            }

            //baris baru
            return [...prev, { product, quantity: 1}]
        })
    }

    return(
        <CartContext.Provider value={{cart, stockData, addTocart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if(!context) throw new Error ("useCart harus di pakai di dalam CartProvider")
    return context
}