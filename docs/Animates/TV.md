<ContainerBox title="基础用法">
:::slot desc
电视打开和关闭的动画
:::
<div class="demoBox">
<Animates-TV-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <transition name="tv">
      <div class="TV" v-show="show"></div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "TV",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    setInterval(() => {
      this.show = !this.show;
    }, 2000);
  },
};
</script>
<style scoped lang="less">
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
  .TV {
    width: 100%;
    height: 100%;
    background-color: #333;
  }
}
</style>
````
:::

</ShowCode>

<ShowCode>
::: slot codes

```css
.tv-enter-active {
  animation: tv-in 1s;
}

.tv-leave-active {
  animation: tv-out 0.35s;
}

@keyframes tv-in {
  0% {
    clip-path: inset(50% 49.75% 50% 49.75%);
  }
  50% {
    clip-path: inset(0 49.75% 0 49.75%);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes tv-out {
  0% {
    clip-path: inset(0 0 0 0);
  }
  75% {
    clip-path: inset(49.75% 0 49.75% 0%);
  }
  95% {
    clip-path: inset(49.75% 49.75% 49.75% 49.75%);
  }
  100% {
    clip-path: inset(50% 50% 50% 50%);
  }
}
```

:::
</ShowCode>
</ContainerBox>
