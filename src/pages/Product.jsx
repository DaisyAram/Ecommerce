import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/Shop';
import './Pages.css';

const Product = () => {
    const { products, addToCart } = useContext(ShopContext); // Destructure addToCart from context
    const { productId } = useParams(); // Get the product ID from the URL
    const product = products.find(item => item._id === parseInt(productId)); // Find the product by ID

    if (!product) {
        return <div>Product not found</div>; // Handle case where product is not found
    }

    const handleAddToCart = () => {
        addToCart(product); // Call the addToCart function in shop context with the current product
        alert(`${product.name} has been added to your cart!`); // Optional: Alert user
    };

    return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <img src={product.image[0]} alt={product.name} className="product-imag" />
            <p><strong>Description:</strong> {product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Subcategory:</strong> {product.subCategory}</p>
            <p><strong>Available Sizes:</strong> {product.sizes.join(', ')}</p>
            <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>
        </div>
    );
};

export default Product;