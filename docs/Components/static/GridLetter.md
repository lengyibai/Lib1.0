# GridLetter

<ContainerBox title="介绍">
::: slot desc
利用了`grid`布局的`gridTemplateAreas`父属性，实现字母模板布局

推荐使用 [Grid 布局生成器](https://cssgrid-generator.netlify.app) 辅助布局，确定每个盒子的占用格数
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibGridLetter.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
数字模板：虽然可读性不强，但它直接修改的子元素属性，能触发子元素动画

字母模板：虽然看着更直观、可读性强，但字母模板属于父元素属性，修改布局并不会触发子元素的响应式动画

推荐：当布局定死不会改变或不需要动画时，可以考虑使用字母模板

试着缩小浏览器宽度查看效果
:::

<div class="demoBox">
<Static-GridLetter-demo-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="grid" :style="{ gridTemplateAreas: layout }">
    <LibGridLetter
      class="LibGridLetter"
      v-for="(item, index) in box"
      :area="item"
      :key="index"
    >
      {{ item }}
    </LibGridLetter>
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
```
:::
</ShowCode>
</ContainerBox>
