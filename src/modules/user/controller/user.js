import userModel from "../../../../DB/models/User.model.js"
import { compare, hash } from "./../../../utlis/hashAndCompare.js"


export const profile=async(req,res,next)=>{
    const user=await userModel.findById(req.user._id).select('userName email age lastName firstName gender profilePic')
    return user? res.status(200).json({message:"done",user}):next(new Error("Not found",{cause:404}))

}
export const updatePassword=async(req,res,next)=>{
    const {newPassword,oldPassword}=req.body
    const user=await userModel.findById(req.user._id)
    const match=compare({plainText:oldPassword ,hashValue:user.password})
    if(!match){
        return next(new Error("password is incorrect",{cause:404}))
    }
    const hashNewPassword=hash({plainText:newPassword})
    user.password=hashNewPassword
    await user.save()
    
    return res.status(200).json({message:"password updated successfully"})

}

export const shareProfile=async(req,res,next)=>{
    const{id}=req.params
    const user=await userModel.findById(id).select('userName email age lastName firstName gender profilePic')
    if(!user){
        return next(new Error('user not found',{cause:404}))
    }
    return res.status(200).json({message:'done',user})
}
