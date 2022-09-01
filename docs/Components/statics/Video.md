# Video

<ContainerBox title="介绍">
::: slot desc
一个轻巧的视频播放器
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibVideo.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<Statics-Video-demo-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <LibVideo :url="require('./video/video.mp4')" />
</template>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc

| 参数 | 说明                                          | 类型 | 默认值 |
| ---- | --------------------------------------------- | ---- | ------ |
| url  | 视频地址，引入本地视频请使用`require('路径')` | 未知 | -      |

:::
</ContainerBox>
