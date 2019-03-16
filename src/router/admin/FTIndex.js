/**
 * author: Deng Jie
 * createTime: 2019/2/12
 * describe:
 **/
import { FTIndex, FTChangeBanner } from "FTPages";

export default {
  path: "/",
  name: "adminIndex",
  component: FTIndex,
  children: [
    {
      // 当 /user/:id/profile 匹配成功，
      // UserProfile 会被渲染在 User 的 <router-view> 中
      path: "changeBanner",
      component: FTChangeBanner
    }
  ]
};
