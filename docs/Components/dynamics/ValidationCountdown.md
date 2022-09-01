# ValidationCountdown

<ContainerBox title="介绍">
::: slot desc
一个获取短信验证码的倒计时按钮
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/ValidationCountdown.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
只通过插槽`props`提供文字描述，按钮样式需自定义
:::
::: warning
插槽内只能存在一个可点击的元素，建议始终使用原生`button`标签，它自带的`disabled`能够屏蔽点击，并自动变灰
:::

<div class="demoBox">
<Dynamics-ValidationCountdown-demo-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demoFull flex">
    <Dynamics-ValidationCountdown-index @change="statusChange" :time="3">
      <template v-slot="{ text,  disabled }">
        <button
          class="btn"
          :disabled="disabled"
          :style="{ cursor: disabled ? 'not-allowed' : 'pointer' }"
        >
          {{ text }}
        </button>
      </template>
    </Dynamic-ValidationCountdown-index>
  </div>
</template>
<script>
export default {
  methods: {
    statusChange(status) {
      alert(status);
    },
  },
};
</script>
<style scoped>
button {
  background-color: transparent;
  font-size: 2vw;
  padding: 1em;
}
</style>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc

| 参数 | 说明       | 类型   | 默认值 |
| ---- | ---------- | ------ | ------ |
| time | 倒计时秒数 | Number | 60     |

:::
</ContainerBox>

<ContainerBox title="Events">
::: slot desc

| 事件名 | 说明                                                         | 回调参数 |
| ------ | ------------------------------------------------------------ | -------- |
| change | 按钮状态，点击时触发，回调参数为`false`，倒计时结束时触发，回调参数为`true` | -        |

:::
</ContainerBox>

<ContainerBox title="Slots">
::: slot desc

| 名称    | 说明                                     | 参数 |
| ------- | ---------------------------------------- | ---- |
| default | { text：倒计时文本，disabled：按钮状态 } | -    |

:::
</ContainerBox>
