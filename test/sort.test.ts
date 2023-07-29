import { bubblingSort } from '../index'
describe('Sort Testing', () => {
  it('bubblingSort([3,1,5,7,2]) -> should return [1,2,3,5,7]', () => {
    const array = bubblingSort([3, 1, 5, 7, 2])
    expect(array[0]).toBe(1)
    expect(array[1]).toBe(2)
    expect(array[2]).toBe(3)
    expect(array[3]).toBe(5)
    expect(array[4]).toBe(7)
  })
})
