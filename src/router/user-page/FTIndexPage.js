import { FTIndexPage, FTStudyPage } from "FTPages";
import FTPage1 from "FTPages/module/FTPage1";
import FTPage3 from "FTPages/module/FTPage3";
import FTPersonalInfo from "FTPages/FTPersonalInfo";
import FTChangeInfo from "FTComponents/FTChangeInfo";
import FTChangePwd from "FTComponents/FTChangePwd";
import FTCourseInfo from "FTComponents/FTCourseInfo";
import FTCourseAll from "FTComponents/FTCourseAll";

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
      path: "/personalInfo",
      name: "personalInfo",
      component: FTPersonalInfo,
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
        }
      ]
    }
  ]
};
