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
  }
};
