import React, { useContext } from 'react';
import { ShopContext } from '../context/Shop';
import './Pages.css'


const Orders = () => {
  const { products, currency} = useContext(ShopContext);
  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

  

  return (
    <div>
      <div>
        <h1>Order</h1>
      </div>
      <div>
        {
          products.slice(1,4).map((item, index)=> (
            <div key={index} >
              <div>
                <img src={item.image[0]} alt='' className='order-image'/>
              </div>
              <div>
                <p>{item.name}</p>
              </div>
              <div>
                <p>{currency}{item.price}</p>
                <p>Quantity: 1</p>
              </div>
              <div>
              <p>Current Date: {formattedDate}</p>
              </div>
              <div>
                <div>
                  <p></p>
                  <p>Ready for shipment</p>
                </div>
                <button> Track order</button>
              </div>
            </div>

          ))
        }
      </div>
      
    </div>
  );
}

export default Orders;


