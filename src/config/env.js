export const autoChange = () => {
  let baseURL = "api/admin";
  if (__DEBUG__) {
    baseURL = "https://test-www.fotor.com.cn/api/admin";
  } else if (process.env.NODE_ENV === "test") {
    baseURL = "https://test-www.fotor.com.cn/api/admin";
  }
  // if (hostname === "localhost") {
  //   baseURL = "https://test-www.fotor.com.cn/api/admin";
  // } else if (hostname === "test-www.fotor.com.cn") {
  //   baseURL = "https://test-www.fotor.com.cn/api/admin";
  // } else if (hostname === "www.fotor.com.cn") {
  //   baseURL = "https://www.fotor.com.cn/api/admin";
  // }
  return baseURL;
};
