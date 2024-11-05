import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
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
import './index.css';
const App = () => {
  return (
    <div className = ''>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/collection' element={<Collection/>}/>
        <Route path = '/about' element = {<About/>} />
        <Route path = '/contact' element = {<Contact/>} />
        <Route path = '/product/:productId' element = {<Product/>} />
        <Route path = '/cart' element = {<Cart/>} />
        <Route path = '/login' element = {<Login/>} />
        <Route path = '/place-order' element = {<PlaceOrder/>} />
        <Route path = '/orders' element = {<Orders/>} />
        <Route path = '/sharing' element = {<Sharing/>} />
        <Route path = '/wishlist' element = {<WishList/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
