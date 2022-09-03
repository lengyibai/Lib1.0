<template>
  <div class="demo">
    <Statics-Swiper-index :loop="false" :autoHeight="true">
      <div class="swiper-slide">
        <Statics-Echarts-demo-index-a />
      </div>
      <div class="swiper-slide">
        <Statics-Echarts-demo-index-b />
        <Statics-Echarts-demo-index-b />
      </div>
      <div class="swiper-slide">
        <Statics-Echarts-demo-index-c />
      </div>
    </Statics-Swiper-index>
  </div>
</template>
<style scoped>
.demo {
  width: 100%;
}
</style>
