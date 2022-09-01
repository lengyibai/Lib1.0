<template>
  <div class="IntoBox">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "IntoBox",
  props: {
    animate: {
      type: String | Function,
    },
  },
};
</script>
<style scoped>
.intoBox {
  flex-shrink: 0;
}
</style>
