import { storiesOf } from "@storybook/vue";
import { FTProgressBar } from "FTComponents/ui-library";

storiesOf("FTProgressBar", module)
  .addParameters({
    backgrounds: [
      {
        name: "Dark",
        value: "#262B33",
        default: true
      }
    ]
  })
  .add("默认", () => ({
    components: { FTProgressBar },
    template: `<FTProgressBar></FTProgressBar>`
  }))
  .add("错误状态", () => ({
    components: { FTProgressBar },
    template: `<FTProgressBar broken></FTProgressBar>`
  }))
  .add(
    "浅色背景",
    () => ({
      components: { FTProgressBar },
      template: `
<div>
  <FTProgressBar theme="light"></FTProgressBar>
  <hr/>
  <FTProgressBar broken theme="light"></FTProgressBar>
</div>`
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
