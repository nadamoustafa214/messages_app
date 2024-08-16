import joi from 'joi'

export const signUpSchema={
    body:joi.object({
        firstName:joi.string(),
        lastName:joi.string(),
        phone:joi.string(),
        age:joi.number().min(18).max(100),
        userName:joi.string().alphanum().required(),
        email:joi.string().email({minDomainSegments:2,tlds:{allow:['com']}}).required(),
        password:joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        cpassword:joi.ref("password"),
        gender:joi.array().valid('male','female'),
    }).required()
}

export const loginSchema={
    body:joi.object({
        password:joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        email:joi.string().email({minDomainSegments:2,tlds:{allow:['com']}}).required()
    }).required()
}