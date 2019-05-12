/**
 * author: Tan Jun
 * createTime: 2019/3/11
 * describe: alias.config.js
 **/
const path = require("path");
let rootJsPath = "./src/";

module.exports = {
  resolve: {
    extensions: [".js", ".json", ".css", ".less", ".json", ".html", ".vue"],
    alias: {
      FTComponents: path.resolve(rootJsPath + "components"),
      FTConstants: path.resolve(rootJsPath + "constants"),
      FTStore: path.resolve(rootJsPath + "store"),
      FTRouter: path.resolve(rootJsPath + "router"),
      FTPages: path.resolve(rootJsPath + "pages"),
      FTCss: path.resolve(rootJsPath + "assets/css"),
      FTUtils: path.resolve(rootJsPath + "utils"),
      FTAssets: path.resolve(rootJsPath + "assets"),
      FTCore: path.resolve("./core")
    }
  }
};
