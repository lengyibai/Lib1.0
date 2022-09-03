# 遮罩层合集
:::tip
遮罩层只会把有颜色的部分显示出来
:::
## 晕影
<ContainerBox>
<div class="demoBox">
<Styles-MaskCollection-index-a />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo halation"></div>
</template>
<style scoped>
  .demo {
    width: 100%;
    height: 50vh;
    background: url("http://lengyibai.gitee.io/img-bed/img/bg.jpg") no-repeat
      center -25px;
    background-size: cover;
  }
</style>
````
:::
</ShowCode>

<ShowCode iskey>
::: slot codes
```css
.halation {
  mask: radial-gradient(#000 50%, transparent 100%);
}
```
:::
</ShowCode>
</ContainerBox>

## 暗角
<ContainerBox>
<div class="demoBox">
<Styles-MaskCollection-index-b />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <div class="vignet"></div>
  </div>
</template>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
  background: url("http://lengyibai.gitee.io/img-bed/img/bg.jpg") no-repeat
    center -25px;
  background-size: cover;
}
</style>
````
:::
</ShowCode>

<ShowCode iskey>
::: slot codes
```css
/* <div class="vignet"></div> */
.vignet {
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: #000;
  mask: radial-gradient(transparent 50%, #000 100%);
}
```
:::
</ShowCode>
</ContainerBox>

## 棱角
<ContainerBox>
<div class="demoBox">
<Styles-MaskCollection-index-c />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo edge"></div>
</template>
<style scoped>
.demo {
  width: 100%;
  height: 50vh;
  background: url("http://lengyibai.gitee.io/img-bed/img/bg.jpg") no-repeat
    center -25px;
  background-size: cover;
}
</style>
````
:::
</ShowCode>

<ShowCode iskey>
::: slot codes
```css
.edge {
  mask: linear-gradient(135deg, transparent 50px, #fff 0) top left,
    linear-gradient(-135deg, transparent 50px, #fff 0) top right,
    linear-gradient(-45deg, transparent 50px, #fff 0) bottom right,
    linear-gradient(45deg, transparent 50px, #fff 0) bottom left;
  mask-size: 50% 50%;
  mask-repeat: no-repeat;
}
```
:::
</ShowCode>
</ContainerBox>

## 拼图
<ContainerBox>
<div class="demoBox">
<Styles-MaskCollection-index-d />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <img
      src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528-mobileskin-1.jpg"
      alt=""
    />
    <img
      class="splice"
      src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184-mobileskin-1.jpg"
      alt=""
    />
  </div>
</template>
<style scoped lang="less">
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
````
:::
</ShowCode>

<ShowCode iskey>
::: slot codes
```css
.splice {
  mask: linear-gradient(45deg, #000 45%, transparent 55%);
}
```
:::
</ShowCode>
</ContainerBox>

## 遮罩
<ContainerBox>
<div class="demoBox">
<Styles-MaskCollection-index-e />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo mask"></div>
</template>
<style scoped>
.demo {
  width: 100%;
  height: 50vh;
  background: url("http://lengyibai.gitee.io/img-bed/img/bg.jpg") no-repeat
    center -25px;
  background-size: cover;
}
</style>
````
:::
</ShowCode>

<ShowCode iskey>
::: slot codes
```css
.mask {
  mask-image: url("./img/mask.png");
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
}
```
:::
</ShowCode>
</ContainerBox>

## 文字遮罩
<ContainerBox>
<div class="demoBox">
<Styles-MaskCollection-index-f />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo text-clip">二次元壁纸</div>
</template>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
  background: url("http://lengyibai.gitee.io/img-bed/img/bg.jpg") no-repeat
    center -25px;
  background-size: cover;
  font-size: 10vw;
  font-family: "华文琥珀", "方正粗黑宋简体";
  line-height: 50vh;
  text-align: center;
}
</style>

````
:::
</ShowCode>

<ShowCode iskey>
::: slot codes
```css
.text-clip {
  color: transparent;
  background-clip: text;
}
```
:::
</ShowCode>
</ContainerBox>