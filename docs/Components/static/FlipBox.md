# FlipBox

<ContainerBox title="介绍">
::: slot desc
翻转至背面
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibFlipBox.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<Static-FlipBox-demo-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <LibFlipBox>
      <template #front>
        <div class="box flex">鼠标放上来</div>
      </template>
      <template #back>
        <div class="box flex">鼠标移出去</div>
      </template>
    </LibFlipBox>
  </div>
</template>
<style scoped>
.demo {
  width: 100%;
  height: 300px;
  font-size: 4vw;
}
.box {
  height: 100%;
  background-color: #eee;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc

| 参数     | 说明                   | 类型   | 默认值 |
| -------- | ---------------------- | ------ | ------ |
| duration | 旋转动画时长，单位`ms` | Number | 500    |

:::
</ContainerBox>

<ContainerBox title="Slots">
::: slot desc

| 名称  | 说明     |
| ----- | -------- |
| front | 正面盒子 |
| back  | 背面盒子 |

:::
</ContainerBox>
