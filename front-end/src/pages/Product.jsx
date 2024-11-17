import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';
import ProductBanner from '../components/ProductBanner';

const Product = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]); // Lọc theo danh mục
  const [material, setMaterial] = useState([]); // Lọc theo chất liệu
  const [sortType, setSortType] = useState('relevant');

  // Hàm để chọn/lọc danh mục
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  // Hàm để chọn/lọc chất liệu
  const toggleMaterial = (e) => {
    if (material.includes(e.target.value)) {
      setMaterial(prev => prev.filter(item => item !== e.target.value));
    } else {
      setMaterial(prev => [...prev, e.target.value]);
    }
  };

  // Hàm áp dụng bộ lọc
  const applyFilter = () => {
    let filtered = products.slice();

    // Lọc theo danh mục
    if (category.length > 0) {
      filtered = filtered.filter(item => category.includes(item.category));
    }

    // Lọc theo chất liệu
    if (material.length > 0) {
      filtered = filtered.filter(item => material.every(mat => item.material.includes(mat)));
    }

    setFilterProducts(filtered);
  };

  // Hàm sắp xếp sản phẩm
  const sortProduct = () => {
    let sorted = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(sorted.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(sorted.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  // useEffect cho các bộ lọc
  useEffect(() => {
    applyFilter();
  }, [category, material]);

  // useEffect cho sắp xếp
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div>
      <ProductBanner/>
    <div className='flex flex-col sm:flex-col gap-1 sm:gap-10 main_bg content_color'>

      <div className='flex flex-row justify-between items-start w-full p-10 gap-4'>
        <div>
          <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
            BỘ LỌC
            <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
          </p>
          {showFilter && (
            <div className='flex flex-col gap-5'>
              {/* Lọc theo Danh Mục */}
              <div className='pl-5 py-3 mt-6 flex-1 p-10'>
                <p className='mb-4 text-sm font-medium'>DANH MỤC SẢN PHẨM</p>
                <div className='flex flex-col gap-2 text-sm font-light text-grey-700'>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'Bàn'} onChange={toggleCategory}/> Bàn
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'Ghế'} onChange={toggleCategory}/> Ghế
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'Tủ'} onChange={toggleCategory}/> Tủ
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'Kệ'} onChange={toggleCategory}/> Kệ
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'Đèn'} onChange={toggleCategory}/> Đèn
                  </p>
                </div>
              </div>

              {/* Lọc theo Chất Liệu */}
              <div className='pl-5 py-3 mt-6 flex-1'>
                <p className='mb-3 text-sm font-medium'>CHẤT LIỆU SẢN PHẨM</p>
                <div className='flex flex-col gap-2 text-sm font-light text-grey-700'>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'Kim loại'} onChange={toggleMaterial}/> Kim loại
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'Gỗ tự nhiên'} onChange={toggleMaterial}/> Gỗ tự nhiên
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'Da lộn'} onChange={toggleMaterial}/> Da lộn
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'cotton'} onChange={toggleMaterial}/> Vải cotton
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'Nhựa'} onChange={toggleMaterial}/> Nhựa
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar - Hiển thị sản phẩm */}
        <div className='flex flex-col justify-between w-full'>
          <div className='flex justify-between text-base mt-2'>
            <h1 className="left-text text-xl font-bold">TẤT CẢ SẢN PHẨM</h1>
            <select onChange={(e) => setSortType(e.target.value)} className='border-2 bg_form text-sm px-2 banner-content'>
              <option value="low-high">Thấp đến cao</option>
              <option value="high-low">Cao đến thấp</option>
              <option value="relevant">Giữ Nguyên</option>
            </select>
          </div>
          <br /><br />
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item, index) => (
                <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product;

