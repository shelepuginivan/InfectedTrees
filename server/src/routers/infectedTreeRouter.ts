import {Router} from 'express';
import InfectedTreeController from "../controllers/InfectedTreeController";

const infectedTreeRouter: Router = Router()

infectedTreeRouter.get('/', InfectedTreeController.getAllUsersWrites)			// all user's writes
infectedTreeRouter.get('/:id')			// one write
infectedTreeRouter.post('/')			// create
infectedTreeRouter.put('/:id')			// update
infectedTreeRouter.delete('/:id')		// delete

export default infectedTreeRouter
