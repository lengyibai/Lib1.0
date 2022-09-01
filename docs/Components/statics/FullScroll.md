# FullScroll

<ContainerBox title="介绍">
::: slot desc
全屏滚动，只适用于全屏情况下
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibFullScroll.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
在下面滚动，整个页面都会滚动，属于正常现象，因为全屏滚动并不依赖滚动条，最终是用于全屏
:::

<div class="demoBox">
<Statics-FullScroll-demo-index-a />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <LibFullScroll>
      <div class="scroll-item" v-for="(item, index) in 10" :key="index">
        {{ item }}
      </div>
    </LibFullScroll>
  </div>
</template>
<script>
</script>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.scroll-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7vw;
}
</style>
````

:::
</ShowCode>
</ContainerBox>

<ContainerBox title="横向滚动">
<div class="demoBox">
<Statics-FullScroll-demo-index-b />
</div>

<ShowCode>
::: slot codes
```vue

<LibFullScroll direction="x">
  <div class="scroll-item" v-for="(item, index) in 10" :key="index">
    {{ item }}
  </div>
</LibFullScroll>
````

:::
</ShowCode>
</ContainerBox>

<ContainerBox title="滚动回调">
<div class="demoBox">
<Statics-FullScroll-demo-index-c />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <LibFullScroll @start="start" @end="end" v-model="page">
      <div class="scroll-item" v-for="(item, index) in 10" :key="index">
        {{ item }}
      </div>
    </LibFullScroll>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 3,
    };
  },
  methods: {
    start(i) {
      alert(`开始滚动回调，当前第${i}页`);
    },
    end(i) {
      alert(`结束滚动回调，当前第${i}页`);
    },
  },
};
</script>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}
.scroll-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7vw;
}
</style>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc

| 参数      | 说明                   | 类型    | 默认值 |
| --------- | ---------------------- | ------- | ------ | --- |
| v-mode    | 绑定的页数，大于`0`    | Number  | 1      |
| direction | 滚动方向，`x`横向      | `y`纵向 | String | y   |
| duration  | 滚动动画时长，单位`ms` | Number  | 750    |

:::
</ContainerBox>

<ContainerBox title="Events">
::: slot desc

| 事件名 | 说明         | 回调参数 |
| ------ | ------------ | -------- |
| start  | 滚动开始回调 | 当前页数 |
| end    | 滚动结束回调 | 当前页数 |

:::
</ContainerBox>
