import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { NavLink } from 'react-router-dom';
import SearchBar from './Searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // Trạng thái cho menu mobile
  const { navigate, token, setToken, setCartData } = useContext(ShopContext);

  const toggleProfileMenu = () => {
    setShowProfileMenu(prevState => !prevState);
  };

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartData({});
    toast.success('Bạn đã đăng xuất');
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(prevState => !prevState); // Toggle mobile menu
  };

  useEffect(() => {
    if (token) {
      setShowProfileMenu(false); // Đảm bảo profile menu không hiển thị khi đăng nhập thành công
    }
  }, [token]);  // Phụ thuộc vào token

  return (
    <div className='flex items-center justify-between py-5 navbar_bg px-5'>
      <NavLink to='/'>
        <h1 className="custom-gold text-3xl font-bold cursor-pointer">LUMILIVING</h1>
      </NavLink>

      {/* Menu Desktop */}
      <ul className='hidden lg:flex gap-5 text-sm font-medium'>
        <NavLink to='/about' className='flex flex-col items-center gap-1 navbar_font'>
          <p className='cursor-pointer font-medium'>VỀ CHÚNG TÔI</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-[#d9a86d] hidden' />
        </NavLink>
        <NavLink to='/product/' className='flex flex-col items-center gap-1 navbar_font'>
          <p className='cursor-pointer font-medium'>SẢN PHẨM</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-[#d9a86d] hidden' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1 navbar_font'>
          <p className='cursor-pointer font-medium'>BỘ SƯU TẬP</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-[#d9a86d] hidden' />
        </NavLink>
        <NavLink to='/promotion' className='flex flex-col items-center gap-1 navbar_font'>
          <p className='cursor-pointer font-medium'>KHUYẾN MÃI</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-[#d9a86d] hidden' />
        </NavLink>
        <NavLink to='/sharing' className='flex flex-col items-center gap-1 navbar_font'>
          <p className='cursor-pointer font-medium'>GÓC CHIA SẺ</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-[#d9a86d] hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1 navbar_font'>
          <p className='cursor-pointer font-medium'>LIÊN HỆ</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-[#d9a86d] hidden' />
        </NavLink>
      </ul>

      {/* Menu Mobile */}
      <div className='lg:hidden'>
        <button onClick={toggleMobileMenu} className="text-xl text-[#d9a86d] hover:text-[#c6925a]">☰</button> {/* Hamburger Menu Icon */}
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className='absolute top-0 right-0 bottom-0 left-0 bg-[#f4f4f4] z-50 navbar_bg'>
          <div className="flex justify-between px-5 py-3">
            <button onClick={() => setShowMobileMenu(false)} className="text-lg text-[#d9a86d] hover:text-[#c6925a]">Back</button> {/* Back button */}
          </div>
          <ul className='flex flex-col items-center gap-5 py-10'>
            <NavLink to='/about' onClick={() => setShowMobileMenu(false)} className='navbar_font'>VỀ CHÚNG TÔI</NavLink>
            <NavLink to='/product/' onClick={() => setShowMobileMenu(false)} className='navbar_font'>SẢN PHẨM</NavLink>
            <NavLink to='/collection' onClick={() => setShowMobileMenu(false)} className='navbar_font'>BỘ SƯU TẬP</NavLink>
            <NavLink to='/promotion' onClick={() => setShowMobileMenu(false)} className='navbar_font'>KHUYẾN MÃI</NavLink>
            <NavLink to='/sharing' onClick={() => setShowMobileMenu(false)} className='navbar_font'>GÓC CHIA SẺ</NavLink>
            <NavLink to='/contact' onClick={() => setShowMobileMenu(false)} className='navbar_font'>LIÊN HỆ</NavLink>
          </ul>
        </div>
      )}

      <div className='flex items-center gap-5'>
        <SearchBar onSearch={(query) => console.log(query)} className='cursor-pointer' />
      </div>

      <div className='flex items-center gap-5'>
        <div className='group relative'>
          <NavLink to={token ? "/wishlist" : "/login"} className="group relative">
            <FontAwesomeIcon icon={faHeart} className="w-5 h-5 cursor-pointer navbar_font" alt="Wishlist" />
          </NavLink>
        </div>
        <div>
          <NavLink to={token ? "/cart" : "/login"} className="group relative">
            <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5 cursor-pointer navbar_font" alt="Cart" />
          </NavLink>
        </div>
        <div className='relative'>
          <FontAwesomeIcon
            icon={faUser}
            className='w-5 h-5 cursor-pointer navbar_font'
            alt="Profile"
            onClick={() => {
              if (!token) {
                toast.error('Vui lòng đăng nhập!');
                navigate('/login');
              } else {
                toggleProfileMenu(); 
              }
            }}
          />
          {token && showProfileMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg" style={{ zIndex: 50 }}>
              <NavLink to="/account" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Tài khoản
              </NavLink>
              <NavLink to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Đơn hàng
              </NavLink>
              <p onClick={logout} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                Đăng xuất
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
