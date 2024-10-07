import React from 'react';
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-left-side'>
                <h1>Customer Care</h1>
                <p>Available between 8AM to 8PM</p>
                <p>Address: 123 Moi Avenue Nairobi</p>
                <h4>Phone Number:</h4>
                <p>+254710293846 (customer service <b>only</b>)</p>
                <p>+245123456789 (sales representative <b>only</b>)</p>
                <p>support@infinity.com</p>
            </div>
            <div className='footer-right-side'>
                <h1>Follow us</h1>
                <a href="https://www.instagram.com/infinity_ke/" target="_blank" rel="noreferrer">
                <img className='socials' src={assets.instagram} alt="" /></a>
                <a href="https://www.facebook.com/infinity_ke/" target="_blank" rel="noreferrer">
                <img className='socials' src={assets.facebook} alt="" /></a>
                <a href="https://www.pintrest.com/infinity_ke/" target="_blank" rel="noreferrer">
                <img className='socials' src={assets.social} alt="" /></a>
                <a href="https://www.twitter.com/infinity_ke/" target="_blank" rel="noreferrer">
                <img className='socials' src={assets.twitter} alt="" /></a>
                <a href="https://www.tiktok.com/infinity_ke/" target="_blank" rel="noreferrer">
                <img className='socials' src={assets.tiktok} alt="" /></a>
        
            </div>
        </div>
        <div className='footer-copyright'>
            <p>Copyright 2024@infinitykicks.com-All rights reserved</p>   
        </div>
    </div>

  );
}

export default Footer;
