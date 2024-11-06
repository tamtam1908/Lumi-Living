import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';

const Product = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }

  }

  const applyFilter = () => {
    let productsCopy = products.slice();
    if (category.length>0){
    productsCopy = productsCopy.filter(item => category.includes(item.category));
  }

    if (subCategory.length>0){
      productsCopy=productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort ((a,b)=>(a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort ((a,b)=>(b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(()=>{
    console.log(category);
  },[category])

  useEffect(()=>{
    applyFilter();
  }, [category, subCategory])

  useEffect(()=>{
    sortProduct();
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-col gap-1 sm:gap-10 main_bg content_color'>
      {/* Container for filter and sidebar */}
      <div className='flex flex-row justify-between items-start w-full p-10'>
        {/* Filter Section */}
        <div className=''>
          <p
            onClick={() => setShowFilter(!showFilter)}
            className='my-2 text-xl flex items-center cursor-pointer gap-2'
          >
            BỘ LỌC
            <img
              className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
              src={assets.dropdown_icon}
              alt=""
            />
          </p>
          {showFilter && (
            <div className='flex flex-col gap-5'>
              {/* LOC THEO DANH MUC */}
              <div className='pl-5 py-3 mt-6 flex-1'>
                <p className='mb-4 text-sm font-medium'>DANH MỤC SẢN PHẨM</p>
                <div className='flex flex-col gap-2 text-sm font-light text-grey-700'>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'ban'} onChange={toggleCategory}/> Bàn
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'ghe'} onChange={toggleCategory}/> Ghế
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'Gotunhien'} onChange={toggleCategory}/> Gỗ tự nhiên
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'dalon'} onChange={toggleCategory}/> Da lộn
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'vaicotton'} onChange={toggleCategory}/> Vải cotton
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'kimloai'} onChange={toggleCategory}/> Kim loại
                  </p>
                </div>
              </div>

              {/* LOC THEO CHAT LIỆU */}
              <div className='pl-5 py-3 mt-6 flex-1'>
                <p className='mb-3 text-sm font-medium'>CHẤT LIỆU SẢN PHẨM</p>
                <div className='flex flex-col gap-2 text-sm font-light text-grey-700'>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'kimloai'} onChange={toggleSubCategory}/> Kim loại
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'go'} onChange={toggleSubCategory}/> Gỗ tự nhiên
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'dalon'} onChange={toggleSubCategory}/> Da lộn
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'cotton'} onChange={toggleSubCategory}/> Vải cotton
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'soitonghop'} onChange={toggleSubCategory}/> Sợi tổng hợp
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'ni'} onChange={toggleSubCategory}/> Nỉ
                  </p>
                  <p className='flex gap-2'>
                    <input className="w-3" type="checkbox" value={'plastic'} onChange={toggleSubCategory}/> Plastic
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar - Hiển thị sản phẩm */}
        <div className='flex flex-col justify-between w-full'>
          <div className='flex justify-between text-base mt-4'>
            <h1 className="left-text text-xl font-bold">TẤT CẢ SẢN PHẨM</h1>
            <select onChange={(e) => setSortType(e.target.value)} className='border-2 bg_form text-sm px-2 banner-content' name="" id="">
              <option value="low-high">Thấp đến cao</option>
              <option value="high-low">Cao đến thấp</option>
              <option value="relevant">Giu Nguyen</option>
            </select>
          </div>
          {/* Hiển thị sản phẩm ở đây */}
          <br /> <br />
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
                filterProducts.map((item,index)=>(
                    <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
