import {Router} from "express";
import * as AC from "./controller/auth.js"
const router=Router()

router.post("/signup",AC.signup)



export default router