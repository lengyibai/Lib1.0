# QrCode

<ContainerBox title="介绍">
::: slot desc
需要`npm i vue-qr`

对插件 [vue-qr](https://gitee.com/mirrors_soldair/node-qrcode) 简单封装
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibQrCode.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<Statics-QrCode-demo-index-a />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <LibQrCode
    text="Hello World!"
  />
</template>
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="自定义样式">
::: slot desc
自定义大小和中间图标
:::

<div class="demoBox">
<Statics-QrCode-demo-index-b />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <LibQrCode
    text="Hello World!"
    :icon="require('./img/icon.png')"
    size="25vw"
  />
</template>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc

| 参数 | 说明                                                | 类型             | 默认值   |
| ---- | --------------------------------------------------- | ---------------- | -------- |
| text | 要转成二维码的文字或链接                            | String \| Number | 暂无数据 |
| icon | 二维码中心图标，引入本地图片请使用`require('路径')` | String           | -        |
| size | 二维码大小                                          | String           | 100px    |

:::
</ContainerBox>
