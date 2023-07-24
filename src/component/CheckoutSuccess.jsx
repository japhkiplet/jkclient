import './checkoutsuccess.css'
import { useNavigate } from 'react-router-dom'


const CheckoutSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="checkout">
      <h1>payment made successfully</h1>
      <h2>welcome again</h2>
      <button className='check' onClick={() => navigate('/home')}>Go To Home</button>
      </div>
  )
}

export default CheckoutSuccess