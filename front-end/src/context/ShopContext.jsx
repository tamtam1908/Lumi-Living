import React, { useEffect, useState } from 'react';
// import { products } from '../assets/assets';
import { createContext } from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = 'VND' ;
  const delivery_fee = 10;

  const [cartItems, setCartItems] = useState({});
  const addToCart = (productId) => {
    setCartItems((preItems) => ({
      ...preItems, [productId]: (preItems[productId] || 0) + 1
    }));
  };
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const newCartItems = { ...prevItems };
      delete newCartItems[productId]; 
      return newCartItems;
    });
  };
  const navigate = useNavigate();
  
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [products, setProducts] = useState([]);
  
  const getProductsData = async () => {
    try {
      
      const response = await axios.get(backendUrl + '/api/product/list') 
      if (response.data.success){
        setProducts(response.data.products);
      }
      else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    getProductsData()
  })

  const value = {
    products, currency, delivery_fee, backendUrl, cartItems, addToCart,removeFromCart,navigate
  } 
  
  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )
}


export default ShopContextProvider;