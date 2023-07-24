import React, { useEffect } from 'react';
import { getProductsData } from '../redux/apiCalls';
import { useSelector, useDispatch } from 'react-redux';
import './pricing.css';
import { addToCart } from '../redux/cartSlice'; 

const Pricing = () => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
 
  useEffect(() => {
    getProductsData(dispatch);
  }, [dispatch]);

  const handleAddToCart = (product) => {
    const cartItem = { ...product, quantity: 1 }; 
    dispatch(addToCart(cartItem));
  };

  return (
    <div className='pricing'>
      <h1>JK_SHOP</h1>
      <div className="pricing-container">
        {product && product.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-left">
              <img src={product.ImageURL} alt={product.title} />
              <h2>{product.Title}</h2>
            </div>
            <div className='product-details'>
              <span>Price: ksh {product.Price}</span>
              <p>{product.Description}</p>
              <p>Category: {product.Category}</p>
              <button className="pricingbtn" onClick={() => handleAddToCart(product)}>
                +Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
