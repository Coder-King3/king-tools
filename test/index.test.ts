import { getDataType } from "../src/index";
describe("判断数据类型", () => {
  it("getDataType(3) -> should return 'number'", () => {
    const type = getDataType(3);
    expect(type).toBe("number");
  });
  it("getDataType(null) -> should return 'null'", () => {
    const type = getDataType(null);
    expect(type).toBe("null");
  });
});
