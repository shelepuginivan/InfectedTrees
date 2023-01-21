import {Router} from "express";
import UserController from "../controllers/UserController";

const userRouter: Router = Router()

userRouter.get('/', UserController.getUserData)
userRouter.put('/', UserController.updateUserData)

export default userRouter
