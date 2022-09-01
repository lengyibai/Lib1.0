<template>
  <div
    class="LibIcon"
    @mouseenter="toggle = true"
    @mouseleave="toggle = false"
    :style="{
      width: `${size}`,
      height: `${size}`,
      margin: `${top} ${right} ${bottom} ${left}`,
      backgroundImage: `url(${!toggle ? imgUrl : imgUrlHover || imgUrl})`,
    }"
    :title="title"
  ></div>
</template>
<script>
export default {
  name: "LibIcon",
  props: {
    //需要使用 require 引入图片
    imgUrl: {
      default: require("./img/smile-gray.png"),
    },
    //悬浮到图标上面的图片，不需要则null
    imgUrlHover: {
      default: null,
    },
    //悬浮描述
    title: {
      type: String,
      default: "",
    },
    //图片等比宽高
    size: {
      type: String,
      default: "25px",
    },
    //以下为外边距
    top: {
      type: String,
      default: "0px",
    },
    right: {
      type: String,
      default: "0px",
    },
    bottom: {
      type: String,
      default: "0px",
    },
    left: {
      type: String,
      default: "0px",
    },
  },
  data() {
    return {
      toggle: false,
    };
  },
};
</script>
<style scoped lang="less">
.LibIcon {
  position: relative;
  background: no-repeat center center;
  background-size: contain;
}
</style>
