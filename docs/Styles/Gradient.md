# 渐变合集

## 文字渐变

<ContainerBox title="基础用法">

<div class="demoBox">
<Styles-TextGradient-index-a />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <div class="text text-gradient">
      渐进式
      <br />
      JavaScript 框架
    </div>
  </div>
</template>
<style scoped>
.demo {
  width: 100%;
  height: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
}
.text {
  width: 100%;
  height: fit-content;
  font-size: 5vw;
  font-weight: bold;
  text-align: center;
  line-height: 5vw;
  font-family: "Arial";
}
</style>
````
:::
</ShowCode>

<ShowCode iskey>
::: slot codes

```css
.text-gradient {
  color: transparent;
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  -webkit-background-clip: text;
}
```

:::
</ShowCode>
</ContainerBox>

## 逐字淡入

<ContainerBox title="基础用法">

<div class="demoBox">
<Styles-TextGradient-index-b />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <button @click="play">点击播放动画</button>
    <div class="text">
      Hello Word!
      <div :class="{ textClip: show }"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      timer: null,
    };
  },
  methods: {
    play() {
      clearTimeout(this.timer);
      this.show = !this.show;
      this.timer = setTimeout(() => {
        this.show = false;
      }, 2500);
    },
  },
};
</script>
<style scoped lang="less">
.demo {
  position: relative;
  width: 100%;
  .text {
    position: relative;
    width: 100%;
    font-size: 10vw;
    color: #fff;
    overflow: hidden;
    background-color: #000;
  }
}
</style>
````
:::
</ShowCode>

<ShowCode iskey>
::: slot codes

```css
.textClip {
  position: absolute;
  width: 150%;
  height: 100%;
  top: 0;
  background: linear-gradient(90deg, transparent 0%, #000 25%, #000 100%);
  animation: animate 3s linear both;
  @keyframes animate {
    0% {
      left: -35%;
    }

    100% {
      left: 100%;
    }
  }
}
```

:::
</ShowCode>
</ContainerBox>
