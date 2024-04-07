import ScheduleService from '../../src/services/scheduleService'

describe('Test Schedule Service', () => {
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
    const { data, status } = await scheduleService.create('valid@email.com')
    expect(status).toBe(200)
    expect(data).toBe('Success')
  })
})
