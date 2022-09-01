<template>
  <div class="LibRange" ref="LibRange">
    <div class="sliderValue" v-if="showNum">
      <span :class="{ showNum: show_num }" :style="{ left: barWidth }">
        {{ text || value }}
      </span>
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
        @mouseup="hide"
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
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    value: {
      type: Number,
      default: 0,
    },
    text: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#3498db",
    },
    size: {
      type: Number,
      default: 20,
    },
    showDot: {
      type: Boolean,
      default: true,
    },
    showIcon: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "",
    },
    showNum: {
      type: Boolean,
      default: true,
    },
    step: {
      type: Number,
      default: 1,
    },
    ply: {
      type: String,
      default: "3px",
    },
  },
  data() {
    return {
      rotate: 0,
      show_num: false,
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
  mounted() {
    this.$refs.LibRange.style.setProperty("--size", `${this.size}px`);
    this.$refs.LibRange.style.setProperty("--ply", this.ply);
  },
  methods: {
    changeValue(v) {
      this.show_num = true;
      this.$emit("input", parseFloat(v));
      this.rotate = v / this.max;
    },
    hide() {
      this.show_num = false;
    },
  },
};
</script>
<style scoped lang="less">
.LibRange {
  --size: 20px;
  --ply: 3px;
  position: relative;
  width: 100%;
  .sliderValue {
    position: absolute;
    width: 100%;
    top: -75px;
    span {
      position: absolute;
      padding: 0 15px;
      width: fit-content;
      border-radius: 30px;
      height: 50px;
      font-size: 25px;
      font-weight: 500;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.75);
      text-align: center;
      transform: translateX(-50%) scale(0);
      transform-origin: bottom;
      transition: transform 0.3s ease-in-out;
      line-height: 50px;
      z-index: 2;
    }
  }
  .field {
    display: flex;
    justify-content: center;
    .bar {
      position: absolute;
      left: 0;
      width: 0%;
      height: var(--ply);
      border-radius: var(--ply);
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
      height: var(--ply);
      border-radius: var(--ply);
      margin: 0;
      background-color: #ddd;
      outline: none;
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: var(--size);
        height: var(--size);
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
