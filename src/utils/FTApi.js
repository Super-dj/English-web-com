/**
 * author: Deng Jie
 * createTime: 2019/2/12
 * describe: FTApi
 **/
const Axios = require("./axios");
import qs from "qs";

export const FTApi = {
  // FTDeleteBanner(id) {
  //   return Axios.post(`/banner/delete?id=${id}`);
  // }
  FTLogin(params) {
    let _params = {
      ...params
    };
    return Axios.post("/user/login", qs.stringify({ ..._params }));
  },
  FTChangeInfo(paramas) {
    let _params = { ...paramas };
    return Axios.get("/user/changeInfo", { params: { ..._params } });
  },
  FTGetNoticeInfo() {
    return Axios.get("/user/noticeInfo");
  },
  FTChangePwd(params) {
    return Axios.post("/user/changePwd", qs.stringify({ ...params }));
  },
  FTGetCouresInfo(params) {
    return Axios.get("/user/course", { params });
  },
  FTGetChapterInfo(params) {
    return Axios.get("/user/courseDetInfo", { params });
  },
  FTAddCourseInfo(params) {
    return Axios.post("/user/addCourseInfo", qs.stringify({ ...params }));
  },
  FTGetMessage(_params) {
    let params = { a: "1", ..._params };
    return Axios.post("/user/getMessage", qs.stringify({ ...params }));
  },
  FTAddMessage(params) {
    return Axios.post("/user/addMessage", qs.stringify({ ...params }));
  }
};
