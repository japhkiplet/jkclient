import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity, getTotals } from '../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import './cart.css';
import Payment from './Payment'

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user?.email);
  const cartItems = useSelector((state) => state?.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state?.cart?.cartTotalAmount);

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems,dispatch]);

  const handleQuantityChange = (item, quantity) => {
    if (quantity === 0) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(updateQuantity({ ...item, cartTotalquantity: quantity }));
    }
  };

  return (
    <div className='cart-container'>
      <h1>Your Cart Items</h1>
      {cartItems && cartItems.length > 0 ? (
        <div className='cartItems'>
          {cartItems.map((item) => (
            <div className='cart-wrapper'>
              <div key={item.id} className='product-card1'>
                <div className="product-left">
                  <img src={item.ImageURL} alt={item.Title} style={{ width: '100px' }} />
                  <h2>{item.Title}</h2>
                </div>
                <div className="product-details">
                  <span>Price: ksh {item.Price}</span>
                  <p>Description: {item.Description}</p>
                  <p>Category: {item.Category}</p>
                  <div className="counthandler">
                    <button onClick={() => handleQuantityChange(item, item.cartTotalquantity - 1)} style={{ color:'red' }}>-</button>
                    <input type="number" value={item.cartTotalquantity} onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))} />
                    <button onClick={() => handleQuantityChange(item, item.cartTotalquantity + 1)}>+</button>
                  </div>
                </div>
              </div>
            </div>
            
          ))}
           <div className="checkout">
            <h3>Total: ksh {cartTotalAmount}</h3>
            <div className='cartbuttons'>
              <button onClick={() => navigate('/pricing')}>Continue Shopping</button>
              {user ? (<Payment  cartItems={cartItems}/>) : (<button onClick={() => navigate('/')}>login to checkout</button>)}
            </div>
          </div>
          </div>
          
      ) : (
        <div className="empty-cart-message">
          <h2>Your Cart is Empty</h2>
          <button className='pricingbtn' onClick={() => navigate('/pricing')}>Shop Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
