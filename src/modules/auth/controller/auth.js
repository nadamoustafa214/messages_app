import userModel from "../../../../DB/models/User.model.js";
import {compare, hash} from "../../../utlis/hashAndCompare.js";


export const signup=async (req,res,next)=>{
    try{
        const {email,password,userName}=req.body
        const user= await userModel.findOne({email})
        if(user){
            return res.json({message:"email exist"})
        }

        const hashPassword=hash({plainText:password})
        const createdUser=await userModel.create({email,password:hashPassword,userName})
        return res.json({message:"user",createdUser})

    }catch (err){
        return res.json({message:"catch error",err,stack:err.stack})

    }
}

export  const login=async (req,res,next)=>{
    try{
        const {email,password}=req.body
        console.log({email,password})
        const user=await userModel.findOne({email})
        if(!user ||compare({plainText:password,hashValue:user.password}) ){
            // return res.json({message:"email not exist"})
            return res.json({message:"password or email was wrong"})
        }

        return res.json({message:"Done",user})


    }catch (err){
        return res.json({message:"catch error",err,stack:err.stack})
    }
}