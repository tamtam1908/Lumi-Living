import userModel from "../models/userModel.js"
// add products to user cart
const addToCart = async (req, res) => {
    try{
        const {userId, itemId, price} = req.body

        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        if (cartData[itemId]) {
            if (cartData[itemId][price]){
                cartData[itemId][price] += 1
            }
            else {
                cartData[itemId][price] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][price] = 1
        }

        await userModel.findByIdAndUpdate(userId, {cartData})

        res.json({success: true, message:"added to cart"})

    } catch (error){
        console.log(error)
        response.json({success: false, message: error.message})
    }
}

// update user cart
const updateCart = async (req, res) => {
    try {
        const {userId, itemId, quantity} = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        cartData[itemId][price] = quantity

        await userModel.findByIdAndUpdate(userId, {cartData})
        res.json({success: true, message: "Da cap nhat gio hang"})

    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}

// get user cart
const getUserCart = async (req, res) => {
    try {
        const {userId} = req.body
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;
        res.json({success: true, cartData});
    } catch (error) {
        console.log(error)
        res.json({success: false, message:error.message})
    }
}

export {addToCart, updateCart, getUserCart}