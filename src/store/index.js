/**
 * author: Tan Jun
 * createTime: 2018/12/17
 * describe: store(管理store的管理文件)
 **/

export { default as state } from "./state";
export { default as getters } from "./getters";
export { default as actions } from "./actions";
export { default as mutations } from "./mutations";
export { FTLocalStore, FTViewStore, FTAdminStore } from "./modules";
