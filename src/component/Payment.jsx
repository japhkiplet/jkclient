import axios from "axios";
import { useSelector } from "react-redux";
import { apiDomain } from "../utils/utils";

const Payment = ({ cartItems }) => {
  const user = useSelector((state) => state.user.user?.email);

  const handleCheckout = () => {
    console.log(cartItems); 
    if (!Array.isArray(cartItems)) {
      console.error("cartItems is not an array");
      return;
    }
  
    axios.post(`${apiDomain}/create-checkout-session`, {
        cartItems: cartItems, 
        userId: user,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err));
  };
  

  return (
    <>
      <button onClick={handleCheckout}>Check out</button>
    </>
  );
};

export default Payment;
