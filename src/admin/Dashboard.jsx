import { NavLink, Outlet } from "react-router-dom"
import './dashboard.css'



const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidenav">
        <h3>JKSHOP</h3>
        <NavLink className={({isActive}) => isActive ? 'link-active' : 'link-inactive'} to='/admin/summary'>Overview</NavLink>
        <NavLink className={({isActive}) => isActive ? 'link-active' : 'link-inactive'} to='/admin/products'>Products</NavLink>
        <NavLink className={({isActive}) => isActive ? 'link-active' : 'link-inactive'} to='/admin/order'>Orders</NavLink>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard