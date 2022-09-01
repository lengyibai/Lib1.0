# CircularProgress

<ContainerBox title="介绍">
::: slot desc
版权声明：本页组件为`CSDN`博主`「青春～不散」`所有

原文链接：[SVG绘制圆环进度条](https://blog.csdn.net/qq_40289557/article/details/123061211)
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibCircularProgress.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
只能输入小数
:::

<div class="demoBox">
<Statics-CircularProgress-demo-index-a />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <input type="text" v-model.number="num" />
    <LibCircularProgress :value="num">
      <span>普通进度条</span>
      <br />
      <span>{{ `${(num * 100).toFixed(2)}%` }}</span>
    </LibCircularProgress>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0.15,
    };
  },
};
</script>
<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  font-size: 20px;
  margin-bottom: 25px;
}
</style>
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="渐变进度条">
<div class="demoBox">
<Statics-CircularProgress-demo-index-b />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <input type="text" v-model.number="num" />
    <LibCircularProgress
      :part-gap="0"
      :part="1"
      :value="num"
      :show-gradient="true"
      :stroke-width="20"
      bg-ring-color="#13387e"
    >
      <span>渐变进度条</span>
      <br />
      <span>{{ `${(num * 100).toFixed(2)}%` }}</span>
    </LibCircularProgress>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0.75,
    };
  },
};
</script>
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="普通进度格">
<div class="demoBox">
<Statics-CircularProgress-demo-index-c />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <input type="text" v-model.number="num" />
    <LibCircularProgress
      :part-gap="20"
      :part="20"
      :value="num"
      :stroke-width="20"
      bg-ring-color="#446224"
      ring-color="#a3fe49"
      stroke-linecap="butt"
    >
      <span>普通进度格</span>
      <br />
      <span>{{ `${(num * 100).toFixed(2)}%` }}</span>
    </LibCircularProgress>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0.3,
    };
  },
};
</script>
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="渐变进度格">
<div class="demoBox">
<Statics-CircularProgress-demo-index-d />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <input type="text" v-model.number="num" />
    <LibCircularProgress
      :gradient="myGradient"
      :part-gap="20"
      :part="40"
      :value="num"
      :show-gradient="true"
      :stroke-width="30"
      bg-ring-color="#13387e"
      ring-color="#1cbd9c"
      stroke-linecap="butt"
    >
      <span>渐变进度格</span>
      <br />
      <span>{{ `${(num * 100).toFixed(2)}%` }}</span>
    </LibCircularProgress>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0.45,
      myGradient: {
        id: "svg-linear-gradient001",
        x1: "100%",
        y1: "100%",
        x2: "0%",
        y2: "0%",
        colorStops: [
          {
            offset: "0%",
            color: "#0ae787",
          },
          {
            offset: "100%",
            color: "#fe653c",
          },
        ],
      },
    };
  },
};
</script>
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="更细的进度格">
<div class="demoBox">
<Statics-CircularProgress-demo-index-e />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <input type="text" v-model.number="num" />
    <LibCircularProgress
      :part-gap="20"
      :part="50"
      :value="num"
      :stroke-width="20"
      bg-ring-color="#13387e"
      ring-color="#00bbff"
      stroke-linecap="butt"
    >
      <span>更细的进度格</span>
      <br />
      <span>{{ `${(num * 100).toFixed(2)}%` }}</span>
    </LibCircularProgress>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0.6,
    };
  },
};
</script>
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="进度“饼”">
<div class="demoBox">
<Statics-CircularProgress-demo-index-f />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <input type="text" v-model.number="num" />
    <LibCircularProgress
      :value="num"
      :stroke-width="200"
      bg-ring-color="#4834d4"
      ring-color="#686de0"
      stroke-linecap="butt"
    >
      <span>进度“饼”</span>
      <br />
      <span>{{ `${(num * 100).toFixed(2)}%` }}</span>
    </LibCircularProgress>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0.9,
    };
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

| 参数          | 说明                                           | 类型    | 默认值                                                                                                                                                              |
| ------------- | ---------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| rate          | 绑定值，0-1                                    | Number  | 0                                                                                                                                                                   |
| size          | 整体大小                                       | String  | 200px                                                                                                                                                               |
| fontSize      | 中间字体大小                                   | String  | 16px                                                                                                                                                                |
| bgRingColor   | 线条背景色                                     | String  | #13387e                                                                                                                                                             |
| ringColor     | 线条颜色                                       | String  | #00bbff                                                                                                                                                             |
| fontColor     | 中间字体颜色                                   | String  | #fff                                                                                                                                                                |
| strokeLinecap | 线条类型，可选值：butt(直边) \| round(圆边)    | String  | round                                                                                                                                                               |
| strokeWidth   | 线条厚度，`200`可变成饼图                      | Number  | 20                                                                                                                                                                  |
| part          | 将线条分成几份                                 | Number  | 1                                                                                                                                                                   |
| partGap       | 每份的间隔                                     | Number  | 0                                                                                                                                                                   |
| showGradient  | 是否开启渐变，开启后，`ring-color`将会失效     | Boolean | false                                                                                                                                                               |
| gradient      | 开启渐变后的渐变参数，同一个页面中`id`务必唯一 | Object  | { id: "svg-linear-gradient", x1: "0%", y1: "0%", x2: "0%", y2: "100%", colorStops: [ { offset: "0%", color: "yellow", }, { offset: "100%", color: "orange", }, ], } |

:::
</ContainerBox>
