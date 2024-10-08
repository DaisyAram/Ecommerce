import React from 'react';
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
           
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
