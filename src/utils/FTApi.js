/**
 * author: Deng Jie
 * createTime: 2019/2/12
 * describe: FTApi
 **/
const Axios = require("axios");

Axios.defaults.withCredentials = true;
export const FTApi = {
  FTAdminLogin(userInfo) {
    return Axios.post("/login", userInfo, {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      },
      params: {
        ...userInfo
      }
    });
  },
  FTAdminLoginOut() {
    return Axios.post("/loginOut", {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    });
  },
  FTAdminRegister(userInfo) {
    return Axios.post("/register", userInfo);
  },
  FTGetBannerList(options) {
    return Axios.get("/banner/getAll", {
      params: { ...options }
    });
  },
  FTAddBanner(options) {
    return Axios.post("/banner/create", options);
  },
  FTUpdateBanner(options) {
    return Axios.put("/banner/update", options);
  },
  FTDeleteBanner(id) {
    return Axios.post(`/banner/delete?id=${id}`);
  }
};
