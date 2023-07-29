import { getDataType } from '../index'
describe('getDataType testing', () => {
  it("getDataType(3) -> should return 'number'", () => {
    const type = getDataType(3)
    expect(type).toBe('number')
  })
  it("getDataType(null) -> should return 'null'", () => {
    const type = getDataType(null)
    expect(type).toBe('null')
  })
})
