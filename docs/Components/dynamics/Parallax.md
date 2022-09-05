# Parallax

<ContainerBox title="介绍">
::: slot desc
跟随鼠标移动的视差动画
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibParallax.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
此时处于一个上下左右对称的状态，即鼠标移动到容器正中间则为初始位置

注：切勿给视差元素设置`transform`属性，视差依赖于此属性
:::
<div class="demoBox">
<Dynamics-Parallax-demo-index-a />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <LibParallax
    class="LibParallax"
    unit="vw"
  >
    <div class="box1" id="parallax-item" x="10" y="5" blur="10"></div>
    <div class="box2" id="parallax-item" x="20" y="10" blur="10"></div>
    <div class="box3" id="parallax-item" x="30" y="15" blur="10"></div>
    <div class="box4" id="parallax-item" x="40" y="20" blur="10"></div>
  </LibParallax>
</template>
<style scoped lang="less">
.LibParallax {
  position: relative;
  width: 100vw;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .box1 {
    position: absolute;
    width: 2.5vw;
    height: 2.5vw;
    background-color: rgba(231, 77, 60, 0.5);
  }
  .box2 {
    position: absolute;
    width: 5vw;
    height: 5vw;
    background-color: rgba(46, 204, 112, 0.5);
  }
  .box3 {
    position: absolute;
    width: 7.5vw;
    height: 7.5vw;
    background-color: rgba(52, 152, 219, 0.5);
  }
  .box4 {
    position: absolute;
    width: 10vw;
    height: 10vw;
    background-color: rgba(156, 89, 182, 0.5);
  }
}
</style>
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="基础用法">
::: slot desc
鼠标进入区域并移动才开始计算坐标，不会一进入就跟随，此时需要从最左{右)边移动到最右(左)边才能完成完整视差动画

反转`X`轴、`Y`轴
:::

<div class="demoBox">
<Dynamics-Parallax-demo-index-b />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <LibParallax
    class="LibParallax"
    :follow="false"
    :outinit="false"
    :reverse="true"
    unit="vw"
  >
    <div class="box1" id="parallax-item" x="10" y="5" blur="10"></div>
    <div class="box2" id="parallax-item" x="20" y="10" blur="10"></div>
    <div class="box3" id="parallax-item" x="30" y="15" blur="10"></div>
    <div class="box4" id="parallax-item" x="40" y="20" blur="10"></div>
  </LibParallax>
</template>
<style scoped lang="less">
.LibParallax {
  position: relative;
  width: 100vw;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .box1 {
    position: absolute;
    width: 2.5vw;
    height: 2.5vw;
    background-color: rgba(231, 77, 60, 0.5);
  }
  .box2 {
    position: absolute;
    width: 5vw;
    height: 5vw;
    background-color: rgba(46, 204, 112, 0.5);
  }
  .box3 {
    position: absolute;
    width: 7.5vw;
    height: 7.5vw;
    background-color: rgba(52, 152, 219, 0.5);
  }
  .box4 {
    position: absolute;
    width: 10vw;
    height: 10vw;
    background-color: rgba(156, 89, 182, 0.5);
  }
}
</style>
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="经典案例">
::: slot desc
动画及素材参考：[planets-animated-website](https://github.com/TheDesignMedium/planets-animated-website)
:::
<div class="demoBox">
<Dynamics-Parallax-demo-index-c />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <LibParallax
    class="LibParallax"
    unit="vw"
  >
    <!-- 背景 -->
    <img class="background" id="parallax-item" x="2" y="2" src="./img/demo-c/background.png" alt="" />

    <!-- 海王星 -->
    <img class="neptune" id="parallax-item" x="3" y="3" src="./img/demo-c/neptune.png" alt="" />

    <!-- 木星 -->
    <img class="jupiter" id="parallax-item" x="5" y="5" src="./img/demo-c/jupiter.png" alt="" />

    <!-- 土星 -->
    <img class="saturn" id="parallax-item" x="6" y="6" src="./img/demo-c/saturn.png" alt="" />

    <!-- 陨石 -->
    <img class="rock" id="parallax-item" x="7" y="7" src="./img/demo-c/rock.png" alt="" />

    <!-- 地球 -->
    <img class="earth" id="parallax-item" x="10" y="10" src="./img/demo-c/earth.png" alt="" />

    <!-- 地面 -->
    <img class="mid" id="parallax-item" x="5" y="5" src="./img/demo-c/mid.png" alt="" />

    <!-- 地面 -->
    <img class="foreground" id="parallax-item" x="8" y="8" src="./img/demo-c/foreground.png" alt="" />
  </LibParallax>
</template>
<style scoped lang="less">
.LibParallax {
  position: relative;
  width: 100vw;
  height: 34vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  .background {
    position: absolute;
    width: 110%;
    height: 110%;
    object-fit: cover;
  }
  .neptune {
    position: absolute;
    right: 25%;
    top: 15%;
    width: 8vw;
  }
  .jupiter {
    position: absolute;
    right: 5%;
    top: 10%;
    width: 10vw;
  }
  .saturn {
    position: absolute;
    left: 35%;
    top: 25%;
    width: 5vw;
  }
  .rock{
    position: absolute;
    left: 5%;
    top: 10%;
    width: 5vw;
  }
  .earth {
    position: absolute;
    width: 15vw;
  }
  .mid {
    position: absolute;
    width: 130%;
    bottom: -150px;
  }
  .foreground {
    position: absolute;
    height: 110%;
    top: 0;
    right: -200px;
  }
}
</style>
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="经典案例">
::: slot desc
B站`banner`动画
:::
<div class="demoBox">
<Dynamics-Parallax-demo-index-d />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <LibParallax
    class="LibParallax"
    :follow="false"
    :outinit="false"
    :reverse="true"
    unit="vw"
  >
  <!-- 树林背景 -->
    <img id="parallax-item" x="2.6042" blur="4" initBlur="2" src="./img/demo-d/bg.png" />

    <!-- 22娘 -->
    <img id="parallax-item" x="5.2083" blur="6" src="./img/demo-d/girl1.png" />

    <!-- 秋 -->
    <h1 id="parallax-item" x="6.5104" blur="4" initBlur="2">秋</h1>

    <!-- 小土丘 -->
    <img id="parallax-item" x="10.4167" blur="4" initBlur="2" src="./img/demo-d/grassland.png" />

    <!-- 蘑菇松果 -->
    <img id="parallax-item" x="15.625" blur="4" initBlur="4" src="./img/demo-d/mushroom.png" />

    <!-- 枯叶 -->
    <img id="parallax-item" x="23.4375" blur="2" initBlur="6" src="./img/demo-d/leaf.png" />

    <!-- 33娘 -->
    <img id="parallax-item" x="28.6458" blur="0" initBlur="8" src="./img/demo-d/spirit.png" />
  </LibParallax>
</template>
<style scoped lang="less">
.LibParallax {
  position: relative;
  width: 100vw;
  height: 11.7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  h1 {
    color: #fff;
    font-size: 7vw;
    font-weight: bold;
    transform: rotateX();
  }
  img {
    position: absolute;
    height: 100%;
  }
}
</style>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="LibParallax Props">
::: slot desc

| 参数    | 说明                                               | 类型          | 默认值 |
| ------- | -------------------------------------------------- | ------------- | ------ |
| reverse | 反转`X`、`Y`轴                                     | Boolean       | false  |
| follow  | 鼠标进入区域，元素被鼠标吸引                       | Boolean<br /> | true   |
| unit    | 偏移单位，模糊度为`px`，因为它太小了，不适合自适应 | String        | px     |
| outinit | 鼠标离开区域后，是否初始化样式                     | Boolean       | true   |

:::
</ContainerBox>

<ContainerBox title="Dom Props">
::: slot desc

| 参数     | 说明                                                         | 参数   |
| -------- | ------------------------------------------------------------ | ------ |
| x        | `X`轴左右对称偏移量                                          | Number |
| y        | `Y`轴左右对称偏移量                                          | Number |
| blur     | 对称模糊度，不填时，将不会改变模糊度<br />模糊度为`0`一般配合初始模糊度使用 | Number |
| initBlur | 初始模糊度，如果对称模糊度和初始模糊度都有大于`0`的值，在鼠标移动过程中，移动到某一个坐标会出现无模糊的状态，继续移动到最大距离会逐渐达到对称模糊度<br />PS：如果对称模糊度为`0`，移动到最大距离过程中会逐渐变清晰 | Number |

:::
</ContainerBox>