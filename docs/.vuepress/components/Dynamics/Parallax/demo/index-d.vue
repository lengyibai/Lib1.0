<template>
  <Dynamics-Parallax-index
    class="LibParallax"
    :follow="false"
    :reverse="true"
    unit="vw"
  >
  <!-- 树林背景 -->
    <img id="parallax-item" x="2.6042" blur="4" initBlur="2" src="./img/demo-d/bg.png" />

    <!-- 22娘 -->
    <img id="parallax-item" x="5.2083" blur="6" src="./img/demo-d/girl1.png" />

    <!-- 秋 -->
    <h1 id="parallax-item" x="6.5104" blur="4" initBlur="2">秋</h1>

    <!-- 小土丘 -->
    <img id="parallax-item" x="10.4167" blur="4" initBlur="2" src="./img/demo-d/grassland.png" />

    <!-- 蘑菇松果 -->
    <img id="parallax-item" x="15.625" blur="4" initBlur="4" src="./img/demo-d/mushroom.png" />

    <!-- 枯叶 -->
    <img id="parallax-item" x="23.4375" blur="2" initBlur="6" src="./img/demo-d/leaf.png" />

    <!-- 33娘 -->
    <img id="parallax-item" x="28.6458" blur="0" initBlur="8" src="./img/demo-d/spirit.png" />
  </Dynamics-Parallax-index>
</template>
<style scoped lang="less">
.LibParallax {
  position: relative;
  width: 100vw;
  height: 11.7vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  h1 {
    color: #fff;
    font-size: 7vw;
    font-weight: bold;
    transform: rotateX();
  }
  img {
    position: absolute;
    height: 100%;
  }
}
</style>
