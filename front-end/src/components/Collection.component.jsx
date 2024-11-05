// src/components/Collection.component.jsx
import React from 'react';
import { assets } from '../assets/assets';
import './Collection.css';

const CollectionSection = () => {
  const items = [
    { id: 1, name: 'LOVESAC TABLE', image: assets.col_sofa1, link: '#details' },
    { id: 2, name: 'CLOUDY SOFA', image: assets.col_sofa2, link: '#details' },
    { id: 3, name: 'MENTAL CHAIR', image: assets.col_sofa3, link: '#details' },
    { id: 4, name: 'MILD CALE TABLE', image: assets.col_sofa4, link: '#details' },
    { id: 5, name: 'WOPA DINNING', image: assets.col_sofa5, link: '#details' },
  ];

  return (
    <div className="collection-comp">
      <h2>BỘ SƯU TẬP MỚI</h2>
      <p>
        Chúng tôi hân hạnh giới thiệu bộ sưu tập nội thất mới nhất, lấy cảm hứng từ xu hướng thiết kế hiện đại và sự tinh tế trong từng chi tiết. Bộ sưu tập mang đến những sản phẩm được thiết kế không chỉ để tôn vinh vẻ đẹp của không gian sống, mà còn tối ưu sự tiện nghi và thoải mái cho gia đình bạn.
      </p>

      <div className="collection-grid">
        {items.map(item => (
          <div key={item.id} className="collection-item">
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <div className="overlay-content">
                <h3>{item.title}</h3>
                <span>Xem chi tiết</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CollectionSection;
