const dataMethods=['body','params','query']
export const validation=(schema)=>{
    return (req,res,next)=>{
        const validationError=[]
        dataMethods.forEach(key=>{
             if(schema[key]){
                const valiResult=schema[key].validate(req.body,{abortEarly:false})
              if(valiResult.error){
                validationError.push(valiResult)
        }
    }
})
        if(validationError.length>0){
            return res.json({message:"validation error",validationError})
        }
        else{
                return    next()
                }
            }
}

export default validation