import resolve from "rollup-plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
export default {
  input: "./main.ts", // 入口文件
  output: [
    {
      format: "esm", // 打包为esm格式
      file: "dist/index.js", // 打包后的文件路径名称
      name: "king-tools", // 打包后的默认导出文件名称
    },
  ],
  plugins: [typescript({ tsconfig: "./tsconfig.json" }), resolve()],
};
