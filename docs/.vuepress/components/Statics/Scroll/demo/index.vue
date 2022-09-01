<template>
  <div class="LibScroll">
    <Statics-Scroll-index>
      <div class="content">
        <h1 v-for="(item, index) in 50" :key="index">{{ item }}</h1>
      </div>
    </Static-Scroll-index>
  </div>
</template>
<style scoped lang="less">
.LibScroll {
  position: relative;
  width: 100%;
  height: 50vh;
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    h1 {
      color: #000;
    }
  }
}
</style>
