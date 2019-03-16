/**
 * author: Tan Jun
 * createTime: 2018/12/17
 * describe: FTHome
 **/
export default {
  path: "/health-check",
  name: "health-check",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
    import(/* webpackChunkName: "about" */ "FTPages/FTHealthCheck")
};
