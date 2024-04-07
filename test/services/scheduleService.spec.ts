import ScheduleService from '../../src/services/scheduleService'
const resultMock = {
  data: {
    id: 'a26f64ff-0104-4d59-908b-273ff54ab915',
    email: 'valid@email.com',
    status: 'PENDING',
  },
  status: 201,
}

describe('Test create Schedule', () => {
  it('should return 400 if email is not provided', async () => {
    const scheduleService = new ScheduleService()
    const { data, status } = await scheduleService.create('')
    expect(status).toBe(400)
    expect(data).toBe('Email is required')
  })

  it('should return 400 if email is invalid', async () => {
    const scheduleService = new ScheduleService()
    const { data, status } = await scheduleService.create('invalid-email')
    expect(status).toBe(400)
    expect(data).toBe('Invalid email')
  })

  it('should return 200 if email is valid', async () => {
    const scheduleService = new ScheduleService()
    scheduleService.create = jest
      .fn()
      .mockResolvedValue({ data: resultMock, status: 201 })
    const { data, status } = await scheduleService.create('valid@email.com')
    expect(status).toBe(201)
    expect(data).toBe(resultMock)
  })
})

describe('Test get all Schedules', () => {
  it('should return 200 if there are schedules', async () => {
    const scheduleService = new ScheduleService()
    scheduleService.getAll = jest
      .fn()
      .mockResolvedValue({ data: [resultMock], status: 200 })
    const { data, status } = await scheduleService.getAll()
    expect(status).toBe(200)
    expect(data).toEqual([resultMock])
  })
})
