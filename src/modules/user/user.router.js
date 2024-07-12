import {Router} from "express";
import auth from "../../middleware/auth.middleware.js";
import * as UC from './controller/user.js'
const router=Router()

router.post("/profile",auth,UC.profile)



export default router