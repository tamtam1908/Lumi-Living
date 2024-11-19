import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const PromotionBanner = () => {
  const promotions = [
    { id: 1, img: assets.bfsale },
    { id: 2, img: assets.gardensale },
  ];

  const [currentPosition, setCurrentPosition] = useState(0);

  // Chuyển tiếp
  const nextPromotion = () => {
    setCurrentPosition((preIndex) => (preIndex + 1) % promotions.length);
  };

  // Quay lại
  const prePromotion = () => {
    setCurrentPosition((preIndex) => (preIndex - 1 + promotions.length) % promotions.length);
  };

  // Render
  return (
    <div className="main_bg">
      <h1 className = "text-4xl text-center content_color font-bold p-5">ƯU ĐÃI</h1>
      <div className="relative w-full h-[550px] overflow-hidden">
        {promotions.map((promotion, index) => (
          <NavLink 
            key={promotion.id} 
            to='/promotiondetails' 
            className={`absolute transition-opacity duration-700 ease-in-out ${index === currentPosition ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url(${promotion.img})`,
              width: '100%',
              height: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
          </NavLink>
        ))}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg navbar_btn"
          onClick={prePromotion}
        >
          &#10094;
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg navbar_btn"
          onClick={nextPromotion}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default PromotionBanner;
