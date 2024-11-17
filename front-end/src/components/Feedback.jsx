import React, { useState } from 'react';
import feedback1 from '../assets/feedback1.jpg';
import feedback2 from '../assets/feedback2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Feedback = () => {
  const feedbacks = [
    {
      content: "Tôi rất hài lòng với bộ sofa mới mua từ cửa hàng. Thiết kế hiện đại, chất liệu cao cấp và cực kỳ thoải mái. Đặc biệt, dịch vụ giao hàng nhanh chóng và nhân viên rất nhiệt tình.",
      name: "Tâm Hoàng",
      location: "Đắk Lắk, Việt Nam",
      avatar: feedback1,
    },
    {
      content: "Sản phẩm được đóng gói kỹ lưỡng, lắp đặt dễ dàng, và chất lượng vượt ngoài mong đợi. Màu sắc và kiểu dáng rất hợp với không gian bếp của tôi. Sẽ ủng hộ lần sau!!",
      name: "Tuấn Huy",
      location: "Tây Ninh, Việt Nam",
      avatar: feedback2,
    },
  ];

  const [currentFeedback, setCurrentFeedback] = useState(0);

  const handleNext = () => {
    setCurrentFeedback((currentFeedback + 1) % feedbacks.length);
  };

  const handlePrev = () => {
    setCurrentFeedback((currentFeedback - 1 + feedbacks.length) % feedbacks.length);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center main_bg text-white py-12">
      {/* Tiêu đề chính giữa */}
      <div className="flex justify-center items-center mb-8 w-full">
        <h1 className="text-4xl font-bold text-white content_color text-center">
          PHẢN HỒI CỦA KHÁCH HÀNG LUMILIVING
        </h1>
      </div>

      {/* Bình luận của khách hàng */}
      <div className="flex space-x-4 w-11/12 max-w-6xl">
        {[feedbacks[currentFeedback], feedbacks[(currentFeedback + 1) % feedbacks.length]].map((feedback, index) => (
          <div key={index} className="bg_form p-6 rounded-lg w-1/2 shadow-lg bg_form-transparent banner-content-color">
            <FontAwesomeIcon icon={faQuoteLeft} className="text-2xl mb-4 block" />
            <p className="mb-4">{feedback.content}</p>
            <div className="flex items-center">
              <img src={feedback.avatar} alt={`Profile picture of ${feedback.name}`} className="w-10 h-10 rounded-full mr-4 object-cover" />
              <div>
                <p className="font-bold">{feedback.name}</p>
                <p className="text-[#917F6C]">{feedback.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nút điều hướng */}
      <div className="flex justify-between w-11/12 max-w-6xl mt-6 ">
        <button onClick={handlePrev} className="bg_form px-7 py-2 rounded-full hover:border">
          <FontAwesomeIcon icon={faArrowLeft} className="banner-content-color"/>
        </button>
        <button onClick={handleNext} className="bg_form px-7 py-2 rounded-full hover:border">
          <FontAwesomeIcon icon={faArrowRight} className="banner-content-color"/>
        </button>
      </div>
    </div>
  );
};

export default Feedback;
