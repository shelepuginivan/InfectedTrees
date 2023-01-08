import {Request, Response} from "express";

export interface IUserController {
	registration(req: Request, res: Response): Promise<void>
	login(req: Request, res: Response): Promise<void>
	logout(req: Request, res: Response): Promise<void>
}
