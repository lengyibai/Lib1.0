<template>
  <div class="grid">
    <Static-GridLayout-index gap="10px" :count="3" :eqhMultiple="0.5">
      <div class="box" v-for="item in 8" :key="item" />
    </Static-GridLayout-index>
  </div>
</template>
<style scoped>
.grid {
  width: 100%;
  height: 100%;
}
.box {
  border: 1px solid #000;
  transition: all 0.5s;
}
</style>
