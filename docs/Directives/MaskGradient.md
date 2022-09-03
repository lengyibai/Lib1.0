# MaskGradient

<ContainerBox title="介绍">
::: slot desc
可为一些弹窗的半透明黑色蒙版背景加上渐变，或者一些视频封面文字
:::
</ContainerBox>

<ContainerBox title="使用">
::: slot desc

引入参考 [准备工作](/Directives/base/start.html#准备工作)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
支持显示光标，以及打字和删除时光标不闪烁
:::
<div class="demoBox">
<Directives-MaskGradient-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div
    class="MaskGradient"
    v-maskGradient="{
      color: 'rgba(40, 100, 195, 0.75)',
      num1: '0%',
      num2: '75%',
    }"
  >
    <span>假设这是一个弹窗</span>
  </div>
</template>
<style scoped>
.MaskGradient {
  position: relative;
  width: 100%;
  height: 50vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 5vw;
}
span{
  z-index: 1;
}
</style>
```
:::
</ShowCode>

<ShowCode iskey>
::: slot codes
```js
const maskGradient = {
  inserted(el, binding) {
    const {
      color = "rgba(0, 0, 0, 0.75)",
      rotate = "0deg",
      num1 = "0%",
      num2 = "50%",
    } = binding.value || {};
    const mask = document.createElement("div");
    mask.style.cssText = `
      position: absolute;
      inset:0;
      background-image: linear-gradient(${rotate}, ${color} ${num1}, transparent ${num2});
      pointer-events: none;
    `;
    el.appendChild(mask);
  },
},
```
:::
</ShowCode>
</ContainerBox>