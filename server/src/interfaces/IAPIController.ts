import {Request, Response} from 'express'

export interface IAPIController {
	generateAPIKey(req: Request, res: Response): Promise<void>
	getAPIKey(req: Request, res: Response): Promise<void>

}
