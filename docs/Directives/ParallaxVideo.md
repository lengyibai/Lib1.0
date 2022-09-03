# ParallaxVideo

<ContainerBox title="介绍">
::: slot desc
可用于视频背景视差效果
:::
</ContainerBox>

<ContainerBox title="使用">
::: slot desc

引入参考 [准备工作](/Directives/base/start.html#准备工作)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
<div class="demoBox">
<Directives-ParallaxVideo-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="ParallaxVideo">
    <video v-parallaxBg autoplay src="./video/bg.mp4" loop muted></video>
  </div>
</template>
<style scoped>
.ParallaxVideo {
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
}
</style>
```
:::
</ShowCode>

<ShowCode iskey>
::: slot codes
```js
const parallaxBg = {
  inserted(el, { value = 2 }) {
    el.style.cssText = `
      position: absolute;
      pointer-events: none;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      transition: all 0.25s ease-out;
    `;
    /* 灵敏度三级 */
    const sensitivity = [
      [15, 1.1],
      [10, 1.225],
      [5, 1.35],
    ];
    // 当前灵敏度为最高
    const multiple = sensitivity[value][0];
    function transformElement(x, y) {
      let box = el.getBoundingClientRect();
      let calcY = (box.height / 2 - (y - box.y)) / multiple;
      let calcX = (box.width / 2 - (x - box.x)) / multiple;
      el.style.transform = `translateY(${calcY}px) translateX(${calcX}px) scale(${sensitivity[value][1]})`;
    }
    el.parentElement.addEventListener("mousemove", (e) => {
      requestAnimationFrame(function () {
        transformElement(e.clientX, e.clientY);
      });
    });
  },
}
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="value">
::: slot desc

| 说明                       | 类型   | 默认值 |
| -------------------------- | ------ | ------ |
| 灵敏度，0-2，2为最高灵敏度 | Number | 2      |

:::
</ContainerBox>