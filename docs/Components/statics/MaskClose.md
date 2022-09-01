# MaskClose

<ContainerBox title="介绍">
::: slot desc
灵感来自`B站`观看视频最大化时，鼠标移动到顶部，会有一个关闭按钮
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibMaskClose.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
鼠标移动到导航栏处看效果
:::
<Statics-MaskClose-demo-index />

<ShowCode>
::: slot codes
```vue
<template>
  <div>
    <LibMaskClose @close="close" />
  </div>
</template>
<script>
export default {
  methods: {
    close() {
      alert("关闭回调");
    },
  },
};
</script>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Events">
::: slot desc

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| close  | 点击关闭时调用 | -        |

:::
</ContainerBox>
