import { Request, Response } from 'express'

export default class homeController {
  async index(req: Request, res: Response) {
    res.send('Hello World')
  }
}
