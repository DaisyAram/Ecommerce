import React from 'react';
import './Pages.css'
import { assets } from '../assets/assets';


const Contact = () => {
  return (
    <div className='contact-us'>
      <img className='contact-icon' src={assets.contact_icon} alt="" />
      <div className='contact-us'>
        <h1>Customer Care</h1>
      <p>Available between 8AM to 8PM</p>
      <p>Address: 123 Moi Avenue Nairobi</p>
      <h4>Phone Number:</h4>
      <p>+254710293846 (customer service <b>only</b>)</p>
      <p>+245123456789 (sales representative <b>only</b>)</p>
      <p>support@infinity.com</p>

    </div>
    </div>
      
    
  );
}

export default Contact;


