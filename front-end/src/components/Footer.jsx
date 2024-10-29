
import React from 'react';

const Footer = () => {
  return (
    <footer className="navbar_bg text-gray-400 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

        <div className = "px-5">
          <h2 className="text-2xl font-bold navbar_font">LUMILIVING.</h2>
          <p className="mt-4 navbar_font">Được thành lập 2024, là cửa hàng uy tín chuyên nội thất chất lượng cao.</p>
          <p className="mt-2 navbar_font"> Thủ Đức, Thành phố Hồ Chí Minh</p>
          <p className="mt-2 navbar_font"> 0769828141</p>
          <p className="mt-2 navbar_font"> <a href="http://www.lumiliving.com" className="navbar_font hover:text-gray-300">www.lumiliving.com</a></p>
        </div>


        <div className = "px-2">
          <h3 className="text-lg font-semibold navbar_font">Về chúng tôi</h3>
          <ul className="mt-4 navbar_font space-y-2">
            <li><a href="#" className="hover:navbar_font">Bộ sưu tập</a></li>
            <li><a href="#" className="hover:navbar_font">Sản phẩm bán chạy</a></li>
            <li><a href="#" className="hover:navbar_font">Blog</a></li>
            <li><a href="#" className="hover:navbar_font">Tips</a></li>
            <li><a href="#" className="hover:navbar_font">Hỗ trợ</a></li>
          </ul>
        </div>

        <div className = "">
          <h3 className="text-lg font-semibold navbar_font">Sản phẩm</h3>
          <ul className="mt-4 navbar_font space-y-2">
            <li><a href="#" className="hover:navbar_font">Ghế</a></li>
            <li><a href="#" className="hover:navbar_font">Sofa</a></li>
            <li><a href="#" className="hover:navbar_font">Bàn</a></li>
            <li><a href="#" className="hover:navbar_font">Tủ</a></li>
          </ul>
        </div>


        <div className = "">
          <h3 className="text-lg font-semibold navbar_font">Theo dõi Lumi</h3>
          <ul className="mt-4 navbar_font space-y-2">
            <li><a href="#" className="hover:navbar_font">Facebook</a></li>
            <li><a href="#" className="hover:navbar_font">Instagram</a></li>
            <li><a href="#" className="hover:navbar_font">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 mt-8 navbar_font"></div>
    </footer>
  );
};

export default Footer;
