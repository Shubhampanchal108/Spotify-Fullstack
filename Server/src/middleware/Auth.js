import jwt from "jsonwebtoken"
import 'dotenv/config';

const jwt_Secret = process.env.JWT_SECRET

const adminAuth = async (req, res, next)=>{
    try {
        const token = req.headers['authorization'];

        if (!token){
            return res.json({msg:"Unauthorized"})
        }

        const decoded = jwt.verify(token, jwt_Secret);
        req.user = decoded;
        next();
    } catch (error) {
        console.log(error)
    }
}

export {adminAuth}