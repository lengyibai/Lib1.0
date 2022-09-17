# TriggerRay

<ContainerBox title="介绍">
::: slot desc
模仿B站的点赞放射效果
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibTriggerRay.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
放射背景自适应大小，无需担心尺寸适配问题



动画时长有`750ms`，射线内的图标可根据射线绽开进行卡点调试，参考`demo`源码

:::

<div class="demoBox">
<TriggerRay />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="Test">
    <LibTriggerRay v-model="play">
      <i
        v-html="icon"
        @click="fn"
        :style="{ color: color }"
        :class="{
          scale: active,
        }"
      ></i>
    </LibTriggerRay>
  </div>
</template>
<script>
export default {
  name: "Test",
  data() {
    this.icon = `<svg t="1662714312677" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7375"><path d="M512.023 980.34l-426.403-428.521c-53.225-55.389-82.385-127.767-82.385-204.079 0-162.327 132.049-294.377 294.377-294.377 82.362 0 159.046 33.396 214.412 92.486 55.343-59.113 132.026-92.486 214.388-92.486 162.327 0 294.353 132.049 294.353 294.377 0 80.803-31.953 156.02-89.972 211.759l-418.769 420.841z" p-id="7376" fill="currentColor"></path></svg>`;
    return {
      play: false,
      active: false,
      color: "#666",
    };
  },
  methods: {
    fn() {
      if (this.color === "red") {
        this.color = "#666";
        return;
      }
      this.active = true;
      this.play = true;
      setTimeout(() => {
        this.color = "red";
      }, 150);
      setTimeout(() => {
        this.active = false;
      }, 500);
    },
  },
};
</script>
<style scoped lang="less">
.Test {
  position: relative;
  width: 100%;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    display: inline-block;
    width: 5vw;
    height: 5vw;
    z-index: 1;
  }
  .scale {
    animation: scale 0.5s;
  }
}

@keyframes scale {
35% {
transform: scale(0);
}

75% {
transform: scale(1.3);
}
100% {
transform: scale(1);
}
}
</style>

````
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="自定义样式">
::: slot desc
可自定义大小及颜色
:::

<div class="demoBox">
<Statics-TriggerRay-demo-index-b />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="Test">
    <TriggerRay v-model="play" color="#3498db">
      <i
        v-html="icon"
        @click="fn"
        :style="{ color: color }"
        :class="{
          scale: active,
        }"
      ></i>
    </TriggerRay>
  </div>
</template>
<script>
export default {
  name: "Test",
  data() {
    this.icon = `<svg t="1662721480621" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1415"><path d="M64 483.04V872c0 37.216 30.144 67.36 67.36 67.36H192V416.32l-60.64-0.64A67.36 67.36 0 0 0 64 483.04zM857.28 344.992l-267.808 1.696c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-68.832-155.488-137.568-145.504-60.608 8.8-67.264 61.184-67.264 126.816v59.264c0 76.064-63.84 140.864-137.856 148L256 416.96v522.4h527.552a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824z" p-id="1416" fill="currentColor"></path></svg>`;
    return {
      play: false,
      active: false,
      color: "#666",
    };
  },
  methods: {
    fn() {
      if (this.color === "#3498db") {
        this.color = "#666";
        return;
      }
      this.active = true;
      this.play = true;
      setTimeout(() => {
        this.color = "#3498db";
      }, 150);
      setTimeout(() => {
        this.active = false;
      }, 1000);
    },
  },
};
</script>
<style scoped lang="less">
.Test {
  position: relative;
  width: 100%;
  height: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    display: inline-block;
    width: 10vw;
    height: 10vw;
    z-index: 1;
  }
  .scale {
    animation: scale 0.5s;
  }
}

@keyframes scale {
  35% {
    transform: scale(0);
  }

  75% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
````

:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc

| 参数  | 说明     | 类型   | 默认值 |
| ----- | -------- | ------ | ------ |
| v-model | 控制射线动画播放，整个过程`750ms`<br />动画播放结束后，自动为`false` | Boolean | false |
| color | 放射颜色 | String | red   |

:::
</ContainerBox>
