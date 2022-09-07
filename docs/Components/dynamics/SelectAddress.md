# SelectAddress

<ContainerBox title="介绍">
::: slot desc
需要`npm i element-ui`

对`element-ui`的`Cascader`级联选择器进行简单封装
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibSelectAddress.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
返回地理位置代码
:::

<div class="demoBox">
<Dynamics-SelectAddress-demo-index-a />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="LibSelectAddress">
    <Dynamics-SelectAddress-index v-model="code" />
    <h1>{{ code }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      code: ["510000", "510100", "510107"],
    };
  },
};
</script>
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="返回中文">
::: slot desc
返回中文
:::

<div class="demoBox">
<Dynamics-SelectAddress-demo-index-b />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="LibSelectAddress">
    <Dynamics-SelectAddress-index
      v-model="chinese"
      @change="change"
      :code="false"
    />
    <h1>{{ chinese }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chinese: ["四川省", "自贡市", "自流井区"],
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

| 参数 | 说明                 | 类型    | 默认值 |
| ---- | -------------------- | ------- | ------ |
| code | 是否返回地理位置代码 | Boolean | true   |

:::
</ContainerBox>

<ContainerBox title="Events">
::: slot desc

| 事件名 | 说明       | 回调参数 |
| ------ | ---------- | -------- |
| change | 选择后触发 | 选择的值 |

:::
</ContainerBox>
