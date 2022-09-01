# UploadImg

<ContainerBox title="介绍">
::: slot desc
一般用于修改头像
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibUploadImg.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<Dynamics-UploadImg-demo-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <LiBUploadImg url="/upload" v-model="img_url" />
</template>
<script>
export default {
  data() {
    return {
      img_url: "http://lengyibai.gitee.io/img-bed/img/lyb.png",
    };
  },
  watch: {
    img_url(v) {
      console.log(v);
    },
  },
};
</script>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc

| 参数  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| value | 图片链接 | String | -      |
| url   | 接口地址 | String | -      |

:::
</ContainerBox>
