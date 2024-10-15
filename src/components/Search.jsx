import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shop';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Search = () => {
  const location =useLocation();
  const [visible, setVisible] = useState(false);
  const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);

  useEffect(()=> {
    if (location.pathname.includes('collections')) {
      setVisible(true);
    }
    else {
      setVisible(false);
    }
  }, [location])

  return showSearch ? (
    <div className='search-bar-container'>
      <div className='search-bar'>
        <input value={search} type='text' placeholder='  Search..' onChange={(e)=>setSearch(e.target.value)} className='input-container'/>
        <img className='search-image'src={assets.search_icon} />
      </div>
      <img onClick={()=>setShowSearch(false)} src={assets.x_mark} className='cross-icon'/>
      
    </div>
  ) :null;
}

export default Search;
