import React from 'react';
import "./Pages.css";

const PlaceOrder = () => {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Redirect to the orders page
        window.location.href = '/orders'; // Replace '/orders' with your actual orders page URL
    };

    return (
        <div className='place-order-container'>
            <h2>Place Order</h2>
            <p>Please add your details below</p>
            <form onSubmit={handleSubmit}>
                <div className='form-details'>
                    <input type="text" id="first-name" name="first-name" required placeholder='First Name' style={{ marginRight: '0.5rem', height: '2rem', width: '10rem', textAlign: 'center' }} />
                    <input type="text" id="last-name" name="last-name" required placeholder='Last Name' style={{ height: '2rem', width: '10rem', textAlign: 'center' }} />
                </div>
                <div className='form-details'>
                    <input type="email" id="email" name="email" required placeholder='Email address' style={{ height: '2rem', width: '21rem', textAlign: 'center' }} />
                </div>
                <div className='form-details'>
                    <input type="tel" id="phone" name="phone" required placeholder='Phone' style={{ height: '2rem', width: '21rem', textAlign: 'center' }} />
                </div>
                <div className='form-details'>
                    <input type="text" id="country" name="country" required placeholder='Country' style={{ height: '2rem', width: '21rem', textAlign: 'center' }} />
                </div>
                <div className='form-details'>
                    <input type="text" id="city" name="city" required placeholder='City' style={{ height: '2rem', width: '21rem', textAlign: 'center' }} />
                </div>
                <div className='form-details'>
                    <input type="text" id="street" name="street" required placeholder='Street' style={{ height: '2rem', width: '21rem', textAlign: 'center' }} />
                </div>
                <div className='form-payment-details'>
                    <select id="payment" name="payment" required style={{ height: '3rem', width: '15rem', textAlign: 'center' }}>
                        <option value="" disabled selected>Select payment method</option>
                        <option value="cash">Cash on Delivery</option>
                        <option value="stripe">Stripe</option>
                    </select>
                </div>
                <div>
                    <button type="submit" style={{ height: '2rem', width: '10rem', textAlign: 'center' }}>Submit Order</button>
                </div>
            </form>
        </div>
    );
}

export default PlaceOrder;
