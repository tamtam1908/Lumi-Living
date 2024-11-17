import orderModel from '../models/orderModel.js';// cod
import userModel from '../models/userModel.js'

const placeOrder = async(req, res) => {
    try {
        const {userId, items, amount, address} = req.body


        const orderData = {
            userId,
            items,
            address,
            amount,
            paymemtMethod: "COD",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData: {}})

        res.json({success: true, message: "Don hang da dat!"})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}


// smartbanking
const placeOrderSmartBanking = async(req, res) => {

}

// VNpay
const placeOrderVNPay = async(req, res) => {

}

// Momo
const placeOrderMomo = async(req, res) => {

}

// data for frontend
const userOrders = async(req, res) => {
    try {
        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({success:true, orders})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// update order status
const updateStatus = async(req, res) => {

}

// orders for admin
const allOrders = async(req, res) => {

}

export {placeOrder, placeOrderSmartBanking, placeOrderVNPay, placeOrderMomo, userOrders, updateStatus, allOrders}