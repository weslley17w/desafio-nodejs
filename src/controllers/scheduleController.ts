import { Request, Response } from 'express'
import scheduleService from '../services/scheduleService'
let schedule = new scheduleService()

import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export default class ScheduleController {
  async getAll(req: Request, res: Response) {
    let { data, status } = (await schedule.getAll()) as {
      data: any
      status: number
    }

    res.status(status).json(data)
  }

  async create(req: Request, res: Response) {
    let { email } = req.body
    let { data, status } = (await schedule.create(email)) as {
      data: any
      status: number
    }

    res.status(status).json(data)
  }
}
