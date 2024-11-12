
import React,{ useEffect, useState,  } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { products } from '../assets/assets';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = 'VND' ;
  const delivery_fee = 50000;

  const [cartItems, setCartItems] = useState({});
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  //Cart 
  const [cartData, setCartData] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  // Cart
  useEffect(() => {
    const tempData = [];

    for (const productId in cartItems) {
      const product = products.find((item) => item._id === productId);
      if (product && cartItems[productId] > 0) {
        tempData.push({
          _id: productId,
          name: product.name,
          price: product.price,
          quantity: cartItems[productId],
        });
      }
    }

    setCartData(tempData);
  }, [cartItems, products]);

  const calculateTotal = () => {
    return cartData.reduce((total, item) => {
      if (selectedItems[item._id]) {
        const productData = products.find((product) => product._id === item._id);
        return total + (productData.price * item.quantity);
      }
      return total;
    }, 0);
  };

  const handleCheckboxChange = (productId) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  // 
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

  // Get province
  useEffect(() => {
    fetch('https://provinces.open-api.vn/api/p/')
      .then((response) => response.json())
      .then((data) => setProvinces(data))
      .catch((error) => console.error('Error fetching provinces:', error));
  }, []);

  // Get district
  useEffect(() => {
    if (selectedProvince) {
      fetch('https://provinces.open-api.vn/api/d/')
        .then((response) => response.json())
        .then((data) => {
          const filteredDistricts = data.filter(
            (district) => district.province_code === selectedProvince
          );
          setDistricts(filteredDistricts);
        })
        .catch((error) => console.error('Error fetching districts:', error));
    } else {
      setDistricts([]);
    }
  }, [selectedProvince]);

  const value = {
    products, currency, delivery_fee, cartItems, addToCart,removeFromCart,navigate, provinces,
    districts,
    selectedProvince,
    selectedPayment,
    setSelectedProvince,
    setSelectedPayment,cartData, setCartData,selectedItems, setSelectedItems, calculateTotal, handleCheckboxChange,backendUrl,setProducts
  } 
  
  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )
}


export default ShopContextProvider;