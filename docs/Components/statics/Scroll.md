# Scroll

<ContainerBox title="介绍">
::: slot desc
需要`npm i better-scroll`

对插件 [better-scroll](https://better-scroll.github.io/docs/zh-CN/guide) 二次封装
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibScroll.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
:::slot desc
按下滑动下面列表
:::

<div class="demoBox">
<Statics-Scroll-demo-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="LibScroll">
    <LibScroll>
      <div class="content">
        <h1 v-for="(item, index) in 50" :key="index">{{ item }}</h1>
      </div>
    </LibScroll>
  </div>
</template>
<style scoped lang="less">
.LibScroll {
  position: relative;
  width: 100%;
  height: 50vh;
  border: 1px solid #fff;
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      color: #fff;
    }
  }
}
</style>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc

| 参数          | 说明                                                         | 类型    | 默认值 |
| ------------- | ------------------------------------------------------------ | ------- | ------ |
| top \| bottom | 顶部 \| 底部外边距，当滚动区域顶部或底部有遮挡时设置为遮挡物的高度 | String  | 0px    |
| backTop       | 是否显示回到顶部和监听坐标                                   | Boolean | true   |

:::
</ContainerBox>

<ContainerBox title="Events">
::: slot desc

| 事件名 | 说明       | 回调参数 |
| ------ | ---------- | -------- |
| scroll | 滚动时调用 | 坐标     |

:::
</ContainerBox>