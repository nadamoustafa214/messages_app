import jwt from 'jsonwebtoken'


export const generateToken=()=>{
    const token=jwt.sign({payload,signature,expireIn})
}