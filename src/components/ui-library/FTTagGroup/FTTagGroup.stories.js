import { storiesOf } from "@storybook/vue";
import { FTTagGroup } from "FTComponents/ui-library";

storiesOf("FTTagGroup", module)
  .add(
    "默认",
    () => ({
      components: { FTTagGroup },
      template: `<FTTagGroup :list="list"></FTTagGroup>`,
      data() {
        return {
          list: [{ name: "Tag 1" }, { name: "Tag 2" }, { name: "Tag 3" }]
        };
      }
    }),
    {
      backgrounds: [
        {
          name: "Dark",
          value: "#262B33",
          default: true
        }
      ]
    }
  )
  .add(
    "浅色背景",
    () => ({
      components: { FTTagGroup },
      template: `<FTTagGroup :list="list" theme="light"></FTTagGroup>`,
      data() {
        return {
          list: [{ name: "Tag 1" }, { name: "Tag 2" }, { name: "Tag 3" }]
        };
      }
    }),
    {
      backgrounds: [
        {
          name: "Light",
          value: "#FFF",
          default: true
        }
      ]
    }
  );
