# DownDrag

<ContainerBox title="介绍">
::: slot desc
用于模态框
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
必须加绝对定位才能拖动
:::
<div class="demoBox">
<Directives-DownDrag-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="DownDrag" v-downDrag>
    这里可以拖动
    <div class="content" @mousedown.stop>这个区域拖动不了</div>
  </div>
</template>
<style scoped>
.DownDrag {
  position: absolute;
  width: 25vw;
  height: 25vw;
  background-color: #000;
  font-size: 2vw;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  z-index: 999;
  user-select: none;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
.content {
  width: 100%;
  height: calc(100% - 50px);
  background-color: #333;
  cursor: initial;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```
:::
</ShowCode>

<ShowCode iskey>
::: slot codes
```js
const downDrag = {
  inserted(el) {
    el.style.cursor = "move";
    let x = 0,
      y = 0,
      startX = 0,
      startY = 0,
      moveX = 0,
      moveY = 0;
    el.addEventListener("mousedown", (e) => {
      e.stopPropagation();
      x = e.pageX;
      y = e.pageY;
      startX = el.offsetLeft;
      startY = el.offsetTop;
      window.addEventListener("mousemove", fn);
      function fn(e) {
        requestAnimationFrame(function () {
          moveX = e.pageX - x;
          moveY = e.pageY - y;
          el.style.left = `${moveX + startX}px`;
          el.style.top = `${moveY + startY}px`;
        });
      }
      window.addEventListener("mouseup", () => {
        window.removeEventListener("mousemove", fn);
      });
    });
  },
}
```
:::
</ShowCode>
</ContainerBox>
