import { storiesOf } from "@storybook/vue";
import { FTCheckbox } from "FTComponents/ui-library";

storiesOf("FTCheckbox", module)
  .add(
    "默认",
    () => ({
      components: { FTCheckbox },
      template: `<FTCheckbox>Checkbox</FTCheckbox>`
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
      components: { FTCheckbox },
      template: `<FTCheckbox theme="light">Checkbox</FTCheckbox>`
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
