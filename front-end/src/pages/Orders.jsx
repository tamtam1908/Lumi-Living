import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';

const Orders = () => {
  // Lấy giá trị từ ShopContext
  const { backendUrl, token, currency,  products } = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]); // State lưu danh sách đơn hàng

  // Hàm tải dữ liệu đơn hàng từ API
  const loadOrderData = async () => {
    try {
      if (!token) return null; // Nếu không có token thì không gọi API

      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            allOrdersItem.push(item);
          });
        });
        setOrderData(allOrdersItem.reverse());
      }

    } catch (error) {
      console.error('Lỗi khi tải dữ liệu đơn hàng:', error);
    }
  };

  // Gọi API khi `token` thay đổi
  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className='py-12 px-4 md:px-8 main_bg'>
      {/* Tiêu đề chính */}
      <div className='text-center mb-8'>
        <h2 className='text-3xl font-semibold content_color py-3'>
          ĐƠN HÀNG CỦA TÔI
        </h2>
      </div>

      <div>
        {orderData && orderData.length > 0 ? (
          orderData.map((item, index) => {
            // Find the corresponding product data by matching item.productId
            const productData = products.find((product) => product._id === item.productId);
            return (
              <div
                key={index}
                className="py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg_login text_label mx-24"
                style={{
                  // border: '3px solid #d9a86d', // Đường viền màu nâu
                  borderRadius: '8px', // (Tùy chọn) Bo góc
                  marginBottom: '16px', // Khoảng cách giữa các đơn hàng
                  padding: '16px', // Tăng khoảng cách bên trong
                }}
              >
                {/* Phần thông tin sản phẩm */}
                <div className="flex items-start gap-6 text-sm">
                  <img
                    className="w-16 sm:w-20 rounded-md shadow-md"
                    src={productData && Array.isArray(productData.image) && productData.image[0]
                      ? productData.image[0]
                      : "default-image-url"} // Sử dụng hình ảnh từ productData
                    alt={item.name || "Sản phẩm"}
                  />
                  <div>
                    <p className="sm:text-lg font-semibold">{item.name}</p>
                    <div className="flex items-center gap-3 mt-2 text-base">
                      <p className="text-lg custom-gold">
                        {/* {item.totalItemPrice.toLocaleString('vi-VN')} {currency} */}
                        {item.totalItemPrice ? item.totalItemPrice.toLocaleString('vi-VN') : '0'} {currency}
                      </p>
                      <p className="text-lg custom-gold">
                        Số lượng: {item.quantity}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phần trạng thái và hành động */}
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-2">
                    <p className="w-2 h-2 rounded-full bg-green-500"></p>
                    <p className="text-sm md:text-base">Sẵn sàng giao</p>
                  </div>
                  <button className="border px-6 py-2 text-sm font-medium border_bg rounded-md hover:bg-[#36302C] content_color">
                    Theo dõi đơn hàng
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-lg" style={{ color: '#D0C8C6' }}>
            Không có đơn hàng nào!
          </p>
        )}
      </div>
    </div>
  );
};


export default Orders;

