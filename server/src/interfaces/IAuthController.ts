import {Request, Response} from "express";

export interface IAuthController {
	registration(req: Request, res: Response): Promise<void>
	login(req: Request, res: Response): Promise<void>
	logout(req: Request, res: Response): Promise<void>
	activateAccount(req: Request, res: Response): Promise<void>
	refresh(req: Request, res: Response): Promise<void>
}
