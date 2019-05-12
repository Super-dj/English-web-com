import { FTIndexPage } from "FTPages";
import FTPage1 from "FTPages/module/FTPage1";
import FTPersonalInfo from "FTPages/FTPersonalInfo";
import FTChangeInfo from "FTComponents/FTChangeInfo";

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
      path: "/personalInfo",
      name: "personalInfo",
      component: FTPersonalInfo,
      children: [
        {
          path: "change",
          name: "change",
          component: FTChangeInfo
        }
      ]
    }
  ]
};
