通过嵌入 SVG 组件插入图标

```html
<FTButton>
  <Icon />
  Icon
</FTButton>
```

尾部的图标需要标明 `slot="icon-after"`

```html
<FTButton variant="fluid">
  Icon
  <Icon slot="icon-after" />
</FTButton>
```

可以插入两个图标

```html
<FTButton variant="fluid">
  <Icon />
  Icon
  <Icon slot="icon-after" />
</FTButton>
```
