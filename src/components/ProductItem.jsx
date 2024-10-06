import React, { useContext} from 'react';
import {Link} from 'react-router-dom'
import { ShopContext } from '../context/Shop';
import './Components.css'

const ProductItem = ({id, image,name,price}) => {
    const {currency} = useContext(ShopContext)
  return (
  <Link className='productitem-link' to={`/product/${id}`}>
    <div className='link-overflow'>
      <img className='product-image' src={image[0]} alt="" />
    </div>
    <p>{name}</p>
    <p>{currency}{price}</p>
  </Link>
      
  );
}

export default ProductItem;
