<template>
  <Dynamics-Parallax-index
    class="LibParallax"
    :follow="false"
    :outinit="false"
    :reverse="true"
    unit="vw"
  >
    <div class="box1" id="parallax-item" x="10" y="5" blur="10"></div>
    <div class="box2" id="parallax-item" x="20" y="10" blur="10"></div>
    <div class="box3" id="parallax-item" x="30" y="15" blur="10"></div>
    <div class="box4" id="parallax-item" x="40" y="20" blur="10"></div>
  </Dynamics-Parallax-index>
</template>
<style scoped lang="less">
.LibParallax {
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  .box1 {
    position: absolute;
    width: 2.5vw;
    height: 2.5vw;
    background-color: rgba(231, 77, 60, 0.5);
  }
  .box2 {
    position: absolute;
    width: 5vw;
    height: 5vw;
    background-color: rgba(46, 204, 112, 0.5);
  }
  .box3 {
    position: absolute;
    width: 7.5vw;
    height: 7.5vw;
    background-color: rgba(52, 152, 219, 0.5);
  }
  .box4 {
    position: absolute;
    width: 10vw;
    height: 10vw;
    background-color: rgba(156, 89, 182, 0.5);
  }
}
</style>
