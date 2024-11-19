import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegCopyright } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="navbar_bg text-gray-400 pt-8 pb-2">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
          {/* Company Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold navbar_font">LUMILIVING.</h2>
            <div className="mt-4 space-y-2">
              <p className="navbar_font">Được thành lập 2024, là cửa hàng uy tín chuyên nội thất chất lượng cao.</p>
              <p className="navbar_font">Thủ Đức, Thành phố Hồ Chí Minh</p>
              <p className="navbar_font">0769828141</p>
              <p className="navbar_font">
                <a href="http://www.lumiliving.com" className="hover:text-gray-300">www.lumiliving.com</a>
              </p>
            </div>
          </div>

          {/* About Us */}
          <div className="text-center sm:text-left navbar_font">
            <h3 className="text-lg font-semibold navbar_font">Về chúng tôi</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <NavLink to="/collection" className="hover:text-gray-300">
                  Bộ sưu tập
                </NavLink>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">Sản phẩm bán chạy</a>
              </li>
              <li>
                <NavLink to="/sharing" className="hover:text-gray-300">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/sharing" className="hover:text-gray-300">
                  Tips
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-gray-300">
                  Hỗ trợ
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="text-center sm:text-left navbar_font">
            <h3 className="text-lg font-semibold navbar_font">Sản phẩm</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <NavLink to="/product?category=Ghế" className="hover:text-gray-300">
                  Ghế
                </NavLink>
              </li>
              <li>
                <NavLink to="/product?category=Sofa" className="hover:text-gray-300">
                  Sofa
                </NavLink>
              </li>
              <li>
                <NavLink to="/product?category=Bàn" className="hover:text-gray-300">
                  Bàn
                </NavLink>
              </li>
              <li>
                <NavLink to="/product?category=Tủ" className="hover:text-gray-300">
                  Tủ
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center sm:text-left navbar_font">
            <h3 className="text-lg font-semibold navbar_font">Theo dõi Lumi</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a 
                  href="https://www.facebook.com/" 
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/" 
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/" 
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="border-t mt-8"></div>
        <div className="flex items-center gap-2 my-2 content_color justify-center italic w-full " > <p>Lumiliving </p><FaRegCopyright /> <p>All copyrights reserved.</p> </div>
      </div>
    </footer>
  );
};

export default Footer;