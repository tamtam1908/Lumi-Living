import React from 'react'

const Login = () => {
  return (
    <div>
      <div className = 'flex'>
        <div>
          <img/>
        </div>
        <div className = 'content_color'>
          <h1 className = 'font-bold text-3xl '>ĐĂNG NHẬP TÀI KHOẢN</h1>
          <p className = 'text-base'>Nhập email và mật khẩu của bạn:</p>
          <div className = 'flex flex-col gap-6 mt-8	'>
            <input placeholder='Nhập email hoặc số điện thoại ' className = 'w-[415px] h-[60px] bg_login'/> 
            <input placeholder='Nhập mật khẩu ' className = 'w-[415px] h-[60px] bg_login'/>
          </div>
          <div className = 'flex '>
            <p>Đăng ký tài khoản </p>
            <p>Quên mật khẩu</p>
          </div>
          <button className=" p-2 px-3 btn_color text_label font-bold ">
              ĐĂNG NHẬP
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login