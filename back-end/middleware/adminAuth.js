import jwt from 'jsonwebtoken'

const adminAuth = async (req, res, next) => {
    try{
        const {token} = req.headers
        if (!token) {
            return res.json({success: false, message: "Ban khong co quyen dang nhap, hay thu lai!"})
        }
        next()
    } catch (error){
        console.log(error)
        res.json({success: false, message: error.message})
    }
}
export default adminAuth;