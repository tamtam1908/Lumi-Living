import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import banner8 from '../assets/banner8.jpg';
import banner9 from '../assets/banner9.jpg';

const ProductBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const banners = [
    {
      id: 1,
      image: banner8,
      title: "LUMILIVING",
      subtitle: "Nơi phong cách gặp gỡ sự tiện nghi!",
      description: "Khám phá ngay những sản phẩm có thiết kế đẹp mắt, phong cách phong cách",
      alt: "Banner 8"
    },
    {
      id: 2, 
      image: banner9,
      title: "LUMILIVING",
      subtitle: "Nơi phong cách gặp gỡ sự tiện nghi!",
      description: "Khám phá ngay những sản phẩm có thiết kế đẹp mắt, phong cách phong cách",
      alt: "Banner 9"
    }
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!banners || banners.length === 0) return null;

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg mb-8">
      {/* Main banner image */}
      <div className="relative h-full w-full">
        <img
          src={banners[currentSlide].image}
          alt={banners[currentSlide].alt}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />

        <div className="absolute top-1/4 left-16 max-w-md text-left productBanner_bg p-5 rounded-lg">
          <h1 className="text-4xl font-bold banner-content mb-2">
            {banners[currentSlide].title}
          </h1>
          <h2 className="text-2xl navbar_font mb-4">
            {banners[currentSlide].subtitle}
          </h2>
          <p className="navbar_font mb-6"> <i>
            {banners[currentSlide].description}</i>
          </p>
          <button 
            onClick={scrollToProducts}
            className="px-6 py-2 btn_color text-white rounded hover:bg-[#968880] transition-colors poi"
          >
            Xem sản phẩm
          </button>
        </div>

        {/* Navigation buttons */}
        <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Slide number indicator */}
        <div className="absolute bottom-4 right-4 text-white">
          <span className="font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="mx-2">—</span>
          <span>{String(banners.length).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;