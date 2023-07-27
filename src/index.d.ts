declare namespace kingTools {
  /**
   * 判断数据类型
   * @export
   * @param {any} target
   * @return {string}
   */
  export function getDataType(target: any): string;
}

declare module "king-tools" {
  export = kingTools;
}
