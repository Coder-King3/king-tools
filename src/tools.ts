/**
 * * 自动柯里化
 * @name getDataType
 * @param {Function} fn
 * @return {string}
 */
export function currying(fn: Function) {
  function curried(this: any, ...args: any[]) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function (this: any, ...args2: any[]) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
  return curried
}

/**
 * * 组合函数
 * @name getDataType
 * @param {Function[]} fns
 * @return {string}
 */
export function compose(...fns: Function[]) {
  // 1.边界判断(edge case)
  let length = fns.length
  if (length <= 0) return
  for (let i = 0; i < length; i++) {
    let fn = fns[i]
    if (typeof fn !== 'function') {
      throw new Error(`argument with index ${i} is not a function`)
    }
  }
  // 2. 依次调用
  return function (this: any, ...args: any[]) {
    let index = 0
    let result = fns[index].apply(this, args)
    while (++index < length) {
      result = fns[index].call(this, result)
    }
    return result
  }
}

/**
 * * 数字金额逗号转换
 * @name amountFormatComma
 * @param {number} val
 * @param {boolean} isDot
 * @return {string}
 */
export function amountFormatComma(val: number, isDot = true) {
  if (!val) {
    return '0'
  } else {
    if (!isDot) {
      val = Math.round(val)
    }
    //金额转换  保留2位小数 并每隔3位用逗号分开 1,234.56
    const str = (val / 1).toFixed(2) + ''
    const intSum = str
      .substring(0, str.indexOf('.'))
      .replace(/\B(?=(?:\d{3})+$)/g, ',') //取到整数部分
    const dot = str.substring(str.length, str.indexOf('.')) //取到小数部分搜索
    const ret = intSum + (isDot ? dot : '')
    return ret
  }
}

/**
 * * 指定位置插入字符
 * @name insertStr
 * @param {string} soure
 * @param {number} start
 * @param {string} newStr
 * @return {string}
 */
export function insertStr(soure: string, start: number, newStr: string) {
  return soure.slice(0, start) + newStr + soure.slice(start)
}

/**
 * * 字符串大小写
 * @name stringCase
 * @param {string} soure
 * @param {string} separator
 * @param {string} separate
 * @return {string}
 */
export function stringCase(soure: string, separator = '', separate = '') {
  const newStr = soure.split(separator)
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] =
      newStr[i].slice(0, 1).toUpperCase() + newStr[i].slice(1).toLowerCase()
  }
  return newStr.join(separate)
}
