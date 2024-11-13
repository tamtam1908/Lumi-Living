// import React from 'react'
// import { assets } from '../assets/assets'
// import {NavLink} from 'react-router-dom'
// import SearchBar from './Searchbar'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

// const Navbar = () => {

//   return (
//     <div className = 'flex items-center justify-between py-5 navbar_bg px-5'>
//       <NavLink to = '/'>
//         <h1 className="custom-gold text-3xl font-bold cursor-pointer">LUMILIVING</h1>
//       </NavLink>
//       <ul className='hidden sm:flex gap-5 text-sm font-medium'>
//         <NavLink to = '/about' className = 'flex flex-col items-center gap-1 navbar_font'>
//           <p>VỀ CHÚNG TÔI</p>
//           <hr className = 'w-2/4 border-none h-[1.5px] border hidden'/>
//         </NavLink>
//         <NavLink to = '/product/' className = 'flex flex-col items-center gap-1 navbar_font'>
//           <p>SẢN PHẨM</p>
//           <hr className = 'w-2/4 border-none h-[1.5px] border hidden'/>
//         </NavLink>

//         <NavLink to = '/collection' className = 'flex flex-col items-center gap-1 navbar_font'>
//           <p>BỘ SƯU TẬP</p>
//           <hr className = 'w-2/4 border-none h-[1.5px] bg-brown-300 hidden'/>
//         </NavLink>

//         <NavLink to = '/promotion' className = 'flex flex-col items-center gap-1 navbar_font'>
//           <p>KHUYẾN MÃI</p>
//           <hr className = 'w-2/4 border-none h-[1.5px] border hidden'/>
//         </NavLink>

//         <NavLink to = '/sharing' className = 'flex flex-col items-center gap-1 navbar_font'>
//           <p>GÓC CHIA SẺ</p>
//           <hr className = 'w-2/4 border-none h-[1.5px] border hidden'/>
//         </NavLink>

//         <NavLink to = '/contact' className = 'flex flex-col items-center gap-1 navbar_font'>
//           <p>LIÊN HỆ</p>
//           <hr className = 'w-2/4 border-none h-[1.5px] border hidden'/>
//         </NavLink>
//       </ul>
//       <div className = 'flex items-center gap-5'>
//         <SearchBar onSearch={(query) => console.log(query)} className = 'cursor-pointer'/>
//       </div>
//       <div className='flex items-center gap-5'>
//         <div className='group relative'>
//           <NavLink to = "./wishlist">
//             <FontAwesomeIcon icon={faHeart} className='w-5 h-5 cursor-pointer navbar_font ' alt="Wishlist" />
//           </NavLink>
//         </div>
//         <div>
//           <NavLink to = "./cart">
//             <FontAwesomeIcon icon={faShoppingCart} className='w-5 h-5 cursor-pointer navbar_font ' alt="Cart" />
//           </NavLink>
//         </div>
//         <div>
//           <NavLink>
//             <FontAwesomeIcon icon={faUser} className='w-5 h-5 cursor-pointer navbar_font ' alt="Profile" />
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';
import SearchBar from './Searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const toggleProfileMenu = () => {
    setShowProfileMenu((prevState) => !prevState);
  };

  return (
    <div className='flex items-center justify-between py-5 navbar_bg px-5'>
      <NavLink to='/'>
        <h1 className="custom-gold text-3xl font-bold cursor-pointer">LUMILIVING</h1>
      </NavLink>
      <ul className='hidden sm:flex gap-5 text-sm font-medium'>
        <NavLink to='/about' className='flex flex-col items-center gap-1 navbar_font'>
          <p>VỀ CHÚNG TÔI</p>
          <hr className='w-2/4 border-none h-[1.5px] border hidden' />
        </NavLink>
        {/* Other NavLinks */}
        <NavLink to='/product/' className='flex flex-col items-center gap-1 navbar_font'>
          <p>SẢN PHẨM</p>
          <hr className='w-2/4 border-none h-[1.5px] border hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1 navbar_font'>
          <p>BỘ SƯU TẬP</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-brown-300 hidden' />
        </NavLink>
        <NavLink to='/promotion' className='flex flex-col items-center gap-1 navbar_font'>
          <p>KHUYẾN MÃI</p>
          <hr className='w-2/4 border-none h-[1.5px] border hidden' />
        </NavLink>
        <NavLink to='/sharing' className='flex flex-col items-center gap-1 navbar_font'>
          <p>GÓC CHIA SẺ</p>
          <hr className='w-2/4 border-none h-[1.5px] border hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1 navbar_font'>
          <p>LIÊN HỆ</p>
          <hr className='w-2/4 border-none h-[1.5px] border hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-5'>
        <SearchBar onSearch={(query) => console.log(query)} className='cursor-pointer' />
      </div>
      <div className='flex items-center gap-5'>
        <div className='group relative'>
          <NavLink to="./wishlist">
            <FontAwesomeIcon icon={faHeart} className='w-5 h-5 cursor-pointer navbar_font' alt="Wishlist" />
          </NavLink>
        </div>
        <div>
          <NavLink to="./cart">
            <FontAwesomeIcon icon={faShoppingCart} className='w-5 h-5 cursor-pointer navbar_font' alt="Cart" />
          </NavLink>
        </div>
        <div className='relative'>
          <FontAwesomeIcon
            icon={faUser}
            className='w-5 h-5 cursor-pointer navbar_font'
            alt="Profile"
            onClick={toggleProfileMenu}
          />

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg" style={{ zIndex: 50 }}>
              <NavLink to="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Tài khoản
              </NavLink>
              <NavLink to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Đơn hàng
              </NavLink>
              <NavLink to="/logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Đăng xuất
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

