<template>
  <div class="demo halation"></div>
</template>
<style scoped>
.demo {
  width: 100%;
  height: 50vh;
  background: url("http://lengyibai.gitee.io/img-bed/img/bg.jpg") no-repeat
    center -25px;
  background-size: cover;
}

.halation {
  mask: radial-gradient(#000 50%, transparent 100%);
}
</style>
