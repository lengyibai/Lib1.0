<template>
  <div class="demo mask"></div>
</template>
<style scoped>
.demo {
  width: 100%;
  height: 50vh;
  background: url("http://lengyibai.gitee.io/img-bed/img/bg.jpg") no-repeat
    center -25px;
  background-size: cover;
}

.mask {
  mask-image: url("./img/mask.png");
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
}
</style>
