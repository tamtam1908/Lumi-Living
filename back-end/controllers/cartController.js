import userModel from "../models/userModel.js"

// add products to user cart
// add products to user cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {};

        // Kiểm tra xem itemId đã có trong giỏ hàng hay chưa
        if (cartData[itemId]) {
            cartData[itemId] += 1; // Nếu có, tăng số lượng
        } else {
            cartData[itemId] = 1; // Nếu chưa có, thêm sản phẩm mới với số lượng = 1
        }

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Added to cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// update user cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, quantity } = req.body;
        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {};

        // Cập nhật số lượng sản phẩm
        if (cartData[itemId]) {
            cartData[itemId] = quantity;
            await userModel.findByIdAndUpdate(userId, { cartData });
            res.json({ success: true, message: "Cart updated successfully" });
        } else {
            res.json({ success: false, message: "Item not found in cart" });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// get user cart
const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;
        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {};
        
        res.json({ success: true, cartData });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};
const removeFromCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;

        // Tìm người dùng trong cơ sở dữ liệu
        const userData = await userModel.findById(userId);
        let cartData = userData.cartData || {};

        // Kiểm tra xem itemId có tồn tại trong giỏ hàng hay không
        if (cartData[itemId]) {
            delete cartData[itemId]; // Xóa sản phẩm khỏi giỏ hàng
            await userModel.findByIdAndUpdate(userId, { cartData });
            res.json({ success: true, message: "Item removed from cart" });
        } else {
            res.json({ success: false, message: "Item not found in cart" });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addToCart, updateCart, getUserCart, removeFromCart };