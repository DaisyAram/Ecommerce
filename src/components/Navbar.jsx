import React, { useContext, useState } from 'react'; 
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/Shop';

const Navbar = () => { 
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); 
  const handleMouseEnter = () => setIsDropdownVisible(true); 
  const handleMouseLeave = () => {}; 
  const handleDropdownMouseLeave = () => { 
    setIsDropdownVisible(false);
  }; 
  const handleDropdownMouseEnter = () => { 
    setIsDropdownVisible(true); 
  }; 
  const [visible, setVisible ] = useState(false);

  const {setShowSearch} = useContext(ShopContext)


return (
<div style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: '1.25rem',
  paddingBottom: '1.25rem',
  paddingLeft: '2rem',
  paddingRight: '5rem',
  fontFamily: 'newTimes Roman',
  '@media (max-width: 768px)': {
      flexDirection: 'row',
      alignItems: 'stretch',
      padding: '1.25rem',
    },
}}>
   
    <Link to='/'><img src={assets.logo} style={{ width: '9rem' }} alt="" /></Link>

     <ul style={{
       listStyleType: 'none',
       display: 'flex',
       gap: '1rem',
       paddingTop: '1.25rem',
       paddingBottom: '1.25rem',
       margin: '0 auto',          
       justifyContent: 'center',
       flexDirection: 'row',
       '@media (max-width: 768px)': {
        flexDirection: 'row',
        alignItems: 'stretch',
        paddingLeft: '0.5rem',
        gap: '0.5rem',
      },
       
     }}>

      <NavLink to='/' style={{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        gap: '0.25rem',
        color: 'black',
        textDecoration:'none',
         }}>
        <p>HOME</p>
             
      </NavLink>

      <NavLink to='/collection' style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.25rem',
        color: '#1a202c',
        textDecoration: 'none',
      
      }}>
        <p>COLLECTIONS</p>
      
      </NavLink>

      <NavLink to='/about' style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.25rem',
        color: '#1a202c',
        textDecoration: 'none',
         
      }}>
        <p>ABOUT</p>
        
      </NavLink>

      <NavLink to='/contact' style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.25rem',
        color: '#1a202c',
        textDecoration: 'none'
      }}>
        <p>CONTACT</p>
        
      </NavLink>
    </ul>

    {/* Search icon and dropdown menu */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <img
        onClick={()=>setShowSearch(true)}
        src={assets.search_icon} 
        style={{ width: '1.25rem', cursor: 'pointer' }} 
        alt="" />

      <div style={{
        display: 'inline-block', 
        position: 'relative',
        zIndex: 1,
      }}>
        <img src={assets.user}
          alt=""
          style={{ width: '1.25rem', cursor: 'pointer' }}                      
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        
        {/* Conditionally render the dropdown content */}
        {isDropdownVisible && (
          <div className="dropdown-content" style={{
            position: 'absolute',
            top: '100%',
            left: 'auto',
            right: '0',
            width: '15vh',
            backgroundColor: 'gold',
            color: '#64748e',
            borderRadius: '0.375rem',
            padding: '0.75rem',
            boxShadow: '0 2px 5px rgba(0, 0, 0, .1)',
            '@media (max-width: 768px)': {
              width: '100%',
              left: '0',
              right: 'auto',
            },
          }}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
            <p style={{ cursor: 'pointer', '&:hover': { color: 'black' } }}>My Profile</p>
            <p style={{ cursor: 'pointer', '&:hover': { color: 'black' } }}>Orders</p>
            <p style={{ cursor: 'pointer', '&:hover': { color: 'black' } }}>Logout</p>
          </div>
        )}
      </div>
    </div>
    <Link to='/cart' style={{
        position: 'relative',
        display: 'inline-block',
        width: '1.25rem',
        height: '1.25rem',
        paddingLeft: '1.25rem',
    }}>
    <img src={assets.shopping_cart} alt="" style={{
         width: '100%', height: '100%', objectFit: 'contain' }} />
    </Link>
    <img onClick={()=>setVisible(true)} src={assets.dropdown_menu} alt="" className="sm:hidden" style={{
        width: '1.25rem', height: '1.25rem', paddingLeft: '1.25rem', cursor: 'pointer',
    }}/> 
   <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        overflow:'hidden',
        transition: 'all',
        backgroundColor: 'white',
        width: visible ? '100%': '0',
    }}>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            color: 'grey'
        }}>
        </div>
        <div onClick={() =>setVisible(false)} style={{ display: 'flex', alignItems: 'center', gap: 1, padding: '1.23rem', cursor: 'pointer' }}>
            <img style={{ transform: 'rotate(90deg)', height: '1.25rem', }} src={assets.dropdown_menu} alt=""/>
            <p>Back</p>
            <hr />
        </div>
        <NavLink onClick={() =>setVisible(false)} style={{ padding: '1.2rem', paddingLeft: '1.25rem', textDecoration:'none'}}  to='/'>HOME</NavLink><hr />
        <NavLink onClick={() =>setVisible(false)} style={{ padding: '1.2rem', paddingLeft: '1.25rem', textDecoration: 'none'}}  to='/collection'>COLLECTION</NavLink><hr />
        <NavLink onClick={() =>setVisible(false)} style={{ padding: '1.2rem', paddingLeft: '1.25rem', textDecoration: 'none'}}  to='/about'>ABOUT</NavLink> <hr />
        <NavLink onClick={() =>setVisible(false)} style={{ padding: '1.2rem', paddingLeft: '1.25rem', textDecoration: 'none'}} to='/contact'>CONTACT</NavLink><hr />

    </div>  
</div>
); }

export default Navbar;