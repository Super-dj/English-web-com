/**
 * author: Deng Jie
 * createTime: 2019/2/14
 * describe: admin management
 **/
import { FTMutationTypes } from "FTConstants";
import { FTApi } from "FTUtils";

const {
  GET_ALL_BANNER,
  SET_ALL_BANNER,
  CHANGE_ALL_BANNER,
  GET_PAGE_INFO,
  GET_CURRENT_BANNER,
  SET_CURRENT_BANNER,
  CHANGE_BANNER,
  GET_NET_STATE,
  SET_NET_STATE
} = FTMutationTypes;

export default {
  state: {
    bannerList: null,
    pageInfo: { numResults: 0, pageTotal: 0 },
    currentBanner: null,
    netError: false
  },
  getters: {
    [GET_ALL_BANNER](state) {
      return state.bannerList;
    },
    [GET_PAGE_INFO](state) {
      return state.pageInfo;
    },
    [GET_CURRENT_BANNER](state) {
      return state.currentBanner;
    },
    [GET_NET_STATE](state) {
      return state.netError;
    }
  },
  actions: {
    [SET_ALL_BANNER]({ commit }, data) {
      FTApi.FTGetBannerList({ ...data, pageSize: 10 }).then(res => {
        if (res.data.code === 0) {
          commit(CHANGE_ALL_BANNER, res.data.data);
          commit(SET_NET_STATE, false);
        } else {
          commit(CHANGE_ALL_BANNER, null);
          commit(SET_NET_STATE, true);
        }
      });
    },
    [SET_CURRENT_BANNER]({ commit }, data) {
      commit(SET_CURRENT_BANNER, data);
    },
    [CHANGE_BANNER]({ commit }, data) {
      commit(CHANGE_BANNER, data);
    }
  },
  mutations: {
    [CHANGE_ALL_BANNER](state, data) {
      if (data === null) {
        state.bannerList = null;
      } else {
        state.bannerList = data.results;
        state.pageInfo = {
          numResults: data.numResults,
          pageTotal: data.pageTotal
        };
      }
    },
    [SET_CURRENT_BANNER](state, data) {
      state.currentBanner = data;
    },
    [CHANGE_BANNER](state, data) {
      FTApi.FTUpdateBanner(data).then(res => {
        if (res.data.code === 0) {
          console.log(1);
        }
      });
    },
    [SET_NET_STATE](state, data) {
      state.netError = data;
    }
  }
};
