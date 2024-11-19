import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CiBank } from "react-icons/ci";
import { BsCashStack } from "react-icons/bs";
import { assets} from "../assets/assets";
import { IoBag } from "react-icons/io5";
import { MdOutlineNavigateNext } from "react-icons/md";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";


const PlaceOrder = () => {
  const {
    provinces,
    districts,
    selectedProvince,
    setSelectedProvince,
    selectedPayment,
    setSelectedPayment,
    currency,
    // delivery_fee,
    navigate,
    cartItems,
    token,
    setCartItems,
    handleProvinceChange,
  } = useContext(ShopContext);
  const location = useLocation();
  const { cartData, totalPrice, deliveryFee } = location.state || {};
  // const userModel = require('../models/user');

  const [showInput, setShowInput] = useState(false);
  const [method, setMethod] = useState("cod"); // Giả sử method là 'cod' nếu chưa được gán giá trị
  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:4001"; // Fallback to default if not defined

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    province: "",
    district: "",
    address: "",
    addressDetail: "",
    phone: "",
    email: "",
    note: "",
  });

  // File PlaceOrder.jsx hoặc tương tự (trong thư mục frontend của bạn)
  useEffect(() => {
    const loadOrderData = async () => {
      try {
        if (!token) return null;
  
        const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } });
  
        const orders = response.data.orders;
  
        // Truy xuất thêm hình ảnh cho từng sản phẩm trong đơn hàng
        const formattedOrders = await Promise.all(orders.map(async (order) => {
          const orderItems = await Promise.all(order.items.map(async (item) => {
            // Kiểm tra nếu _id của item không có giá trị
            if (!item._id) {
              return { ...item, image: "default-image-url" };  // Nếu không có _id, dùng ảnh mặc định
            }
  
            // Lấy dữ liệu sản phẩm từ API
            try {
              const productResponse = await axios.get(backendUrl + `/api/product/${item._id}`);
              const productData = productResponse.data;
  
              // Trả về dữ liệu item bao gồm ảnh
              return {
                ...item,
                name: productData.name,
                price: productData.price,
                image: productData.image[0] || "default-image-url", // Lấy ảnh từ productData hoặc ảnh mặc định
                totalItemPrice: productData.price * item.quantity, // Tính tổng giá trị sản phẩm
              };
            } catch (error) {
              console.error(`Error fetching product data for _id: ${item._id}`, error);
              return { ...item, image: "default-image-url", totalItemPrice: item.price * item.quantity };  // Nếu có lỗi, dùng ảnh mặc định
            }
          }));
  
          return {
            ...order,
            items: orderItems,
          };
        }));
  
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    loadOrderData();
  }, [token]);
  

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };



  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // const requiredFields = [
    //   "firstName",
    //   "lastName",
    //   "address",
    //   "phone",
    //   "email",
    // ];
  
    // for (let field of requiredFields) {
    //   if (!formData[field]) {
    //     toast.error(`Vui lòng điền đầy đủ thông tin đơn hàng!`); // Thông báo cho người dùng
    //     return;
    //   }
    // }
    const requiredFields = ["firstName", "lastName", "address", "phone", "email"];
    const emptyFields = requiredFields.filter(field => !formData[field]);

    if (emptyFields.length > 0) {
      toast.error("Vui lòng điền đầy đủ thông tin bắt buộc!");
      return; // Dừng việc gửi đơn hàng nếu thiếu thông tin
    }

    if (!selectedPayment) {
      toast.error("Vui lòng chọn phương thức thanh toán!");
      return; // Dừng việc gửi đơn hàng nếu chưa chọn phương thức thanh toán
    }

    try {
      if (cartData && cartData.length > 0) {
        const orderItems = cartData.map((item) => {
          return {
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            totalItemPrice: item.price * item.quantity,
            productId: item._id
            // image: productData.image[0],
          };
        });
  
        const amount = totalPrice + deliveryFee;
  
        const orderData = {
          address: formData,
          items: orderItems,
          paymentMethod: selectedPayment, 
          amount: amount,
        };

        switch (method) {
          case "cod": 
            const response = await axios.post(
              backendUrl + "/api/order/place",
              orderData,
              { headers: { token } }
            );

            if (response.data.success) {
              setCartItems([]);  // Xóa giỏ hàng sau khi đặt hàng thành công
              toast.success("Đặt hàng thành công!"); // Thêm thông báo thành công
              navigate("/orders"); // Chuyển hướng đến trang "Đơn hàng"

            } else {
              toast.error(response.data.message);
            }
            break;

          // Add other payment methods as needed (e.g., bank transfer)
        }
      } else {
        console.log("Cart is empty");
      }
    } catch (error) {
      // console.error("Error handling cart data:", error);
    }
  };

  
  return (
    <div className="pb-5">
      <div className="h-[45px] w-screen	pre_bar content-center	">
        <div className="text_bar flex gap-3 px-6 pre_text">
          <IoBag
            className="w-[18px] h-[18px] cursor-pointer"
            onClick={() => navigate("/cart")}
          />
          <MdOutlineNavigateNext className="w-[20px] h-[20px]" />
          <p className="text-sm font-thin">ĐẶT HÀNG</p>
        </div>
      </div>
      <div className="w-full max-w-[980px] h-auto bg-white mx-auto mt-12 border-checkout border-t-4 flex flex-col gap-2">
        <div className="flex gap-2 content-center">
          <p className="pl-2 text-[#a08257]">Bạn đã có mã ưu đãi?</p>
          <p
            onClick={() => setShowInput(!showInput)}
            className="text_label cursor-pointer hover:text-[#D9A86D]"
          >
            Ấn vào đây để nhập mã
          </p>
        </div>

        {showInput && (
          <div className="w-full px-2 pb-5">
            <p className="text_label">
              Nếu bạn có mã giảm giá, vui lòng nhập vào phía bên dưới
            </p>
            <input
              type="text"
              placeholder="Nhập mã ưu đãi"
              className="border border-stone-200 p-2 rounded-md w-full mt-3"
            />
            <button className="mt-3 px-4 py-2 bg-[#605040] text-white rounded-md hover:bg-[#D9A86D]">
              ÁP DỤNG
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-center content_font  ">
        <div className="flex flex-col sm:flex-row justify-between gap-12 mb-22 pt-5 sm:pt-14 min-h-[80vh]">
          {/* Delivery information */}
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col gap-6 w-full sm:max-w-[480px]"
          >
            <div className="text-xl sm:text-2xl my-3 content_color">
              <h1>THÔNG TIN THANH TOÁN</h1>
              <div className="space-y-4">
                <div>
                  <label className="text_form text-base">HỌ</label>
                  <input
                    onChange={onChangeHandler}
                    name="firstName"
                    value={formData.firstName}
                    className="border-b text-base border-[#46403e] bg-transparent w-full focus:outline-none"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label className="text_form text-base">TÊN</label>
                  <input
                    onChange={onChangeHandler}
                    name="lastName"
                    value={formData.lastName}
                    className="border-b text-base border-[#46403e] bg-transparent py-1 w-full focus:outline-none"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label className="text_form text-base">TỈNH THÀNH</label>
                  <select
                    onChange={(e) =>
                      setSelectedProvince(Number(e.target.value))
                    }
                    name="province"
                    // value={formData.province}
                    className="text-base border-b border-[#46403e] bg-transparent py-1 w-full focus:outline-none"
                    required
                  >
                    <option className="text_label" value="">
                      Chọn tỉnh thành
                    </option>
                    {provinces.map((province) => (
                      <option
                        key={province.code}
                        value={province.code}
                        className="text_label"
                      >
                        {province.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text_form text-base">QUẬN/HUYỆN</label>
                  <select onChange={onChangeHandler}
                    name="district"
                    value={formData.district}
                    className="border-b text-base border-[#46403e] bg-transparent py-1 w-full focus:outline-none"
                    disabled={!selectedProvince || districts.length === 0}
                    required
                  >
                    <option className="text_label" value="">
                      Chọn quận
                    </option>
                    {districts.map((district) => (
                      <option
                        key={district.code}
                        value={district.code}
                        className="text_label"
                      >
                        {district.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text_form text-base">ĐỊA CHỈ</label>
                  <input
                    onChange={onChangeHandler}
                    name="address"
                    value={formData.address}
                    type="text"
                    placeholder="Địa chỉ"
                    className="border-b text-base border-[#46403e] bg-transparent py-1 w-full focus:outline-none placeholder:text-stone-400"
                    required
                  />
                  <input
                    onChange={onChangeHandler}
                    name="addressDetail"
                    value={formData.addressDetail}
                    type="text"
                    placeholder="Apartment, suite, unit, etc. (optional)"
                    className="border-b text-base border-[#46403e] bg-transparent py-1 w-full mt-2 focus:outline-none content_color placeholder:text-stone-400 pt-2"
                  />
                </div>
                <div>
                  <label className="text_form text-base">SỐ ĐIỆN THOẠI</label>
                  <input
                    onChange={onChangeHandler}
                    name="phone"
                    value={formData.phone}
                    type="text"
                    className="border-b text-base border-[#46403e] bg-transparent py-1 w-full focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="text_form text-base">ĐỊA CHỈ EMAIL</label>
                  <input
                    onChange={onChangeHandler}
                    name="email"
                    value={formData.email}
                    type="email"
                    className="border-b text-base border-[#46403e] bg-transparent py-1 w-full focus:outline-none"
                    required
                  />
                </div>

                {/* Note/Order Remarks */}
                <div>
                  <label className="text_form text-base">
                    GHI CHÚ ĐƠN HÀNG (TÙY CHỌN)
                  </label>
                  <textarea
                    onChange={onChangeHandler}
                    name="note"
                    value={formData.note}
                    placeholder="Nhập ghi chú cho đơn hàng của bạn (nếu có)"
                    className="border text-base border-[#46403e] text_label w-full py-2 px-3 mt-2 focus:outline-none placeholder:text-stone-400"
                    rows="4"
                  />
                </div>
              </div>
            </div>
          </form>

          {/* Order information */}
          <div className=" content_color w-[450px] ">
            <h2 className="text-xl sm:text-2xl my-3 content_color">
              THÔNG TIN ĐƠN HÀNG
            </h2>

            {/* Cart Items */}
            {cartData &&
              cartData.map((item, index) => {
                const totalItemPrice = item.price * item.quantity;
                return (
                  <div
                    key={index}
                    className="flex justify-between py-2 border-b border-[#46403e] bg-transparent last:border-none"
                  >
                    <p className="content_color">
                      {item.name} x {item.quantity}
                    </p>
                    <p>
                      {totalItemPrice} {currency}
                    </p>
                  </div>
                );
              })}
            <div className="flex justify-between py-2 border-b border-[#46403e] bg-transparent">
              <p className="content_color">PHÍ GIAO HÀNG</p>
              <p>
                {deliveryFee === 0
                  ? "Giao hàng miễn phí"
                  : `${deliveryFee} ${currency}`}
              </p>
            </div>
            {/* Subtotal */}
            <div className="flex justify-between py-2 border-b border-[#46403e] bg-transparent">
              <p className="content_color">TẠM TÍNH</p>
              <p>
                {totalPrice} {currency}
              </p>
            </div>

            {/* Delivery Fee */}

            {/* Total */}
            <div className="flex justify-between py-2 mt-2 font-semibold text-lg">
              <p>TỔNG</p>
              <p>
                {totalPrice}{currency}
              </p>
            </div>
            {/* Payment method */}
            <div>
              <h1 className="content_color mb-2 mt-3">
                PHƯƠNG THỨC THANH TOÁN
              </h1>

              {/* Cash on Delivery */}
              <div className="flex items-center gap-3 mb-2">
                <input
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                  checked={selectedPayment === "cash"}
                  onChange={() => setSelectedPayment("cash")}
                />
                <BsCashStack className="w-[25px] h-full" />
                <label htmlFor="cash" className="text-base">
                  Thanh toán khi nhận hàng
                </label>
              </div>

              {/* Bank Transfer */}
              <div className="flex items-center gap-3 mb-2">
                <input
                  type="radio"
                  id="bank"
                  name="paymentMethod"
                  value="bank"
                  checked={selectedPayment === "bank"}
                  onChange={() => setSelectedPayment("bank")}
                />
                <CiBank className="w-[25px] h-full" />
                <label htmlFor="bank" className="text-base">
                  Thanh toán chuyển khoản qua ngân hàng
                </label>
              </div>

              {/* Bank Account Info */}
              {selectedPayment === "bank" && (
                <div className="m-8 mb-3 text-sm ml-16 text_form">
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
                  checked={selectedPayment === "vnpay"}
                  onChange={() => setSelectedPayment("vnpay")}
                />
                <img
                  src={assets.vnpay}
                  className="w-[25px] h-full"
                  alt="VNPay"
                />
                <label htmlFor="vnpay" className="text-base">
                  Thanh toán online qua cổng VNPay
                </label>
              </div>

              {/* MoMo */}
              <div className="flex items-center gap-3 mb-2">
                <input
                  type="radio"
                  id="momo"
                  name="paymentMethod"
                  value="momo"
                  checked={selectedPayment === "momo"}
                  onChange={() => setSelectedPayment("momo")}
                />
                <img src={assets.momo} className="w-[25px] h-full" alt="MoMo" />
                <label htmlFor="momo" className="text-base">
                  Ví MoMo
                </label>
              </div>
            </div>
            {/* Order Button */}
            <button
              type="submit"
              onClick={onSubmitHandler}
              className="w-full mt-4 py-3 btn_order content_color font-semibold rounded"
            >
              ĐẶT HÀNG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;