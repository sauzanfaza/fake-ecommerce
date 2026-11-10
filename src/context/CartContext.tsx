'use client'
import { createContext, ReactNode, useContext, useState } from "react";
import { Product } from "@/types/products"

type CartContextType = {
    cart: Product[]
    stockData: Record<number, number>
    addTocart: (product: Product) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({children} : { children: ReactNode}) => {
    const [cart, setCart] = useState<Product[]>([]);
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
        setCart(prev => [...prev, product])
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