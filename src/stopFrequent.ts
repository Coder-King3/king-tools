/**
 * * 防抖
 * @name debounce
 * @param { Function } callback
 * @param { number } wait
 * @param { boolean } flag
 * @return { Function }
 */
export function debounce(callback: Function, wait: number, flag: boolean) {
  let timer: any = null
  return function (this: any, ...args: any) {
    // 在time时间段内重复执行，会清空之前的定时器，然后重新计时
    if (timer) clearTimeout(timer)
    // flag为true 第一次默认执行
    if (flag && !timer) callback.call(this, ...args)
    timer = setTimeout(() => {
      callback.call(this, ...args)
    }, wait)
  }
}

/**
 * * 节流
 * @name debounce
 * @param { Function } callback
 * @param { number } wait
 * @param { boolean } flag
 * @return { Function }
 */
export function throttle(callback: Function, wait: number, flag: boolean) {
  let timer: any = null
  return function (this: any, ...args: any[]) {
    // flag为true 第一次默认执行
    if (flag && !timer) callback.call(this, ...args), (flag = false)
    if (!timer) {
      timer = setTimeout(() => {
        callback.call(this, ...args)
        clearTimeout(timer)
        timer = null
      }, wait)
    }
  }
}
