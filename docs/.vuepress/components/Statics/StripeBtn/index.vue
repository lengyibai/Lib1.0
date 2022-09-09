<template>
  <div class="StripeBtn" @click="fn" :style="{ backgroundColor: bgColor, color: color }" ref="StripeBtn">
    <span>{{ text }}</span>
    <div
      class="stripe"
      v-show="value"
      :style="{
        backgroundImage: themeColor[theme],
      }"
    ></div>
  </div>
</template>
<script>
export default {
  name: "StripeBtn",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: "white",
      validator: (value) => {
        return ["white", "black"].indexOf(value) !== -1;
      },
    },
    text: {
      type: String,
      default: "按钮",
    },
    bgColor: {
      type: String,
      default: "#909399",
    },
    color: {
      type: String,
      default: "#fff",
    },
  },
  data() {
    this.themeColor = {
      white:
        "repeating-linear-gradient(115deg, rgba(255, 255, 255, 0.75) 0px,rgba(255, 255, 255, 0.75) 1em,rgb(255, 255, 255) calc(1em - 1px),rgb(255, 255, 255) 2em)",
      black:
        "repeating-linear-gradient(115deg, rgba(0, 0, 0, 0.85) 0px,rgba(0, 0, 0, 0.85) 1em,rgb(0, 0, 0) calc(1em - 1px), rgb(0, 0, 0) 2em)",
    };
    return {
      size: [0, 0],
    };
  },
  mounted() {
    const bth = this.$refs.StripeBtn;
    bth.style.setProperty("--height", bth.offsetHeight + "px");
  },
  methods: {
    fn() {
      this.$emit("click");
      this.$emit("input", true);
    },
  },
};
</script>
<style scoped lang="less">
.StripeBtn {
  --height: 0;
  position: relative;
  padding: 0.75em 1.5em;
  font-size: 25px;
  border-radius: 0.5em;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  .stripe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: calc(var(--height) - 0.625em) var(--height);
    background-position: 0 0;
    animation: grow 0.5s linear infinite;
    opacity: 0.35;
    @keyframes grow {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: calc(var(--height) - 0.7em) 0;
      }
    }
  }
}
</style>
