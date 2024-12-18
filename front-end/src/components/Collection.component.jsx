import React from 'react';
import { assets } from '../assets/assets';
import { NavLink } from 'react-router-dom';

const CollectionSection = () => {
  return (
    <div className="collection-comp text-center main_bg content_color px-10 py-10">
      <h2 className="text-4xl font-semibold mb-4">BỘ SƯU TẬP MỚI</h2>
      <p className="mb-8">
        Chúng tôi hân hạnh giới thiệu bộ sưu tập nội thất mới nhất, lấy cảm hứng từ xu hướng thiết kế hiện đại và sự tinh tế trong từng chi tiết. Bộ sưu tập mang đến những sản phẩm được thiết kế không chỉ để tôn vinh vẻ đẹp của không gian sống, mà còn tối ưu sự tiện nghi và thoải mái cho gia đình bạn.
      </p>

      <div className="flex justify-center flex-wrap">
        <div className="flex flex-col items-end relative mb-8 lg:mb-0">
          <div className='absolute top-[170px] left-[-55px] h-[791px] w-[345px] border-b border-t border-[#AB967F] bg-transparent'>
            <NavLink
              to="#details"

              className="product-label absolute top-[285px] left-[-6px] w-full text-center"

            >
              <h1 className="text-4xl content_color font-semibold">LOVESAC TABLE</h1>
              <p className="text-sm content_color">Xem chi tiết</p>
            </NavLink>
          </div>
          <div className="relative group w-[447px] h-[767px] overflow-hidden">
            <img
              src={assets.cloudysofa}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <NavLink
              to="#details"

              className="product-label absolute bottom-10 right-2 w-full text-center"

            >
              <h1 className="text-4xl text_product font-semibold">CLOUDY SOFA</h1>
              <p className="text-sm content_color">Xem chi tiết</p>
            </NavLink>
          </div>
          <div className="relative group w-[731px] h-[398px] overflow-hidden">
            <img
              src={assets.mildcale}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <NavLink
              to="#details"

              className="product-label absolute bottom-2 right-2 w-full text-center"

            >
              <h1 className="text-4xl content_color font-semibold">MILD CALE TABLE</h1>
              <p className="text-sm content_color">Xem chi tiết</p>
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="relative group w-[424px] h-[497px] overflow-hidden">
            <img
              src={assets.mentalchair}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <NavLink
              to="#details"

              className="product-label absolute bottom-2 right-2 w-full text-center"
            >
              <p className='text-4xl text_product font-bold'>MENTAL CHAIR</p>
              <p className="text-sm content_color">Xem chi tiết</p>
            </NavLink>
          </div>
          <div className="relative group w-[424px] h-[668px] overflow-hidden">
            <img
              src={assets.dinningtable}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <NavLink
              to="#details"

              className="product-label absolute bottom-2 right-2 w-full text-center"
            >
              <p className='text-4xl content_color font-bold'>WOPA DINING</p>
              <p className="text-sm content_color">Xem chi tiết</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
