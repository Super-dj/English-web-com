import { storiesOf } from "@storybook/vue";
import { FTCheckboxGroup } from "FTComponents/ui-library";

storiesOf("FTCheckboxGroup", module)
  .add(
    "默认",
    () => ({
      data() {
        return {
          list: [
            {
              label: "Checkbox 1",
              value: 1
            },
            {
              label: "Checkbox 2",
              value: 2
            },
            {
              label: "Checkbox 3",
              value: 3
            }
          ]
        };
      },
      components: { FTCheckboxGroup },
      template: `<FTCheckboxGroup :list="list"></FTCheckboxGroup>`
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
              label: "Checkbox 1",
              value: 1
            },
            {
              label: "Checkbox 2",
              value: 2
            },
            {
              label: "Checkbox 3",
              value: 3
            }
          ]
        };
      },
      components: { FTCheckboxGroup },
      template: `<FTCheckboxGroup :list="list" theme="light"></FTCheckboxGroup>`
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
