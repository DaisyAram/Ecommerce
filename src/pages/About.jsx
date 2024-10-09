import React from 'react';
import Title from '../components/Title'
import './Pages.css'
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className='about-us'>
      <div className='about-us-title'>
      <Title text1={'About'} text2={'us'}></Title>
      </div>
      <div className='about-us-p'>
        <img style={{ width: '50%', height: 'auto' }} src={assets.about} alt=""/>
        <div className='about-us-content'>
        <p>At Fresh Kicks, we're passionate about sneakers and dedicated to bringing you the best selection of kicks from around the world. Our team of sneaker enthusiasts is committed to providing an unparalleled online shopping experience, with a curated range of styles from iconic brands to emerging labels. We believe that sneakers are more than just footwear - they're a form of self-expression, a way to showcase your personality and style. That's why we're dedicated to helping you find the perfect pair to match your unique vibe. With fast shipping, easy returns, and exceptional customer service, we're here to make your sneaker dreams come true.</p>
        <h1>Mission</h1><p>Our mission is to empower individuals to express their unique style and personality through the perfect pair of sneakers. We strive to provide an unparalleled online shopping experience, fueled by a passion for sneakers and a commitment to exceptional customer service. We aim to inspire confidence, creativity, and self-expression in every step our customers take, while fostering a community that shares our passion for sneakers and fashion.</p>
        <h1>Core Values</h1>
        <ul>
          <li>Authenticity: We're dedicated to providing genuine products and an authentic shopping experience.</li>
          <li>Inclusivity: We believe that sneakers are for everyone, regardless of style, age, or background.</li>
          <li>Innovation: We're committed to staying ahead of the curve, bringing you the latest trends and styles.</li>
          <li>Customer-Centricity: Our customers are at the heart of everything we do, and we're dedicated to exceeding their expectations.</li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default About;


