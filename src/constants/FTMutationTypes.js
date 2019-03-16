/**
 * author: Tan Jun
 * createTime: 2018/12/17
 * describe: FTMutationTypes(用于管理store里的常量和方法)
 **/

// 命名规则: key 全大写加_ value 全小写加_并且都用双"" 后面加注释 // ;
import FTAdminMutation from "./FTAdminMutation";

export default {
  ...FTAdminMutation,
  EXAMPLE: "example",
  CHANGE_LANGUAGE: "changeLanguage", // 修改本地化文字的方法
  GET_LOCAL: "getLocal", // 获取本地化文字
  UNDO: "undo",
  REDO: "redo",
  DELETE: "delete",
  COPY: "copy",
  GET_EMIT: "getEmit",
  SET_EMIT: "setEmit"
};
