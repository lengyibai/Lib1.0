<template>
  <div class="demo">
    <Statics-FullScroll-index @start="start" @end="end" v-model="page">
      <div class="scroll-item" v-for="(item, index) in 10" :key="index">
        {{ item }}
      </div>
    </Statics-FullScroll-index>
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 3,
    };
  },
  methods: {
    start(i) {
      console.warn(`开始滚动回调，当前第${i}页`);
    },
    end(i) {
      console.warn(`结束滚动回调，当前第${i}页`);
    },
  },
};
</script>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.scroll-item {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 7vw;
}
</style>
