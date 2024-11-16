import React, { useEffect, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

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
  
  // Giỏ hàng
  const [cartData, setCartData] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [token, setToken] = useState('')

  const navigate = useNavigate();

  // Lấy dữ liệu sản phẩm từ API
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

  useEffect(()=>{
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'))

    }
  },[])
  // Lấy dữ liệu tỉnh thành
  useEffect(() => {
    fetch('https://provinces.open-api.vn/api/p/')
      .then((response) => response.json())
      .then((data) => setProvinces(data));
  }, []);

  // Lấy dữ liệu quận huyện khi tỉnh thành được chọn
  useEffect(() => {
    if (selectedProvince) {
      fetch(`https://provinces.open-api.vn/api/d/${selectedProvince}`)
        .then((response) => response.json())
        .then((data) => setDistricts(data));
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
  // const addToCart = (productId) => {
  //   setCartItems((prevItems) => ({
  //     ...prevItems,
  //     [productId]: (prevItems[productId] || 0) + 1,
  //   }));
  //   // if (token) {
  //   //   try {
  //   //     await axios.post(backendUrl + '/api/cart/add', {itemId, price}, {headers: {token}}) 
  //   //   } catch (error) {
  //   //     TransformStream.error(error.message)
  //   //   }
  //   // }
  // };
  const addToCart = async (productId, price) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1,
    }));
  
    // Gửi yêu cầu POST đến API nếu có token
    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/add', { itemId: productId, price }, { headers: { token } });
      } catch (error) {
        console.error("Error adding to cart:", error.message);
      }
    }
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
  const removeFromWishlist = (product) => {
    setWishlist(wishlist.filter(item => item._id !== product._id));
  };


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
    setToken,
    token,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
