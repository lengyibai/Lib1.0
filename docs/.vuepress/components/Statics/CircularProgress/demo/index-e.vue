<template>
  <div class="demo">
    <input type="text" v-model.number="num" />
    <Statics-CircularProgress-index
      :part-gap="20"
      :part="50"
      :value="num"
      :stroke-width="20"
      bg-ring-color="#13387e"
      ring-color="#00bbff"
      stroke-linecap="butt"
    >
      <span>更细的进度格</span>
      <br />
      <span>{{ `${(num * 100).toFixed(2)}%` }}</span>
    </Static-CircularProgress-index>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0.6,
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
