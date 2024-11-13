import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Sharing from './pages/Sharing'
import WishList from './pages/WishList'
import Footer from './components/Footer'
import Promotion from './pages/Promotion'
import PromotionDetails from './pages/PromotionDetails'
import './index.css';
import ShopContextProvider from './context/ShopContext'
import ProductDetail from './pages/ProductDetail'
import Account from './pages/account'

const App = () => {
  return (
    <ShopContextProvider>
      <>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/collection' element={<Collection/>}/>
        <Route path = '/about' element = {<About/>} />
        <Route path = '/contact' element = {<Contact/>} />
        <Route path = '/product/' element = {<Product/>} />
        <Route path = '/product/:productId' element = {<ProductDetail/>} />
        <Route path = '/cart' element = {<Cart/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path = '/place-order' element = {<PlaceOrder/>} />
        <Route path = '/orders' element = {<Orders/>} />
        <Route path = '/sharing' element = {<Sharing/>} />
        <Route path = '/wishlist' element = {<WishList/>} />
        <Route path = '/promotion' element = {<Promotion/>}/>
        <Route path = '/promotiondetails' element = {<PromotionDetails/>}/>
        <Route path = '/account' element={<Account/>}/>

        
      </Routes>
      <Footer/>
      </>
      </ShopContextProvider>
  )
}

export default App
