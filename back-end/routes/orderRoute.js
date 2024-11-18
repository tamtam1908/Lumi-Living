import express from 'express'
import {placeOrder, placeOrderSmartBanking, placeOrderVNPay, placeOrderMomo, userOrders, updateStatus, allOrders} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

orderRouter.post('/list', adminAuth, allOrders) 
orderRouter.post('/status', adminAuth, updateStatus)

// payment feature
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/smartbanking', authUser, placeOrderSmartBanking)
orderRouter.post('/momo', authUser, placeOrderMomo)
orderRouter.post('/VNpay', authUser, placeOrderVNPay)


// user feature

orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter


