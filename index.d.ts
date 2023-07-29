declare namespace kingTools {
  /**
   * * 判断数据类型 *
   * @name getDataType
   * @param {any} target
   * @return {string}
   */
  function getDataType(target: any): string

  /**
   * * 冒泡排序
   * @name bubblingSort
   * @param {any[]} array
   * @param {string} type
   * @param {string} key
   * @return {any[]}
   */
  function bubblingSort(array: any[], type?: string, key?: string): any[]

  /**
   * * 本地存储 *
   * @name localCache
   */
  const localCache

  /**
   * * 回话存储 *
   * @name sessionCache
   */
  const sessionCache

  /**
   * * 浅拷贝
   * @name shallowClone
   * @param { any } target
   * @return { any }
   */
  function shallowClone(target: any): any

  /**
   * * 深拷贝
   * @name deepClone
   * @param { any } target
   * @param { WeakMap<object, any> } hash
   * @return { any }
   */
  function deepClone(target: any, hash?: WeakMap<object, any>): any

  /**
   * * 格式化时间
   * @name formatTimer
   * @param { Date | number } cellValue
   * @param { string } foramtType
   * @return { string | object }
   */
  function formatTimer(
    cellValue: Date | number,
    foramtType?: string
  ):
    | string
    | {
        [key: string]: any
      }

  /**
   * * 防抖
   * @name debounce
   * @param { Function } callback
   * @param { number } wait
   * @param { boolean } flag
   * @return { Function }
   */
  function debounce(
    callback: Function,
    wait: number,
    flag: boolean
  ): (this: any, ...args: any) => void

  /**
   * * 节流
   * @name debounce
   * @param { Function } callback
   * @param { number } wait
   * @param { boolean } flag
   * @return { Function }
   */
  function throttle(
    callback: Function,
    wait: number,
    flag: boolean
  ): (this: any, ...args: any[]) => void

  /**
   * * 自动柯里化
   * @name getDataType
   * @param {Function} fn
   * @return {string}
   */
  function currying(fn: Function): (this: any, ...args: any[]) => any

  /**
   * * 组合函数
   * @name getDataType
   * @param {Function[]} fns
   * @return {string}
   */
  function compose(
    ...fns: Function[]
  ): ((this: any, ...args: any[]) => any) | undefined

  /**
   * * 数字金额逗号转换
   * @name amountFormatComma
   * @param {number} val
   * @param {boolean} isDot
   * @return {string}
   */
  function amountFormatComma(val: number, isDot?: boolean): string

  /**
   * * 指定位置插入字符
   * @name insertStr
   * @param {string} soure
   * @param {number} start
   * @param {string} newStr
   * @return {string}
   */
  function insertStr(soure: string, start: number, newStr: string): string

  /**
   * * 字符串大小写
   * @name stringCase
   * @param {string} soure
   * @param {string} separator
   * @param {string} separate
   * @return {string}
   */
  function stringCase(
    soure: string,
    separator?: string,
    separate?: string
  ): string
}

declare module 'king-tools' {
  export = kingTools
}
