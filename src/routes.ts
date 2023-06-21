import { Router } from "express";
import { loginRequest } from "./api/authRequests";
import { authMiddleware } from "./middlewares/authMiddleware";
import { AuthenticatedRequest } from "types";

const router = Router();

router.post('/login', async(req, res) => {
    const {email, password} = req.body;
    try {
        const response = await loginRequest({email, password})
        return res.status(400).json({token: response.token})
    } catch (error) {
        return res.status(400).json({error})
    }
})
router.post('/protected',authMiddleware,(req:AuthenticatedRequest, res)=>{
    try {
        res.json({message:req.userId})
    } 
    catch (error) {
        res.status(400).json({message:"failed auth"})
    }    
})

export default router