<template>
  <div class="demo">
    <button @click="loading">{{ isFull ? "关闭" : "开启" }}全屏显示</button>
    <Static-Loading-index :show="show" :isFull="isFull" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      isFull: false,
    };
  },
  methods: {
    loading() {
      this.isFull = !this.isFull;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 1000);
    },
  },
};
</script>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
