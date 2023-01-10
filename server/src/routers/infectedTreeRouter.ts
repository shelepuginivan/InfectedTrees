import {Router} from 'express';
import InfectedTreeController from "../controllers/InfectedTreeController";

const infectedTreeRouter: Router = Router()

infectedTreeRouter.get('/', InfectedTreeController.getAllUsersRecords)			// all user's records
infectedTreeRouter.get('/:id', InfectedTreeController.getOneRecord)			// one record
infectedTreeRouter.post('/', InfectedTreeController.create)					// create
infectedTreeRouter.put('/:id', InfectedTreeController.update)					// update
infectedTreeRouter.delete('/:id', InfectedTreeController.delete)				// delete

export default infectedTreeRouter
