<template>
  <transition name="fade">
    <iframe
      v-if="show"
      class="iframe"
      ref="iframe"
      :src="link"
      marginheight="0"
      marginwidth="0"
      frameborder="0"
      scrolling="auto"
      width="100%"
      height="100%"
      title="Wikipedia page for Avocados"
    ></iframe>
  </transition>
</template>
<script>
export default {
  name: "LibIframe",
  props: {
    link: {
      type: String,
      default: "",
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped lang="less">
/* 进入前状态 */
.fade-enter,
.fade-leave-active {
  transform: scale(0.75);
  opacity: 0;
}

/* 进入和离开动画属性 */
.fade-leave-active,
.fade-enter-active {
  transition: all 0.25s;
}
</style>
