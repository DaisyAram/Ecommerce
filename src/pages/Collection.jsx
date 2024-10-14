import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/Shop'
import './Pages.css'
import { assets } from '../assets/assets'

const Collection = () => {
  const { products } = useContext(ShopContext);  //getting data of all products
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='collection-container'>
      <div className='filters-container'>
        <p>FILTERS
        <img
            className='collection-dropdown'
            src={assets.dropdown_menu}
            alt=""
          />

        </p>
          <div className='category-filter'>
            <p>CATEGORY</p>
            <div className='checkbox-filter'>
          <p className='filters'>
            <input  type='checkbox' value={'Unisex'}/>Unisex
          </p>
          <p className='filters'>
            <input type='checkbox' value={'Ladies'}/>Ladies
          </p>
          <p className='filters'>
            <input type='checkbox' value={'Men'}/>Men
          </p>
        </div>
      </div>
      <div className='category-filter'>
        <p>TYPE</p>
        <div className='checkbox-filter'>
          <p className='filters'>
            <input  type='checkbox' value={'Unisex'}/>Unisex
          </p>
          <p className='filters'>
            <input type='checkbox' value={'Ladies'}/>Ladies
          </p>
          <p className='filters'>
            <input type='checkbox' value={'Men'}/>Men
          </p>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default Collection;