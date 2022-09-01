# Swiper

<ContainerBox title="介绍">
::: slot desc
对插件 [Swiper](https://www.swiper.com.cn/) 简单封装
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibSwiper.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
需要插入类名为`swiper-slide`的元素，且里面包含`img`标签或其他元素
:::

<div class="demoBox">
<Statics-Swiper-demo-index-a />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <LibSwiper>
      <div class="swiper-slide">
        <img src="./img/1.png" alt />
      </div>
      <div class="swiper-slide">
        <img src="./img/2.png" alt />
      </div>
      <div class="swiper-slide">
        <img src="./img/3.png" alt />
      </div>
      <div class="swiper-slide">
        <img src="./img/4.png" alt />
      </div>
      <div class="swiper-slide">
        <img src="./img/5.png" alt />
      </div>
    </LibSwiper>
  </div>
</template>
<style scoped>
.demo {
  width: 100%;
}
</style>
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="自定义样式">
::: slot desc
开启三图轮播，滚动回调（打开控制台查看）
:::

<div class="demoBox">
<Statics-Swiper-demo-index-b />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <!-- 需要插入类名为swiper-slide的元素，且里面包含img标签 -->
    <Statics-Swiper-index :isMultiple="true" @start="start" @end="end">
      <div class="swiper-slide">
        <img src="./img/1.png" alt />
      </div>
      <div class="swiper-slide">
        <img src="./img/2.png" alt />
      </div>
      <div class="swiper-slide">
        <img src="./img/3.png" alt />
      </div>
      <div class="swiper-slide">
        <img src="./img/4.png" alt />
      </div>
      <div class="swiper-slide">
        <img src="./img/5.png" alt />
      </div>
    </Static-Swiper-index>
  </div>
</template>
<script>
export default {
  methods: {
    start(i) {
      console.warn(`开始滚动回调，当前第${i}页`);
    },
    end(i) {
      console.warn(`结束滚动回调，当前第${i}页`);
    },
  },
};
</script>
<style scoped>
.demo {
  width: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="元素轮播">
::: slot desc
不仅可以放图片，还能放元素或组件，此处开启了自动高度，也可以设置为滚动条
:::
::: tip
如果不是放的图片，则需要关闭无缝切换，否则会产生空白页，因为无缝衔接利用的复制图片，而元素无法复制
:::
<div class="demoBox">
<Statics-Swiper-demo-index-c />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <Statics-Swiper-index :loop="false" :autoHeight="true">
      <div class="swiper-slide">
        <Statics-Echarts-demo-index-a />
      </div>
      <div class="swiper-slide">
        <Statics-Echarts-demo-index-b />
        <Statics-Echarts-demo-index-b />
      </div>
      <div class="swiper-slide">
        <Statics-Echarts-demo-index-c />
      </div>
    </Static-Swiper-index>
  </div>
</template>
<style scoped>
.demo {
  width: 100%;
}
</style>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc

| 参数         | 说明                                          | 类型    | 默认值                                                       |
| ------------ | --------------------------------------------- | ------- | ------------------------------------------------------------ |
| id           | 当一个页面多个轮播图组件，需要用`id`唯一标识  | String  | -                                                            |
| imgUrls      | 图片数组，引入本地图片请使用`require('路径')` | Array   | -                                                            |
| time         | 滚动间隔时间，单位`ms`                        | Number  | 1000                                                         |
| speed        | 滚动速度，单位`ms`                            | Number  | 500                                                          |
| spaceBetween | 图片间距，单位`px`                            | Number  | 0                                                            |
| isShowdot    | 是否显示底部小圆点                            | Boolean | true                                                         |
| isShowLR     | 是否显示左右切换                              | Boolean | true                                                         |
| loop         | 是否无缝衔接                                  | Boolean | true                                                         |
| autoHeight   | 是否自动高度                                  | Boolean | false                                                        |
| isMultiple   | 开启一页三张轮播                              | Boolean | false                                                        |
| switchEffect | 切换样式                                      | Object  | rotate(旋转角度): 0<br />stretch(间隔): 25%<br />depth(深度): 250<br />slideShadows(阴影): true |

:::
</ContainerBox>

<ContainerBox title="Events">
::: slot desc

| 事件名 | 说明         | 回调参数     |
| ------ | ------------ | ------------ |
| start  | 开始滚动回调 | 当前滚动页数 |
| end    | 结束滚动回调 | 滚动结束页数 |

:::
</ContainerBox>
