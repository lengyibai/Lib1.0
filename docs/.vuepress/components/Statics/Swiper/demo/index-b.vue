<template>
  <div class="demo">
    <!-- 需要插入类名为swiper-slide的元素，且里面包含img标签 -->
    <Statics-Swiper-index :isMultiple="true" @start="start" @end="end">
      <div class="swiper-slide">
        <img src="./img/1.png" alt />
      </div>
      <div class="swiper-slide">
        <img src="./img/2.png" alt />
      </div>
      <div class="swiper-slide">
        <img src="./img/3.png" alt />
      </div>
      <div class="swiper-slide">
        <img src="./img/4.png" alt />
      </div>
      <div class="swiper-slide">
        <img src="./img/5.png" alt />
      </div>
    </Static-Swiper-index>
  </div>
</template>
<script>
export default {
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
  width: 100%;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
