import { storiesOf } from "@storybook/vue";
import { FTRadioGroup } from "FTComponents/ui-library";

storiesOf("FTRadioGroup", module)
  .add(
    "默认",
    () => ({
      data() {
        return {
          list: [
            {
              label: "Radio 1",
              value: 1
            },
            {
              label: "Radio 2",
              value: 2
            },
            {
              label: "Radio 3",
              value: 3
            }
          ]
        };
      },
      components: { FTRadioGroup },
      template: `<FTRadioGroup :list="list">Radio</FTRadioGroup>`
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
      data() {
        return {
          list: [
            {
              label: "Radio 1",
              value: 1
            },
            {
              label: "Radio 2",
              value: 2
            },
            {
              label: "Radio 3",
              value: 3
            }
          ]
        };
      },
      components: { FTRadioGroup },
      template: `<FTRadioGroup :list="list" theme="light">Radio</FTRadioGroup>`
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
