import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { ImBin } from "react-icons/im";
import { MdHome } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Cart = () => {
  // const [cartData, setCartData] = useState([]);

  const { products, currency, cartData, setCartData, removeFromCart, delivery_fee, navigate, selectedItems, setSelectedItems, calculateTotal, handleCheckboxChange} = useContext(ShopContext);

  const isAnyItemSelected = Object.values(selectedItems).some((selected) => selected);

  // Ensure cartData is always an array before using .map()
  const safeCartData = Array.isArray(cartData) ? cartData : [];
  // useEffect(() => {
  //   if (Array.isArray(cartData)) {
  //     // Nếu cartData là mảng, không cần chuyển đổi thêm gì
  //     setCartData(cartData);
  //   } else {
  //     setCartData([]); // Nếu cartData không phải mảng, gán là mảng rỗng
  //   }
  // }, [cartData, products]);  // Dựa vào cartData và products để cập nhật

  return (
    <div className='content_font pb-10 flex flex-col md:flex-row justify-center gap-10 px-5 '>
      <div className="w-full md:w-[60% ]">
        <NavLink to='/product/'>
          <div className="flex pt-5 px-5 pre_color gap-1 pl-2">
            <MdHome className="text-xl" />
            <h1 className="text-base pre_color font-medium">Tiếp tục mua sắm</h1>
          </div>
        </NavLink>
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

              {safeCartData.map((item, index) => {
                const productData = products.find((product) => product._id === item._id);

                if (!productData) {
                  return <div key={index}>Sản phẩm không tìm thấy</div>;
                }
              
              const totalPrice = productData.price * item.quantity;

              return (
                <div key={index} className="grid grid-cols-[0.5fr_3fr_1fr_1fr_0.5fr] py-4 product_bg rounded-lg mb-5">
                  <input
                    type="checkbox"
                    checked={!!selectedItems[item._id]}
                    onChange={() => handleCheckboxChange(item._id)}
                    className="self-center mx-4"
                  />
                  <div className="flex items-center gap-6 px-5">
                    <img className="w-[75px] h-[75px]" src={productData.image[0]} alt={productData.name} />
                    <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  </div>

                  <input
                    className="bg-transparent border-none text-center w-[60px] sm:w-[80px] py-1 text-lg font-medium"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                    // onChange={(e) => handleQuantityChange(item._id, e.target.value)}
                  />

                  <div className="flex justify-center items-center">
                    <p className="text-base">{totalPrice}{currency}</p>
                  </div>

                  <div className="flex justify-center items-center flex-col">
                    <ImBin onClick={() => removeFromCart(item._id)} className="cursor-pointer" />
                    <p className='text-center text-[8px] mt-2'>Tìm thêm sản phẩm tương tự</p>
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
            <p className="text-base">{delivery_fee} <span className='text-xs'>{currency}</span></p>
          </div>
        )}
        <div className="flex justify-between mt-4">
          <p className="text-base font-medium">Thành tiền:</p>
          <p className="text-base font-medium">{calculateTotal() + (isAnyItemSelected ? delivery_fee : 0)} <span className='text-xs'>{currency}</span></p>
        </div>
        <div className="flex justify-end mt-4">
          <button onClick={() => navigate('/place-order', {
            state: {
              cartData,
              deliveryFee: isAnyItemSelected ? delivery_fee : 0,
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
  );
};

export default Cart;
