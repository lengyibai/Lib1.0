<template>
  <div class="LibScrollInto" ref="LibScrollInto" @scroll="scroll">
    <slot></slot>
  </div>
</template>
<script>
//#####··········动画库··········#####//
import animates from "./animate.js";
export default {
  name: "LibScrollInto",
  props: {
    animate: {
      type: String | Function,
      default: "opacity",
    },
    once: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    this.children_animate = [];
    this.parent = [];
    this.children = [];
    this.scrollAnimate = null;
    return {};
  },
  mounted() {
    //#####··········获取要设置动画的元素··········#####//
    /* 子组件 */
    const comps = this.$slots.default
      .filter((item) => {
        return item.child && item.elm._prevClass === "IntoBox";
      })
      .map((item) => {
        return item.child;
      });
    /* 子组件元素及内部元素 */
    this.parent = comps.map((item) => {
      return item.$el;
    });
    this.children = comps.map((item) => {
      return item.$el.children[0];
    });

    /* 子组件动画属性 */
    this.children_animate = comps.map((item) => {
      return {
        ...item.animate,
        name:
          typeof item.animate?.name === "function"
            ? item.animate.name
            : item.animate && animates[item.animate.name],
      };
    });
    this.scrollAnimate = this.scrollRepeat;
    /* 只播放一次 */
    if (!this.once) return;
    this.scrollAnimate = this.scrollOnce;
    const animate = {
      name: animates[this.animate.name],
      names: this.children_animate,
    };
    this.children.forEach((item, index) => {
      item.style.opacity = 0;
      animate.name(item);
      if (animate.names[index].name) {
        animate.names[index].name(item);
      }
    });
  },
  methods: {
    scroll(e) {
      this.scrollAnimate({
        father: e.target,
        el: this.parent,
        son: this.children,
        into: this.animate.into,
        time: this.animate.time,
        animate: {
          name: animates[this.animate.name],
          names: this.children_animate,
        },
      });
    },
    scrollRepeat(obj) {
      let {
        el,
        son,
        father = document.documentElement,
        into = 0.5,
        time = 0.5,
        animate,
      } = obj;
      function fn(el, son, i) {
        let a =
          father.scrollTop -
          el.offsetTop +
          father.clientHeight -
          el.clientHeight *
            (animate.names[i].into ? animate.names[i].into : into);

        son.style.transition = `all ${
          animate.names[i].time ? animate.names[i].time : time
        }s`;
        if (a > 0) {
          son.style.transform = null;
          son.style.opacity = 1;
        } else if (
          a <
          -el.clientHeight *
            (animate.names[i].into ? animate.names[i].into : into)
        ) {
          son.style.opacity = 0;
          son.style.transition = `all 0s`; //是否开启还原位置动画
          animate.name && animate.name(son);
          if (animate.names[i].name) {
            animate.names[i].name(son);
          }
        }
      }
      el.forEach((item, index) => {
        fn(item, son[index], index);
      });
    },
    scrollOnce(obj) {
      let {
        el,
        son,
        father = document.documentElement,
        into = 0.5,
        time = 0.5,
        animate,
      } = obj;
      function fn(el, son, i) {
        son.style.transition = `all ${
          animate.names[i].time ? animate.names[i].time : time
        }s`;
        let a =
          father.scrollTop -
          el.offsetTop +
          father.clientHeight -
          el.clientHeight *
            (animate.names[i].into ? animate.names[i].into : into);
        if (a > 0) {
          son.style.transform = null;
          son.style.opacity = 1;
        }
      }
      el.forEach((item, index) => {
        fn(item, son[index], index);
      });
    },
  },
};
</script>
<style scoped>
.LibScrollInto {
  height: 100%;
  overflow: auto;
  overscroll-behavior: contain;
}
</style>
