import {Router} from 'express'
import AuthController from "../controllers/AuthController";

const authRouter: Router = Router()

authRouter.post('/registration', AuthController.registration)
authRouter.post('/login', AuthController.login)
authRouter.post('/logout', AuthController.logout)
authRouter.get('/activate/:uuid', AuthController.activateAccount)
authRouter.get('/refresh', AuthController.refresh)

export default authRouter
