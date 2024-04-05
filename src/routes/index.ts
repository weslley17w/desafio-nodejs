import { Router } from 'express'
import homeController from '../controllers/homeController'

const router = Router()
const home = new homeController()

router.get('/', home.index)

export { router }
