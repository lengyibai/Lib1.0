<template>
  <div class="demo">
    <input type="text" v-model.number="num" />
    <Statics-CircularProgress-index
      :part-gap="20"
      :part="20"
      :value="num"
      :stroke-width="20"
      bg-ring-color="#446224"
      ring-color="#a3fe49"
      stroke-linecap="butt"
    >
      <span>普通进度格</span>
      <br />
      <span>{{ `${(num * 100).toFixed(2)}%` }}</span>
    </Statics-CircularProgress-index>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0.3,
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
