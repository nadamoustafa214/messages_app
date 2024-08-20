import {Router} from "express";
import auth from "../../middleware/auth.middleware.js";
import * as UC from './controller/user.js'
import validation from './../../middleware/validation.middleware.js'
import * as validators from './userCRUD.validation.js'
const router=Router()

router.get("/profile",auth,UC.profile)
router.patch('/change-password',validation(validators.updatePasswordSchema),auth,UC.updatePassword)
router.get('/:id/profile',validation(validators.shareProfileSchema),UC.shareProfile)



export default router