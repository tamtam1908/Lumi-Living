import React, {useContext, useEffect, useState, } from 'react';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../context/ShopContext';

const Sharing = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const {navigate,} = useContext(ShopContext);
    const images = [
        { src: assets.banner5, alt: 'Kitchen' },
        { src: assets.banner3, alt: 'Living Room' },
        { src: assets.banner4, alt: 'Dining Room' }
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    const [currentTipIndex, setCurrentTipIndex] = useState(0);

    const tips = [
        { title: 'Bảo quản nội thất gỗ đúng cách', date: '13 tháng 09, 2024', imgSrc: assets.tip1,path: '/lam-the-nao-de-bao-quan-go-dung-cach' 
        },
        { title: 'Cách lựa chọn màu sắc cho không gian sống hoàn hảo', date: '09 tháng 09, 2024', imgSrc: assets.tip2 },
        { title: 'Bí quyết bố trí nội thất nhỏ hẹp', date: '25 tháng 10, 2024', imgSrc: assets.tip3, path: '/bi-quyet-bo-tri-noi-that-nho-hep' },
        { title: 'Mẹo làm sạch đồ nội thất', date: '30 tháng 10, 2024', imgSrc: assets.tip4 },
        { title: 'Xu hướng thiết kế năm 2024', date: '01 tháng 11, 2024', imgSrc: assets.banner3 }
    ];

    const handleNextTip = () => {
        setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
    };

    const handlePrevTip = () => {
        setCurrentTipIndex((prevIndex) => (prevIndex - 1 + tips.length) % tips.length);
    };

    // Tạo danh sách các tip sẽ hiển thị dựa trên currentTipIndex
    const displayedTips = [
        tips[(currentTipIndex + 0) % tips.length],
        tips[(currentTipIndex + 1) % tips.length],
        tips[(currentTipIndex + 2) % tips.length]
    ];

    return (
      <div className="main_bg content_color">
        {/* Header Section */}
        <section className="flex p-10">
            {/* Text and Button */}
            <div className="w-1/3 flex flex-col text-center pt-10"> {/* Chiếm 30% chiều rộng */}
                <h1 className="text-3xl font-bold mb-4 p-6">
                    CHÀO MỪNG BẠN ĐẾN VỚI GÓC CHIA SẺ CỦA CHÚNG TÔI!
                </h1>
                <p className="mb-6">
                    Tại đây, bạn sẽ tìm thấy những tin tức nổi bật nhất trong ngành nội thất. Hãy cùng khám phá những xu hướng mới, sản phẩm độc đáo và mẹo hay giúp không gian sống của bạn trở nên hoàn hảo hơn!
                </p>
                <button className="bg-white banner-content py-2 px-3 mx-auto rounded-md font-bold my-6 hover:scale-105">
                    KHÁM PHÁ NGAY
                </button>
            </div>
            
            {/* Image Carousel */}
            <div className="w-2/3 flex flex-col ml-6"> {/* Chiếm phần còn lại */}
                {/* Large Image */}
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="w-full h-64 rounded-lg object-cover transition-all duration-300 hover:scale-105" // Ảnh lớn chiếm toàn bộ chiều rộng
                />
                
                {/* Small Images and Navigation */}
                <div className="flex space-x-5 mt-4">
                    <img
                        src={images[(currentIndex + 1) % images.length].src}
                        alt={images[(currentIndex + 1) % images.length].alt}
                        className="h-48 w-1/2 rounded-lg object-cover hover:scale-105" // Ảnh 2 có chiều cao bằng 3/5 chiều cao ảnh 1
                    />
                    <img
                        src={images[(currentIndex + 2) % images.length].src}
                        alt={images[(currentIndex + 2) % images.length].alt}
                        className="h-48 w-1/3 rounded-lg object-cover hover:scale-105" // Ảnh 3 có chiều cao bằng 3/5 chiều cao ảnh 1
                    />
                    
                    {/* Arrow for the third image */}
                    <button
                        onClick={handleNext}
                        className="flex items-center justify-center w-10 h-10 rounded-full border_bg border_bg-transparent banner-content"
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                
                {/* Dots for the small images */}
                <div className="flex justify-center space-x-3 mt-4 mb-10">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg_form' : 'border_bg border_bg-transparent'}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>

          {/* Tips & Tricks Section */}
        <section className="py-20">
            <h2 className="text-center text-4xl font-bold mb-8">TIPS & TRICKS</h2>
            <div className="relative flex items-center justify-center space-x-4 px-6">
                {/* Nút Trái */}
                <button
            onClick={handlePrevTip}
            className="absolute left-20 px-3 py-2 bg_form rounded-full banner-content"
            style={{ transform: 'translateX(-50%)' }}>
            <FontAwesomeIcon icon={faArrowLeft} />
                </button>

                {/* Hiển thị 3 Tip Item */}
                <div className="flex space-x-4 banner-content">
                    {displayedTips.map((tip, index) => (
                    <div
                    key={index}
                    className="w-80 bg_form rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                    onClick={() => navigate(tip.path)} // Điều hướng đến đường dẫn của tip
                    style={{ cursor: 'pointer' }}
                >
                    <img src={tip.imgSrc} alt={tip.title} className="w-full h-40 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">{tip.title}</h3>
                        <p className="text-sm pt-2">{tip.date}</p>
                    </div>
                </div>
                    ))}
                </div>

                {/* Nút Phải */}
                <button
                  onClick={handleNextTip}
                  className="absolute right-20 px-3 py-2 bg_form rounded-full banner-content"
                  style={{ transform: 'translateX(50%)' }} // Căn chỉnh lại vị trí
                >
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>

            {/* Dots for Tips Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
                {tips.slice(0, 4).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentTipIndex(index)}
                        className={`w-2 h-2 rounded-full ${index === currentTipIndex ? 'bg_form' : 'border_bg border_bg-transparent'}`}
                    ></button>
                ))}
            </div>
        </section>
      </div>
    );
};

export default Sharing;
