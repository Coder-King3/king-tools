/**
 * * 判断数据类型 *
 * @param {any} target
 * @return {string}
 */
export function getDataType(target: any) {
  let type = typeof target
  if (type === 'object') {
    return Object.prototype.toString.call(target).slice(8, -1).toLowerCase()
  } else {
    return type
  }
}

// 原始类型
export function isString(target: any) {
  return getDataType(target) === 'string'
}

export function isNumber(target: any) {
  return getDataType(target) === 'number'
}

export function isBoolean(target: any) {
  return getDataType(target) === 'boolean'
}

export function isNull(target: any) {
  return getDataType(target) === 'null'
}

export function isUndefined(target: any) {
  return getDataType(target) === 'undefined'
}

export function isSymbol(target: any) {
  return getDataType(target) === 'symbol'
}

export function isBigInt(target: any) {
  return getDataType(target) === 'bigInt'
}

// 引用类型
export function isObject(target: any) {
  return getDataType(target) === 'object'
}
