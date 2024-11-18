import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { MdFavorite } from "react-icons/md";
import ProductItem from "../components/ProductItem";
import ProductReviews from "../components/ProductReviews";

const ProductDetail = () => {
  const { productId } = useParams();
  const { products, currency, addToCart, addToWishlist, wishlist } =
    useContext(ShopContext);
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

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
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
                  console.log(item); // Log the selected image
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
            <img
              src={image}
              alt=""
              style={{ width: "auto", height: "100%" }}
            />
          </div>
        </div>

        {/* Product information */}
        <div className="flex-1 navbar_font">
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "500",
              marginBottom: "10px",
            }}
          >
            {productData.name}
          </h1>
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
          <div className="flex items-center mt-10">
            <button
              className="items-center"
              onClick={() => handleAddToWishlist(productData)}
            >
              <MdFavorite
                className={`text-xl cursor-pointer${
                  wishlist.find((item) => item._id === productData._id)
                    ? "text-red-500"
                    : "text-white-500"
                }`}
              />
            </button>
            <span className="pl-4">Thêm vào yêu thích</span>
          </div>
          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            <button
              onClick={() => addToCart(productId)}
              style={{
                backgroundColor: "#d2b48c",

                color: "#1c1c1c",
                padding: "8px 20px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Thêm giỏ hàng
            </button>

            {/* Wishlist button with color change */}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="mb-5 text-xl">
          <b>MÔ TẢ CHI TIẾT</b>
        </div>
        <div >
          {/* màu */}
          <div className="mb-1">
            <b>Màu sắc: </b> Trắng/đen/xanh
          </div>
          {/* kích thước */}
          <div className="mb-1">
            <b>Kích thước: </b> {productData.size}
          </div>
          {/* mô tả chi tiết */}
          <div style={{
              textAlign: "justify",
            }} className="mb-1">
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

      <ProductReviews/>

      {/* Related Products */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-5">SẢN PHẨM LIÊN QUAN</h2>
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
