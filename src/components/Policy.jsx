import React from 'react';
import { assets } from '../assets/assets'

const Policy = () => {
  return (
    <div className='policy-container'>
        <div classname='icon-container'>

            <img className='icon' src={assets.exchange} alt =''/>
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Exchange policy</p>
            <p style={{ textAlign: 'center'}}>we offer a free exchange policy</p>
        </div>

       <div className='icon-container'>
            <img className='icon'src={assets.customer_icon} alt="" />
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Best Customer support</p>
            <p style={{ textAlign: 'center'}}>we offer 24/7 customer support</p>
        </div>
        <div className='icon-container' >
            <img src={assets.return_policy} alt="" className="icon" />
            <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Return policy</p>
            <p style={{ textAlign: 'center'}}>we offer a 7 day return policy</p>
        </div>
      
    </div>
  );
}

export default Policy;
