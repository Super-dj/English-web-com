/**
 * author: Tan Jun
 * createTime: 2018/12/17
 * describe: FTMutationTypes(用于管理store里的常量和方法)
 **/

// 命名规则: key 全大写加_ value 全小写加_并且都用双"" 后面加注释 // ;
import FTAdminMutation from "./FTAdminMutation";
import FTViewMutation from "./FTViewMutation";

export default {
  ...FTAdminMutation,
  ...FTViewMutation,
  EXAMPLE: "example",
  CHANGE_LANGUAGE: "changeLanguage", // 修改本地化文字的方法
  GET_LOCAL: "getLocal", // 获取本地化文字
  GET_USER_INFO: "getUserInfo",
  SET_USER_INFO: "setUserInfo",
  LOGOUT: "logout",
  DELETE: "delete",
  COPY: "copy",
  GET_EMIT: "getEmit",
  SET_EMIT: "setEmit",
  CHANGE_INFO: "changeInfo",
  SET_NOTICE_INFO: "setNoticeInfo",
  GET_NOTICE_INFO: "getNoticeInfo",
  CHANGE_PWD: "changePwd",
  GET_COURSE_INFO: "getCourseInfo",
  SET_COURSE_INFO: "setCourseInfo",
  GET_CHAPTER_INFO: "getChapterInfo",
  SET_CHAPTER_INFO: "setChapterInfo",
  GET_MESSAGE_INFO: "getMessageInfo"
};
