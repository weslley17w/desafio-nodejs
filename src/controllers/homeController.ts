import { Request, Response } from 'express'

export default class HomeController {
  async index(req: Request, res: Response) {
    res.send('Schedule API')
  }
}
