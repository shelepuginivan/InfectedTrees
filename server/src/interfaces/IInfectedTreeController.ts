import {Request, Response} from "express";

export interface IInfectedTreeController {
	getAllUsersWrites(req: Request, res: Response): Promise<void>
	getOneWrite(req: Request, res: Response): Promise<void>
	create(req: Request, res: Response): Promise<void>
	update(req: Request, res: Response): Promise<void>
	delete(req: Request, res: Response): Promise<void>
	getOne(req: Request, res: Response): Promise<void>
}
