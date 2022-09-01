# Iframe

<ContainerBox title="介绍">
::: slot desc
在当前网页以动画形式打开其他网页
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibIframe.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<Static-Iframe-demo-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <button class="btn" @click="Switch">{{ show ? "关闭" : "打开" }}</button>
    <LibIframe
      class="LibIframe"
      link="http://lengyibai.gitee.io/vue-function-library/dist/15/index.html"
      :show="show"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    Switch() {
      this.show = !this.show;
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
  flex-direction: column;
  align-items: center;
}
.LibIframe {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc

| 参数 | 说明         | 类型    | 默认值 |
| ---- | ------------ | ------- | ------ |
| link | 要打开的链接 | String  | -      |
| show | 是否显示     | Boolean | -      |

:::
</ContainerBox>
