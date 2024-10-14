import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shop'
import './Pages.css'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);  //getting data of all products
  const [showDropdown, setShowDropdown] = useState(false);
  const [filterProducts,  SetFilterProducts] = useState([])
  
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  /*Sorting*/


  const applyFilters = () => {
    let productsCopy = products.slice();
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    
    SetFilterProducts(productsCopy)
  }

  useEffect(()=>{
    SetFilterProducts(products);
  }, [])

  useEffect(()=>{
    applyFilters();   
  }, [category, subCategory])


  return (
    <div className='collection-container'>
      <div className='filters-container'>
        <p>FILTERS
        <img
            className='collection-dropdown'
            src={assets.dropdown_menu}
            alt=""
            onClick={() => setShowDropdown(!showDropdown)}
          />

        </p>
        <div style={{ display: showDropdown ? 'block' : '' }} className='category-filter'>
          <p>CATEGORY</p>
          <div className='checkbox-filter'>
            <p className='filters'>
                  <input type='checkbox' value={'Unisex'} onChange={toggleCategory} />Unisex
                </p>
                <p className='filters'>
                  <input type='checkbox' value={'Ladies'} onChange={toggleCategory}/>Ladies
                </p>
                <p className='filters'>
                  <input type='checkbox' value={'Men'} onChange={toggleCategory}/>Men
                </p>
              </div>
            </div>
            <div style={{ display: showDropdown ? 'block' : '' }} className='category-filter'>
              <p>TYPE</p>
              <div className='checkbox-filter'>
                <p className='filters'>
                  <input type='checkbox' value={'Fashion'} onChange={toggleSubCategory} />Fashion
                </p>
                <p className='filters'>
                  <input type='checkbox' value={'Casual'} onChange={toggleSubCategory}/>Casual
                </p>
                <p className='filters'>
                  <input type='checkbox' value={'Athletic'} onChange={toggleSubCategory}/>Athletic
                </p>
              </div>
            </div>
          </div>

          <div className='right-side'>
            <div>
            <Title text1={'IN '} text2={'STORE'} />

            <select className='select-items'>
              <option value="relevant">Sort by: Relevant</option>
              <option value="low-high">Sort by:low-high</option>
              <option value="high-low">Sort by:high-low</option>
            </select>
          </div>
          
          <div className='display-collection'>
            {
              filterProducts.map((item,index)=>(
                <ProductItem key={index} name={item.name} id={item.id} price={item.price} image={item.image} />
              ))
            }

          </div>
          </div>
        
    </div>
    
  );
};

export default Collection;