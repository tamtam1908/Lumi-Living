import mongoose from 'mongoose';  // Sửa chính tả từ moogoose thành mongoose

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: { type: Array, required: true },
    amount: { type: Number, required: false },
    address: { type: Object, required: true },
    status: { type: String, required: true, default: 'Da dat hang' },
    paymentMethod: { type: String, required: false },
    payment: { type: Boolean, required: true, default: false },
    date: { type: Number, required: true },
});

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);
export default orderModel;
