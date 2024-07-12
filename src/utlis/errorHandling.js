

export const asyncHandler=(fun)=>{
    return (req,res,next)=>{
        fun(req,res,next)
            .catch(err=>{
           return next(new Error(err))

        })
    }
}

export const globalError=(err,req,res,next)=>{
    if(err){
        if(process.env.MOOD=="Dev"){
            return res.json({message:"catch error",err,stack:err.stack})
        }
        return res.json({message:"catch error",err})

    }
}