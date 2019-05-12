import { FTApi } from "FTUtils";
import { FTMutationTypes } from "FTConstants";

const {
  GET_USER_INFO,
  SET_USER_INFO,
  HIDDEN_DIALOG,
  LOGOUT,
  CHANGE_INFO,
  GET_NOTICE_INFO,
  SET_NOTICE_INFO
} = FTMutationTypes;

export default {
  state: {
    userInfo: null,
    noticeInfo: null
  },
  getters: {
    [GET_USER_INFO](state) {
      if (state.userInfo) {
        return state.userInfo;
      } else if (localStorage["userInfo"]) {
        state.userInfo = JSON.parse(localStorage["userInfo"]);
        return state.userInfo;
      } else {
        return null;
      }
    },
    [GET_NOTICE_INFO](state) {
      return state.noticeInfo;
    }
  },
  actions: {
    [SET_USER_INFO]({ commit, dispatch }, data) {
      let status;
      return FTApi.FTLogin(data)
        .then(data => {
          let { data: res } = data;
          if (res.code == "200") {
            let localVal = JSON.stringify(res.data);
            localStorage.setItem("userInfo", localVal);
            commit(SET_USER_INFO, res.data);
            dispatch(HIDDEN_DIALOG);
            status = true;
          } else {
            status = false;
          }
        })
        .then(() => {
          return new Promise(resolve => resolve({ status: status }));
        });
    },
    [LOGOUT]({ commit }) {
      commit(SET_USER_INFO);
      localStorage.clear();
      return new Promise(resolve => {
        resolve();
      });
    },
    [CHANGE_INFO]({ commit, state }, data) {
      return FTApi.FTChangeInfo({ ...data, role: state.userInfo.role }).then(
        res => {
          let { code, data } = res.data;
          if (code == "200") {
            let localVal = JSON.stringify(data);
            localStorage.setItem("userInfo", localVal);
            commit(SET_USER_INFO, data);
          }
        }
      );
    },
    [SET_NOTICE_INFO]({ commit }) {
      return FTApi.FTGetNoticeInfo().then(res => {
        let { code, data } = res.data;
        if (code == 200) {
          commit(SET_NOTICE_INFO, data);
        }
      });
    }
  },
  mutations: {
    [SET_USER_INFO](state, data) {
      if (data) {
        state.userInfo = { ...data };
        return;
      } else {
        state.userInfo = null;
      }
    },
    [SET_NOTICE_INFO](state, data) {
      state.noticeInfo = { ...data };
    }
  }
};
