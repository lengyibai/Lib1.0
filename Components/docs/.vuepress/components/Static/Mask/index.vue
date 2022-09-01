<template>
  <transition name="fade">
    <div class="LibMask" v-if="value" @click="hide">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: "LibMask",
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    hide(e) {
      if (e.target._prevClass === "LibMask") {
        this.$emit("input", false);
      }
    },
  },
};
</script>
<style scoped lang="less">
.LibMask {
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s;
}
</style>
