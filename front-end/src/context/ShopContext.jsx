import React, { createContext, useState } from 'react';
import { products } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = 'VND';
  const delivery_fee = 10;
  
  // Khởi tạo state cho giỏ hàng và wishlist
  const [cartItems, setCartItems] = useState({});
  const [wishlist, setWishlist] = useState([]);  // Khởi tạo wishlist với mảng rỗng

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (productId) => {
    setCartItems((preItems) => ({
      ...preItems, 
      [productId]: (preItems[productId] || 0) + 1
    }));
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const newCartItems = { ...prevItems };
      delete newCartItems[productId]; 
      return newCartItems;
    });
  };

  // Hàm thêm sản phẩm vào wishlist
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.find((item) => item._id === product._id)) {
        return prevWishlist;
      }
      return [...prevWishlist, product];
    });
  };

  // Hàm xóa sản phẩm khỏi wishlist
  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item._id !== productId)
    );
  };

  const navigate = useNavigate();

  // Cung cấp các giá trị cho context
  const value = {
    products,
    currency,
    delivery_fee,
    cartItems,
    wishlist,
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
