<template>
  <div class="demo edge"></div>
</template>
<style scoped>
.demo {
  width: 100%;
  height: 50vh;
  background: url("http://lengyibai.gitee.io/img-bed/img/bg.jpg") no-repeat
    center -25px;
  background-size: cover;
}

.edge {
  mask: linear-gradient(135deg, transparent 50px, #fff 0) top left,
    linear-gradient(-135deg, transparent 50px, #fff 0) top right,
    linear-gradient(-45deg, transparent 50px, #fff 0) bottom right,
    linear-gradient(45deg, transparent 50px, #fff 0) bottom left;
  mask-size: 50% 50%;
  mask-repeat: no-repeat;
}
</style>
