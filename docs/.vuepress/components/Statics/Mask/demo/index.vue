<template>
  <div class="flex">
    <button @click="show = true">点击显示</button>
    <Statics-Mask-index v-model="show">
      <h1>这是一个蒙版，点击除这里以外的位置会关闭</h1>
    </Statics-Mask-index>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>
<style scoped>
.flex {
  display: flex;
  justify-content: center;
}

h1 {
  color: #fff;
  font-size: 4vw;
}
</style>
