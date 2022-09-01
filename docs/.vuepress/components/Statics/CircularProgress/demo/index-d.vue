<template>
  <div class="demo">
    <input type="text" v-model.number="num" />
    <Statics-CircularProgress-index
      :gradient="myGradient"
      :part-gap="20"
      :part="40"
      :value="num"
      :show-gradient="true"
      :stroke-width="30"
      bg-ring-color="#13387e"
      ring-color="#1cbd9c"
      stroke-linecap="butt"
    >
      <span>渐变进度格</span>
      <br />
      <span>{{ `${(num * 100).toFixed(2)}%` }}</span>
    </Static-CircularProgress-index>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 0.45,
      myGradient: {
        id: "svg-linear-gradient001",
        x1: "100%",
        y1: "100%",
        x2: "0%",
        y2: "0%",
        colorStops: [
          {
            offset: "0%",
            color: "#0ae787",
          },
          {
            offset: "100%",
            color: "#fe653c",
          },
        ],
      },
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
