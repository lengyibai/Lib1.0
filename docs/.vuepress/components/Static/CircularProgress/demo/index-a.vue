<template>
  <div class="demo">
    <input type="text" v-model.number="num" />
    <Static-CircularProgress-index :value="num">
      <span>普通进度条</span>
      <br />
      <span>{{ `${(num * 100).toFixed(2)}%` }}</span>
    </Static-CircularProgress-index>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0.15,
    };
  },
};
</script>
<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  font-size: 20px;
  margin-bottom: 25px;
}
</style>
