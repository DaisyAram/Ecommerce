import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/Shop';
import './Pages.css'

const Product = () => {
  const {productId} = useParams();
  const {products} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage]= useState('')
  
  const fetProductData = async () => {
    products.map((item)=>{
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        console.log(item);
        
        return null;
      }
    })
  }
  
  useEffect(()=> {
    fetProductData();
  }, [productId, products])



  return productData ? (
    <div className='product-container'>
      <div className='product-data'>
        <div className='product-images'>
          <div>
            {
              productData.image.map((item, index)=> (
                <img src={item}
                  alt=""
                  key={index}
                  className='imag'
                />
              ))
            }
          </div>
        </div>

      </div>

      
    </div>
  ) : <div style={{ opacity: '0'}}></div>
}

export default Product;

