import {Request, Response} from 'express'

export interface IInfectedTreeController {
	getAllUsersRecords(req: Request, res: Response): Promise<void>
	getOneRecord(req: Request, res: Response): Promise<void>
	create(req: Request, res: Response): Promise<void>
	update(req: Request, res: Response): Promise<void>
	delete(req: Request, res: Response): Promise<void>
}
