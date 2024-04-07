import { Router } from 'express'
import HomeController from '../controllers/homeController'
import ScheduleController from '../controllers/scheduleController'

const router = Router()
const home = new HomeController()
const schedule = new ScheduleController()

router.get('/', home.index)
router.get('/schedule', schedule.getAll)
router.post('/schedule', schedule.create)

export { router }
