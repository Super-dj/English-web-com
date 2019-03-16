/**
 * author: Tan Jun
 * createTime: 2018/12/17
 * describe: vue.config
 **/
const path = require("path");
const webpack = require("webpack");

let rootJsPath = "./src/";
let definePlugin = new webpack.DefinePlugin({
  __DEBUG__: JSON.stringify(JSON.parse(process.env.VUE_APP_DEBUG || "false")),
  __RELEASE__: JSON.stringify(
    JSON.parse(process.env.VUE_APP_RELEASE || "false")
  )
});

module.exports = {
  devServer: {
    host: "0.0.0.0"
  },
  outputDir: "build",
  publicPath: process.env.NODE_ENV === "test" ? "/admin" : "/",
  configureWebpack: {
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
        FTConfig: path.resolve(rootJsPath + "config")
      }
    },
    plugins: [
      // new OpenBrowserWebpackPlugin({ url: "http://localhost:2023" }),
      definePlugin
    ]
  }
};
