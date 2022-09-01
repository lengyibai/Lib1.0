# Icon

<ContainerBox title="介绍">
::: slot desc
有字体图标的特点，不会被拖拽，自带鼠标悬浮效果及悬浮提示
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibIcon.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<Statics-Icon-demo-index-a />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    爱
    <LibIcon
      :imgUrl="require('./img/love.svg')"
      title="爱心"
      size="10vw"
      left="0.5em"
      right="0.5em"
    />心
  </div>
</template>
<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 7.5vw;
}
</style>
````
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="自定义样式">
::: slot desc
悬浮切换图标
:::

<div class="demoBox">
<Statics-Icon-demo-index-b />
</div>

<ShowCode>
::: slot codes
```vue
<div class="demo">
  滑
  <LibIcon
    :imgUrl="require('./img/a.svg')"
    :imgUrlHover="require('./img/b.svg')"
    title="爱心"
    size="10vw"
    left="0.5em"
    right="0.5em"
  />稽
</div>
````

:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc

| 参数                           | 说明                                              | 类型   | 默认值 |
| ------------------------------ | ------------------------------------------------- | ------ | ------ |
| imgUrl                         | 图标，引入本地图片请使用`require('路径')`         | 未知   | -      |
| imgUrlHover                    | 悬浮后的图标，引入本地图片请使用`require('路径')` | 未知   | -      |
| title                          | 悬浮提示                                          | String | -      |
| size                           | 图标大小                                          | String | 25px   |
| top \| left \| bottom \| right | 图标外边距                                        | String | 0px    |

:::
</ContainerBox>
