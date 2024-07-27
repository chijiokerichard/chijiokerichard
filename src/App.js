import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Navs from './components/ui/navs/Navs'
import About from './components/pages/About'
import Products from './components/pages/Products'
import Contacts from './components/pages/Contacts'
import TanC from './components/pages/TandC'
import ProductPage from './components/pages/ProductPage'
import CartPage from './components/pages/CartPage'
import { useCart, } from './components/ui/context/Context'


function App() {

  const {setCart} = useCart()

    function add(item,id){
        setCart(pre=>{
          const existed = pre.find(pro => pro.id === id)
          if(existed){
            return pre.map(product=> product.id === id ? {...product,qty:product.qty+1} : product)
          }else{
            return [...pre,{...item,qty:1}]
          }
        })
    }

  return (
    <div className='relative'>

      <Router>
      <Navs/>
      <div className=' bg-white mt-[3rem] flex  flex-col items-center justify-center'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/product' element={<Products add={add}/>}/>
          <Route path='/contact' element={<Contacts/>}/>
          <Route path={'/pro'}  element={<ProductPage add={add}/>}/>
          <Route path='/t&c' element={<TanC/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
      </div>
      
      </Router>
      
    </div>
  )
}

export default App
