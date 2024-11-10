import React, { useEffect, useState } from 'react';
// import { products } from '../assets/assets';
import { createContext } from 'react';
import axios from 'axios'

export const ShopContext = createContext()

const ShopContextProvider = (props) => {
  const currency = 'VND' ;
  const delivery_fee = 10;
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
    products, currency, delivery_fee, backendUrl
  } 
  
  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )
}


export default ShopContextProvider;