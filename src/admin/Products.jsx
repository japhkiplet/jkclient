import {  Outlet, useNavigate } from "react-router-dom"
import './product.css'

const Products = () => {
    const navigate = useNavigate()
  return (
   <div>
     <div className="headers">
        <h2>Products</h2>
        <button className="createbtn" onClick = {() => navigate('/admin/products/product')}>
            Create
        </button>
    </div>
    <Outlet/>
   </div>
  )
}

export default Products