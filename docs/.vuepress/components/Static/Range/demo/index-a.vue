<template>
  <div class="demo">
    <Static-Range-index v-model="value" />
  </div>
</template>
<script>
export default {
  data() {
    return { value: 0 };
  },
};
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
