import { storiesOf } from "@storybook/vue";
import { FTInput } from "FTComponents/ui-library";

storiesOf("FTInput", module)
  .add(
    "默认",
    () => ({
      components: { FTInput },
      template: `<FTInput placeholder="Placeholder" />`
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
      components: { FTInput },
      template: `<FTInput placeholder="Placeholder" theme="light" />`
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
