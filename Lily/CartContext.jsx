import { createContext, useContext, useState, useCallback } from "react";

export const Context = createContext({})

export const CartContext = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState([])
    const addToCart = (item) => {
        console.log('Adding to cart...',[...shoppingCart, item])
        setShoppingCart([...shoppingCart, item])
    }
    const removeFromCart = (title) => {
        setShoppingCart(shoppingCart.filter(item => item.title != title))
        console.log('Removing from cart...',shoppingCart.filter(item => item.title != title))
    }
    const clearCart = () => {
        setShoppingCart([])
        console.log('Cleared cart')
    }
    return (
        <Context.Provider value={{shoppingCart, addToCart, removeFromCart, clearCart}}>{children}</Context.Provider>
    )
}