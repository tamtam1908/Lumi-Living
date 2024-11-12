import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const currency = 'VND';
  const delivery_fee = 50000;

  // Khởi tạo state cho giỏ hàng, wishlist, sản phẩm và thông tin địa phương
  const [cartItems, setCartItems] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]); // Khởi tạo với sản phẩm từ API
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [cartData, setCartData] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});

  // Lấy dữ liệu sản phẩm từ API
  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  // Lấy dữ liệu tỉnh thành
  useEffect(() => {
    fetch('https://provinces.open-api.vn/api/p/')
      .then((response) => response.json())
      .then((data) => setProvinces(data))
      .catch((error) => console.error('Error fetching provinces:', error));
  }, []);

  // Lấy dữ liệu quận huyện
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

  // Tạo cartData từ cartItems và sản phẩm
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

  // Tính tổng tiền
  const calculateTotal = () => {
    return cartData.reduce((total, item) => {
      if (selectedItems[item._id]) {
        const productData = products.find((product) => product._id === item._id);
        return total + (productData.price * item.quantity);
      }
      return total;
    }, 0);
  };

  // Hàm thay đổi trạng thái checkbox
  const handleCheckboxChange = (productId) => {
    setSelectedItems((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (productId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1,
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
    provinces,
    districts,
    selectedProvince,
    selectedPayment,
    setSelectedProvince,
    setSelectedPayment,
    cartData,
    setCartData,
    selectedItems,
    setSelectedItems,
    calculateTotal,
    handleCheckboxChange,
    backendUrl,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
