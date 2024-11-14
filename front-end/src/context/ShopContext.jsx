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
      getUserCart(localStorage.getItem('token'))
    }
  },[])
  useEffect(() => {
    if (token) {
        getUserCart(token);
    }
  }, [token]); // Lắng nghe thay đổi của token

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
  
  // useEffect cập nhật cartData khi cartItems thay đổi
  useEffect(() => {
    setCartData(convertCartItemsToData(cartItems));
}, [cartItems, products]);

  // Tạo cartData từ cartItems và sản phẩm
  // useEffect(() => {
  //   if (products.length > 0) {
  //     const tempData = [];
  //     for (const productId in cartItems) {
  //       const product = products.find(item => item._id === productId);
  //       if (product) {  // Đảm bảo sản phẩm tồn tại
  //         tempData.push({
  //           _id: productId,
  //           name: product.name,
  //           price: product.price,
  //           quantity: cartItems[productId],
  //         });
  //       }
  //     }
  //     setCartData(tempData);
  //   }
  // }, [cartItems, products]);

  useEffect(() => {
    const updatedCartData = Object.keys(cartItems).map((productId) => {
      const product = products.find((item) => item._id === productId);
      return {
        _id: productId,
        name: product?.name,
        price: product?.price,
        quantity: cartItems[productId],
      };
    });
  
    setCartData(updatedCartData);  // Đảm bảo cartData luôn là một mảng
  }, [cartItems, products]);

  // Tính tổng tiền
  // const calculateTotal = () => {
  //   return cartData.reduce((total, item) => {
  //     if (selectedItems[item._id]) {
  //       const productData = products.find((product) => product._id === item._id);
  //       return total + (productData.price * item.quantity);
  //     }
  //     return total;
  //   }, 0);
  // };

  const calculateTotal = () => {
    if (!Array.isArray(cartData)) {
      console.error("cartData is not an array", cartData);
      return 0;
    }
  
    return cartData.reduce((total, item) => {
      if (selectedItems[item._id]) {
        const productData = products.find((product) => product._id === item._id);
        if (productData) {
          total += productData.price * item.quantity;
        }
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
  const addToCart = async (productId) => {
    // Cập nhật giỏ hàng với sản phẩm mới
    setCartItems((prevItems) => {
        const updatedItems = {
            ...prevItems,
            [productId]: (prevItems[productId] || 0) + 1,
        };
        return updatedItems;
    });

    // Gửi yêu cầu POST đến API nếu có token
    if (token) {
        try {
            await axios.post(`${backendUrl}/api/cart/add`, { itemId: productId }, { headers: { token } });
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }
  };
  
  // Thêm useEffect để log khi cartItems thay đổi
  useEffect(() => {
    console.log("Cart Items after change:", cartItems);
  }, [cartItems]);


  const updateQuantity = async (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity; // Cập nhật số lượng sản phẩm

    setCartItems(cartData); // Cập nhật giỏ hàng trên frontend

    // Gửi yêu cầu cập nhật giỏ hàng đến backend
    if (token) {
        try {
            await axios.post(backendUrl + '/api/cart/update', { itemId, quantity }, { headers: { token } });
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = async (productId) => {
    try {
      // Lấy token từ localStorage
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("Token không tồn tại.");
      }
  
      // Gọi API backend để xóa sản phẩm khỏi cơ sở dữ liệu
      const response = await fetch(`${backendUrl}/api/cart/remove`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`  // Gửi token trong header
        },
        body: JSON.stringify({ itemId: productId }), // Không cần userId, chỉ cần itemId
      });
  
      const data = await response.json();
  
      if (data.success) {
        // Nếu xóa thành công, cập nhật giỏ hàng trong frontend
        setCartItems((prevItems) => {
          const newCartItems = { ...prevItems };
          delete newCartItems[productId];
          return newCartItems;
        });
      } else {
        alert(data.message); // Thông báo lỗi nếu có
      }
    } catch (error) {
      console.error('Lỗi khi xóa sản phẩm:', error);
      alert('Có lỗi xảy ra khi xóa sản phẩm!');
    }
  };

  
    const getUserCart = async (token) => {
      try {
          const response = await axios.post(`${backendUrl}/api/cart/get`, {}, { headers: { token } });
          if (response.data.success) {
              const cartDataFromAPI = response.data.cartData;
              if (Array.isArray(cartDataFromAPI)) {
                  const newCartItems = {};
                  cartDataFromAPI.forEach(item => {
                      newCartItems[item._id] = item.quantity;
                  });
                  setCartItems(newCartItems); // Cập nhật cartItems
              } else {
                  setCartItems(cartDataFromAPI); // Nếu cartDataFromAPI không phải mảng, thì trực tiếp set vào cartItems
              }
          }
      } catch (error) {
          console.log(error);
          toast.error(error.message);
      }
  };

  // Hàm chuyển đổi cartItems thành cartData
  const convertCartItemsToData = (cartItems) => {
    return Object.keys(cartItems).map(productId => {
      const product = products.find(item => item._id === productId);
      return {
        _id: productId,
        name: product?.name,
        price: product?.price,
        quantity: cartItems[productId],
      };
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
