# Particle

<ContainerBox title="介绍">
::: slot desc
灵感来自`王者荣耀`粒子背景
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
<Directives-Particle-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <BtnLogin v-particle></BtnLogin>
</template>
<script>
import BtnLogin from "./BtnLogin";
export default {
  components: { BtnLogin },
};
</script>
````
:::
</ShowCode>

<ShowCode>
::: slot codes
```js
function $random(min, max, num = 0) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(num));
}
let particle_timer = null;
const particle = {
  inserted(el, binding) {
    const box = el;
    let {
      color = "#cfb45c",
      size = 10,
      brightness = 1.5,
      contrast = 1.1,
      filter = true,
    } = binding.value || {};
    if (filter) el.style.transition = "all 0.25s";
    const style = `
  position: absolute;
  background-color: ${color};
  pointer-events: none;
  width: ${size}px;
  height: ${size}px;
  bottom:0;
  box-shadow: 0 0 10px 0 ${color};
  filter: contrast(125%) brightness(125%);
  `;
    const box_width = box.offsetWidth;
    const box_height = box.offsetHeight;

    particle_timer = setInterval(() => {
      const left = $random(0, box_width - size),
        top = $random(box_height / 2, box_height),
        scale = $random(0.25, 0.75, 1),
        time = $random(0.5, 2, 1),
        c = document.createElement("span");
      c.style.cssText = style;
      c.style.left = left + "px";
      c.style.transform = `scale(${scale})`;
      c.style.transition = `all ${time}s linear`;
      box.appendChild(c);
      setTimeout(() => {
        c.style.bottom = top / 1.5 + "px";
        setTimeout(() => {
          c.style.transition = `all ${time / 4}s linear`;
          c.style.opacity = 0;
        }, time * 1000 - (time * 1000) / 4);
        setTimeout(() => {
          c.remove();
        }, time * 1000);
      }, 50);
    }, 50);
    el.addEventListener("mouseenter", () => {
      if (!filter) return;
      el.style.filter = `brightness(${brightness * 100}%) contrast(${
        contrast * 100
      }%)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.filter = "";
    });
  },
  unbind() {
    clearInterval(particle_timer);
  },
}
````
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="value">
::: slot desc

| 说明                                                     | 类型   | 默认值                                           |
| -------------------------------------------------------- | ------ | ------------------------------------------------ |
| {<br />color = 粒子颜色,<br />size = 粒子大小，单位`px`} | Object | {<br />color = "#cfb45c",<br />size = 10,<br />} |

:::
</ContainerBox>
