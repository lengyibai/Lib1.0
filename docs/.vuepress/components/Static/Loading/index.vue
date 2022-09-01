<template>
  <transition name="fade">
    <div class="LibLoading" v-show="show" :class="{ full: isFull }">
      <span
        v-for="(item, index) in color"
        :key="index"
        :style="{
          backgroundColor: item,
          animationDelay: index * 0.1 - 0.8 + 0.75 + 's',
          boxShadow: '0 0 50px ' + item,
        }"
      ></span>
    </div>
  </transition>
</template>
<script>
export default {
  name: "LibLoading",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    isFull: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      color: [
        "#ffff00",
        "#76ff03",
        "#f06292",
        "#4fc3f7",
        "#ba68c8",
        "#f57c00",
        "#673ab7",
      ],
    };
  },
};
</script>
<style scoped lang="less">
.LibLoading {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 999;
}
span {
  display: inline-block;
  width: 1.5vw;
  height: 1.5vw;
  transform: scale(0.2);
  animation: animate 1s infinite;
}
@keyframes animate {
  0% {
    transform: translateY(0%) scale(0.2);
  }
  25% {
    transform: translateY(-200%) scale(1);
    border-radius: 50%;
  }
  50% {
    transform: translateY(200%) scale(1);
    border-radius: 50%;
  }
  100% {
    transform: translateY(0%) scale(0.2);
  }
}

.full {
  position: fixed !important;
  width: 100vw !important;
  height: 100vh !important;
  inset: 0 !important;
}

/* 进入前状态 */
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* 进入和离开动画属性 */
.fade-leave-active,
.fade-enter-active {
  transition: all 0.25s;
}
</style>
