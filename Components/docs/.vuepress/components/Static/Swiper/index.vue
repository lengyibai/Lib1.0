<template>
  <div
    class="LibSwiper"
    :ref="id"
    @mouseenter="is_hover = true"
    @mouseleave="is_hover = false"
  >
    <!-- Swiper -->
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination" ref="dot" v-show="isShowdot"></div>
    <transition name="fade">
      <div class="swiper-button-next" v-show="is_hover">
        <component
          :is="LibIcon"
          size="15px"
          v-if="isShowLR"
          :imgUrl="require('./img/right.png')"
          key="a"
        ></component>
      </div>
    </transition>
    <transition name="fade">
      <div class="swiper-button-prev" v-show="is_hover">
        <component
          :is="LibIcon"
          size="15px"
          v-if="isShowLR"
          :imgUrl="require('./img/left.png')"
          key="b"
        ></component>
      </div>
    </transition>
  </div>
</template>
<script>
import "./file/index.css";
import Swiper from "./file/index.js";
export default {
  name: "LibSwiper",
  props: {
    id: {
      type: String,
      default: "LibSwiper",
    },
    //图片路径
    imgUrls: {
      type: Array,
      default() {
        return [];
      },
    },
    //是否显示小圆点
    isShowdot: {
      type: Boolean,
      default: true,
    },
    //是否显示左右切换
    isShowLR: {
      type: Boolean,
      default: true,
    },
    //自动滚动间隔
    time: {
      type: Number,
      default: 1000,
    },
    //滚动速度
    speed: {
      type: Number,
      default: 500,
    },
    //循环
    loop: {
      type: Boolean,
      default: true,
    },
    //高度自适应
    autoHeight: {
      type: Boolean,
      default: false,
    },
    /* 高级设置 */
    //图片间距
    spaceBetween: {
      type: Number,
      default: 0,
    },
    //开启一页三张轮播
    isMultiple: {
      type: Boolean,
      default: false,
    },
    //切换样式
    switchEffect: {
      type: Object,
      default() {
        return {
          //旋转角度
          rotate: 0,
          //间隔
          stretch: "25%",
          //深度
          depth: 250,
          //是否显示阴影
          slideShadows: true,
        };
      },
    },
    //一页显示几张图
  },
  data() {
    return {
      mySwiper: null,
      is_hover: false,
      LibIcon: null,
    };
  },
  mounted() {
    import("./childComp/LibIcon").then((module) => {
      this.LibIcon = module.default;
    });
    this.$nextTick(() => {
      Array.from(this.$refs.dot.children).forEach((item) => {
        item.style.width = "16px";
        item.style.height = "16px";
        item.style.borderRadius = `${16 / 2}px`;
        item.style.transition = "all 0.5s";
      });
    });
    const that = this;
    const mySwiper = new Swiper(this.$refs[this.id], {
      /* 动画时间 */
      speed: this.speed,
      /* 图片之间的间距 */
      spaceBetween: this.spaceBetween,
      /* 是否循环 */
      loop: this.loop,
      /* 循环的时候复制多少份 */
      loopAdditionalSlides: 3,
      /* 切换效果 */
      effect: this.isMultiple ? "coverflow" : "",
      //一页显示多少张图片
      slidesPerView: this.isMultiple ? 2 : 1,
      //居中显示
      centeredSlides: true,
      /* 样式属性 */
      coverflowEffect: this.isMultiple ? this.switchEffect : "",
      /* 底部分页按钮 */
      autoHeight: this.autoHeight,
      pagination: {
        el: ".swiper-pagination",
        //是否允许点击
        clickable: true,
      },
      /* 左右切换按钮 */
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      /* 自动滚动 */
      autoplay: {
        delay: this.time,
      },
      on: {
        slideChangeTransitionStart: function () {
          that.$emit("start", this.previousIndex - 1);
        },
        slideChangeTransitionEnd: function () {
          that.$emit("end", this.activeIndex - 1);
        },
      },
    });
    //鼠标覆盖停止自动切换
    mySwiper.el.onmouseover = function () {
      mySwiper.autoplay.stop();
    };
    //鼠标离开开始自动切换
    mySwiper.el.onmouseout = function () {
      mySwiper.autoplay.start();
    };
  },
};
</script>
<style scoped lang="less">
.LibSwiper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .swiper-slide {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .swiper-button-next,
  .swiper-button-prev {
    width: 35px;
    height: 35px;
    background-color: rgba(0, 0, 0, 0.25);
    position: absolute;
    border-radius: 50%;
  }
}

/* 淡入淡出 */
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}
</style>
