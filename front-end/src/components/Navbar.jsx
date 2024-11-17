import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets'
import {NavLink} from 'react-router-dom'
import SearchBar from './Searchbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
const {navigate,getCartCount} = useContext(ShopContext)
  return (
    <div className = 'flex items-center justify-between py-5 navbar_bg px-5'>
      <NavLink to = '/'>
        <h1 className="custom-gold text-3xl font-bold cursor-pointer">LUMILIVING</h1>
      </NavLink>
      <ul className='hidden sm:flex gap-5 text-sm font-medium'>
        <NavLink to = '/about' className = 'flex flex-col items-center gap-1 navbar_font'>
          <p className = 'cursor-pointer  font-medium'>VỀ CHÚNG TÔI</p>
          <hr className = 'w-2/4 border-none h-[1.5px] bg-[#d9a86d] hidden'/>
        </NavLink>
        <NavLink to = '/product/' className = 'flex flex-col items-center gap-1 navbar_font'>
          <p className = 'cursor-pointer font-medium'>SẢN PHẨM</p>
          <hr className = 'w-2/4 border-none h-[1.5px] bg-[#d9a86d] hidden'/>
        </NavLink>

        <NavLink to = '/collection' className = 'flex flex-col items-center gap-1 navbar_font'>
          <p className = 'cursor-pointer  font-medium'>BỘ SƯU TẬP</p>
          <hr className = 'w-2/4 border-none h-[1.5px] bg-[#d9a86d] hidden'/>
        </NavLink>

        <NavLink to = '/promotion' className = 'flex flex-col items-center gap-1 navbar_font'>
          <p className = 'cursor-pointer  font-medium'>KHUYẾN MÃI</p>
          <hr className = 'w-2/4 border-none h-[1.5px] bg-[#d9a86d] hidden'/>
        </NavLink>

        <NavLink to = '/sharing' className = 'flex flex-col items-center gap-1 navbar_font'>
          <p className = 'cursor-pointer font-medium'>GÓC CHIA SẺ</p>
          <hr className = 'w-2/4 border-none h-[1.5px] bg-[#d9a86d] hidden'/>
        </NavLink>

        <NavLink to = '/contact' className = 'flex flex-col items-center gap-1 navbar_font'>
          <p className = 'cursor-pointer font-medium '>LIÊN HỆ</p>
          <hr className = 'w-2/4 border-none h-[1.5px] bg-[#d9a86d] hidden'/>
        </NavLink>
      </ul>
      <div className = 'flex items-center gap-5'>
        <SearchBar onSearch={(query) => console.log(query)} className = 'cursor-pointer'/>
      </div>
      <div className='flex items-center gap-5'>
        <div className='group relative'>
          <NavLink to = "./wishlist">
            <FontAwesomeIcon icon={faHeart} className='w-5 h-5 cursor-pointer navbar_font ' alt="Wishlist" />
          </NavLink>
        </div>
        <div>
          <NavLink to = "./cart">
            <FontAwesomeIcon icon={faShoppingCart} className='w-5 h-5 cursor-pointer navbar_font ' alt="Cart" />
            <p className = 'absolute right-[50px] top-[16px]  w-4 text-center leading-4 bg-[#FE7865] text-white aspect-square rounded-full text-[8px] '>{getCartCount()}</p>
          </NavLink>
        </div>
        <div className='group relative'>
          <FontAwesomeIcon icon={faUser} className='w-5 h-5 cursor-pointer navbar_font' alt="Profile" />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-10 '>
            <div className='flex flex-col gap-2 w-36 py-2  px-2 bg-slate-100 account_text rounded account_bg'>
              {/* <p className='cursor-pointer  font-medium'>Tài khoản của tôi</p>
              <p className='cursor-pointer  font-medium'>Đơn hàng của tôi</p>
              <p className='cursor-pointer  font-medium'>Đăng xuất</p> */}
              <p className='cursor-pointer  w-full text-center' onClick={() => navigate('/login')} >Đăng nhập </p>
              <p className='cursor-pointer  w-full text-center' onClick={() => navigate('/signup')}>Đăng ký  </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
