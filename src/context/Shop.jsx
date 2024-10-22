import { createContext, useState } from "react";
import { products } from '../assets/assets'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 15;
    const [search, setSearch] = useState('')   
    const [showSearch, setShowSearch] = useState(false)
    const [cart, setCart] = useState([]); // State to hold cart items

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]); // Add product to cart
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item._id !== productId)); // Remove product from cart
    };
    
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cart,
        addToCart,
        removeFromCart


    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider