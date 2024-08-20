import Joi from "joi";

export const updatePasswordSchema={
    body:Joi.object({
        newPassword:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        oldPassword:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).invalid(Joi.ref("newPassword")).required(),
        cPassword:Joi.string().valid(Joi.ref("newPassword")).required(),
    }).required()
}

export const shareProfileSchema={
    params:Joi.object({
        id:Joi.string().min(24).max(24).required()
    }).required()
}