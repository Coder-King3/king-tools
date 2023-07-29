import { amountFormatComma, stringCase } from '../index'
describe('Comprehensive testing', () => {
  it(`amountFormatComma(9824.57) -> should return 9,824.57`, () => {
    const str = amountFormatComma(9824.57)
    expect(str).toBe('9,824.57')
  })
  it(`stringCase('coder king') -> should return 'Coder-King'`, () => {
    const str = stringCase('coder king', ' ', '-')
    expect(str).toBe('Coder-King')
  })
})
