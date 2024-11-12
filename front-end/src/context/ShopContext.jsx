import React, { useEffect, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = 'VND';
  const delivery_fee = 50000;

  const [cartItems, setCartItems] = useState({});
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  // Cart
  const [cartData, setCartData] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  // Products
  const [products, setProducts] = useState([]);
  
  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Get product data
  const getProductsData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  // Fetch product data on mount
  useEffect(() => {
    getProductsData();
  }, []); // Empty dependency array ensures this runs only once

  // Update cart data when cart items or products change
  useEffect(() => {
    if (products.length > 0) {
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
    }
  }, [cartItems, products]);

  // Calculate the total price of selected items
  const calculateTotal = () => {
    return cartData.reduce((total, item) => {
      if (selectedItems[item._id]) {
        const productData = products.find((product) => product._id === item._id);
        return total + (productData.price * item.quantity);
      }
      return total;
    }, 0);
  };

  // Handle checkbox changes to select items
  const handleCheckboxChange = (productId) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  // Add a product to the cart
  const addToCart = (productId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1,
    }));
  };

  // Remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const newCartItems = { ...prevItems };
      delete newCartItems[productId];
      return newCartItems;
    });
  };

  // Get provinces data
  useEffect(() => {
    fetch('https://provinces.open-api.vn/api/p/')
      .then((response) => response.json())
      .then((data) => setProvinces(data));
  }, []);

  // Get districts data when a province is selected
  useEffect(() => {
    if (selectedProvince) {
      fetch(`https://provinces.open-api.vn/api/d/${selectedProvince}`)
        .then((response) => response.json())
        .then((data) => setDistricts(data));
    }
  }, [selectedProvince]);

  return (
    <ShopContext.Provider
      value={{
        currency,
        delivery_fee,
        cartItems,
        setCartItems,
        cartData,
        setCartData,
        selectedItems,
        setSelectedItems,
        addToCart,
        removeFromCart,
        calculateTotal,
        handleCheckboxChange,
        products,
        provinces,
        districts,
        selectedProvince,
        setSelectedProvince,
        selectedPayment,
        setSelectedPayment,
        navigate,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
