<template>
  <transition name="fade">
    <div class="mask-close" v-show="show">
      <transition name="move">
        <div class="close" v-show="show" @click="close">
          <img src="./img/close.svg" alt="" />
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
export default {
  name: "LibMaskClose",
  data() {
    return {
      show: false,
      $throttle: null,
      event: null,
    };
  },
  created() {
    this.$throttle = this.throttle(
      function () {
        if (this.event.clientY <= 100) {
          this.show = true;
        } else {
          this.show = false;
        }
      }.bind(this),
      100,
    );
  },
  mounted() {
    window.addEventListener("mousemove", (e) => {
      this.event = e;
      this.$throttle();
    });
  },
  methods: {
    throttle(fn, delay, mtm = false) {
      if (mtm) {
        let baseTime = 0;
        return function () {
          const currentTime = Date.now();
          if (baseTime + delay < currentTime) {
            fn.apply(this, arguments);
            baseTime = currentTime;
          }
        };
      } else {
        let timer;
        return function () {
          if (!timer) {
            timer = setTimeout(() => {
              timer = null;
              fn();
            }, delay);
          }
        };
      }
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped lang="less">
.mask-close {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    0deg,
    transparent 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  z-index: 999;
  .close {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.65);
    color: #fff;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    img {
      width: 50%;
      height: 50%;
    }
  }
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

/* 进入前状态 */
.move-enter,
.move-leave-active {
  transform: translateY(-100%);
}

/* 进入和离开动画属性 */
.move-leave-active,
.move-enter-active {
  transition: all 0.25s;
}
</style>
