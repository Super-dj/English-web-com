import { storiesOf } from "@storybook/vue";
import { FTPagination } from "FTComponents/ui-library";

storiesOf("FTPagination", module)
  .add(
    "默认",
    () => ({
      components: { FTPagination },
      template: `<FTPagination/>`
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
      components: { FTPagination },
      template: `<FTPagination theme="light"/>`
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
