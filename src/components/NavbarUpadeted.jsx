import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => setIsDropdownVisible(true);
  const handleMouseLeave = () => {};
  const handleDropdownMouseLeave = () => setIsDropdownVisible(false);
  const handleDropdownMouseEnter = () => setIsDropdownVisible(true);

  return (
    <div className="navbar-container">
      <Link to='/'><img src={assets.logo} alt="" /></Link>
      <ul className="nav-links">
        <NavLink to='/'><p>HOME</p></NavLink>
        <NavLink to='/collection'><p>COLLECTIONS</p></NavLink>
        <NavLink to='/about'><p>ABOUT</p></NavLink>
        <NavLink to='/contact'><p>CONTACT</p></NavLink>
      </ul>
      <div className="search-dropdown">
        <img
        src={assets.search_icon} alt="" style={{ width: '1.25rem'}} />
        <div className="user-icon">
          <img 
            src={assets.user} 
            alt="" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          {isDropdownVisible && (
            <div className="dropdown-content" 
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}>
              <p>My Profile</p>
              <p>Orders</p>
              <p>Logout</p>
            </div>
          )}
        </div>
      </div>
      <Link to='/cart'>
        <img src={assets.shopping_cart} alt="" style={{ width: '1.25rem' }} />
      </Link>
      <img 
      className='dropdown_icon'
        onClick={() => setVisible(true)}
        src={assets.dropdown_menu} 
        alt="" 
        style={{ width: '1.25rem', padding: '1.25rem'}}
      />
      <div className={`mobile-menu ${visible ? 'show' : ''}`}>
        <div className="back-button">
        <div onClick={() => setVisible(false)}></div>
          <img src={assets.dropdown_menu} alt="" style={{ width: '1.25rem'}} />
          <p>Back</p>
          <hr />
        </div>
        <NavLink onClick={() => setVisible(false)} to='/'>HOME</NavLink>
        <hr />
        <NavLink onClick={() => setVisible(false)} to='/collection'>COLLECTION</NavLink>
        <hr />
        <NavLink onClick={() => setVisible(false)} to='/about'>ABOUT</NavLink>
        <hr />
        <NavLink onClick={() => setVisible(false)} to='/contact'>CONTACT</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
