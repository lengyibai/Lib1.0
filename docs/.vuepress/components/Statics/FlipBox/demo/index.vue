<template>
  <div class="demo">
    <Statics-FlipBox-index>
      <template #front>
        <div class="box flex">鼠标放上来</div>
      </template>
      <template #back>
        <div class="box flex">鼠标移出去</div>
      </template>
    </Statics-FlipBox-index>
  </div>
</template>
<style scoped>
.demo {
  width: 100%;
  height: 300px;
  font-size: 4vw;
}
.box {
  height: 100%;
  background-color: #eee;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
