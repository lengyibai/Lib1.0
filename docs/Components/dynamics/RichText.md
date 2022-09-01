# RichText

<ContainerBox title="介绍">
::: slot desc
需要`npm i vue-quill-editor@3.0.6 quill@1.3.7`

注释了一些不常用的功能，如需要请前往源码解开注释

配置了图片上传，支持压缩上传，请前往源码根据需求解开注释
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibRichText.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<Dynamics-RichText-demo-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <Dynamics-RichText-index v-model="content" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      content:
        `<p class="ql-align-center"><span style="color: rgb(255, 255, 255);"><img src="http://lengyibai.gitee.io/img-bed/img/lyb.png"></span></p><h1 class="ql-align-center">冷弋白</h1>`,
    };
  },
  watch: {
    content(v) {
      console.log(v);
    },
  },
};
</script>
<style scoped>
.demo {
  width: 100%;
  height: 50vh;
}
</style>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc

| 参数    | 说明   | 类型   | 默认值 |
| ------- | ------ | ------ | ------ |
| v-model | 绑定值 | String | -      |

:::
</ContainerBox>
