import express from 'express'
import { loginfun, signupfun } from '../controller/usercontroller.js'

const userRouter = express.Router()

userRouter.post("/signup",signupfun)

userRouter.post("/login",loginfun)

export default userRouter