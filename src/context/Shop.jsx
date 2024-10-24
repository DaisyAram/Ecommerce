import { createContext, useState } from "react";
import { products } from '../assets/assets'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 15;
    const [search, setSearch] = useState('')   
    const [showSearch, setShowSearch] = useState(false)
    const [cart, setCart] = useState([]); 
    

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(item => item._id === product._id && item.selectedSize === product.selectedSize);
            
            if (existingProductIndex >= 0) {
                // If the product already exists, update the quantity
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += product.quantity; // Increase quantity
                return updatedCart;
            } else {
                // If the product does not exist, add it to the cart
                return [...prevCart, { ...product, quantity: product.quantity }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(item => item._id === productId);
            
            if (existingProductIndex >= 0) {
                const updatedCart = [...prevCart];
                if (updatedCart[existingProductIndex].quantity > 1) {
                    // If quantity is greater than 1, decrease the quantity
                    updatedCart[existingProductIndex].quantity -= 1;
                    return updatedCart;
                } else {
                    // If quantity is 1, remove the product from the cart
                    return updatedCart.filter(item => item._id !== productId);
                }
            }
            return prevCart; // Return the cart unchanged if the product is not found
        });
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
        removeFromCart,

    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider