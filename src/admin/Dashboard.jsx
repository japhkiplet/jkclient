import { NavLink, Outlet } from "react-router-dom"
import './dashboard.css'
import { useSelector } from "react-redux";

const Dashboard = () => {
  const name = useSelector((state) => state.user.user?.isAdmin);

  if(!name) return <p>acess denied</p>

  return (
    <div className="dashboard">
      <div className="sidenav">
        <h3>JKSHOP</h3>
        <NavLink className={({isActive}) => isActive ? 'link-active' : 'link-inactive'} to='/admin/summary'>Overview</NavLink>
        <NavLink className={({isActive}) => isActive ? 'link-active' : 'link-inactive'} to='/admin/products'>Products</NavLink>
        <NavLink className={({isActive}) => isActive ? 'link-active' : 'link-inactive'} to='/admin/order'>Orders</NavLink>
        <NavLink className={({isActive}) => isActive ? 'link-active' : 'link-inactive'} to='/admin/user'>Users</NavLink>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard