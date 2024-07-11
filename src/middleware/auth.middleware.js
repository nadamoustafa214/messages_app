import {verfiyToken} from "../utlis/token.js";


const auth=(req,res,next)=>{

    const { authorization}=req.headers
    console.log({authorization})
if(!authorization){
    return res.json({message:"token is required"})
}
if(!authorization.startsWith(process.env.BERAR_KEY)){
    return res.json({message:"berrar key is required"})
}
const payload=authorization.split(process.env.BERAR_KEY)[1]
    if(!payload){
        return res.json({message:"token is required"})
    }
    console.log(payload)
    const decoded=verfiyToken({token:payload})
    // console.log(decoded)

}
export default auth