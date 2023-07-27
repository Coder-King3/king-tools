declare namespace kingTools {
  /**
   * 判断数据类型
   * @function getDataType
   * @param {any} target
   * @return {string} ddfs
   */
  export function getDataType(target: any): string;

  /**
   * 冒泡排序
   * @function bubblingSort
   * @param {any[]} array
   * @param {string} type
   * @param {string} key
   * @return {string}
   */
  export function bubblingSort(array: any[], type: string, key: string): string;
}

declare module "king-tools" {
  export = kingTools;
}
