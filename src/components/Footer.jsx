import React from 'react';
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <h1>Customer Care</h1>
      <p>Available between 8AM to 8PM</p>
      <p>Address: 123 Moi Avenue Nairobi</p>
      <h4>Phone Number:</h4>
      <p>+254710293846 (customer service <b>only</b>)</p>
      <p>+245123456789 (sales representative <b>only</b>)</p>
      <p>support@infinity.com</p>
      <div>
        <h3>Follow us</h3>
        <a href="https://www.instagram.com/infinity_ke/" target="_blank" rel="noreferrer">
        <img className='socials' src={assets.instagram} alt="" /></a>
        <a href="https://www.facebook.com/infinity_ke/" target="_blank" rel="noreferrer">
        <img className='socials' src={assets.facebook} alt="" /></a>
        <a href="https://www.pintrest.com/infinity_ke/" target="_blank" rel="noreferrer">
        <img className='socials' src={assets.social} alt="" /></a>
        <a href="https://www.twitter.com/infinity_ke/" target="_blank" rel="noreferrer">
        <img className='socials' src={assets.twittergram} alt="" /></a>
        <a href="https://www.tiktok.com/infinity_ke/" target="_blank" rel="noreferrer">
        <img className='socials' src={assets.tiktok} alt="" /></a>
        
        </div>
    <div>
        <p>Copyright 2024@infinitykicks.com-All rights reserved</p>
    </div>
    
    </div>

  );
}

export default Footer;
