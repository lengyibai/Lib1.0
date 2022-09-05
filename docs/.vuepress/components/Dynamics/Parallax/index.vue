<template>
  <div ref="LibParallax">
    <slot></slot>
  </div>
</template>
<script>
import Parallax from "./Parallax.js";
export default {
  name: "LibParallax",
  props: {
    follow: {
      type: Boolean,
      default: true,
    },
    outinit: {
      type: Boolean,
      default: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
    unit: {
      type: String,
      default: "px",
    },
  },
  components: {},
  mounted() {
    let childs = this.$slots.default
      .filter((item) => {
        return item.data;
      })
      .map((item) => {
        if (item.data.attrs.id.includes("parallax-item")) {
          return item.elm;
        }
      })
      .map((item) => {
        return {
          el: item,
          x: item.attributes.x?.value,
          y: item.attributes.y?.value,
          blur: item.attributes.blur?.value,
          init: {
            blur: item.attributes.initBlur?.value,
          },
        };
      });
    const parallax = new Parallax(this.$refs.LibParallax, {
      follow: this.follow,
      outinit: this.outinit,
      reverse: this.reverse,
      unit: this.unit,
    });
    for (const k in childs) {
      const o = childs[k];
      parallax.setOption(childs[k].el, {
        x: o.x,
        y: o.y,
        blur: o.blur,
        init: o.init,
      });
    }
  },
};
</script>
