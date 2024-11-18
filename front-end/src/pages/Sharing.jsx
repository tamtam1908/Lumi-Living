import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../context/ShopContext';

const Sharing = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { navigate } = useContext(ShopContext);
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
        { title: 'Bảo quản nội thất gỗ đúng cách', date: '13 tháng 09, 2024', imgSrc: assets.tip1, path: '/lam-the-nao-de-bao-quan-go-dung-cach' },
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

    const displayedTips = [
        tips[(currentTipIndex + 0) % tips.length],
        tips[(currentTipIndex + 1) % tips.length],
        tips[(currentTipIndex + 2) % tips.length]
    ];

    return (
      <div className="main_bg content_color">
        {/* Header Section */}
        <section className="flex flex-col md:flex-row p-4 md:p-10">
            {/* Text and Button */}
            <div className="md:w-1/3 flex flex-col text-center pt-4 md:pt-10">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 p-4 md:p-6">
                    CHÀO MỪNG BẠN ĐẾN VỚI GÓC CHIA SẺ CỦA CHÚNG TÔI!
                </h1>
                <p className="mb-6 px-2 md:px-0">
                    Tại đây, bạn sẽ tìm thấy những tin tức nổi bật nhất trong ngành nội thất. Hãy cùng khám phá những xu hướng mới, sản phẩm độc đáo và mẹo hay giúp không gian sống của bạn trở nên hoàn hảo hơn!
                </p>
                <button className="bg-white banner-content py-2 px-3 mx-auto rounded-md font-bold my-4 md:my-6 hover:scale-105">
                    KHÁM PHÁ NGAY
                </button>
            </div>
            
            {/* Image Carousel */}
            <div className="md:w-2/3 flex flex-col md:ml-6 mt-6 md:mt-0">
                <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    className="w-full h-40 md:h-64 rounded-lg object-cover transition-all duration-300 hover:scale-105"
                />
                
                {/* Small Images and Navigation */}
                <div className="flex space-x-2 md:space-x-5 mt-4">
                    <img
                        src={images[(currentIndex + 1) % images.length].src}
                        alt={images[(currentIndex + 1) % images.length].alt}
                        className="h-24 md:h-48 w-1/2 rounded-lg object-cover hover:scale-105"
                    />
                    <img
                        src={images[(currentIndex + 2) % images.length].src}
                        alt={images[(currentIndex + 2) % images.length].alt}
                        className="h-24 md:h-48 w-1/3 rounded-lg object-cover hover:scale-105"
                    />
                    
                    {/* Arrow for the third image */}
                    <button
                        onClick={handleNext}
                        className="flex items-center justify-center w-8 md:w-10 h-8 md:h-10 rounded-full border_bg border_bg-transparent banner-content"
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
                
                {/* Dots for the small images */}
                <div className="flex justify-center space-x-2 md:space-x-3 mt-4 mb-6 md:mb-10">
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
        <section className="py-10 md:py-20">
            <h2 className="text-center text-2xl md:text-4xl font-bold mb-6 md:mb-8">TIPS & TRICKS</h2>

            {/* Container for Tips */}
            <div className="relative flex flex-col items-center justify-center md:flex-row md:space-x-4 px-4 md:px-6">
                {/* Hiển thị 3 Tip Item */}
                <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 banner-content">
                    {displayedTips.map((tip, index) => (
                        <div
                            key={index}
                            className="w-full md:w-80 bg_form rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 fixed-tip-width"
                            onClick={() => navigate(tip.path)}
                            style={{ cursor: 'pointer' }}
                        >
                            <img src={tip.imgSrc} alt={tip.title} className="w-full h-40 md:h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-base md:text-lg font-semibold">{tip.title}</h3>
                                <p className="text-xs md:text-sm pt-2">{tip.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Nút Trái và Nút Phải cho màn hình nhỏ */}
            <div className="flex justify-center space-x-4 mt-6 md:hidden">
                <button
                    onClick={handlePrevTip}
                    className="px-3 py-2 bg_form rounded-full banner-content"
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button
                    onClick={handleNextTip}
                    className="px-3 py-2 bg_form rounded-full banner-content"
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>

            {/* Nút Trái và Nút Phải cho màn hình lớn */}
            <div className="relative hidden md:flex justify-between items-center px-4 md:px-6">
                <button
                    onClick={handlePrevTip}
                    className="top-0 left-0 md:-left-10 px-2 md:px-3 py-1 md:py-2 bg_form rounded-full banner-content"
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button
                    onClick={handleNextTip}
                    className="top-0 right-0 md:-right-10 px-2 md:px-3 py-1 md:py-2 bg_form rounded-full banner-content"
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>

            {/* Dots for Tips Navigation */}
            <div className="flex justify-center space-x-2 md:space-x-4 mt-6 md:mt-8">
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
