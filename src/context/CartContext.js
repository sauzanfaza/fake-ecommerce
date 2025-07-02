'use client'
import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [stockData, setStockData] = useState({});

    const addTocart = (product) => {
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

export const useCart = () => useContext(CartContext)