// import React, { useContext, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';

// const Login = () => {

//   const Login = () => {
//     const [currentState, setCurrentState]  = useState('Log in');
//     const {token, setToken, navigate, backendUrl} =useContext(ShopContext)

//     const [name, setName] = useState('')
//     const [password, setPassword] = useState('')
//     const [email, setEmail] = useState('')

//     const onSubmitHandler = async (event) =>{
//       event.preventDefault();
//       try{
//         if (currentState === 'Log in'){
//           const  response = await axios.post(backendUrl)
//         } else{

//         }
//       } catch (error){

//       }
//     }
//   }

//   return (
//     <div>
//       <div onSubmit={onSubmitHandler} className = 'flex'>
//         <div>
//           <img/>
//         </div>
//         <div className = 'content_color'>
//           <h1 className = 'font-bold text-3xl '>ĐĂNG NHẬP TÀI KHOẢN</h1>
//           <p className = 'text-base'>Nhập email và mật khẩu của bạn:</p>
//           <div className = 'flex flex-col gap-6 mt-8	'>
//             <input onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Nhập email hoặc số điện thoại ' className = 'w-[415px] h-[60px] bg_login'/> 
//             <input onChange={(e)=>setPassword(e.target.value)} value={password} type='password' placeholder='Nhập mật khẩu ' className = 'w-[415px] h-[60px] bg_login'/>
//           </div>
//           <div className = 'flex '>
//             <p onClick={()=> setCurrentState('Login')}>Đăng ký tài khoản </p>
//             <p>Quên mật khẩu</p>
//           </div>
//           <button className=" p-2 px-3 btn_color text_label font-bold ">
//               ĐĂNG NHẬP
//           </button>
          
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Login

import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { setToken, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Login') {
        // Đăng nhập
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        console.log(response.data);
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        // Đăng ký
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        console.log(response.config.data)
        if (response.data.success) {
          setToken(response.data.token);

          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="flex">
        <div>
          <img alt="background" />
        </div>
        <div className="content_color">
          <h1 className="font-bold text-3xl">
            {currentState === 'Login'
              ? 'ĐĂNG NHẬP TÀI KHOẢN'
              : currentState === 'Register'
              ? 'ĐĂNG KÝ TÀI KHOẢN'
              : 'ĐĂNG KÝ NHANH'}
          </h1>
          <p className="text-base">
            {currentState === 'Login'
              ? 'Nhập email và mật khẩu của bạn:'
              : currentState === 'Register'
              ? 'Điền thông tin để đăng ký tài khoản:'
              : 'Thông tin cần thiết để đăng ký nhanh:'}
          </p>
          <div className="flex flex-col gap-6 mt-8">
            {(currentState === 'Register' || currentState === 'Sign up') && (
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Nhập tên của bạn"
                className="w-[415px] h-[60px] bg_login"
                style={{ color: '#6b4226' }}
              />
            )}
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Nhập email hoặc số điện thoại"
              className="w-[415px] h-[60px] bg_login"
              style={{ color: '#6b4226' }}
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Nhập mật khẩu"
              className="w-[415px] h-[60px] bg_login"
              style={{ color: '#6b4226' }}
            />
          </div>
          <div className="flex mt-4">
            <p onClick={() => setCurrentState(currentState === 'Login' ? 'Register' : 'Login')}>
              {currentState === 'Login' ? 'Đăng ký tài khoản' : 'Quay lại đăng nhập'}
            </p>
            <p className="ml-4" onClick={() => setCurrentState('Sign up')}>Đăng ký nhanh</p>
          </div>
          <button type="submit" className="p-2 px-3 btn_color text_label font-bold mt-4">
            {currentState === 'Login' ? 'ĐĂNG NHẬP' : currentState === 'Register' ? 'ĐĂNG KÝ' : 'ĐĂNG KÝ NHANH'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;



