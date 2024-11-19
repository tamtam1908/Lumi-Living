import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { MdFavorite } from "react-icons/md";
import ProductItem from "../components/ProductItem";
import ProductReviews from "../components/ProductReviews";
import { toast } from "react-toastify";
// import ChevronLeft from "@mui/icons-material/ChevronLeft";
// import ChevronRight from "@mui/icons-material/ChevronRight";

const ProductDetail = () => {
  const { productId } = useParams();

  const {
    products,
    currency,
    addToCart,
    addToWishlist,
    removeFromWishlist,
    wishlist,
    token,
    setToken,
    navigate,
  } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");

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

  const handleToggleWishlist = (product) => {
    if (wishlist.find((item) => item._id === product._id)) {
      removeFromWishlist(product);
    } else {
      addToWishlist(product);
    }
  };

  return productData ? (
    <div

  style={{
    paddingTop: "50px",
    paddingBottom: "50px",
    paddingLeft: "20px", // Giảm padding cho màn hình nhỏ
    paddingRight: "20px", // Giảm padding cho màn hình nhỏ
  }}
  className="main_bg content_color"
>
  <div className="flex flex-col sm:flex-row gap-6">
    {/* Sidebar images */}
    <div className="flex-1 flex flex-col sm:flex-row gap-3 sm:gap-6">
      <div className="flex sm:flex-col overflow-hidden justify-between">
        {productData.image.map((item, index) => (
          <img
            onClick={() => setImage(item)}
            src={item}
            key={index}
            alt=""
            className="w-28 sm:w-24 mb-3 cursor-pointer"

            style={{
              border: image === item ? "2px solid #d2b48c" : "2px solid transparent",
            }}
          />
        ))}
      </div>

      {/* Main image */}
      <div className="w-full sm:w-[60%] bg-gray-100">
        <img src={image} alt="" className="w-full h-auto object-contain" />

      </div>
    </div>

    {/* Product information */}
    <div className="flex-1 content_color">
      <h1 className="text-2xl font-semibold mb-4">{productData.name}</h1>
      <div className="flex items-center gap-2">
        <img src={assets.star_dull_icon} alt="" className="w-5" />
      </div>
      <p className="text-4xl font-semibold mt-5">
        {productData.price.toLocaleString('vi-VN')} {currency}
      </p>
      <p className="navbar_font mt-5 max-w-xl">{productData.description}</p>
      
      {/* Buttons */}
      <div className="mt-5 flex gap-4 flex-col sm:flex-row">
        <button 
          onClick={() => {
            if (!token) {
              toast.error('Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng!');
              navigate('/login');
            } else {
              toast.success('Thêm vào giỏ hàng thành công!');
              addToCart(productId); 
            }
          }} 
          className="border border-[#d2b48c] py-2 px-6 rounded-md cursor-pointer text-[#d2b48c]"
        >
          Thêm giỏ hàng
        </button>
        <button className="bg-[#d2b48c] text-black py-2 px-6 rounded-md cursor-pointer">
          Mua ngay
        </button>
        
        {/* Wishlist Button */}
        <button 
          onClick={() => {
            if (!token) {
              toast.error('Bạn cần đăng nhập để thêm sản phẩm vào wishlist!');
              navigate('/login');
            } else {
              handleToggleWishlist(productData); 
            }
          }}
          className="flex items-center gap-2"
        >
          <MdFavorite
            className={`text-xl cursor-pointer ${
              wishlist.find((item) => item._id === productData._id)
                ? "text-red-500"
                : "text-white-500"
            }`}
          />
          <span>Thêm vào yêu thích</span>
        </button>
      </div>
    </div>
  </div>

  {/* Additional Product Details */}
  <div className="mt-10">
    <div className="mb-5 text-xl">
      <b>MÔ TẢ CHI TIẾT</b>
    </div>
    <div>
      <div className="mb-2">
        <b>Màu sắc: </b> Trắng/đen/xanh
      </div>
      <div className="mb-2">
        <b>Kích thước: </b> {productData.size}
      </div>
      <div className="mb-2 text-justify">
        <b>Mô tả: </b> {productData.description}
      </div>
      <div className="mb-2">
        <b>Chất liệu sản phẩm: </b> {productData.material}
      </div>
      <div className="mb-2 text-justify">
        <b>Ý tưởng thiết kế: </b> LumiLiving hướng đến việc tạo ra không gian sống hiện đại, tinh tế...
      </div>
    </div>
  </div>

  {/* Product Reviews */}
  <ProductReviews />

  {/* Related Products */}
  <div className="mt-10">
    <h2 className="text-xl font-semibold mb-5">SẢN PHẨM LIÊN QUAN</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products
        .filter((item) => item._id !== productId)
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
