import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/Shop';
import './Pages.css';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Orders = () => {
    const navigate = useNavigate();
    const { products, currency } = useContext(ShopContext);
    const currentDate = new Date();

    const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;

    const [deliveryStatus, setDeliveryStatus] = useState('pending');
    const [isTracking, setIsTracking] = useState(false);

    const handleDelivery = async () => {
        if (isTracking) return;

        setIsTracking(true);
        setDeliveryStatus('in_progress');
        
        try {
            await new Promise(resolve => setTimeout(resolve, 30000));
            setDeliveryStatus('delivered');
            alert("Your items have been delivered!");
            
            // Redirect to homepage after delivery
            navigate('/', { replace: true });
        } catch (error) {
            console.error("Error during delivery:", error);
        } finally {
            setIsTracking(false);
        }
    };

    useEffect(() => {
        // Automatically call handleDelivery after 30 seconds
        setTimeout(handleDelivery, 30000);
    }, []);

    return (
        <div className='orders-container'>
            <div>
                <h1 style={{ textAlign: 'center' }}>My Order</h1>
            </div>
            <div className='order-products'>
                {products.slice(1, 4).map((item, index) => (
                    <div key={index} className='order-product-item'>
                        <img src={item.image[0]} alt='' className='order-image' />
                        <div className='order-details'>
                            <p><strong>{item.name}</strong></p>
                            <div className='order-info'>
                                {/* Price, Quantity, Total information */}
                            </div>
                            <p style={{ paddingRight: '10rem' }}>Date: {formattedDate}</p>
                        </div>
                        <div>
                            <p></p>
                            <p>Ready for shipment</p>
                            <button onClick={handleDelivery} className='track-order' disabled={isTracking}>
                                {deliveryStatus === 'pending' ? 'Track order' : 
                                 deliveryStatus === 'in_progress' ? 'Processing...' :
                                 deliveryStatus === 'delivered' ? 'Delivered!' : ''}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;


