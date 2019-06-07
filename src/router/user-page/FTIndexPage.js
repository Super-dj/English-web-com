import { FTIndexPage, FTStudyPage } from "FTPages";
import FTPage1 from "FTPages/module/FTPage1";
import FTPage3 from "FTPages/module/FTPage3";
import FTPage4 from "FTPages/module/FTPage4";
import FTPage5 from "FTPages/module/FTPage5";
import FTPage6 from "FTPages/module/FTPage6";
import FTPage7 from "FTPages/module/FTPage7";
import FTPage8 from "FTPages/module/FTPage8";
import FTPersonalInfo from "FTPages/FTPersonalInfo";
import FTChangeInfo from "FTComponents/FTChangeInfo";
import FTChangePwd from "FTComponents/FTChangePwd";
import FTCourseInfo from "FTComponents/FTCourseInfo";
import FTCourseAll from "FTComponents/FTCourseAll";
import FTStudentInfo from "FTComponents/FTStudentInfo";
import FTMessageInfo from "FTComponents/FTMessageInfo";

export default {
  path: "/",
  name: "indexPage",
  component: FTIndexPage,
  redirect: "/page1",
  children: [
    {
      path: "/page1",
      name: "page1",
      component: FTPage1
    },
    {
      path: "/page3",
      name: "page3",
      component: FTPage3,
      redirect: "/page3/course",
      children: [
        {
          path: "study",
          name: "study",
          component: FTStudyPage
        },
        {
          path: "course",
          name: "course",
          component: FTCourseAll
        }
      ]
    },
    {
      path: "/page5",
      name: "evaluate",
      component: FTPage5
    },
    {
      path: "/page6",
      name: "notice",
      component: FTPage6
    },
    {
      path: "/page7",
      name: "jiaoxuemubiao",
      component: FTPage7
    },
    {
      path: "/page8",
      name: "help",
      component: FTPage8
    },
    {
      path: "/page4",
      name: "page4",
      component: FTPage4
    },
    {
      path: "/personalInfo",
      name: "personalInfo",
      component: FTPersonalInfo,
      redirect: "/personalInfo/change",
      children: [
        {
          path: "change",
          name: "change",
          component: FTChangeInfo
        },
        {
          path: "pwd",
          name: "pwd",
          component: FTChangePwd
        },
        {
          path: "course",
          name: "course",
          component: FTCourseInfo
        },
        {
          path: "student",
          name: "student",
          component: FTStudentInfo
        },
        {
          path: "message",
          name: "message",
          component: FTMessageInfo
        }
      ]
    }
  ]
};
