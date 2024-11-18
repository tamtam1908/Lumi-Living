import React, { useState, useEffect, useRef, useContext } from 'react';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadset, faCheckCircle, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';



const Collection = () => {
  const images = [
    assets.col_bst1,
    assets.col_bst2,
    assets.col_bst3,
    assets.col_bst4
  ];
  const {id, image, name, price } = useContext(ShopContext)
  const productImage = image?.[0] || assets.placeholderImage;
  // Khai báo carouselRef bằng useRef để tham chiếu đến container của sản phẩm
  const carouselRef = useRef(null);

  // Hàm để cuộn qua trái
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Hàm để cuộn qua phải
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setBackgroundImage(images[(currentIndex + 1) % images.length]);
    }, 3000); // Thay đổi hình ảnh sau mỗi 3 giây

    return () => clearInterval(interval); // Cleanup khi component unmount
  }, [currentIndex, images]);

  const handleImageChange = (index) => {
    setBackgroundImage(images[index]);
    setCurrentIndex(index);
  };
  
  return (
    
    <div> {/* Main container */}
      <div className="col_content">
        <img
          src={assets.col_banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />

        <div className="col_content_1">
          <p className="content_left_1">
            Sài Gòn không chỉ là nguồn cảm hứng.
            Sài Gòn chính là nguồn tài nguyên vô tận của những điều kì diệu nhất.
            Kết hợp sự tự nhiên của gỗ, vững chãi của thép, kiên cường của kính, sang trọng của da, SAGO mạnh mẽ như cá tính toả sáng của Sài Gòn và người dân thành phố trẻ.
            Trải nghiệm khoảng trời tự do bên trong Sài Gòn cùng SAGO Concept cùng những sản phẩm đường nét chắc gọn, tối giản nhưng hoàn mỹ. Chính sự tiết chế đó mà SAGO Concept là giải pháp nội thất đặc biệt dành cho những tâm hồn tự do và không ngừng theo đuổi những cảm hứng mới.
          </p>
          <span><img src={assets.col_sago} alt="" /></span>
        </div>

        <img src={assets.col_2} alt="" />

        <div className="col_content_2">
          <span><img src={assets.col_3} alt="" /></span>
          <p>SAGO Concept không chỉ đơn thuần là lựa chọn nội thất mà còn là phong cách sống dành cho những ai yêu thích sự tự do, phóng khoáng. Mỗi sản phẩm đều mang trong mình hơi thở của Sài Gòn - một thành phố năng động, đa sắc màu, nơi mà mọi giới hạn được xóa nhòa để mở ra những trải nghiệm mới. Hãy cùng SAGO Concept khám phá không gian sống mang đậm dấu ấn của sự tối giản nhưng vẫn đảm bảo tính thẩm mỹ và chức năng, phù hợp cho những ai luôn khát khao đổi mới và tìm kiếm cảm hứng.</p>
        </div>

        <h3>SẢN PHẨM THUỘC BỘ SƯU TẬP</h3>
        <div>
      <div className="col_content">
        {/* Content and banner */}
        <img
          src={assets.col_banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />

        {/* Product item link */}
        <Link
          to={`/product/${id || ""}`} // Fallback to an empty string if id is undefined
          className="product-item cursor-pointer"
          style={{
            color: '#000000',
            textDecoration: 'none',
            backgroundColor: '#EEE9E4',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            transition: 'transform 0.3s ease-in-out',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div style={{ overflow: 'hidden' }}>
            <img
              src={productImage}
              alt={name || 'Product Name'} // Fallback to a placeholder name if name is undefined
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                transition: 'transform 0.3s ease-in-out',
              }}
              className="hover:scale-110"
            />
          </div>
          <p
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#333',
              marginTop: '15px',
            }}
          >
            {name || 'Product Name'}
          </p>
          <p
            style={{
              fontSize: '0.9rem',
              color: '#666',
              marginTop: '5px',
            }}
          >
            {price
              ? `${price.toLocaleString('vi-VN')} VND`
              : 'Price Not Available'}
          </p>
        </Link>
      </div>
    </div>


          {/* Carousel sản phẩm */}
          {/* <div
            ref={carouselRef}
            className="carousel-container flex overflow-x-scroll no-scrollbar space-x-4 p-4"
          >
            <div className="product-card">
              <div className="badge discount">-30%</div>
              <div className="badge new">New</div>
              <img src={assets.col_banan} alt="" />
              <div className="product-info">
                <p className="product-name">Bộ bàn ăn HONEY</p>
                <p className="old-price">8,350,000₫</p>
                <p className="new-price">7,950,000₫</p>
                <div className="card-icons">
                  <button className="icon">❤</button>
                  <button className="icon">🛒</button>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="badge discount">-30%</div>
              <div className="badge new">New</div>
              <img src={assets.col_bancafe} alt="" />
              <div className="product-info">
                <p className="product-name">Bàn cafe LUKI</p>
                <p className="old-price">3,350,000₫</p>
                <p className="new-price">1,950,000₫</p>
                <div className="card-icons">
                  <button className="icon">❤</button>
                  <button className="icon">🛒</button>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="badge discount">-30%</div>
              <img src={assets.col_banannho} alt="Bàn ăn nhỏ, bàn cafe" />
              <div className="product-info">
                <p className="product-name">Bàn ăn nhỏ, bàn cafe</p>
                <p className="old-price">3,350,000₫</p>
                <p className="new-price">2,250,000₫</p>
                <div className="card-icons">
                  <button className="icon">❤</button>
                  <button className="icon">🛒</button>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="badge new">New</div>
              <div className="badge discount">-30%</div>
              <img src={assets.col_bancafelabu} alt="Bàn cafe LABU" />
              <div className="product-info">
                <p className="product-name">Bàn cafe LABU</p>
                <p className="old-price">2,350,000₫</p>
                <p className="new-price">2,250,000₫</p>
                <div className="card-icons">
                  <button className="icon">❤</button>
                  <button className="icon">🛒</button>
                </div>
              </div>
            </div>

            <div className="product-card">
              <div className="badge new">New</div>
              <div className="badge discount">-30%</div>
              <img src={assets.col_banda} alt="Bàn đá cao cấp" />
              <div className="product-info">
                <p className="product-name">Bàn đá</p>
                <p className="old-price">5,350,000₫</p>
                <p className="new-price">4,150,000₫</p>
                <div className="card-icons">
                  <button className="icon">❤</button>
                  <button className="icon">🛒</button>
                </div>
              </div>
            </div>
          </div>

          {/* Nút cuộn phải */}
          {/* <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div> */} 

        <div
          className="relative h-[550px] flex items-center justify-center bg-cover bg-center bst"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-30"></div>

          {/* Circle Buttons for Image Selection */}
          <div className="absolute top-4 flex space-x-4 justify-center w-full ">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${backgroundImage === images[index] ? 'main_bg' : 'border border-transparent'} hover:border-transparent`}
                onClick={() => handleImageChange(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Collection;
