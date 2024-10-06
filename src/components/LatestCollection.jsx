import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/Shop';
import Title from './Title';
import './Components.css'
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [ latestProducts, setLatestProducts ] = useState([]);

    useEffect(()=> {
      setLatestProducts(products.slice(0,10));
    },[])
    
  return (
    <div>
        <Title text1={'LATEST'}  text2={'COLLECTION'} />
        <p className='intro'>"Kicks So Fresh, They're Still Kicking"</p>
    <div className='render-products'>
      {
        latestProducts.map((item, index)=>(
          <ProductItem  key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))
      }
    </div>
   
    </div>
    
  );
}

export default LatestCollection;
