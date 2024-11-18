import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadset, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Banner = () => {
  const images = [
    assets.banner5,
    assets.banner3,
    assets.banner4,
    assets.banner2
  ];

  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setBackgroundImage(images[(currentIndex + 1) % images.length]);
    }, 5000); // Đổi hình sau mỗi 5 giây

    return () => clearInterval(interval); // Dọn dẹp khi component unmount
  }, [currentIndex, images]);

  const handleImageChange = (index) => {
    setBackgroundImage(images[index]);
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative h-[850px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 md:h-full h-1/2"></div>

      {/* Circle Buttons for Image Selection */}
      <div className="absolute top-4 flex space-x-4 justify-center w-full">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${backgroundImage === images[index] ? 'main_bg' : 'border_bg border_bg-transparent'} hover:border_bg-transparent`}
            onClick={() => handleImageChange(index)}
          ></button>
        ))}
      </div>

      {/* Text Content with Semi-transparent Background */}
      <div className="absolute z-10 p-6 max-w-md banner-content bg-white bg-opacity-70 rounded-lg md:right-0 md:mr-10 mx-auto md:mx-0 md:text-left md:top-auto md:transform-none transform translate-y-[-50%] top-1/2">
        <h1 className="text-3xl font-bold mb-4 banner-content-color text-center">Stylish & Affordable Furniture Just For You</h1>
        <p className="text-gray-600 mb-10 text-justify px-6">
          Discover the perfect balance of style and value. Quality furniture, suitable for every space from living room to bedroom.
        </p>
        <NavLink to='/collection'>
          <button className="px-6 py-3 main_bg text-white font-semibold rounded-md hover:bg-gray-800 mx-auto block md:mt-4 md:mb-4 sm:mt-1 sm:mb-2">
            EXPLORE OUR COLLECTION
          </button>
        </NavLink>
      </div>

      {/* Bottom Section: Service Icons */}
      <div className="absolute bottom-0 w-full border_bg border_bg-transparent flex flex-col md:flex-row items-start md:items-center py-7 px-7 bg-[#AC9984]">
        <div className="flex flex-col md:flex-row items-start w-full mb-4 md:mb-0">
          <div className="flex items-center banner-content mb-4 md:mb-0 mr-0 md:mr-8">
            <FontAwesomeIcon icon={faTruck} className="w-10 h-10 mr-2 text_label" />
            <div className="flex flex-col">
              <span className="font-semibold text_label">GIAO HÀNG MIỄN PHÍ</span>
              <span className="text-sm text_label">cho mọi đơn hàng từ 3.000.000</span>
            </div>
          </div>
          <div className="flex items-center banner-content mb-4 md:mb-0 mr-0 md:mr-8">
            <FontAwesomeIcon icon={faHeadset} className="w-10 h-10 mr-2 text_label" />
            <div className="flex flex-col">
              <span className="font-semibold text_label">HỖ TRỢ 24/7</span>
              <span className="text-sm text_label">giải đáp mọi thắc mắc của khách hàng</span>
            </div>
          </div>
          <div className="flex items-center banner-content mb-4 md:mb-0">
            <FontAwesomeIcon icon={faCheckCircle} className="w-10 h-10 mr-2 text_label" />
            <div className="flex flex-col">
              <span className="font-semibold text_label">100% CHÍNH HÃNG</span>
              <span className="text-sm text_label">cung cấp sản phẩm chất lượng cao</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;