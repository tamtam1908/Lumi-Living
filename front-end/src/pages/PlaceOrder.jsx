import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PlaceOrder = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const location = useLocation();
  const { cartData, deliveryFee, totalPrice, currency } = location.state || {}; 

  // Fetch province list
  useEffect(() => {
    fetch('https://provinces.open-api.vn/api/p/')
      .then((response) => response.json())
      .then((data) => setProvinces(data))
      .catch((error) => console.error('Error fetching provinces:', error));
  }, []);

  // Fetch districts based on selected province
  useEffect(() => {
    if (selectedProvince) {
      fetch('https://provinces.open-api.vn/api/d/')
        .then((response) => response.json())
        .then((data) => {
          // Filter districts based on province code
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

  return (
    <div className='flex justify-center content_font '>
      <div className="flex flex-col sm:flex-row justify-between gap-32 pt-5 sm:pt-14 min-h-[80vh]">
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
        <div className=" content_color max-w-sm mx-auto">
          <h2 className="text-xl sm:text-2xl my-3 content_color">THÔNG TIN ĐƠN HÀNG</h2>

          {/* Cart Items */}
          {cartData && cartData.map((item, index) => {
            const totalItemPrice = item.price * item.quantity;
            return (
              <div key={index} className="flex justify-between py-2 border-b border-[#46403e] bg-transparent last:border-none">
                <p className="">{item.name} x {item.quantity}</p>
                <p>{totalItemPrice} {currency}</p>
              </div>
            );
          })}

          {/* Subtotal */}
          <div className="flex justify-between py-2 border-b border-[#46403e] bg-transparent">
            <p className="">TẠM TÍNH</p>
            <p>{totalPrice} {currency}</p>
          </div>

          {/* Delivery Fee */}
          <div className="flex justify-between py-2 border-b border-[#46403e] bg-transparent">
            <p className="">PHÍ GIAO HÀNG</p>
            <p>{deliveryFee === 0 ? 'Giao hàng miễn phí' : `${deliveryFee}`}</p>
          </div>

          {/* Total */}
          <div className="flex justify-between py-2 mt-2 font-semibold text-lg">
            <p>TỔNG</p>
            <p>{totalPrice} {currency}</p>
          </div>

          {/* Order Button */}
          <button className="w-full mt-4 py-3 btn_order content_color font-semibold rounded">
            ĐẶT HÀNG
          </button>
        </div>

      </div>
    </div>
  );
};

export default PlaceOrder;
