# SweepLight

<ContainerBox title="介绍">
::: slot desc
光条一扫而过
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
鼠标悬浮在图片上
:::
<div class="demoBox">
<Directives-SweepLight-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="SweepLight" v-sweepLight></div>
</template>
<style scoped>
.SweepLight {
  width: 25vw;
  height: 25vw;
  overflow: hidden;
  background: url("/lib-components/lyb.png") no-repeat center center;
  background-size: cover;
}
</style>
```
:::
</ShowCode>

<ShowCode iskey>
::: slot codes
```js
const sweepLight = {
  inserted(el, { value }) {
    const light = document.createElement("div");
    el.style.position = "relative";
    light.style.cssText = `
      position: absolute;
      top: 0px;
      left: 0px;
      width: ${el.offsetWidth / 5}px;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.25);
      transform: skewX(45deg) translateX(${el.offsetWidth * 1.25}px);
      transition: all 1s;
      filter: blur(5px)
    `;
    el.appendChild(light);
    if (value) {
      light.style.transitionDelay = ` ${value}s`;
      light.style.transform = `skewX(45deg) translateX(${
        -el.offsetWidth * 1.25
      }px)`;
    } else {
      el.addEventListener("mouseenter", () => {
        light.style.transform = `skewX(45deg) translateX(${
          -el.offsetWidth / 1.5
        }px)`;
      });

      el.addEventListener("mouseleave", () => {
        light.style.transform = `skewX(45deg) translateX(${
          el.offsetWidth * 1.25
        }px)`;
      });
    }
  },
}
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="value">
::: slot desc

| 说明                         | 类型    | 默认值 |
| ---------------------------- | ------- | ------ |
| 自动扫光，可能需要配合`v-if` | Boolean | false  |

:::
</ContainerBox>