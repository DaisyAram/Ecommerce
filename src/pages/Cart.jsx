import React, { useContext } from 'react';
import { ShopContext } from '../context/Shop';
import { assets } from '../assets/assets';

const Cart = () => {
  const { cart, removeFromCart, currency } = useContext(ShopContext);

  // Calculate the total price of all items in the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleCheckout = (paymentMethod) => {}
  return (
    <div className='empty-cart'>
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p style={{ color: 'red' }}><strong>No items added to your Cart!</strong>
           <p>
           <button onClick={() => window.location.href = "./collection"}>Add items</button>
           </p>
        </p>
        
        
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item._id} className="cart-item">
                <img src={item.image[0]} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>
                    {item.quantity} x {currency}{item.price} = 
                    <strong> {currency}{(item.price * item.quantity).toFixed(2)}</strong>
                  </p>
                  <button onClick={() => removeFromCart(item._id)} className="remove-button"><img src={assets.recycle_bin} alt='' className='remove-icon' /> </button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: {currency}{calculateTotal()}</h3>
          <div className="payment-options">
            <button onClick={() => handleCheckout('Pay Now')} className="payment-button">Pay Now</button>
            <button onClick={() => handleCheckout('Pay on Delivery')} className="payment-button">Pay on Delivery</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

