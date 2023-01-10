import {Router} from "express";
import UserController from "../controllers/UserController";

const userRouter: Router = Router()

userRouter.put('/', UserController.updateUserData)

export default userRouter
