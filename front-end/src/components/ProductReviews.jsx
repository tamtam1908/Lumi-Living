import React, { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';
import avt from '../assets/avt.jpg';

const ProductReviews = () => {
  const [showAll, setShowAll] = useState(false);

  const allReviews = [
    {
      id: 1,
      name: "Tâm Hoàng",
      location: "Đắk Lắk, Việt Nam",
      rating: 4,
      avatar: avt,
      content: "Rất hài lòng với bộ bàn ghế vừa mua! Thiết kế thanh lịch, màu sắc hài hòa, tạo điểm nhấn nổi bật cho không gian phòng ăn. Chất liệu gỗ tự nhiên bền bỉ, ghế ngồi êm ái và có độ cao vừa phải. Chắc chắn sẽ giới thiệu cửa hàng cho bạn bè và người thân."
    },
    {
      id: 2,
      name: "Quang Phúc",
      location: "Long An, Việt Nam",
      rating: 4,
      avatar: avt,
      content: "Tôi rất hài lòng với bộ sofa mới mua từ cửa hàng. Thiết kế hiện đại, chất liệu cao cấp và cực kỳ thoải mái. Đặc biệt, dịch vụ giao hàng nhanh chóng và nhân viên rất nhiệt tình."
    },
    {
      id: 3,
      name: "Thái Sơn",
      location: "HCM, Việt Nam",
      rating: 5,
      avatar: avt,
      content: "Tôi thực sự ấn tượng với chất lượng của bộ bàn ghế này. Thiết kế sang trọng, mang lại cảm giác hiện đại nhưng vẫn rất ấm cúng cho phòng khách. Gỗ được xử lý kỹ lưỡng, không có bất kỳ vết nứt hay xước nào, chứng tỏ sự tỉ mỉ trong khâu hoàn thiện sản phẩm."
    },
    {
      id: 4,
      name: "Khả Ái",
      location: "Long Sơn, Bà Rịa - Vũng Tàu, Việt Nam",
      rating: 5,
      avatar: avt,
      content: "Thiết kế tinh tế, toát lên vẻ sang trọng, hiện đại nhưng vẫn giữ được sự ấm áp, gần gũi cho không gian phòng khách. Chất liệu gỗ được gia công cẩn thận, bề mặt hoàn hảo không tì vết, thể hiện sự chú trọng và tỉ mỉ trong từng chi tiết hoàn thiện."
    }
  ];

  // Hiển thị 3 reviews đầu tiên hoặc tất cả tùy thuộc vào state showAll
  const displayedReviews = showAll ? allReviews : allReviews.slice(0, 3);

  const ReviewStars = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className={`${
              index < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className=" py-8">
      <div className="space-y-6">
        {displayedReviews.map((review) => (
          <div 
            key={review.id} 
            className="flex gap-4 p-4 review-bg rounded-lg shadow-sm"
          >
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium review-color"><b>{review.name}</b></h3>
                <span className="text-sm review-color">|</span>
                <span className="text-sm review-color">{review.location}</span>
              </div>
              <ReviewStars rating={review.rating} />
              <p className="mt-2 review-color text-sm leading-relaxed">
                {review.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {allReviews.length > 3 && (
        <button 
          className="mt-6 mx-auto flex items-center gap-2  transition-colors"
          onClick={() => setShowAll(!showAll)}
        >
          <span className="review-color font-medium">
            {showAll ? 'Thu gọn' : 'Xem thêm'}
          </span>
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${
              showAll ? 'transform rotate-180' : ''
            }`}
          />
        </button>
      )}
    </div>
  );
};

export default ProductReviews;