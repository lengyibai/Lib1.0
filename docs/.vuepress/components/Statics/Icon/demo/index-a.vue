<template>
  <div class="demo">
    爱
    <Statics-Icon-index
      :imgUrl="require('./img/love.svg')"
      title="爱心"
      left="0.5em"
      right="0.5em"
    />心
  </div>
</template>
<style scoped>
.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 25px;
}
</style>
