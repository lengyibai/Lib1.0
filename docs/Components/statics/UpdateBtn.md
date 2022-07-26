# UpdateBtn

<ContainerBox title="介绍">
::: slot desc
自带`loading`效果的更新按钮
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibUpdateBtn.zip)
引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
限制只能点击一次，目前暂无更新失败提示，以及支持重新点击更新的功能
:::

<div class="demoBox">
<Statics-UpdateBtn-demo-index-a />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <LibUpdateBtn
      @update="update"
      :finish="finish"
    />
    <span>{{ text }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      finish: false,
      text: "待更新",
    };
  },
  methods: {
    update() {
      this.text = "更新中";
      setTimeout(() => {
        this.finish = true;
        this.text = "更新成功";
      }, 2000);
    },
  },
};
</script>
<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2vw;
}
</style>
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="自定义样式">
::: slot desc
自定义大小、可外加一个圆圈
:::

<div class="demoBox">
<Statics-UpdateBtn-demo-index-b />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <LibUpdateBtn
      style="border: 0.75vw solid #000"
      @update="update"
      :finish="finish"
      size="15vw"
    />
    <span>{{ text }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      finish: false,
      text: "待更新",
    };
  },
  methods: {
    update() {
      this.text = "更新中";
      setTimeout(() => {
        this.finish = true;
        this.text = "更新成功";
      }, 2000);
    },
  },
};
</script>
<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
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

| 参数   | 说明                                       | 类型    | 默认值 |
| ------ | ------------------------------------------ | ------- | ------ |
| size   | 按钮及字体大小                             | String  | 50px   |
| finish | 完成状态，当更新成功后，将其设为`true`即可 | Boolean | false  |

:::
</ContainerBox>

<ContainerBox title="Events">
::: slot desc

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| update | 点击按钮后触发 | -        |

:::
</ContainerBox>
