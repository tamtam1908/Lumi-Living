import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { MdFavorite, MdArrowBack } from "react-icons/md";
import { ImBin } from "react-icons/im";
import { NavLink } from 'react-router-dom';

const Wishlist = () => {
  const { products, wishlist, addToWishlist, removeFromWishlist } = useContext(ShopContext);
  const [wishlistData, setWishlistData] = useState([]);

  useEffect(() => {
    const tempData = wishlist.map((wishlistItem) => {
      const product = products.find((item) => item._id === wishlistItem._id);
      return product ? { ...wishlistItem, ...product } : null;
    }).filter(Boolean);
    
    setWishlistData(tempData);
  }, [wishlist, products]);

  const handleAddToWishlist = (product) => addToWishlist(product);

  return (
    <div className="content_font pb-10 flex flex-col md:flex-row justify-center gap-10 px-5">
      <div className="w-full md:w-[60%]">
        <NavLink to='/product/' >
          <div className="flex pt-5 px-5 pre_color gap-1 pl-2">
            <MdArrowBack className="text-xl" />
            <h1 className="text-base pre_color font-medium">Tiếp tục mua sắm</h1>
          </div>
        </NavLink>
        
        <div className='custom_bg my-5 p-10'>
          <h1 className='content_color text-3xl font-medium'>Wishlist</h1>
          <div className='w-full h-[15px] border-b mb-2'></div>
          <p className='content_color text-lg pt-3'>Bạn có {wishlistData.length} sản phẩm trong wishlist</p>

          <div className='mt-5'>
            <div className="grid grid-cols-[3fr_1fr_1fr_0.5fr] py-2">
              <span className="font-medium content_color text-lg">Sản phẩm</span>
              <span className="font-medium content_color text-lg">Số lượng</span>
              <span className="font-medium content_color text-lg">Giá</span>
              <span></span>
            </div>

            {wishlistData.map((item, index) => (
              <div key={index} className="grid grid-cols-[3fr_1fr_1fr_0.5fr] py-4 product_bg rounded-lg mb-5">
                <div className="flex items-center gap-6 px-5">
                  <img className="w-[75px] h-[75px]" src={item.image[0] || require('../assets/default.jpg')} alt={item.name} />
                  <p className="text-xs sm:text-lg font-medium">{item.name}</p>
                </div>

                <div className="flex justify-center items-center">
                  <span className="text-lg font-medium">1</span>
                </div>

                <div className="flex justify-center items-center">
                  <p className="text-base">{item.price.toLocaleString()} VND</p>
                </div>

                <div className="flex justify-center items-center">
                  <ImBin onClick={() => removeFromWishlist(item._id)} className="cursor-pointer" />
                </div>
              </div>
            ))}


          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
