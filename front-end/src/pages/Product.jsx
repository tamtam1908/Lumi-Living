import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import ProductBanner from '../components/ProductBanner';
import dropdown_icon from '../assets/dropdown_icon.png'

const Product = () => {
  const { products } = useContext(ShopContext);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [material, setMaterial] = useState([]);
  const [sortType, setSortType] = useState('relevant');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromUrl = params.get('category');
    if (categoryFromUrl) {
      setCategory([categoryFromUrl]);
    }
  }, [location]);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const toggleMaterial = (e) => {
    if (material.includes(e.target.value)) {
      setMaterial(prev => prev.filter(item => item !== e.target.value));
    } else {
      setMaterial(prev => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let filtered = products.slice();

    if (category.length > 0) {
      filtered = filtered.filter(item => category.includes(item.category));
    }

    if (material.length > 0) {
      filtered = filtered.filter(item => material.every(mat => item.material.includes(mat)));
    }

    setFilterProducts(filtered);
  };

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

  useEffect(() => {
    applyFilter();
  }, [category, material, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  const isChecked = (value, type) => {
    if (type === 'category') {
      return category.includes(value);
    }
    return material.includes(value);
  };

  // Filter Content Component để tái sử dụng
  const FilterContent = () => (
    <>
      {/* Category Filter */}
      <div className='mb-8 pl-5'>
        <p className='mb-4 text-sm font-medium'>DANH MỤC SẢN PHẨM</p>
        <div className='flex flex-col gap-2 text-sm font-light text-grey-700 pl-5'>
          {['Bàn', 'Ghế', 'Tủ', 'Kệ', 'Đèn', 'Sofa'].map((cat) => (
            <label key={cat} className='flex items-center gap-2 cursor-pointer '>
              <input
                className="w-3"
                type="checkbox"
                value={cat}
                checked={isChecked(cat, 'category')}
                onChange={toggleCategory}
              />
              <span>{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material Filter */}
      <div className='mb-8 pl-5'>
        <p className='mb-4 text-sm font-medium'>CHẤT LIỆU SẢN PHẨM</p>
        <div className='flex flex-col gap-2 text-sm font-light text-grey-700 pl-5'>
          {['Kim loại', 'Gỗ tự nhiên', 'Da lộn', 'cotton', 'Nhựa'].map((mat) => (
            <label key={mat} className='flex items-center gap-2 cursor-pointer '>
              <input
                className="w-3"
                type="checkbox"
                value={mat}
                checked={isChecked(mat, 'material')}
                onChange={toggleMaterial}
              />
              <span>{mat}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div>
      <ProductBanner />
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-5 main_bg content_color'>
        {/* Mobile Filter Toggle */}
        <div className='sm:hidden w-full p-4 ml-10'>
          <div 
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className='flex items-center gap-2 cursor-pointer'
          >
            <h2 className='text-xl font-medium'><b>BỘ LỌC</b></h2>
            <img 
              className={`h-3 transition-transform duration-200 ${showMobileFilter ? 'rotate-180' : ''}`} 
              src={dropdown_icon} 
              alt="toggle filter"
            />
          </div>
          {/* Mobile Filter Content */}
          {showMobileFilter && (
            <div className='mt-4 p-4 border-t'>
              <FilterContent />
            </div>
          )}
        </div>

        {/* Desktop Filter - Always visible */}
        <div className='hidden sm:block w-1/4 p-4 min-h-screen'>
          <div className='sticky top-4'>
            <h2 className='text-xl font-medium mb-6'>BỘ LỌC</h2>
            <FilterContent />
          </div>
        </div>

        {/* Product Grid */}
        <div className='w-full sm:w-3/4 p-4'>
          <div className='flex justify-between items-center mb-6'>
            <h1 className="text-xl font-bold">TẤT CẢ SẢN PHẨM</h1>
            <select 
              onChange={(e) => setSortType(e.target.value)} 
              className='border-2 bg_form text-sm px-4 py-2 rounded banner-content'
            >
              <option value="low-high">Thấp đến cao</option>
              <option value="high-low">Cao đến thấp</option>
              <option value="relevant">Giữ Nguyên</option>
            </select>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6'>
            {filterProducts.map((item, index) => (
              <ProductItem 
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;