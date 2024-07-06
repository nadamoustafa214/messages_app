import userModel from "../../../../DB/models/User.model.js";


export const signup=async (req,res,next)=>{
    try{
        const {email,password,userName}=req.body
        console.log({email,password,userName})
        const user= await userModel.findOne({email})
        if(user){
            return res.json({message:"email exist"})
        }

    }catch (err){

    }
}