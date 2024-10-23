import React, { useContext } from 'react';
import { ShopContext } from '../context/Shop';
import { assets } from '../assets/assets';
/*import { useHistory } from 'react-router-dom'*/


const Cart = () => {
  const { cart, removeFromCart, currency } = useContext(ShopContext);
  const shippingFee = 8; 

  const calculateTotal = () => {
    const total = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    return (total + shippingFee).toFixed(2); 
  };

  const calculateSubtotal = () => {
    return (cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2));
  };

  const handleCheckout = () => {
    window.history.pushState({}, '', '/place-order');
    window.location.href = '/place-order';
  };
  


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
        <div className="cart-container">
          <table className="cart-table">
            <thead>
              <tr >
                <th style={{ margin: '30px'}}>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item._id} className="cart-item">
                  <td>
                    <img src={item.image[0]} alt={item.name} className="cart-item-image" />
                    {item.name}
                  </td>
                  <td>{item.quantity}</td>
                  <td>{currency}{item.price.toFixed(2)}</td>
                  <td><strong>{currency}{(item.price * item.quantity).toFixed(2)}</strong></td>
                  <td>
                    <button onClick={() => removeFromCart(item._id)} className="remove-button">
                      <img src={assets.recycle_bin} alt='' className='remove-icon' />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <table className="summary-table">
            <tbody>
              <tr>
                <td>Subtotal:</td>
                <td>{currency}{calculateSubtotal()}</td>
              </tr>
              <tr>
                <td>Shipping Fee:</td>
                <td>{currency}{shippingFee.toFixed(2)}</td>
              </tr>
              <tr>
                <td><strong>Total:</strong></td>
                <td><strong>{currency}{calculateTotal()}</strong></td>
              </tr>
            </tbody>
          </table>

          <div>
            <button onClick={handleCheckout} className="checkout-button">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;


