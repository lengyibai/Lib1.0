<template>
  <div
    class="LibUpdateBtn"
    @click.once="update"
    :style="{
      width: size,
      height: size,
    }"
  >
    <img
      class="up"
      v-show="show_up"
      :class="{ move: status === 1 }"
      src="./img/update.svg"
    />
    <transition name="fade">
      <img
        v-show="!show_up && status === 1 && !finish"
        class="rotate"
        src="./img/loading.svg"
      />
    </transition>
    <transition name="bounce">
      <img v-show="finish" src="./img/success.svg" />
    </transition>
  </div>
</template>
<script>
export default {
  name: "LibUpdateBtn",
  props: {
    size: {
      type: String,
      default: "50px",
    },
    finish: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show_up: true,
      status: 0,
    };
  },
  methods: {
    update() {
      this.status = 1;
      setTimeout(() => {
        this.show_up = false;
        this.$emit("update");
      }, 350);
    },
  },
};
</script>
<style scoped lang="less">
.LibUpdateBtn {
  position: relative;
  display: flex;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 75%;
    height: 75%;
    &.up {
      transition: all 0.75s;
    }
  }
}

.move {
  transform: translateY(-200%);
}

.rotate {
  animation: rotate 1s infinite linear;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-leave-active,
.fade-enter-active {
  transition: all 0.25s;
}

.fade-leave-active {
  position: absolute;
}

.bounce-enter,
.bounce-leave-active {
  opacity: 0;
  transform: scale(0);
}

.bounce-leave-active,
.bounce-enter-active {
  transition: all 0.5s 0.2s;
}

.bounce-leave-active {
  position: absolute;
}
</style>
