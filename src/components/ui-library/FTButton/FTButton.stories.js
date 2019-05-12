import { storiesOf } from "@storybook/vue";
import { FTButton } from "FTComponents/ui-library";
import { FTSticker as Icon } from "FTAssets/images";

import docSize from "./FTButton.doc.size.md";
import docVariant from "./FTButton.doc.variant.md";
import docIcon from "./FTButton.doc.icon.md";
import docTheme from "./FTButton.doc.theme.md";

storiesOf("FTButton", module)
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
    "按钮尺寸",
    () => ({
      components: { FTButton },
      template: `
<div>
  <FTButton size="large">Large Button</FTButton>
  <FTButton>Default Button</FTButton>
  <FTButton size="small">Small Button</FTButton>
</div>
      `
    }),
    { notes: docSize }
  )
  .add(
    "按钮变体",
    () => ({
      components: { FTButton },
      template: `
<div>
  <FTButton>Default Button</FTButton>
  <hr/>
  <FTButton variant="fluid">Fluid Button</FTButton>
</div>
      `
    }),
    { notes: docVariant }
  )
  .add(
    "按钮图标",
    () => ({
      components: { FTButton, Icon },
      template: `
<div>
  <FTButton>
    <Icon />
    Icon
  </FTButton>
  <hr/>
  <FTButton variant="fluid">
    Icon
    <Icon slot="icon-after" />
  </FTButton>
  <hr/>
  <FTButton variant="fluid">
    <Icon />
    Icon
    <Icon slot="icon-after" />
  </FTButton>
</div>
      `
    }),
    { notes: docIcon }
  )
  .add(
    "按钮皮肤",
    () => ({
      components: { FTButton },
      template: `
<div>
  <FTButton>Default Button</FTButton>
  <FTButton theme="green">Green Button</FTButton>
  <FTButton theme="dashed">Dashed Button</FTButton>
  <FTButton theme="cancel">Cancel Button</FTButton>
  <hr/>
  <FTButton disabled>Default Button</FTButton>
  <FTButton disabled theme="green">Green Button</FTButton>
  <FTButton disabled theme="dashed">Dashed Button</FTButton>
  <FTButton disabled theme="cancel">Cancel Button</FTButton>
</div>
    `
    }),
    {
      notes: docTheme
    }
  );
