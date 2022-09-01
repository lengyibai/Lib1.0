<ContainerBox title="基础用法">
:::slot desc
不同的鼠标悬浮样式，图片自定义
:::
<div class="demoBox">
<Styles-Cursor-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="Cursor">
    <div class="box cursor-default">鼠标移动到此处：default</div>
    <div class="box cursor-pointer">鼠标移动到此处：pointer</div>
    <div class="box cursor-not-allowed">鼠标移动到此处：not-allowed</div>
  </div>
</template>
<style scoped lang="less">
.Cursor {
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  font-size: 1vw;
}
</style>
````
:::
</ShowCode>

<ShowCode>
::: slot codes

```css
.cursor-default {
  cursor: url("./cur/default.png"), auto !important;
}

.cursor-pointer {
  cursor: url("./cur/pointer.png"), auto !important;
}

.cursor-not-allowed {
  cursor: url("./cur/not-allowed.png"), auto !important;
}
```

:::
</ShowCode>
</ContainerBox>
