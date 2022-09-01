<template>
  <div class="LibRange">
    <div class="sliderValue" v-if="showNum">
      <span :class="{ showNum: show_num }" :style="{ left: barWidth }">{{
        text || value
      }}</span>
    </div>
    <div class="field">
      <div class="bar" :style="{ width: barWidth, backgroundColor: color }">
        <img
          :src="icon"
          v-show="showIcon && showDot"
          :style="{ width: size + 'px', height: size + 'px' }"
        />
        <span
          v-show="showDot && !showIcon"
          :style="{
            width: size + 'px',
            height: size + 'px',
            backgroundColor: color,
          }"
        ></span>
      </div>
      <input
        :value="value"
        @input="changeValue($event.target.value)"
        @mouseup="show_num = false"
        type="range"
        :min="min"
        :max="max"
        :step="step"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "LibRange",
  props: {
    /* 最小值 */
    min: {
      type: Number,
      default: 0,
    },
    /* 最大值 */
    max: {
      type: Number,
      default: 1,
    },
    /* 进度条值，通过v-model */
    value: {
      type: Number,
      default: 0,
    },
    /* 进度条自定义悬浮文本 */
    text: {
      type: String,
      default: "",
    },
    /* 进度条颜色 */
    color: {
      type: String,
      default: "#3498db",
    },
    /* 圆点和图标大小，实际上可点击的范围依然是20px * 20px */
    size: {
      type: Number,
      default: 20,
    },
    /* 是否显示圆点 */
    showDot: {
      type: Boolean,
      default: true,
    },
    /* 是否显示图标 */
    showIcon: {
      type: Boolean,
      default: false,
    },
    /* 自定义图标1:1 */
    icon: {
      type: String,
      default: require("./img/icon.svg"),
    },
    /* 是否在滑动的时候显示数字 */
    showNum: {
      type: Boolean,
      default: true,
    },
    step: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      show_num: false,
      rotate: 0,
    };
  },
  computed: {
    barWidth() {
      let value = this.value - this.min;
      let max = this.max - this.min;
      return `calc(${value / (max / 100)}% + ${
        ((this.size - (this.showDot ? 0 : 25)) * (max / 2 - value)) / max
      }px)`;
    },
  },
  methods: {
    changeValue(v) {
      this.show_num = true;
      this.$emit("input", parseFloat(v));
      this.rotate = v / this.max;
    },
  },
};
</script>
<style scoped lang="less">
.LibRange {
  position: relative;
  width: 100%;
  .sliderValue {
    position: absolute;
    width: 100%;
    top: -75px;
    span {
      position: absolute;
      padding: 0 15px;
      height: 50px;
      border-radius: 50px;
      font-weight: 500;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;
      transform: translateX(-50%) scale(0);
      transform-origin: bottom;
      transition: transform 0.3s ease-in-out;
      line-height: 50px;
      z-index: 2;
      &::after {
        position: absolute;
        content: "";
        //width: 100%;
        //height: 100%;
        background-color: #000;
        font-weight: 500;
        color: #fff;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        border-top-left-radius: 50%;
        border-top-right-radius: 50%;
        border-bottom-left-radius: 50%;
        z-index: -1;
      }
    }
  }
  .field {
    @height: 3px;
    display: flex;
    justify-content: center;
    .bar {
      position: absolute;
      left: 0;
      width: 0%;
      height: @height;
      border-radius: @height;
      pointer-events: none;
      img,
      span {
        position: absolute;
        transform: translateX(50%) translateY(-50%);
        top: 1.5px;
        right: 0;
        border-radius: 50%;
        transition: transform 0.5s;
      }
      img {
        z-index: 2;
      }
    }
    input {
      appearance: none;
      width: 100%;
      height: @height;
      border-radius: @height;
      margin: 0;
      background-color: #ddd;
      outline: none;
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 20px;
        height: 20px;
        background-size: cover;
        border-radius: 50px;
        cursor: pointer;
      }
    }
    .value {
      position: relative;
      font-size: 18px;
      font-weight: 600;
      color: #000;
      &.left {
        left: -22px;
      }
      &.right {
        right: -43px;
      }
    }
  }
}

/* 拖动显示数字 */
.showNum {
  transform: translateX(-50%) scale(1) !important;
}

/* 淡入淡出 */
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
</style>
