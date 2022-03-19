import { terser } from "rollup-plugin-terser";
import { eslint } from "rollup-plugin-eslint";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonJs from "@rollup/plugin-commonjs";
import fs from "fs";
import pkg from "./package.json";

const plugins = [
  nodeResolve({
    extensions: [".js", ".json"],
  }),
  commonJs({ extensions: [".js", ".json"] }),
  eslint(),
  terser(),
];

const includeJSfiles = (fileName) =>
  !fileName.endsWith(".test.js") && fileName.endsWith(".js");

const excludeFiles = (files) => (fileName) => !files.includes(fileName);

const createConfigForFile = (fileName) => ({
  input: `src/${fileName}/index.js`,
  output: {
    file: `./${fileName}.js`,
    format: "cjs",
    sourcemap: "inline",
    exports: "auto",
  },
  plugins,
});

const mainConfig = {
  input: "src/js-ds-algo.js",
  output: [
    {
      file: pkg.browser,
      name: pkg.browser,
      format: "umd",
      sourcemap: "inline",
    },
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: "inline",
      exports: "auto",
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: "inline",
    },
  ],
  plugins,
};

const configs = fs
  .readdirSync("./src/")
  .filter(includeJSfiles)
  .filter(excludeFiles("js-ds-algo.js"))
  .map(createConfigForFile);

export default [
  mainConfig,
  ...configs,
];