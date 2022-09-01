<template>
  <div class="demo">
    <Static-Swiper-index :loop="false" :autoHeight="true">
      <div class="swiper-slide">
        <Static-Echarts-demo-index-a />
      </div>
      <div class="swiper-slide">
        <Static-Echarts-demo-index-b />
        <Static-Echarts-demo-index-b />
      </div>
      <div class="swiper-slide">
        <Static-Echarts-demo-index-c />
      </div>
    </Static-Swiper-index>
  </div>
</template>
<style scoped>
.demo {
  width: 100%;
}
</style>
