import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';

const ProductDetail = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');

  const fetchProductData = () => {
    const selectedProduct = products.find((item) => item._id === productId);
    if (selectedProduct) {
      setProductData(selectedProduct);
      setImage(selectedProduct.image[0]);
    } else {
      console.log("Product not found");
    }
  };

  useEffect(() => {
    if (products) {
      fetchProductData();
    }
  }, [productId, products]);

  return productData ? (
    <div style={{ padding: '20px' }} className='main_bg content_color'>
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Sidebar images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                alt=""
                style={{
                  width: '120px',
                  marginBottom: '10px',
                  cursor: 'pointer',
                  border: image === item ? '2px solid #d2b48c' : '2px solid transparent',
                }}
              />
            ))}
          </div>
          {/* Main image */}
          <div style={{ width: '100%', backgroundColor: '#f5f5f5' }}>
            <img src={image} alt="" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </div>
        </div>

        {/* Product information */}
        <div className="flex-1 content_color">
          <h1 style={{ fontSize: '24px', fontWeight: '500', marginBottom: '10px' }}>{productData.name}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="" style={{ width: '20px' }} />
            ))}
            <img src={assets.star_dull_icon} alt="" style={{ width: '20px' }} />
          </div>
          <p style={{ fontSize: '32px', fontWeight: '600', }}>
            {productData.price} {currency}
          </p>
          <p style={{ marginTop: '20px', color: '#999999', maxWidth: '500px' }}>{productData.description}</p>

          {/* Wishlist and Add to Cart buttons */}
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
            <button onClick={() => addToCart(productId)}  style={{ color: '#d2b48c', border: '1px solid #d2b48c', padding: '8px 20px', borderRadius: '4px', cursor: 'pointer' }}>
            Thêm giỏ hàng
            </button>
            <button style={{ backgroundColor: '#d2b48c', color: '#1c1c1c', padding: '8px 20px', borderRadius: '4px', cursor: 'pointer' }}>
              Mua ngay
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className='mt-10'>
        <h2 className='text-xl font-semibold mb-5'>Sản phẩm liên quan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products
            .filter((item) => item._id !== productId) // Loại bỏ sản phẩm hiện tại
            .map((item) => (
              <ProductItem
                key={item._id}
                id={item._id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default ProductDetail;
