import React from 'react';
import './Components.css'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className="hero-container">
      {/*Hero left side*/}
      <div className="left-side">
        <div className="best-seller-text">
          <p className="best-seller-icon"></p>
          <span className="best-seller-label">SHOP ONLINE</span>

        </div>
        <h1>NEW ARRIVALS</h1>
        <div className='shop-now'>
              
           <p className='shop-now-icon'></p>
       

        </div>
      </div>
      {/*Hero right-side */}
      <img className='hero-img' src={assets.hero } alt="" ></img>
    </div>
  );
};

export default Hero;


