# ScrollInto

<ContainerBox title="介绍">
::: slot desc
使元素进入可视区或进入可视区一定范围，播放入场动画，适合列表或一些官网
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibScrollInto.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
组件内置了一个动画库，可前往[滚动入场动画库](http://lengyibai.gitee.io/scroll-animate)预览动画及复制动画名

复制动画名后，替换下面的`translate4`即可更换第一个盒子的动画
:::

<div class="demoBox">
<Dynamics-ScrollInto-demo-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <input type="text" v-model="name" placeholder="请输入动画库里的动画名" />
    <input type="text" v-model="time" placeholder="请输入动画时长" />
    <input type="text" v-model="into" placeholder="滚动到几倍自身大小显示" />
    <button class="btn" @click="once = !once">
      点击切换为{{ once ? "重复播放" : "播放一次" }}
    </button>
    <LibScrollInto
      v-if="toggle"
      class="LibScrollInto"
      :animate="{ name, into, time }"
      :once="once"
    >
      <div class="fill"></div>

      <h1>由父组件决定<br />(左上角输入框)</h1>
      <Dynamics-ScrollInto-IntoBox-index>
        <div class="box a"></div>
      </Dynamic-ScrollInto-IntoBox-index>

      <h1>从小到大</h1>
      <Dynamics-ScrollInto-IntoBox-index
        :animate="{ name: 'scale1', time: 0.5, into: 0.25 }"
      >
        <div class="box b"></div>
      </Dynamic-ScrollInto-IntoBox-index>

      <h1>从大到小</h1>
      <Dynamics-ScrollInto-IntoBox-index
        :animate="{ name: 'scale2', time: 0.5, into: 0.5 }"
      >
        <div class="box c"></div>
      </Dynamic-ScrollInto-IntoBox-index>

      <h1>从左到右顺时针</h1>
      <Dynamics-ScrollInto-IntoBox-index
        :animate="{ name: 'mixedTR5', time: 0.5, into: 0.75 }"
      >
        <div class="box d"></div>
      </Dynamic-ScrollInto-IntoBox-index>

      <h1>从右到左逆时针</h1>
      <Dynamics-ScrollInto-IntoBox-index
        :animate="{ name: 'mixedTR6', time: 0.5, into: 1 }"
      >
        <div class="box e"></div>
      </Dynamic-ScrollInto-IntoBox-index>

      <h1>自定义动画</h1>
      <Dynamics-ScrollInto-IntoBox-index
        :animate="{ name: animate, time: 3, into: 2 }"
      >
        <div class="box f"></div>
      </Dynamic-ScrollInto-IntoBox-index>

      <div class="fill"></div>
    </LibScrollInto>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      name: "translate4",
      time: "0.5",
      into: "1",
      once: false,
      toggle: true,
    };
  },
  watch: {
    once() {
      this.toggle = false;
      setTimeout(() => {
        this.toggle = true;
      });
    },
  },
  methods: {
    blur(e) {
      this.name = e.target.value;
    },
    animate(el) {
      el.style.transform = "rotate(360deg) scale(5)";
    },
  },
};
</script>
<style scoped lang="less">
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
  input {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 1vw;
    padding: 0.25em;
    z-index: 1;
    &:nth-of-type(1) {
      transform: translateY(0%);
    }
    &:nth-of-type(2) {
      transform: translateY(150%);
    }
    &:nth-of-type(3) {
      transform: translateY(300%);
    }
  }
  .btn {
    position: absolute;
    right: 0;
    z-index: 1;
  }
  .LibScrollInto {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden auto;
    h1 {
      font-size: 2vw;
      margin-top: 1em;
    }
    .fill {
      flex-shrink: 0;
      width: 25vw;
      height: 100vh;
    }
    .box {
      width: 10vw;
      height: 10vw;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2vw;
    }
  }
}

.a {
  background-image: linear-gradient(180deg, #dc3545 0%, #fd7e14 100%);
}

.b {
  background-image: linear-gradient(180deg, #fd7e14 0%, #ffc107 100%);
}

.c {
  background-image: linear-gradient(180deg, #ffc107 0%, #28a745 100%);
}

.d {
  background-image: linear-gradient(180deg, #28a745 0%, #17a2b8 100%);
}

.e {
  background-image: linear-gradient(180deg, #17a2b8 0%, #007bff 100%);
}

.f {
  background-image: linear-gradient(180deg, #007bff 0%, #6610f2 100%);
}

.g {
  background-image: linear-gradient(180deg, #6610f2 0%, #e83e8c 100%);
}
</style>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="LibScrollInto Props">
::: slot desc

| 参数    | 说明                                                         | 类型    | 默认值 |
| ------- | ------------------------------------------------------------ | ------- | ------ |
| animate | name：动画名，可使用自定义动画函数，参考代码<br />time：入场动画时长，单位`s`，默认`0.5`<br />into：进入可视区后，距离底部有`n`倍自身高度处入场，默认`0.5`<br /> | Object  | -      |
| once    | 如为`true`，入场后位置就固定了，下一次入场不会有动画，相当于入场后不会出场 | Boolean | false  |

:::
</ContainerBox>

<ContainerBox title="IntoBox Props">
::: slot desc

| 参数    | 说明                                       | 类型   | 默认值 |
| ------- | ------------------------------------------ | ------ | ------ |
| animate | 针对子元素进行定义，填写与父组件一样的属性 | Object | -      |

:::
</ContainerBox>
```
