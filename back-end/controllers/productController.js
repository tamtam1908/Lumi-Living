import { v2 as cloudinary } from "cloudinary"
import productModel from "../models/productModel.js"

// function cho them san pham

const addProduct = async (req, res) => {
    try {
        // Lấy dữ liệu từ body và kiểm tra sự tồn tại của nó
        const { name, price, description, category, size, material, bestseller } = req.body;
        
        // Kiểm tra xem các file có tồn tại trong req.files không
        const image1 = req.files?.image1 ? req.files.image1[0] : null;
        const image2 = req.files?.image2 ? req.files.image2[0] : null;
        const image3 = req.files?.image3 ? req.files.image3[0] : null;
        const image4 = req.files?.image4 ? req.files.image4[0] : null;

        // Lọc ra tất cả các hình ảnh không null
        const images = [image1, image2, image3, image4].filter(item => item !== null);
        
        let imagesURL = await Promise.all(
            images.map(async(item) => {
                let result = await cloudinary.uploader.upload(item.path,{resource_type:"image"});
                return result.secure_url
            })
        )

        const productData = {
            name,
            price: Number(price),
            description,
            category,
            bestseller: bestseller === "true" ? true : false,
            size,
            image: imagesURL,
            material: material || [],
            date: Date.now()
        }

        console.log(productData);

        const product = new productModel(productData);
        await product.save()
        // Trả lại thông báo thành công
        
        res.status(201).json({
            success: true,
            message: 'Product added successfully'
        });

    } catch (error) {
        console.log('Error adding product:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// function cho danh sach san pham
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({ success: true, products });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// function cho xoa san pham
const  removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message:"Product Removed!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// function cho san pham don le
const  singleProduct = async (req, res) => {
    try {
        const { productId } = req.body
        const product = await productModel.findById(productId);
        res.json({ success: true, product });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export {addProduct, removeProduct, listProduct, singleProduct}