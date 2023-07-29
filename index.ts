import { localCache, sessionCache } from './src/cache'
import { shallowClone, deepClone } from './src/clone'
import formatTimer from './src/format'
import getDataType from './src/getDataType'
import { bubblingSort } from './src/sort'
import { debounce, throttle } from './src/stopFrequent'
import {
  currying,
  compose,
  amountFormatComma,
  insertStr,
  stringCase
} from './src/tools'

const kingTools = {
  localCache,
  sessionCache,
  shallowClone,
  deepClone,
  formatTimer,
  getDataType,
  bubblingSort,
  debounce,
  throttle,
  currying,
  compose,
  amountFormatComma,
  insertStr,
  stringCase
}

// 分别导出
export {
  localCache,
  sessionCache,
  shallowClone,
  deepClone,
  formatTimer,
  getDataType,
  bubblingSort,
  debounce,
  throttle,
  currying,
  compose,
  amountFormatComma,
  insertStr,
  stringCase
}

// 默认导出
export default kingTools
