import React, { useState, useEffect } from 'react';

const WishlistItem = ({ item, quantity, onQuantityChange, onRemove }) => {
  const [imageSrc, setImageSrc] = useState(item.image ? item.image : require('../assets/default.jpg'));

  // Tăng số lượng
  const increaseQuantity = () => {
    onQuantityChange(item._id, quantity + 1);
  };

  // Giảm số lượng, đảm bảo không dưới 1
  const decreaseQuantity = () => {
    if (quantity > 1) {
      onQuantityChange(item._id, quantity - 1);
    }
  };

  // Thiết lập hình ảnh dự phòng nếu ảnh tải thất bại
  const handleImageError = () => setImageSrc(require('../assets/default.jpg'));

  useEffect(() => {
    setImageSrc(item.image ? item.image : require('../assets/default.jpg'));
  }, [item.image]);

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center space-x-4">
        <img 
          src={imageSrc} 
          alt={item.name} 
          className="w-16 h-16 object-cover rounded" 
          onError={handleImageError} 
        />
        <div>
          <h3 className="text-lg text-black font-bold">{item.name}</h3>
          <div className="flex items-center mt-2">
            <button 
              onClick={decreaseQuantity} 
              className="p-1 bg-gray-300 rounded text-black font-semibold"
            >
              -
            </button>
            <span className="mx-2 text-black">{quantity}</span>
            <button 
              onClick={increaseQuantity} 
              className="p-1 bg-gray-300 rounded text-black font-semibold"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="text-lg text-black font-semibold">
        {(item.price * quantity).toLocaleString()} VND
      </div>
      <button 
        onClick={onRemove} 
        className="ml-4 text-red-600 hover:text-red-800"
      >
        🗑️
      </button>
    </div>
  );
};

export default WishlistItem;