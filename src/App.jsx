import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css'
import Navbar from './component/Navbar';
import Home from './pages/Home';
import SignUp from './component/SignUp';
import Landing from './component/Landing';
import About from './component/About';
import Product from './pages/Product';
import Pricing from './component/Pricing';
import { useSelector } from 'react-redux';
import Cart from './component/Cart';
import Dashboard from './admin/Dashboard';
import CheckoutSuccess from './component/CheckoutSuccess';
// import Users from './admin/Users';

function App() {
  const  user = useSelector((state)=>state.user.user?.email);
  

  return (
    <>
   
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/pricing' element= {<Pricing/> } />
        <Route path='/product' element={<Product/>}/>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<CheckoutSuccess/>}/>
        <Route path='/admin' element={<Dashboard/>}/>
        {/* <Route path='/user' element ={<Users/>}/> */}
      
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
