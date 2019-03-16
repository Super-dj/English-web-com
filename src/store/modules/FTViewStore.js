/**
 * author: Tan Jun
 * createTime: 2018/12/13
 * describe: 用于管理界面中的事件监听
 **/

import { FTMutationTypes } from "FTConstants";

const { SET_EMIT, GET_EMIT } = FTMutationTypes;

export default {
  state: {
    type: null
  },
  getters: {
    [GET_EMIT](state) {
      return state.type;
    }
  },
  actions: {
    [SET_EMIT]({ commit }, data) {
      commit(SET_EMIT, data);
    }
  },
  mutations: {
    [SET_EMIT](state, { type }) {
      state.type = type;
    }
  }
};
