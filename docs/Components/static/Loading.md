# Loading

<ContainerBox title="介绍">
::: slot desc
彩色圆点`Loading`
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibLoading.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<Static-Loading-demo-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <button @click="loading">{{ isFull ? "关闭" : "开启" }}全屏显示</button>
    <LibLoading :show="show" :isFull="isFull" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      isFull: false,
    };
  },
  methods: {
    loading() {
      this.isFull = !this.isFull;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 1000);
    },
  },
};
</script>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
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

| 参数   | 说明         | 类型    | 默认值 |
| ------ | ------------ | ------- | ------ |
| show   | 控制隐藏显示 | Boolean | false  |
| isFull | 是否全屏显示 | Boolean | true   |

:::
</ContainerBox>

