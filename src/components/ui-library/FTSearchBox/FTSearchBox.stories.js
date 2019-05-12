import { storiesOf } from "@storybook/vue";
import { FTSearchBox } from "FTComponents/ui-library";

storiesOf("FTSearchBox", module)
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
    components: { FTSearchBox },
    template: `<FTSearchBox placeholder="Placeholder" />`
  }));
