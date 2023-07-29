enum CacheType {
  Local,
  Session
}

/**
 * * 缓存类 *
 * @name Cache
 * @param {CacheType} type
 */
class Cache {
  private cache: Storage

  constructor(type: CacheType) {
    this.cache =
      type === CacheType.Local
        ? typeof window !== 'undefined'
          ? window.localStorage
          : ({} as any)
        : typeof window !== 'undefined'
        ? window.sessionStorage
        : ({} as any)
  }

  /**
   * * 获取缓存 *
   * @function getCache
   * @param {string} key
   * @return {string}
   * @memberof Cache
   */
  getCache(key: string) {
    const value = this.cache.getItem(key)
    if (value) return JSON.parse(value)
  }

  /**
   * * 设置缓存 *
   * @function setCache
   * @param {string} key
   * @param {any} value
   * @memberof Cache
   */
  setCache(key: string, value: any) {
    if (value) this.cache.setItem(key, JSON.stringify(value))
  }

  /**
   * * 删除缓存 *
   * @function deleteCache
   * @param {string} key
   * @memberof Cache
   */
  deleteCache(key: string) {
    this.cache.removeItem(key)
  }

  /**
   * * 清空缓存 *
   * @function clearCache
   * @memberof Cache
   */
  clearCache() {
    this.cache.clear()
  }
}

export const localCache = new Cache(CacheType.Local)
export const sessionCache = new Cache(CacheType.Session)
