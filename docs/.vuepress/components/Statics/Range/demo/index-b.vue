<template>
  <div class="demo">
    <Statics-Range-index
      :icon="require('./img/icon.svg')"
      :max="1000"
      :showIcon="true"
      :size="50"
      :step="10"
      :text="'进度：' + value"
      color="#c0392b"
      ply="10px"
      v-model="value"
    />
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
