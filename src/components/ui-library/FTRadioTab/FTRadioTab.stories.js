import { storiesOf } from "@storybook/vue";
import { FTRadioTab } from "FTComponents/ui-library";
import { FTSticker as Icon } from "FTAssets/images";
import doc from "./FTRadioTab.doc.md";

storiesOf("FTRadioTab", module)
  .addParameters({
    backgrounds: [
      {
        name: "Dark",
        value: "#262B33",
        default: true
      }
    ]
  })
  .add(
    "文字与图标",
    () => ({
      data() {
        return {
          list: [
            {
              label: "Item 1",
              icon: Icon,
              value: 1,
              isActive: true
            },
            {
              label: "Item 2",
              icon: Icon,
              value: 2,
              isActive: false
            },
            {
              label: "Item 3",
              icon: Icon,
              value: 3,
              isActive: false
            }
          ]
        };
      },
      components: { FTRadioTab },
      template: `<FTRadioTab :list="list" />`
    }),
    { notes: doc }
  )
  .add(
    "仅文字",
    () => ({
      data() {
        return {
          list: [
            {
              label: "Item 1",
              value: 1,
              isActive: true
            },
            {
              label: "Item 2",
              value: 2,
              isActive: false
            },
            {
              label: "Item 3",
              value: 3,
              isActive: false
            }
          ]
        };
      },
      components: { FTRadioTab },
      template: `<FTRadioTab :list="list" />`
    }),
    {
      notes: "见 《文字与图标》"
    }
  )
  .add(
    "仅图标",
    () => ({
      data() {
        return {
          list: [
            {
              icon: Icon,
              value: 1,
              isActive: true
            },
            {
              icon: Icon,
              value: 2,
              isActive: false
            },
            {
              icon: Icon,
              value: 3,
              isActive: false
            }
          ]
        };
      },
      components: { FTRadioTab },
      template: `<FTRadioTab :list="list" />`
    }),
    {
      notes: "见 《文字与图标》"
    }
  )
  .add(
    "浅色背景",
    () => ({
      data() {
        return {
          list: [
            {
              label: "Item 1",
              icon: Icon,
              value: 1,
              isActive: true
            },
            {
              label: "Item 2",
              icon: Icon,
              value: 2,
              isActive: false
            },
            {
              label: "Item 3",
              icon: Icon,
              value: 3,
              isActive: false
            }
          ]
        };
      },
      components: { FTRadioTab },
      template: `<FTRadioTab :list="list" theme="light" />`
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
