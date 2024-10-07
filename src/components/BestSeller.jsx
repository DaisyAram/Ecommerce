import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from'../context/Shop'
import Title from './Title';
import ProductItem from './ProductItem';



const BestSeller = () => {
    const { products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) =>(item.bestseller));
        setBestSeller(bestProduct.slice(0,5))
    },[]);

  return (
    <div className='best-seller'>
        <div className='best-seller-container'>
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p>"Eye Catchers"</p>
        </div>
        <div className='render-products'>
            {
                bestSeller.map((item, index)=> (
                    <ProductItem 
                    key={index}
                    id={item._id}
                    name={item.name} 
                    image={item.image} 
                    price={item.price}
                    
                    />
                ))
            }
        </div>

      
    </div>
  );
}

export default BestSeller;
