const dataMethods=['body','params','query']
export const validation=(schema)=>{
    return (req,res,next)=>{
        const validationError=[]
        dataMethods.forEach(key=>{
             if(schema[key]){
                const dataToValid=req[key]
                const valiResult=schema[key].validate(dataToValid,{abortEarly:false})
              if(valiResult.error){
                validationError.push(valiResult.error.details)
        }
    }
    })
        if(validationError.length>0){
            return res.status(400).json({message:"validation error",validationError})
        }
        else{
                return next()
            }
    }
}

export default validation