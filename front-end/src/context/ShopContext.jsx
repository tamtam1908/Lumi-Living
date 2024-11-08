import React from 'react';
import { products } from '../assets/assets';
import { createContext } from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';


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
  
  const value = {
    products, currency, delivery_fee, cartItems, addToCart,removeFromCart,navigate
  } 
  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )
}


export default ShopContextProvider;