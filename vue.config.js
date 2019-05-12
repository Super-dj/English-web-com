/**
 * author: Tan Jun
 * createTime: 2018/12/17
 * describe: vue.config
 **/
const webpack = require("webpack");
const alias = require("./alias.config");

let definePlugin = new webpack.DefinePlugin({
  __DEBUG__: JSON.stringify(JSON.parse(process.env.VUE_APP_DEBUG || "false")),
  __RELEASE__: JSON.stringify(
    JSON.parse(process.env.VUE_APP_RELEASE || "false")
  )
});
let css = {
  loaderOptions: {
    css: {
      localIdentName:
        process.env.NODE_ENV === "production"
          ? "[hash:base64:5]"
          : "[local]---[hash:base64:5]",
      camelCase: "only"
    },
    less: {
      javascriptEnabled: true
    }
  }
};
module.exports = {
  outputDir: "build",
  devServer: {
    // host: "https://test.fotor.com",
    // port: "5000",
    overlay: {
      warnings: false,
      errors: false
    }
  },
  css,
  configureWebpack: {
    ...alias,
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      }),
      // new OpenBrowserWebpackPlugin({ url: "http://localhost:2023" }),
      definePlugin
    ]
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
