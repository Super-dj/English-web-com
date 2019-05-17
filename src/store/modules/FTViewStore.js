/**
 * author: Tan Jun
 * createTime: 2018/12/13
 * describe: 用于管理界面中的事件监听
 **/

import { FTMutationTypes } from "FTConstants";

const {
  SET_EMIT,
  GET_EMIT,
  GET_DIALOG_STATUS,
  SHOW_DIALOG,
  HIDDEN_DIALOG
} = FTMutationTypes;

export default {
  state: {
    type: null,
    dialogInfo: {
      status: false,
      template: null,
      addCourse: null
    }
  },
  getters: {
    [GET_EMIT](state) {
      return state.type;
    },
    [GET_DIALOG_STATUS](state) {
      return state.dialogInfo;
    }
  },
  actions: {
    [SET_EMIT]({ commit }, data) {
      commit(SET_EMIT, data);
    },
    [SHOW_DIALOG]({ commit }, data) {
      commit(SHOW_DIALOG, data);
    },
    [HIDDEN_DIALOG]({ commit }) {
      commit(SHOW_DIALOG, { isShow: false, template: null, addCourse: null });
    }
  },
  mutations: {
    [SET_EMIT](state, { type }) {
      state.type = type;
    },
    [SHOW_DIALOG](state, data) {
      state.dialogInfo.status = data.isShow;
      state.dialogInfo.template = data.template;
      state.dialogInfo.addCourse = { ...data.addCourse };
    }
  }
};
