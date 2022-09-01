<template>
  <div class="demo">
    按下
    <Static-Svg-index
      :svg="icon.wzry"
      color="#ffad31"
      enter-color="#4834d4"
      down-color="#c23616"
      size="10vw"
      left="0.5em"
      right="0.5em"
    />变色
  </div>
</template>
<script>
import icon from "./svg/icon.js";
export default {
  data() {
    this.icon = icon;
    return {};
  },
};
</script>
<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 4vw;
}
</style>
