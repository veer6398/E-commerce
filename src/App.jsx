import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/cart'
import Navbar from './components/nav'
import Logsin from './pages/logsing'
import Shop from './pages/shop'
import Products from './components/products'
import Shopcategory from './pages/cetagories'
import Foot from './components/footer'
import MenBanner from './Assets/banner_mens.png'
import WomenBanner from './Assets/banner_women.png'
import KidsBanner from './Assets/banner_kids.png'
import { Toaster } from 'react-hot-toast';
function App() {

  return (
    <div className=''>
      <BrowserRouter>
     <Navbar/>
     <Toaster position="top-center" reverseOrder={false} />
     <Routes>    
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<Shopcategory banner={MenBanner} category="men"/>}/>
      <Route path='/womens' element={<Shopcategory banner={WomenBanner} category="women"/>}/>
      <Route path='/kids' element={<Shopcategory banner={KidsBanner} category="kid"/>}/>
      <Route path='/product' element={<Products/>}/>
      <Route path='/product/:productId' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/logsin' element={<Logsin/>}/>
     </Routes>
     <Foot/>
     </BrowserRouter>
    </div>
  )
}

export default App
