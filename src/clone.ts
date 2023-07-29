import { isObject, isArray } from './getDataType'

/**
 * * 浅拷贝
 * @name shallowClone
 * @param { any } target
 * @return { any }
 */
export function shallowClone(target: any) {
  // 1.判断拷贝类型(不是对象和数据就是基本类型)
  let newObj = isObject(target) ? {} : isArray(target) ? [] : target
  // 2.基本类型直接返回
  if (newObj == target) return newObj
  // 3.遍历对象或者数组
  for (let key in target) {
    newObj[key] = target[key]
  }
  return newObj
}

/**
 * * 深拷贝
 * @name deepClone
 * @param { any } target
 * @param { WeakMap<object, any> } hash
 * @return { any }
 */
export function deepClone(target: any, hash = new WeakMap()) {
  if (!isObject(target)) return target
  if (hash.get(target)) return hash.get(target)
  // 兼容数组和对象
  let newObj: any = isArray(target) ? [] : {}
  // 关键代码，解决对象的属性循环引用 和 多个属性引用同一个对象的问题，避免重复拷贝
  hash.set(target, newObj)
  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      if (isObject(target[key])) {
        newObj[key] = deepClone(target[key], hash) // 递归拷贝
      } else {
        newObj[key] = target[key]
      }
    }
  }
  return newObj
}
