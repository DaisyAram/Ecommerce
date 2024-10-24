import  Home from './pages/Home.jsx';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import Cart from './pages/Cart'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer.jsx';
import Search from './components/Search.jsx';


function App() {
  return (
    <div className='gradient-background'>
      
    <Router>
      <Navbar />
      <Search />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path="/place-order" element={<PlaceOrder />} />   
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
    <Footer/>
 
    </div>
  );
}

export default App;

