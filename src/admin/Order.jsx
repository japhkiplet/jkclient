import  { useState, useEffect } from 'react';
import axios from 'axios';
import { apiDomain } from '../utils/utils';
import './order.css'

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${apiDomain}/order`);
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders data:', error);
    }
  };

  return (
    <div>
      <h1>Successful orders</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Shipping Address</th>
            <th>Total Amount</th>
            <th>Payment Intent</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId}>
              <td>{order.userId}</td>
              <td>{order.productID}</td>
              <td>{order.productName}</td>
              <td>{order.quantity}</td>
              <td>{order.shippingAddress}</td>
              <td>${order.totalAmount}</td>
              <td>{order.paymentIntent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
