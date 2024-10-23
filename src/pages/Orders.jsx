import React, { useContext } from 'react';
import { ShopContext } from '../context/Shop';
import './Pages.css';
import { assets } from '../assets/assets';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);
  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

  return (
    <div className='orders-container'>
      <div>
        <h1 style={{ textAlign: 'center' }}>Order</h1>
      </div>
      <div className='order-products'>
        {
          products.slice(1, 4).map((item, index) => (
            <div key={index} className='order-product-item'>
              <img src={item.image[0]} alt='' className='order-image' />
              <div className='order-details'>
                <p><strong>{item.name}</strong></p>
                <div className='order-info'>
                  <p> Price:{currency} {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
            <     p>Total: {currency} {item.price * item.quantity}</p>
                </div>
                <p>Current Date: {formattedDate}</p>
              </div>
              <div>
                <p></p>
                <p>Ready for shipment</p>
                <button className='track-order'>Track order</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Orders;


