/**
 * author: Tan Jun
 * createTime: 2018/12/17
 * describe: 路由入口文件
 **/

import Vue from "vue";
import Router from "vue-router";
import { FTHome, FTAbout, FTLogin, FTIndex, FTHealthCheck } from "FTRouter";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [FTHome, FTAbout, FTLogin, FTIndex, FTHealthCheck]
});
