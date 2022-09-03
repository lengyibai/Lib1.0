<template>
  <div class="grid" :style="{ gridTemplateAreas: layout }">
    <Statics-GridLetter-index
      class="LibGridLetter"
      v-for="(item, index) in box"
      :area="item"
      :key="index"
    >
      {{ item }}
    </Statics-GridLetter-index>
  </div>
</template>
<script>
export default {
  data() {
    return {
      box: "abcdefg", //代表7个盒子，字母代表盒子的id
      layout: "", //用于存储当前的布局
      layouts: {
        0: `
            'a a a a'
            'b b c c'
            'd d e e'
            'f f f f'
            'g g g g'
          `,
        500: `
            'a d d'
            'a g f'
            'b b e'
            'c c c'
          `,
        800: `
            'a b f f'
            'a b f f'
            'c b g e'
            'd d d e'
          `,
        1200: `
            'a a b c'
            'd e b g'
            'd f f f'
          `,
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
      Object.keys(this.layouts).forEach((item) => {
        if (document.documentElement.clientWidth > Number(item)) {
          this.layout = this.layouts[item];
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
.LibGridLetter {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  font-size: 6vw;
}
</style>
