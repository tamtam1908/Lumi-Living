import React, {useContext, useEffect, useState, } from 'react';
import { useLocation } from 'react-router-dom';
import { CiBank } from "react-icons/ci";
import { BsCashStack } from "react-icons/bs";
import { assets } from '../assets/assets';
import { IoBag } from "react-icons/io5";
import { MdOutlineNavigateNext } from "react-icons/md";
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const {
    provinces,
    districts,
    selectedProvince,
    setSelectedProvince,
    selectedPayment,
    setSelectedPayment,
    currency,
    delivery_fee,
    navigate,
  } = useContext(ShopContext);
  const location = useLocation();
  const { cartData, totalPrice } = location.state || {};

  const [showInput, setShowInput] = useState(false);

  return (
    <div className = 'pb-5'>
      <div className = 'h-[45px] w-screen	pre_bar content-center	'>
        <div className = 'text_bar flex gap-3 px-6 pre_text'>
          <IoBag className = 'w-[18px] h-[18px] cursor-pointer' onClick={() => navigate('/cart')}/>
          <MdOutlineNavigateNext className = 'w-[20px] h-[20px]'/> 
          <p className = 'text-sm font-thin'>ĐẶT HÀNG</p>
        </div>
      </div>
      <div className='w-[980px] h-[auto] bg-white mx-auto mt-12 border-checkout border-t-4 flex flex-col gap-2 		'>
      <div className='flex gap-2 content-center'>
        <p className='pl-2 text-[#a08257] '>Bạn đã có mã ưu đãi?</p>
        <p 
          onClick={() => setShowInput(!showInput)} 
          className='text_label cursor-pointer hover:text-[#D9A86D] 	'
        >
          Ấn vào đây để nhập mã
        </p>
      </div>

      {showInput && ( 
        <div className='  w-[970px] 	px-2 pb-5	' >
          <p className = 'text_label '>Nếu bạn có mã giảm giá, vui lòng nhập vào phía bên dưới</p>
          <input 
            type='text' 
            placeholder='Nhập mã ưu đãi' 
            className='border border-stone-200 p-2 rounded-md w-full	mt-3 ' 
          />
          <button 
            className='mt-3 px-4 py-2 bg-[#605040] text-white rounded-md hover:bg-[#D9A86D] '
          >
            ÁP DỤNG
          </button>
        </div>
      )}
    </div>
      <div className='flex justify-center content_font  '>  
        <div className="flex flex-col sm:flex-row justify-between gap-12 mb-22 pt-5 sm:pt-14 min-h-[80vh]">
          {/* Delivery information */}
          <div className="flex flex-col gap-6 w-full sm:max-w-[480px]">
            <div className="text-xl sm:text-2xl my-3 content_color">
              <h1>THÔNG TIN THANH TOÁN</h1>
              <div className="space-y-4">
                <div>
                  <label className='text_form text-base'>HỌ</label>
                  <input
                    className="border-b text-base border-[#46403e] bg-transparent w-full focus:outline-none"
                    type="text"
                  />
                </div>
                <div>
                  <label className='text_form text-base'>TÊN</label>
                  <input
                    className="border-b text-base border-[#46403e] bg-transparent py-1 w-full focus:outline-none"
                    type="text"
                  />
                </div>
                <div>
                  <label className='text_form text-base'>TỈNH THÀNH</label>
                  <select
                    onChange={(e) => setSelectedProvince(Number(e.target.value))}
                    className= " text-base border-b border-[#46403e] bg-transparent py-1 w-full focus:outline-none "
                  >
                    <option className='text_label' value="">Chọn tỉnh thành</option>
                    {provinces.map((province) => (
                      <option key={province.code} value={province.code} className='text_label'>
                        {province.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className='text_form text-base'>QUẬN/HUYỆN</label>
                  <select
                    className="border-b text-base border-[#46403e] bg-transparent py-1 w-full focus:outline-none"
                    disabled={!selectedProvince || districts.length === 0}
                  >
                    <option className='text_label' value="">Chọn quận</option>
                    {districts.map((district) => (
                      <option key={district.code} value={district.code} className='text_label'>
                        {district.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className='text_form text-base'>ĐỊA CHỈ</label>
                  <input
                    type="text"
                    placeholder="Địa chỉ"
                    className="border-b text-base border-[#46403e] bg-transparent py-1 w-full focus:outline-none placeholder:text-stone-400"
                  />
                  <input
                    type="text" 
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    className="border-b text-base border-[#46403e] bg-transparent py-1 w-full mt-2 focus:outline-none content_color placeholder:text-stone-400 pt-2"
                  />
                </div>
                <div>
                  <label className='text_form text-base'>SỐ ĐIỆN THOẠI</label>
                  <input
                    type="text"
                    className="border-b text-base border-[#46403e] bg-transparent py-1 w-full focus:outline-none"
                  />
                </div>
                <div>
                  <label className='text_form text-base'>ĐỊA CHỈ EMAIL</label>
                  <input
                    type="email"
                    className="border-b text-base border-[#46403e] bg-transparent py-1 w-full focus:outline-none"
                  />
                </div>
                
                {/* Note/Order Remarks */}
                <div>
                  <label className='text_form text-base'>GHI CHÚ ĐƠN HÀNG (TÙY CHỌN)</label>
                  <textarea
                    placeholder="Nhập ghi chú cho đơn hàng của bạn (nếu có)"
                    className="border text-base border-[#46403e] text_label w-full py-2 px-3 mt-2 focus:outline-none placeholder:text-stone-400"
                    rows="4"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order information */}
          <div className=" content_color w-[450px] ">
            <h2 className="text-xl sm:text-2xl my-3 content_color">THÔNG TIN ĐƠN HÀNG</h2>

            {/* Cart Items */}
            {cartData && cartData.map((item, index) => {
              const totalItemPrice = item.price * item.quantity;
              return (
                <div key={index} className="flex justify-between py-2 border-b border-[#46403e] bg-transparent last:border-none">
                  <p className="content_color">{item.name} x {item.quantity}</p>
                  <p>{totalItemPrice} {currency}</p>
                </div>
              );
            })}
            <div className="flex justify-between py-2 border-b border-[#46403e] bg-transparent">
              <p className="content_color">PHÍ GIAO HÀNG</p>
              <p>{delivery_fee === 0 ? 'Giao hàng miễn phí' : `${delivery_fee} ${currency}`}</p>
            </div>
            {/* Subtotal */}
            <div className="flex justify-between py-2 border-b border-[#46403e] bg-transparent">
              <p className="content_color">TẠM TÍNH</p>
              <p>{totalPrice} {currency}</p>
            </div>

            {/* Delivery Fee */}

            {/* Total */}
            <div className="flex justify-between py-2 mt-2 font-semibold text-lg">
              <p>TỔNG</p>
              <p>{totalPrice} {currency}</p>
            </div>
            {/* Payment method */}
            <div>
              <h1 className='content_color mb-2 mt-3'>PHƯƠNG THỨC THANH TOÁN</h1>
              
              {/* Cash on Delivery */}
              <div className="flex items-center gap-3 mb-2">
                <input 
                  type="radio" 
                  id="cash" 
                  name="paymentMethod" 
                  value="cash" 
                  checked={selectedPayment === 'cash'} 
                  onChange={() => setSelectedPayment('cash')} 
                />
                <BsCashStack className="w-[25px] h-full"/>
                <label htmlFor="cash" className="text-base">Thanh toán khi nhận hàng</label>
              </div>
              
              {/* Bank Transfer */}
              <div className="flex items-center gap-3 mb-2">
                <input 
                  type="radio" 
                  id="bank" 
                  name="paymentMethod" 
                  value="bank" 
                  checked={selectedPayment === 'bank'} 
                  onChange={() => setSelectedPayment('bank')} 
                />
                <CiBank className="w-[25px] h-full" />
                <label htmlFor="bank" className="text-base">Thanh toán chuyển khoản qua ngân hàng</label>
              </div>
              
              {/* Bank Account Info */}
              {selectedPayment === 'bank' && (
                <div className="ml-8 mb-3 text-sm ml-16 text_form">
                  <p>Số tài khoản: 0071002222406</p>
                  <p>Tên ngân hàng: Vietcombank – CN HCM</p>
                  <p>Tên tài khoản: Công Ty TNHH Nội Thất Cao Cấp Lumiliving</p>
                  <p>Nội dung: Tên + SĐT đặt hàng</p>
                </div>
              )}
              
              {/* VNPay */}
              <div className="flex items-center gap-3 mb-2">
                <input 
                  type="radio" 
                  id="vnpay" 
                  name="paymentMethod" 
                  value="vnpay" 
                  checked={selectedPayment === 'vnpay'} 
                  onChange={() => setSelectedPayment('vnpay')} 
                />
                <img src={assets.vnpay} className="w-[25px] h-full" alt="VNPay"/>
                <label htmlFor="vnpay" className="text-base">Thanh toán online qua cổng VNPay</label>
              </div>

              {/* MoMo */}
              <div className="flex items-center gap-3 mb-2">
                <input 
                  type="radio" 
                  id="momo" 
                  name="paymentMethod" 
                  value="momo" 
                  checked={selectedPayment === 'momo'} 
                  onChange={() => setSelectedPayment('momo')} 
                />
                <img src={assets.momo} className="w-[25px] h-full" alt="MoMo"/>
                <label htmlFor="momo" className="text-base">Ví MoMo</label>
              </div>
            </div>
            {/* Order Button */}
            <button className="w-full mt-4 py-3 btn_order content_color font-semibold rounded">
              ĐẶT HÀNG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
