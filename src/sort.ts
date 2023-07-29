import { isString } from './getDataType'

/* type enum */
enum sortType {
  ASC = 'ASC',
  DESC = 'DESC'
}

/**
 * * 冒泡排序
 * @name bubblingSort
 * @param {any[]} array
 * @param {string} type
 * @param {string} key
 * @return {any[]}
 */
export function bubblingSort(
  array: any[], // 需要排序的数组
  type: string = sortType.ASC, // "ASC"(升序) or "DESC"(降序)
  key?: string // "key" is the Object[]:key (排序对象数组需要的比较的属性key)
) {
  const length = array.length
  if (length < 2) return array

  if (key && isString(key)) {
    if (key.trim() === '') return array
    if (type === sortType.ASC) {
      for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
          if (parseFloat(array[j][key]) > parseFloat(array[j + 1][key])) {
            ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
          }
        }
      }
    } else if (type === sortType.DESC) {
      for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
          if (parseFloat(array[j][key]) < parseFloat(array[j + 1][key])) {
            ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
          }
        }
      }
    }
  } else {
    if (type === sortType.ASC) {
      for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
          if (array[j] > array[j + 1]) {
            ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
          }
        }
      }
    } else if (type === sortType.DESC) {
      for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
          if (array[j] < array[j + 1]) {
            ;[array[j], array[j + 1]] = [array[j + 1], array[j]]
          }
        }
      }
    }
  }
  return array
}
