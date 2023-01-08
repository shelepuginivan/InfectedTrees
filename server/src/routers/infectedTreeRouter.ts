import {Router} from 'express';

const infectedTreeRouter: Router = Router()

infectedTreeRouter.get('/')
infectedTreeRouter.post('/')
infectedTreeRouter.put('/:id')
infectedTreeRouter.delete('/:id')

export default infectedTreeRouter
