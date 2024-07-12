import userModel from "../../../../DB/models/User.model.js";
import {compare, hash} from "../../../utlis/hashAndCompare.js";
import {generateToken} from "../../../utlis/token.js";
import {asyncHandler} from "../../../utlis/errorHandling.js";


export const signup=asyncHandler(async (req,res,next)=>{

        const {email,password,userName}=req.body
        const user= await userModel.findOne({email})
        if(user){
            // return res.json({message:"email exist"})
            return next(new Error("email exist"))
        }
        const hashPassword=hash({plainText:password})
        const createdUser=await userModel.create({email,password:hashPassword,userName})
        return res.json({message:"user",createdUser})
})

export  const login=asyncHandler(async (req,res,next)=>{
        const {email,password}=req.body
        const user=await userModel.findOne({email})
        if(!user ||!compare({plainText:password,hashValue:user.password}) ) {
            // return res.json({message: "email or passwored is wrong "})
            return next(new Error("email or passwored is wrong"))

        }
        const token=generateToken({payload:{id:user._id,isLoggedIn:true,role:user.role}})
        return res.json({message:"Done",token})
})


