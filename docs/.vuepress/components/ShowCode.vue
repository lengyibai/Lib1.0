<template>
  <div class="ShowCode">
    <transition name="fade">
      <div class="code" :class="{ showCode: show }" ref="code">
        <slot name="codes"></slot>
      </div>
    </transition>
    <div
      class="show"
      @click="showCode"
      @mouseenter="enter(true)"
      @mouseleave="enter(false)"
      @touchend="enter(false)"
      ref="show"
    >
      <LibSvg
        class="LibSvg"
        :svg="icon.DOWNUP"
        :color="icon_color"
        size="16px"
        right="10px"
        :class="{ iconRotate: !show }"
      />
      <span
        ref="text"
        :style="{
          color: icon_color,
        }"
        >{{ text }}代码</span
      >
    </div>
  </div>
</template>
<script>
import icon from "../assets/icon/icon.js";
export default {
  name: "ShowCode",
  data() {
    this.icon = icon;
    return {
      show: true,
      text: "显示",
      icon_color: "#58727e",
    };
  },
  watch: {
    show(v) {
      const show = this.$refs.show;
      if (!v) {
        if (
          document.documentElement.clientHeight -
            show.getBoundingClientRect().y -
            this.$refs.code.scrollHeight <
          -500
        ) {
          show.classList.add("fixed");
        }
      } else {
        show.classList.remove("fixed");
      }
    },
  },
  mounted() {
    this.$refs.code.style.height = this.$refs.code.scrollHeight + 10 + "px";
  },
  methods: {
    showCode() {
      this.show = !this.show;
      this.text = this.show ? "显示" : "隐藏";
    },

    enter(flag) {
      if (flag) {
        this.icon_color = "#3eaf7c";
        this.$refs.show.style.backgroundColor = "#eee";
        return;
      }

      this.icon_color = "#58727e";
      this.$refs.show.style.backgroundColor = "#fff";
    },
  },
};
</script>
<style scoped lang="less">
.ShowCode {
  width: 100%;
  .code {
    width: 100%;
    overflow: hidden;
    transition: all 0.5s;
    margin-bottom: 10px;
    padding: 8px 15px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .show {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    height: 35px;
    cursor: pointer;
    text-align: center;
    transition: all 0.25s;
    border-radius: 5px;
  }
  .LibSvg {
    transition: all 0.5s;
  }
}

.showCode {
  height: 0px !important;
}

.iconRotate {
  transform: rotate(-180deg);
}

.fixed {
  width: 100%;
  right: 0;
  position: fixed !important;
  bottom: 0px !important;
  z-index: 2;
  box-shadow: 0 0px 5px #aaa;
}
</style>
