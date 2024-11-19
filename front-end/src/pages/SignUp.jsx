
import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
const SignUp = () => {
    const {navigate} = useContext(ShopContext)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prevState) => !prevState);};
      
    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(prevState => !prevState);
    };
  return (
    <div>
            <div className="px-10">
      <div className="flex justify-center items-center">
        <div className="w-1/2">
          <img src={assets.opening} className="w-full" alt="Opening" />
        </div>
        <div className="content_color flex flex-col items-center w-1/2 px-10">
          <h1 className="font-bold text-3xl mb-4">ĐĂNG KÝ TÀI KHOẢN</h1>
          <div className="flex flex-col gap-6 w-full mt-2">
            <input
              placeholder="Nhập email hoặc số điện thoại"
              className="w-4/5 h-12 px-4 bg_login text-base self-center login_text placeholder-stone-400"
            />
            <div className="relative w-4/5 self-center">
              <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Nhập mật khẩu"
                className="w-full h-12 px-4 bg_login text-base self-center login_text placeholder-stone-400 pr-12"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center text-gray-500"
              >
                {isPasswordVisible ? <BiSolidHide size={24} className = 'login_text' /> : <BiSolidShow size={24} className = 'login_text'/>}
              </button>
            </div>
            <div className="relative w-4/5 self-center">
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                placeholder="Nhập lại mật khẩu"
                className="w-full h-12 px-4 bg_login text-base self-center login_text placeholder-stone-400 pr-12"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute inset-y-0 right-4 flex items-center text-gray-500"
              >
                {isConfirmPasswordVisible ? <BiSolidHide size={24} className = 'login_text' /> : <BiSolidShow size={24} className = 'login_text'/>}
              </button>
            </div>
          </div>
          <div className="flex w-4/5 justify-between mt-2 text-sm">
            <p className="cursor-pointer" onClick={() => navigate('/login')}>Đăng nhập</p>
           
          </div>
          <button className="p-2 px-3 btn_color text_label font-bold mt-6 w-4/5">
            ĐĂNG KÝ
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignUp