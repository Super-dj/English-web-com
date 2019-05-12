import { storiesOf } from "@storybook/vue";
import { FTSlider } from "FTComponents/ui-library";

storiesOf("FTSlider", module)
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
    components: { FTSlider },
    template: `<FTSlider>Slider</FTSlider>`
  }));
