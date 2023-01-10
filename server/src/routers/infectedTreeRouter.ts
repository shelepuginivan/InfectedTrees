import {Router} from 'express';
import InfectedTreeController from "../controllers/InfectedTreeController";

const infectedTreeRouter: Router = Router()

infectedTreeRouter.get('/', InfectedTreeController.getAllUsersRecords)			// all user's records
infectedTreeRouter.get('/:id', InfectedTreeController.getOneRecord)			// one record
infectedTreeRouter.post('/', InfectedTreeController.create)					// create
infectedTreeRouter.put('/:id')			// update
infectedTreeRouter.delete('/:id')		// delete

export default infectedTreeRouter
