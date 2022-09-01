<template>
  <transition-group class="grid">
    <!--
      x、countX、y、countY是固定写法，看得懂可以自行修改，但推荐当前写法
     -->
    <Static-GridNumber-index
      class="LibGridNumber"
      v-for="(item, index) in box"
      :x="item[0]"
      :countX="item[1]"
      :y="item[2]"
      :countY="item[3]"
      :key="index"
    >
      {{ index }}
    </Static-GridNumber-index>
  </transition-group>
</template>
<script>
export default {
  data() {
    return {
      box: [], //用于存储当前的布局
      boxs: {
        0: [
          [1, 4, 1, 1],
          [1, 2, 2, 1],
          [3, 2, 2, 1],
          [1, 2, 3, 1],
          [3, 2, 3, 1],
          [1, 4, 4, 1],
          [1, 4, 5, 1],
        ],
        500: [
          /**
           * 每个数组代表一个盒子，每个数组内的数字代表占用
           * 数组元素第1个和第2个，代表X轴第几格开始，占用了几格
           * 数组元素第3个和第4个，代表Y轴第几格开始，占用了几格
           */
          [1, 1, 1, 2],
          [1, 2, 3, 1],
          [1, 3, 4, 1],
          [2, 2, 1, 1],
          [3, 1, 3, 1],
          [3, 1, 2, 1],
          [2, 1, 2, 1],
        ],
        800: [
          [1, 1, 1, 2],
          [2, 1, 1, 3],
          [1, 1, 3, 1],
          [1, 3, 4, 1],
          [4, 1, 2, 3],
          [3, 2, 1, 1],
          [3, 1, 2, 2],
        ],
        1200: [
          [1, 2, 1, 1],
          [3, 1, 1, 2],
          [4, 1, 1, 1],
          [1, 1, 2, 2],
          [2, 1, 2, 1],
          [2, 3, 3, 1],
          [4, 1, 2, 1],
        ],
      },
    };
  },
  mounted() {
    this.fn();
    window.addEventListener("resize", this.fn);
  },
  methods: {
    fn() {
      /* 循环布局数组的 key，当大于 key 则使用该 key 布局 */
      Object.keys(this.boxs).forEach((item) => {
        if (document.documentElement.clientWidth > Number(item)) {
          this.box = this.boxs[item];
        }
      });
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.fn);
  },
};
</script>
<style scoped>
.grid {
  display: grid;
  width: 100%;
  height: 50vh;
  grid-gap: 5px;
}
.LibGridNumber {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  font-size: 6vw;
  transition: all 1s;
}
</style>
