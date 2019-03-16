/**
 * author: Tan Jun
 * createTime: 2018/12/17
 * describe: store入口文件
 **/

import Vue from "vue";
import Vuex from "vuex";
import {
  state,
  getters,
  actions,
  mutations,
  FTLocalStore,
  FTViewStore,
  FTAdminStore
} from "FTStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  modules: [FTLocalStore, FTViewStore, FTAdminStore],
  getters,
  mutations,
  actions
});
