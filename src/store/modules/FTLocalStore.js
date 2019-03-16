import { FTMutationTypes } from "FTConstants";

const { CHANGE_LANGUAGE } = FTMutationTypes;

export default {
  state: {
    local: { hello: "HelloWorld" }
  },
  getters: {
    getLocal: state => id => state.local[id] || id
  },
  actions: {
    [CHANGE_LANGUAGE]({ commit }, local) {
      commit(CHANGE_LANGUAGE, local);
    }
  },
  mutations: {
    [CHANGE_LANGUAGE](state) {
      state.local = { hello: "你好,世界" };
    }
  }
};
