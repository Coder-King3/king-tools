import { formatTimer } from '../index'
describe('format timer testing', () => {
  it('formatTimer(1690626300116) -> year should return 2023', () => {
    const timer: any = formatTimer(1690626300116)
    let year = timer.year
    expect(year).toBe(2023)
  })
  it('formatTimer(1690626300116) -> should return 2023-07-29 18:25:00', () => {
    const timer: any = formatTimer(1690626300116, 'yyyy-MM-dd HH:mm:ss')
    expect(timer).toBe('2023-07-29 18:25:00')
  })
})
