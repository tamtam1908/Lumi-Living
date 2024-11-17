import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS của react-toastify
import { assets } from '../assets/assets';

const Login = () => {
  const [currentState, setCurrentState] = useState('ĐĂNG NHẬP TÀI KHOẢN');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'ĐĂNG KÝ TÀI KHOẢN') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Đăng ký thành công!');
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          toast.success('Đăng nhập thành công!');
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <div className='flex justify-center items-start'>
      {/* Hình ảnh ở bên trái */}
      <div className='hidden sm:block w-2/5 mx-10'>
        <img 
          src= {assets.opening}
          alt='Mô tả hình ảnh'
          className='w-full h-auto object-cover'
        />
      </div>
      
      {/* Form đăng nhập/đăng ký ở bên phải */}
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-full sm:w-3/5 sm:max-w-96 m-auto mt-14 gap-4 content_color mb-14'>
        <div className='inline-flex items-center gap-2 mt-10'>
          <p className='prata-regular text-3xl content_color font-bold'>{currentState}</p>
        </div>
        
        {currentState === 'ĐĂNG NHẬP TÀI KHOẢN' && (
          <p>Nhập email và mật khẩu của bạn</p>
        )}
        
        {currentState === 'ĐĂNG NHẬP TÀI KHOẢN' ? '' : 
          <input 
            onChange={(e) => setName(e.target.value)} 
            value={name} 
            type="text" 
            className='w-full px-3 py-2 text_label bg_login' 
            placeholder='Nhập tên' 
            required 
          />
        }
        
        <input 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          type="email" 
          className='w-full px-3 py-2 text_label bg_login' 
          placeholder='Nhập email' 
          required 
        />
        
        <input 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          type="password" 
          className='w-full px-3 py-2 text_label bg_login' 
          placeholder='Nhập mật khẩu' 
          required 
        />

        <div className='w-full flex justify-between text-sm mt-[-8px] content_color'>
          {currentState === 'ĐĂNG NHẬP TÀI KHOẢN'
            ? <p onClick={() => setCurrentState('ĐĂNG KÝ TÀI KHOẢN')} className='cursor-pointer'>Tạo tài khoản mới</p>
            : <p onClick={() => setCurrentState('ĐĂNG NHẬP TÀI KHOẢN')} className='cursor-pointer'>Đăng nhập</p>
          }
          
          {currentState === 'ĐĂNG NHẬP TÀI KHOẢN' && (
            <p className='cursor-pointer'>Quên mật khẩu</p>
          )}
        </div>

        <button className='border_bg text_label px-8 py-2 mt-4 font-bold'>
          {currentState === 'ĐĂNG NHẬP TÀI KHOẢN' ? 'ĐĂNG NHẬP' : 'ĐĂNG KÝ'}
        </button>
      </form>
    </div>
  );
};

export default Login;
