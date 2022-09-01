<template>
  <div class="demo">
    滑
    <Statics-Icon-index
      :imgUrl="require('./img/a.svg')"
      :imgUrlHover="require('./img/b.svg')"
      title="滑稽"
      size="10vw"
      left="0.5em"
      right="0.5em"
    />稽
  </div>
</template>
<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 7.5vw;
}
</style>
