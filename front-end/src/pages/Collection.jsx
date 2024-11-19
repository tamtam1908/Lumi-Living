import React, { useState, useEffect, useRef, useContext } from 'react';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../context/ShopContext';
import { MdFavorite } from 'react-icons/md';
import { FaShoppingCart } from "react-icons/fa";

const Collection = () => {
  const { products, addToCart, addToWishlist, wishlist, removeFromWishlist } = useContext(ShopContext);
  const images = [assets.col_bst1, assets.col_bst2, assets.col_bst3, assets.col_bst4];
  const carouselRef = useRef(null);
  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);



  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      console.log("Scrolled Left");
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      console.log("Scrolled Right");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setBackgroundImage(images[(currentIndex + 1) % images.length]);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  const handleImageChange = (index) => {
    setBackgroundImage(images[index]);
    setCurrentIndex(index);
  };

  const handleToggleWishlist = (product) => {
    if (wishlist.find(item => item._id === product._id)) {
      removeFromWishlist(product);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div>
      <div className="col_content">
        <img src={assets.col_banner} alt="Banner" className="w-full h-full object-cover" />

        <div className="col_content_1">
          <p className="content_left_1">
            Sài Gòn không chỉ là nguồn cảm hứng. Sài Gòn chính là nguồn tài nguyên vô tận của những điều kì diệu nhất.
            Kết hợp sự tự nhiên của gỗ, vững chãi của thép, kiên cường của kính, sang trọng của da, SAGO mạnh mẽ như cá tính toả sáng của Sài Gòn và người dân thành phố trẻ.
            Trải nghiệm khoảng trời tự do bên trong Sài Gòn cùng SAGO Concept cùng những sản phẩm đường nét chắc gọn, tối giản nhưng hoàn mỹ. Chính sự tiết chế đó mà SAGO Concept là giải pháp nội thất đặc biệt dành cho những tâm hồn tự do và không ngừng theo đuổi những cảm hứng mới.
          </p>
          <span><img src={assets.col_sago} alt="" /></span>
        </div>

        <img src={assets.col_2} alt="" />

        <div className="col_content_2">
          <span><img src={assets.col_3} alt="" /></span>
          <p>SAGO Concept không chỉ đơn thuần là lựa chọn nội thất mà còn là phong cách sống dành cho những ai yêu thích sự tự do, phóng khoáng...</p>
        </div>

        <h3 className='text-center font-bold text-white text-2xl'>SẢN PHẨM THUỘC BỘ SƯU TẬP</h3>

        <div className="relative">
          <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div ref={carouselRef} className="carousel-container flex overflow-x-scroll no-scrollbar space-x-4 p-4 cursor-pointer ">
            {products.map((product) => (
              <div key={product._id} className="product-card">
                {product.discount && <div className="badge discount">-{product.discount}%</div>}
                {product.isNew && <div className="badge new">New</div>}
                <img src={product.image[0]} alt={product.name}  />
                <div className="product-info">
                  <p className="product-name">{product.name}</p>
                  {product.oldPrice && <p className="old-price">{product.oldPrice.toLocaleString('vi-VN')}₫</p>}
                  <p className="new-price">{product.price.toLocaleString('vi-VN')}₫</p>
                  <div className="card-icons">
                    <button onClick={() => handleToggleWishlist(product)}>
                      <MdFavorite
                        className={`text-xl cursor-pointer ${wishlist.find(item => item._id === product._id) ? 'text-red-500' : 'text-gray-500'}`}
                      />
                    </button>
                   
                    <button className="icon"  onClick={() => addToCart(product._id)}>
                      <FaShoppingCart className = 'text_product cursor-pointer'/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div> 

        <div className="relative h-[550px] flex items-center justify-center bg-cover bg-center bst" style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          {/* Các nút thay đổi hình ảnh nền */}
        </div>
      </div>
    </div>

  );
};

export default Collection;
