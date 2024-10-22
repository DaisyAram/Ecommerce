import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/Shop';
import './Pages.css';

const Product = () => {
    const { products, addToCart } = useContext(ShopContext); // Destructure addToCart from context
    const { productId } = useParams(); // Get the product ID from the URL
    const product = products.find(item => item._id === parseInt(productId)); // Find the product by ID

    // Initialize selectedSize state and quantity state
    const [selectedSize, setSelectedSize] = useState(product ? product.sizes[0] : ''); // Default to empty if product is not found
    const [quantity, setQuantity] = useState(1); // Initialize quantity state

    if (!product) {
        return <div>Product not found</div>; // Handle case where product is not found
    }

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value); // Update selected size when user selects a different size
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value); // Update quantity when user changes the input
    };

    const handleAddToCart = () => {
        const productWithSizeAndQuantity = { ...product, selectedSize, quantity }; // Create a new product object with the selected size and quantity
        addToCart(productWithSizeAndQuantity); // Call the addToCart function in shop context with the current product, selected size, and quantity
        alert(`${quantity} pair(s) of ${product.name} in size ${selectedSize} has been added to your cart!`); // Optional: Alert user
    };

    return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <img src={product.image[0]} alt={product.name} className="product-image" />
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Subcategory:</strong> {product.subCategory}</p>
            <p>
                <strong>Available Sizes:</strong>
                <select value={selectedSize} onChange={handleSizeChange}>
                    {product.sizes.map((size, index) => (
                        <option key={index} value={size}>{size}</option>
                    ))}
                </select>
            </p>
            <p>
                <strong>Quantity:</strong>
                <input 
                    type="number" 
                    value={quantity} 
                    min="1" 
                    onChange={handleQuantityChange} 
                    className="quantity-input" 
                />
            </p>
            <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
        </div>
    );
};

export default Product;