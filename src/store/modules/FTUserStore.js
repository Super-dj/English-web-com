import { FTApi } from "FTUtils";
import { FTMutationTypes } from "FTConstants";

const {
  GET_USER_INFO,
  SET_USER_INFO,
  HIDDEN_DIALOG,
  LOGOUT,
  CHANGE_INFO,
  GET_NOTICE_INFO,
  SET_NOTICE_INFO,
  CHANGE_PWD,
  GET_COURSE_INFO,
  SET_COURSE_INFO,
  GET_CHAPTER_INFO,
  SET_CHAPTER_INFO
} = FTMutationTypes;

export default {
  state: {
    userInfo: null,
    noticeInfo: null,
    courseInfo: null,
    chapterInfo: {}
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
    },
    [GET_COURSE_INFO](state) {
      return state.courseInfo;
    },
    [GET_CHAPTER_INFO]() {}
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
    },
    // eslint-disable-next-line
    [CHANGE_PWD]({ commit }, data) {
      let { id, oldPwd, newPwd, role } = data,
        params = { id, oldPwd, newPwd, role };
      return FTApi.FTChangePwd(params);
    },
    [SET_COURSE_INFO]({ commit }, data) {
      FTApi.FTGetCouresInfo(data).then(res => {
        let { code, data } = res.data;
        if (code == "200" && data.length) {
          commit(SET_COURSE_INFO, data);
        }
      });
    },
    [SET_CHAPTER_INFO]({ state, commit }, id) {
      if (state.chapterInfo[id]) {
        return new Promise(resolve => {
          resolve({ data: { ...state.chapterInfo[id] } });
        });
      } else {
        return FTApi.FTGetChapterInfo({ id: id }).then(res => {
          let { data, code } = res.data;
          if (code == "200") {
            commit(SET_CHAPTER_INFO, data);
          }
          return { data };
        });
      }
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
    },
    [SET_COURSE_INFO](state, data) {
      state.courseInfo = [...data];
    },
    [SET_CHAPTER_INFO](state, data) {
      state.chapterInfo[data.id] = { ...data };
    }
  }
};
