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

import { ShopContextProvider } from './context/Context';
import Cart from './component/Cart';
function App() {
  const  user = useSelector((state)=>state.user.user?.email);
  

  return (
    <>
    <ShopContextProvider>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/pricing' element= {user ?<Pricing/> :<Landing/>} />
        <Route path='/product' element={<Product/>}/>
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
      
      </Routes>
    </BrowserRouter>
    </ShopContextProvider>
    </>
  )
}

export default App
