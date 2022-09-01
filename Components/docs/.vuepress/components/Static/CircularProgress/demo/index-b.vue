<template>
  <div class="demo">
    <input type="text" v-model.number="num" />
    <Static-CircularProgress-index
      :part-gap="0"
      :part="1"
      :value="num"
      :show-gradient="true"
      :stroke-width="20"
      bg-ring-color="#13387e"
    >
      <span>渐变进度条</span>
      <br />
      <span>{{ `${(num * 100).toFixed(2)}%` }}</span>
    </Static-CircularProgress-index>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0.75,
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
