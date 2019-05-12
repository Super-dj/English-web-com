import { storiesOf } from "@storybook/vue";
import { FTSwitch } from "FTComponents/ui-library";

storiesOf("FTSwitch", module)
  .add(
    "默认",
    () => ({
      components: { FTSwitch },
      template: `<FTSwitch></FTSwitch>`
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
      components: { FTSwitch },
      template: `<FTSwitch theme="light"></FTSwitch>`
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
