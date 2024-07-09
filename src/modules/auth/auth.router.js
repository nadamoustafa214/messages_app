import {Router} from "express";
import * as AC from "./controller/auth.js"
const router=Router()

router.post("/signup",AC.signup)
router.post("/login",AC.login)



export default router