# GridLayout

<ContainerBox title="介绍">
::: slot desc
贴边等距，可支持等比缩放
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibGridLayout.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
试着缩小浏览器宽度查看效果

不可为列表盒子设置宽度，如果`eqhMultiple`有值，手动设置的高度将失效，除非`!important`
:::

<div class="demoBox">
<Statics-GridLayout-demo-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="grid">
    <LibGridLayout gap="10px" :count="5" :eqhMultiple="0.5">
      <div class="box" v-for="item in 8" :key="item" />
    </LibGridLayout>
  </div>
</template>
<style scoped>
.grid {
  width: 100%;
  height: 100%;
}
.box {
  height: 100px;
  border: 1px solid #000;
  transition: all 0.5s;
}
</style>
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="Flex布局实现">
::: slot desc
其实`Flex`布局也支持使用`gap`属性

试着缩小浏览器宽度
:::

<div class="demoBox">
<Statics-GridLayout-demo-flex />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="flex">
    <div class="box" v-for="item in 10" :key="item"></div>
  </div>
</template>
<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
}
.box {
  flex: 1;
  min-width: 100px;
  height: 10vh;
  border: 1px solid #000;
  transition: all 0.5s;
}
</style>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc

| 参数        | 说明                           | 类型   | 默认值 |
| ----------- | ------------------------------ | ------ | ------ |
| count       | 一行个数                       | Number | 3      |
| gap         | 盒子间距                       | String | 0px    |
| eqhMultiple | 高度是宽度的多少倍，意味着等比 | Number | 0      |

:::
</ContainerBox>
