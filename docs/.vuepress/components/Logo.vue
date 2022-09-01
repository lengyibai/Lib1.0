<template>
  <div class="Logo">
    <img src="/lib-components/lyb.png" alt="lyb" />
    <div class="name">Lib</div>
    <div class="desc">轻量、PC端 Vue 自用组件库</div>
  </div>
</template>
<style scoped lang="less">
.Logo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
  background-color: #fff;
  box-shadow: 0 8px 12px #ebedf0;
  border-radius: 20px;
  margin-bottom: 24px;
  padding: 24px;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 25px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
  .name {
    font-size: 36px;
    margin-bottom: 15px;
  }
}
</style>
