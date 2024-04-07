import { Request, Response } from 'express'
import scheduleService from '../services/scheduleService'
import { IScheduleResponse } from '../interfaces /ISchedule'
let schedule = new scheduleService()

export default class ScheduleController {
  async getAll(req: Request, res: Response) {
    let { data, status } = (await schedule.getAll()) as IScheduleResponse

    res.status(status).json(data)
  }

  async create(req: Request, res: Response) {
    let { email } = req.body
    let { data, status } = (await schedule.create(email)) as IScheduleResponse

    res.status(status).json(data)
  }

  async cancel(req: Request, res: Response) {
    let { id } = req.params
    let { data, status } = (await schedule.cancel(id)) as IScheduleResponse

    res.status(status).json(data)
  }
}
