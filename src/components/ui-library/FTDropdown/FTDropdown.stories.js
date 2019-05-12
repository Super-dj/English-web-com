import { storiesOf } from "@storybook/vue";
import { FTDropdown } from "FTComponents/ui-library";

storiesOf("FTDropdown", module)
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
    components: { FTDropdown },
    template: `<FTDropdown/>`
  }));
