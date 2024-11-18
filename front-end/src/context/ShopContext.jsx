import React, { useEffect, useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const currency = 'VND';
  const delivery_fee = 50000;
  const [token, setToken] = useState(null);



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
  },[token])
  
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

  // // Lấy dữ liệu quận huyện khi tỉnh thành được chọn
  // useEffect(() => {
  //   if (selectedProvince) {
  //     fetch(`https://provinces.open-api.vn/api/d/${selectedProvince}`, {mode: 'no-cors'})
  //       .then((response) => response.json())
  //       .then((data) => setDistricts(data));
  //   }
  // }, [selectedProvince]);

  // Lấy dữ liệu tỉnh thành
useEffect(() => {
  fetch('https://provinces.open-api.vn/api/p/')
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => setProvinces(data))
    .catch((error) => console.error('Error fetching provinces:', error));
}, []);

// Lấy dữ liệu quận huyện khi tỉnh thành được chọn
useEffect(() => {
  if (selectedProvince) {
    fetch(`https://provinces.open-api.vn/api/d/${selectedProvince}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setDistricts(data))
      .catch((error) => console.error('Error fetching districts:', error));
  }
}, [selectedProvince]);

  
  // useEffect cập nhật cartData khi cartItems thay đổi
  useEffect(() => {
    setCartData(convertCartItemsToData(cartItems));
}, [cartItems, products]);
// useEffect(() => {
//   if (products.length > 0 && Object.keys(cartItems).length > 0) {
//     setCartData(convertCartItemsToData(cartItems));
//   }
// }, [cartItems, products]);

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
    
  }, [cartItems]);

  // Hàm cập nhật số lượng sản phẩm
  const handleQuantityChange = async (itemId, newQuantity) => {
    try {
      const response = await axios.post('/api/cart/update', {
        itemId,
        quantity: newQuantity,
      });
      if (response.data.success) {
        setCartData(safeCartData.map(item =>
          item._id === itemId ? { ...item, quantity: newQuantity } : item
        ));
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật số lượng sản phẩm:", error);
    }
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng


  const handleRemoveItem = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${backendUrl}/api/cart/remove`, {
        itemId: productId
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (response.data.success) {
        // Nếu xóa thành công, cập nhật lại giỏ hàng
        setCartItems((prevItems) => {
          const newCartItems = { ...prevItems };
          delete newCartItems[productId];
          return newCartItems;
        });
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm:", error);
      if (error.response) {
        // Nếu lỗi đến từ phản hồi của backend
        console.error("Phản hồi từ backend:", error.response.data);
        alert(`Lỗi: ${error.response.data.message || "Không thể xóa sản phẩm"}`);
      } else if (error.request) {
        // Nếu không nhận được phản hồi nào từ backend
        console.error("Không có phản hồi từ server:", error.request);
        alert("Không có phản hồi từ server, vui lòng kiểm tra kết nối.");
      } else {
        console.error("Lỗi cấu hình:", error.message);
        alert("Có lỗi xảy ra khi xóa sản phẩm!");
      }
    }
  };




  const updateQuantity = async (itemId, quantity) => {
    if (quantity < 1) {
      toast.error("Số lượng không thể nhỏ hơn 1!");
      return;
    }
  
    if (!cartItems[itemId]) {
      toast.error("Sản phẩm không tồn tại trong giỏ hàng!");
      return;
    }
  
    // Cập nhật giỏ hàng trên frontend
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemId]: quantity,
    }));
  
    // Đồng bộ với backend
    if (token) {
      try {
        const response = await axios.post(`${backendUrl}/api/cart/update`, { itemId, quantity }, { headers: { token } });
        if (response.data.success) {
          toast.success("Cập nhật số lượng thành công!");
        } else {
          toast.error(response.data.message || "Lỗi không xác định!");
        }
      } catch (error) {
        console.error(error);
        toast.error("Lỗi khi cập nhật số lượng!");
      }
    }
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng

  const removeFromCart = async (productId) => {
    // Cập nhật giỏ hàng bằng cách xóa sản phẩm hoàn toàn
    setCartItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (updatedItems[productId]) {
        delete updatedItems[productId]; // Xóa sản phẩm khỏi giỏ hàng
      }
      return updatedItems;
    });
  
    // Gửi yêu cầu POST đến API để xóa sản phẩm nếu có token
    const token = localStorage.getItem('token'); // Lấy token từ localStorage
    if (token) {
      try {
        // Gửi yêu cầu xóa sản phẩm với token
        await axios.post(`${backendUrl}/api/cart/remove`, { itemId: productId }, { headers: { token } });
      } catch (error) {
        console.error('Lỗi khi gửi yêu cầu xóa sản phẩm:', error);
        toast.error(error.message);
      }
    } else {
      alert('Token không tồn tại!');
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
  

  const handleInputChange = (e, itemId) => {
    let newValue = parseInt(e.target.value, 10);
  
    // Nếu giá trị không hợp lệ (NaN) hoặc nhỏ hơn 1, đặt nó bằng 1
    if (isNaN(newValue) || newValue < 1) {
      newValue = 1;
    }
  
    // Cập nhật trực tiếp cartItems (vì nó là đối tượng, không phải mảng)
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemId]: newValue,  // Cập nhật số lượng cho sản phẩm cụ thể
    }));
  };
  
  const handleBlurUpdate = async (e, itemId) => {
    let newValue = parseInt(e.target.value, 10);
  
    // Kiểm tra giá trị khi người dùng thoát khỏi ô nhập liệu
    if (isNaN(newValue) || newValue < 1) {
      toast.error("Số lượng phải lớn hơn 0!");
      return;
    }
  
    // Cập nhật cartItems trong bộ nhớ tạm thời
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemId]: newValue,  // Cập nhật số lượng cho sản phẩm cụ thể
    }));
  
    try {
      // Gửi yêu cầu backend để cập nhật số lượng
      await axios.post(
        `${backendUrl}/api/cart/update`,
        { itemId, quantity: newValue },
        { headers: { token } } // Bao gồm token nếu cần thiết
      );
      toast.success("Cập nhật số lượng thành công!");
    } catch (error) {
      console.error(error);
      toast.error("Lỗi khi cập nhật số lượng!");
    }
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
    handleInputChange, 
    handleBlurUpdate,
    updateQuantity,
    setCartItems,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
