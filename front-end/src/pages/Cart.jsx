import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { ImBin } from "react-icons/im";
import { MdHome } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { MdOutlineNavigateNext } from "react-icons/md";

const Cart = () => {

  const { products, currency, cartItems, removeFromCart, delivery_fee, navigate, cartData, setCartData, selectedItems, setSelectedItems, calculateTotal, handleCheckboxChange,handleRemoveItem, handleInputChange, handleBlurUpdate } = useContext(ShopContext);

  const isAnyItemSelected = Object.values(selectedItems).some((selected) => selected);
  // const safeCartData = Array.isArray(cartData) ? cartData : [];

  const safeCartData = Array.isArray(cartData) 
  ? cartData.filter(item => selectedItems[item._id])  // Chỉ lấy các sản phẩm đã được chọn
  : [];

  // Tính tổng số lượng và tổng tiền của những sản phẩm đã được chọn
  const selectedProducts = safeCartData.filter(item => selectedItems[item._id]);  // Chỉ chọn các sản phẩm có checked (selectedItems là true)
  
  const selectedQuantity = selectedProducts.reduce((total, item) => {
    return total + (cartItems[item._id] || 0); // Tổng số lượng sản phẩm được chọn
  }, 0);


  // Tính phí vận chuyển dựa trên số lượng sản phẩm
  const adjustedDeliveryFee = selectedQuantity * delivery_fee;

  useEffect(() => {
    if (products.length > 0 && Object.keys(cartItems).length > 0) {
      const tempData = [];
      for (const productId in cartItems) {
        const product = products.find(item => item._id === productId);
        if (product && cartItems[productId] > 0) {
          tempData.push({
            _id: productId,
            name: product.name, // Thêm thông tin tên
            price: product.price, // Thêm giá
            quantity: cartItems[productId], // Số lượng
          });
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div >
      <div className = 'h-[45px] w-screen	pre_bar content-center'>
        <NavLink to='/product/'>
            <div className="text_bar flex gap-3 px-5 pre_text ">
              <MdHome className="w-[20px] h-[20px] cursor-pointer" />
              <MdOutlineNavigateNext className = 'w-[20px] h-[20px]'/> 
              <h1 className="text-sm font-light">TIẾP TỤC MUA SẮM</h1>
            </div>
          </NavLink>
      </div>
      <div className='content_font pb-10 pt-8 flex flex-col md:flex-row justify-center gap-10 px-5'>
        <div className="w-full md:w-[60% ]">
          <div className='custom_bg my-5 p-10'>
            <h1 className='content_color text-3xl font-medium'>Giỏ hàng</h1>
            <div className='w-full h-[15px] border-b mb-2'></div>
            <p className='content_color text-lg pt-3'>Bạn có {cartData.length} sản phẩm trong giỏ hàng</p>

            <div className='mt-5'>
              <div className="grid grid-cols-[0.5fr_3fr_1fr_1fr_0.5fr] py-2">
                <span></span>
                <span className="font-medium content_color text-lg ml-5">Sản phẩm</span>
                <span className="font-medium content_color text-lg">Số lượng</span>
                <span className="font-medium content_color text-lg ml-3">Thành tiền</span>
                <span></span>
              </div>

            {cartData.map((item, index) => {
              // Tìm sản phẩm dựa trên _id từ cartData
              const productData = products.find((product) => product._id === item._id);

              // Kiểm tra nếu sản phẩm không tìm thấy
              if (!productData) {
                return <div key={index} className="text-red-500">Sản phẩm không tìm thấy</div>;
              }

              // Tính toán giá tiền cho số lượng sản phẩm
              const totalPrice = (productData.price || 0) * (item.quantity || 1);

              return (
                <div key={index} className="grid grid-cols-[0.5fr_3fr_1fr_1fr_0.5fr] py-4 product_bg rounded-lg mb-5">
                  <input
                    type="checkbox"
                    checked={!!selectedItems[item._id]}
                    onChange={() => handleCheckboxChange(item._id)}
                    className = 'w-5 h-5 rounded border-2 border-black bg-transparent accent-[#8B4513]  transition self-center ml-8'
                  />
                  <div className="flex items-center gap-6 px-5">
                    <img className="w-[75px] h-[75px]" src={productData.image[0] || '/placeholder-image.png'} alt={productData.name} />
                    <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  </div>

                  <input className="bg-transparent border-none text-center w-[60px] sm:w-[80px] py-1 text-lg font-medium"
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) => handleInputChange(e, item._id)} // For state update
                    onBlur={(e) => handleBlurUpdate(e, item._id)} // For backend update on blur
                    onKeyDown={(e) => {
                      if (e.key === "-" || e.key === "e" || e.key === ".") e.preventDefault(); // Restrict invalid keys
                    }}
                    step={1}

//                     defaultValue={item.quantity}
//                     onChange={(e) => handleQuantityChange(item._id, parseInt(e.target.value))}
                    // onChange={(e) => setCartData(
                    //   safeCartData.map((prod) =>
                    //     prod._id === item._id ? { ...prod, quantity: parseInt(e.target.value) } : prod
                    //   )
                    // )}
                  />

                  <div className="flex justify-center items-center">
                    <p className="text-base">{totalPrice.toLocaleString('vi-VN')} {currency}</p>
                  </div>

                  <div className="flex justify-center items-center flex-col">
                    <ImBin onClick={() => removeFromCart(item._id)} className="cursor-pointer" />
                    <p className='text-center text-[8px] mt-2 hidden lg:block'>
                      Tìm thêm sản phẩm tương tự
                    </p>
                  </div>
                </div>
              );
            })}

            <div>
              <input name="discount" className='w-[145PX] h-[38px] px-2 text-stone-400 product_color' placeholder="Mã ưu đãi" />
              <button className='discount_border custom_bg content_color text-base w-[110PX] h-[38px] ml-2 discount_btn'>ÁP DỤNG</button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[30%] rounded-lg p-5 product_bg self-center ">
        <h2 className="text-xl font-semibold">TỔNG TIỀN</h2>
        <div className="flex justify-between mt-4">
          <p className="text-base font-medium">Tổng đơn hàng:</p>
          <p className="text-base">{calculateTotal()} <span className='text-xs'>{currency}</span></p>
        </div>
        {isAnyItemSelected && (
          <div className="flex justify-between mt-4">
            <p className="text-base font-medium">Phí vận chuyển:</p>
            <p className="text-base">{adjustedDeliveryFee} <span className='text-xs'>{currency}</span></p>
          </div>
        )}
        <div className="flex justify-between mt-4">
          <p className="text-base font-medium">Thành tiền:</p>
          <p className="text-base font-medium">{calculateTotal() + (isAnyItemSelected ? delivery_fee : 0)} <span className='text-xs'>{currency}</span></p>
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={() => navigate('/place-order', {
            state: {
              cartData: safeCartData,
              deliveryFee: isAnyItemSelected ? adjustedDeliveryFee : 0,
              totalPrice: calculateTotal() + (isAnyItemSelected ? delivery_fee : 0),
            }
          })}
            className="btn_color py-2 px-4 w-full rounded font-bold content_color "
          >
            THANH TOÁN
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;
