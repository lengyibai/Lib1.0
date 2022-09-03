<ContainerBox title="基础用法">
:::slot desc
折叠展开纸张
:::
<div class="demoBox">
<Animates-Fold-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <transition name="fold">
      <div class="Fold" v-show="show">
        <transition name="fade">
          <div class="box" v-show="box_show">
            <h1>Hello World!</h1>
          </div>
        </transition>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      box_show: false,
    };
  },
  mounted() {
    this.show = true;
    setTimeout(() => {
      this.box_show = true;
    }, 750);

    setInterval(() => {
      this.show = !this.show;
      setTimeout(() => {
        this.box_show = !this.box_show;
      }, 750);
    }, 2000);
  },
};
</script>
<style scoped lang="less">
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
  .Fold {
    .flex();
    width: 100%;
    height: 100%;
    background-color: #333;
    .box {
      .flex();
      h1 {
        font-size: 5vw;
        color: #fff;
      }
    }
  }
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.fade-leave-active,
.fade-enter-active {
  transition: all 0.5s;
}
</style>
````
:::
</ShowCode>

<ShowCode iskey>
::: slot codes

```css
.fold-enter-active {
  animation: fold-in 0.75s;
}

.fold-leave-active {
  animation: fold-out 0.75s;
}

@keyframes fold-in {
  0% {
    clip-path: polygon(
      0 0,
      50% 50%,
      0 100%,
      50% 50%,
      100% 100%,
      50% 50%,
      100% 0,
      50% 50%
    );
  }
  100% {
    clip-path: polygon(
      0 0,
      0 50%,
      0 100%,
      50% 100%,
      100% 100%,
      100% 50%,
      100% 0,
      50% 0
    );
  }
}

@keyframes fold-out {
  0% {
    clip-path: polygon(
      0 0,
      0 50%,
      0 100%,
      50% 100%,
      100% 100%,
      100% 50%,
      100% 0,
      50% 0
    );
  }
  100% {
    clip-path: polygon(
      0 0,
      50% 50%,
      0 100%,
      50% 50%,
      100% 100%,
      50% 50%,
      100% 0,
      50% 50%
    );
  }
}
```

:::
</ShowCode>
</ContainerBox>
