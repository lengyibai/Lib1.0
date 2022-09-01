# LibMask

<ContainerBox title="介绍">
::: slot desc
普通的黑色背景蒙版
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibMask.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
点击除内部元素以外的空白处，会关闭蒙版
:::

<div class="demoBox">
<Statics-Mask-demo-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="flex">
    <button @click="show = true">点击显示</button>
    <LibMask v-model="show">
      <h1>这是一个蒙版，点击除这里以外的位置会关闭</h1>
    </LibMask>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: center;
}

h1 {
color: #fff;
font-size: 4vw;
}
</style>

```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc

| 参数    | 说明       | 类型    | 默认值 |
| ------- | ---------- | ------- | ------ |
| v-model | 显示与隐藏 | Boolean | false  |

:::
</ContainerBox>
