import React, { useContext } from 'react';
import { ShopContext } from '../context/Shop';

const Cart = () => {
  const { cart, removeFromCart, currency } = useContext(ShopContext);

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    };
  return (
    <div>
      <h2>Your Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cart.map(item => (
                            <li key={item._id} className="cart-item">
                                <img src={item.image[0]} alt={item.name} className="cart-item-image" />
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>{currency}{item.price}</p>
                                    <button onClick={() => removeFromCart(item._id)} className="remove-button">Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <h3>Total: {currency}{calculateTotal()}</h3>
                </div>
            )}
      
      
    </div>
  );
}

export default Cart;

