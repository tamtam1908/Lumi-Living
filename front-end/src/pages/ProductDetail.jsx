import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { MdFavorite } from "react-icons/md";
import ProductItem from "../components/ProductItem";
import ProductReviews from "../components/ProductReviews";
import { toast } from "react-toastify";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";

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
        paddingLeft: "50px",
        paddingRight: "50px",
      }}
      className="main_bg content_color"
    >
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Sidebar images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-hidden justify-between">
            {productData.image.map((item, index) => (
              <img
                onClick={() => {
                  setImage(item);
                }}
                src={item}
                key={index}
                alt=""
                style={{
                  width: "120px",
                  marginBottom: "10px",
                  cursor: "pointer",
                  border:
                    image === item
                      ? "2px solid #d2b48c"
                      : "2px solid transparent",
                }}
              />
            ))}
          </div>
          {/* Main image */}
          <div style={{ width: "100%", backgroundColor: "#f5f5f5" }}>
            <img src={image} alt="" style={{ width: "auto", height: "100%" }} />
          </div>
        </div>

        {/* Product information */}

        <div className="flex-1 content_color">
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "500",
              marginBottom: "10px",
            }}
          >
            {productData.name}
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img src={assets.star_dull_icon} alt="" style={{ width: "20px" }} />
          </div>
          <p style={{ fontSize: "32px", fontWeight: "600", marginTop: "20px" }}>
            {productData.price.toLocaleString("vi-VN")} {currency}
          </p>
          <p
            className="navbar_font"
            style={{ marginTop: "20px", maxWidth: "500px" }}
          >
            {productData.description}
          </p>
          {/* <p style={{ marginTop: "20px", color: "#999999" }}>
            <b>Chất liệu sản phẩm: </b> {productData.material}
          </p> */}
          {/* Wishlist and Add to Cart buttons */}
          <div
            style={{ marginTop: "20px", display: "flex", gap: "10px" }}
            className="flex-col"
          >
            {/* Wishlist button with color change */}
            <div>
              <button
                onClick={() => {
                  if (!token) {
                    toast.error(
                      "Bạn cần đăng nhập để thêm sản phẩm vào wishlist!"
                    );
                    navigate("/login");
                  } else {
                    handleToggleWishlist(productData);
                  }
                }}
              >
                <MdFavorite
                  className={`text-xl cursor-pointer ${
                    wishlist.find((item) => item._id === productData._id)
                      ? "text-red-500"
                      : "text-white-500"
                  }`}
                />
              </button>
              <span className="pl-4">Thêm vào yêu thích</span>{" "}
            </div>
            <button
              onClick={() => {
                if (!token) {
                  toast.error(
                    "Bạn cần đăng nhập để thêm sản phẩm vào giỏ hàng!"
                  );
                  navigate("/login");
                } else {
                  toast.success("Thêm vào giỏ hàng thành công!");
                  addToCart(productId);
                }
              }}
              style={{
                color: "#d2b48c",
                border: "1px solid #d2b48c",
                padding: "8px 20px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Thêm giỏ hàng
            </button>
            {/* <button style={{ backgroundColor: '#d2b48c', color: '#1c1c1c', padding: '8px 20px', borderRadius: '4px', cursor: 'pointer' }}>
              Mua ngay
            </button> */}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="mb-5 text-xl">
          <b>MÔ TẢ CHI TIẾT</b>
        </div>
        <div>
          {/* màu */}
          <div className="mb-1">
            <b>Màu sắc: </b> Trắng/đen/xanh
          </div>
          {/* kích thước */}
          <div className="mb-1">
            <b>Kích thước: </b> {productData.size}
          </div>
          {/* mô tả chi tiết */}
          <div
            style={{
              textAlign: "justify",
            }}
            className="mb-1"
          >
            <b>Mô tả: </b> {productData.description}
          </div>
          {/* chất liệu */}
          <div className="mb-1">
            <b>Chất liệu sản phẩm: </b> {productData.material}
          </div>
          {/* ý tưởng thiết kế */}
          <div
            className="mb-1"
            style={{
              textAlign: "justify",
            }}
          >
            <b>Ý tưởng thiết kế: </b>{" "}
            <span>
              LumiLiving hướng đến việc tạo ra không gian sống hiện đại, tinh
              tế, và đậm chất cá nhân, nơi mà nghệ thuật và công năng được hòa
              quyện một cách hoàn hảo. Lấy cảm hứng từ phong cách hiện đại kết
              hợp tối giản, nội thất của LumiLiving tập trung vào việc tối ưu
              hóa không gian, mang lại cảm giác thoáng đãng và sang trọng. Các
              gam màu trung tính như trắng, xám, be, và nâu nhạt được chọn làm
              chủ đạo, tạo nên sự hài hòa và nhẹ nhàng, trong khi các điểm nhấn
              màu sắc như xanh rêu, vàng mustard, hoặc cam đất giúp không gian
              trở nên ấm áp và nổi bật.
            </span>
          </div>
        </div>
      </div>

      {/* review */}

      <ProductReviews />

      {/* Related Products
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-5">SẢN PHẨM LIÊN QUAN</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      </div> */}
      {/* Related Products */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-5">SẢN PHẨM LIÊN QUAN</h2>
        <div className="relative  hide-scrollbar">
          {/* Previous button */}
          <button
            onClick={() => {
              const container = document.querySelector(".products-container");
              container.scrollBy({
                left: -container.offsetWidth,
                behavior: "smooth",
              });
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white hidden md:block"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Products container */}
          <div className="products-container overflow-x-auto flex gap-4 scroll-smooth hide-scrollbar">
            {products
              .filter((item) => item._id !== productId)
              .map((item) => (
                <div
                  key={item._id}
                  className="min-w-[calc(100%-16px)] sm:min-w-[calc(50%-16px)] md:min-w-[calc(33.333%-16px)] lg:min-w-[calc(25%-16px)]"
                >
                  <ProductItem
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                </div>
              ))}
          </div>

          {/* Next button */}
          <button
            onClick={() => {
              const container = document.querySelector(".products-container");
              container.scrollBy({
                left: container.offsetWidth,
                behavior: "smooth",
              });
            }}
            className="absolute right-0 top-1/2  z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white hidden md:block"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default ProductDetail;
