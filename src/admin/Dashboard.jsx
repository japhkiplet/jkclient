import {Link} from 'react-router-dom'

import './dashboard.css'

const Dashboard = ({children}) => {
  const menuItem=[
    {
      path:"/user",
      infor:"USERS"
    },
    {
      path:"/product",
     
      infor:"PRODUCT"
    },
    {
      path:"/orders",
       
      infor:"ORDERS"
    },{
      path:"/setting",
     
      infor:"SETTINGS"
    }
  ]
  
  return (
    <div className="sidebar-container">
      <div className='sidebar'>
        <div className='top-section'>
          <h1 className='logo'><span>JK-SHOES</span></h1>
          

        </div>
        {
          menuItem.map((item,index)=>(
            <Link to={item.path} key={index} className='link' activeclassName='active'>
              <div className="link-text">{item.infor}</div>
        
            </Link>
          ))
        }



      </div>
      <main>{children}</main>
      
      
    </div>
  )
}

export default Dashboard
