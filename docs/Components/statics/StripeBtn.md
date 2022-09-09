# StripeBtn

<ContainerBox title="介绍">
::: slot desc
怀旧条纹加载
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibStripeBtn.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
在移动端部分浏览器可能会出现锯齿，PC端正常，暂不解决
:::

<div class="demoBox">
<Statics-StripeBtn-demo-index-a />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <LibStripeBtn @click="fn" :text="text" :bgColor="bgColor" v-model="active" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false,
      text: "删除",
      bgColor: "#f56c6c",
    };
  },
  methods: {
    fn() {
      this.text = "loading...";
      this.bgColor = "#67c23a";
      setTimeout(() => {
        this.bgColor = "#409eff";
        this.text = "创建";
        this.active = false;
      }, 2000);
    },
  },
};
</script>
<style scoped>
.demo {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
````
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="深色">
<div class="demoBox">
<Statics-StripeBtn-demo-index-b />
</div>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc

| 参数    | 说明                                                         | 类型    | 默认值  |
| ------- | ------------------------------------------------------------ | ------- | ------- |
| v-mode  | 是否显示条纹，点击后组件内部控制显示条纹，自己只需要在请求结束后隐藏条纹即可 | Boolean | false   |
| theme   | 主题，可选值：white \| black                                 | String  | white   |
| text    | 按钮文字                                                     | String  | 按钮    |
| bgColor | 按钮背景色                                                   | String  | #909399 |
| color   | 按钮文字颜色                                                 | String  | #fff    |

:::
</ContainerBox>
