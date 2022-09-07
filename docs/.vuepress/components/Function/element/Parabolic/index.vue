<template>
  <div class="demo">
    <button class="run" @click="run">抛</button>
    <div class="move" ref="move"></div>
    <div class="middle" ref="middle"></div>
    <div class="right" ref="right"></div>
  </div>
</template>
<script>
import Parabolic from "./Parabolic.js";
export default {
  data() {
    return { parabolic: null };
  },
  mounted() {
    const move = this.$refs.move;
    const middle = this.$refs.middle;
    const right = this.$refs.right;
    this.parabolic = new Parabolic(move, middle, right);
  },
  methods: {
    run() {
      this.parabolic
        .run()
        .then(() => {
          console.log("结束");
        })
        .catch((e) => {
          console.log(e,"未结束");
        });
    },
  },
};
</script>
<style scoped lang="less">
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .run {
    position: absolute;
    top: 0;
    left: 0;
  }
  .point {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #000;
    border-radius: 50%;
  }
  .move {
    .point();
    left: 25%;
    top: 75%;
  }

  .middle {
    .point();
    top: 10%;
  }

  .right {
    .point();
    right: 25%;
    top: 25%;
  }
}
</style>
