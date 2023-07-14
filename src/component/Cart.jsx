import { useContext } from 'react';
import PRODUCTS from '../Product'
import { ShopContext } from '../context/Context';
import {CartItem} from './CartItem'
import './cart.css'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate()
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount()

  return (
    <div className="cart-container">
        <div>
            <h1>Your cart items</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product) =>{
                if(cartItems[product.id] !== 0) {
                    return< CartItem data= {product} />
                }

            })}
        </div>
        {totalAmount > 0 ?(

        <div className="checkout">
            <p>Total Amount : ${totalAmount}</p>
            <div className='cartbuttons'>
                <button  onClick={() => navigate('/pricing')}>Continue Shopping</button>
                <button> CheckOut</button>
            </div>
        </div>
        ) : (
            <h1>Your cart is empty</h1>
        )}
    </div>
  )
}

export default Cart