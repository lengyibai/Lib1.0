<template>
  <div class="LibGridNumber" :style="{ gridArea: gridArea }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "LibGridNumber",
  props: {
    x: {
      type: Number,
      default: 0,
    },
    y: {
      type: Number,
      default: 0,
    },
    countX: {
      type: Number,
      default: 0,
    },
    countY: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    gridArea() {
      return `${this.y} / ${this.x} / ${this.y + this.countY} / ${
        this.x + this.countX
      }`;
    },
  },
};
</script>
<style scoped>
.LibGridNumber {
  width: 100%;
  height: 100%;
}
</style>
