import {IAPIController} from '../interfaces/IAPIController'
import {Request, Response} from 'express'
import APIService from '../services/APIService'
import ServerException from '../exceptions/ServerException'

class APIController implements IAPIController {
	async generateAPIKey(req: Request, res: Response): Promise<void> {
		try {
			const accessToken = req.headers.authorization?.split(' ')[1]
			const userData = await APIService.generateAPIKey(accessToken)
			res.status(200).json(userData)
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}
	}

	async getAPIKey(req: Request, res: Response): Promise<void> {
		try {
			const accessToken = req.headers.authorization?.split(' ')[1]
			const userData = await APIService.getAPIKey(accessToken)
			res.status(200).json(userData)
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}
	}

	async getAllTreesRecords(req: Request, res: Response): Promise<void> {
		try {
			const {apiKey, from, to} = req.query

			const requestedTreesRecords = await APIService.getAllTreesRecords(
				apiKey as string | undefined,
				from as string | undefined,
				to as string | undefined)

			res.status(200).json(requestedTreesRecords)
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}
	}

	async getRecentTreesRecords(req: Request, res: Response): Promise<void> {
		try {
			const apiKey = req.query?.apiKey as string
			const recentTreesRecords = await APIService.getRecentTreesRecords(apiKey)
			res.status(200).json(recentTreesRecords)
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}
	}

	async getTreesRecordsByDate(req: Request, res: Response): Promise<void> {
		try {
			const apiKey = req.query?.apiKey as string
			const date = req.params.date
			const recentTreesRecords = await APIService.getTreesRecordsByDate(apiKey, date)
			res.status(200).json(recentTreesRecords)
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}
	}

	async getTreesRecordsWithPagination(req: Request, res: Response): Promise<void> {
		try {
			const {apiKey, from, to, page, limit} = req.query
			const recentTreesRecords = await APIService.getTreesRecordsWithPagination(apiKey as string | undefined,
				from as string | undefined,
				to as string | undefined,
				page as number | undefined,
				limit as number | undefined)
			res.status(200).json(recentTreesRecords)
		} catch (e) {
			if (e instanceof ServerException) {
				res.status(e.status).json({message: e.message})
			} else {
				res.status(500).json({message: `Unexpected server error: ${(e as Error).message}`})
				console.error(e)
			}
		}
	}
}

export default new APIController()
