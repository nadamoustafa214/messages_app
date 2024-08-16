import messageModel from "../../../../DB/models/Message.model.js";
import { asyncHandler } from "../../../utlis/errorHandling.js";


export const senMEssage=asyncHandler(async(req,res,next)=>{
const {message}=req.body
const user=await userModel.findById(req.params.reciverId)
if(!user){
    return next(new Error("user not found",{cause:404}))
}
const newMessage=await messageModel.create({message})
return res.status(200).json({message:"send",newMessage})
})