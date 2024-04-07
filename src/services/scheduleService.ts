import Validate from '../utils/Validate'
import { prisma } from '../prisma'
export default class ScheduleService {
  async create(email: string) {
    try {
      if (!email) throw new Error('Email is required')
      if (!Validate.email(email)) throw new Error('Invalid email')

      let data = await prisma.schedule.create({
        data: {
          email,
        },
      })

      return { data, status: 201 }
    } catch (error) {
      let e = error as Error
      if (e.message === 'Email is required')
        return { data: 'Email is required', status: 400 }
      else if (e.message === 'Invalid email')
        return { data: 'Invalid email', status: 400 }
      else return { data: 'Internal server error', status: 500 }
    }
  }
}
