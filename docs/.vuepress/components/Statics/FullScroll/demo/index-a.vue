<template>
  <div class="demo">
    <Statics-FullScroll-index>
      <div class="scroll-item" v-for="(item, index) in 10" :key="index">
        {{ item }}
      </div>
    </Static-FullScroll-index>
  </div>
</template>
<script>
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
