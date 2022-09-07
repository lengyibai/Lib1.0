# ScrollFollow

<ContainerBox title="介绍">
::: slot desc
使元素进入可视区或进入可视区一定范围，播放入场动画，适合列表或一些官网
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

很抱歉，此功能不适合封装为组件，仅提供所需文件

[下载 ScrollFollow.js](https://gitee.com/lengyibai/component-package/raw/master/ScrollFollow.js)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
在下面缓慢滚动
注：切勿给需要滚动跟随元素设置`transform`属性，元素依赖于此属性
:::
<div class="demoBox">
<Dynamics-ScrollFollow-demo-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo" ref="demo">
    <div class="container">
      <div class="a" ref="a">HTML+CSS</div>
      <div class="b" ref="b">JavaScript</div>
      <div class="c" ref="c">Vue</div>
    </div>
  </div>
</template>
<script>
import ScrollFollow from "../ScrollFollow.js";
export default {
  mounted() {
    const scrollFollow = new ScrollFollow(this.$refs.demo, {
      unit: "%",
      time: 0.5,
    });
    scrollFollow.setOptions({
      el: this.$refs.a,
      intoY: 0,
      endY: 300,
      intoStyle: {
        right: -100,
      },
      endStyle: {
        right: 100,
      },
    });
    scrollFollow.setOptions({
      el: this.$refs.b,
      intoY: 0,
      endY: 300,
      intoStyle: {
        left: -100,
      },
      endStyle: {
        left: 100,
      },
    });
    scrollFollow.setOptions({
      el: this.$refs.c,
      intoY: 0,
      endY: 300,
      intoStyle: {
        scale: 0,
      },
      endStyle: {
        scale: 1,
      },
    });
  },
};
</script>
<style scoped lang="less">
.demo {
  position: relative;
  width: 100%;
  height: 75vh;
  overflow: auto;
  overscroll-behavior: contain;
  color: #fff;
  .container {
    width: 100%;
    height: 250vh;
    background-color: #1a1a1a;
    display: flex;
    justify-content: center;
    align-items: center;
    .a,
    .b,
    .c {
      position: absolute;
      font-size: 5vw;
    }
    .a {
      right: 0;
      top: 100vh;
    }
    .b {
      left: 0;
      top: 150vh;
    }
    .c {
      top: 205vh;
    }
  }
}
</style>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="new ScrollFollow(dom, obj)">
::: slot desc

| 参数                     | 说明                                                         | 类型 | 默认值 |
| ------------------------ | ------------------------------------------------------------ | ------------------------ | ------------------------ |
| dom | 传递带滚动事件的父元素 | Element | - |
| obj      | unit：单位，默认`px`，此单位作用于`transform: translate()`<br />fade：是否开启淡入淡出<br />smooth：是否开启平滑动画 | String<br />Boolean<br />Boolean | px<br />true<br />true |

:::
</ContainerBox>

<ContainerBox title="setOptions(obj)">
::: slot desc

| 参数                     | 说明                                                         | 类型 | 默认值 |
| ------------------------ | ------------------------------------------------------------ | ------------------------ | ------------------------ |
| el | 赋予动画的元素 | Element | - |
| intoY | 进入可视区后的几`px`处开始跟随滚动入场 | Number | 0（进入可视区后立即开始） |
| endY | 进入可视区后的几`px`处走完整个动画跟随滚动入场 | Number | - |
| intoStyle | 滚动前的样式：<br />left \| right：相对位置，与`CSS`定位用法一样<br />scale：元素缩放倍数，`0`会消失 | Number<br />Number | - |
| endStyle | 滚动完成后的样式，对应`intoStyle` | 同上 | - |

:::
</ContainerBox>