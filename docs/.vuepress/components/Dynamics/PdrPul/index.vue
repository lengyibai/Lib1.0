<template>
  <div class="LibPdrPulSingle">
    <div
      class="scroll"
      ref="scroll"
      @scroll.passive="scroll"
      @touchstart="down($event)"
      @touchmove="setTopheight($event)"
      @touchend="up()"
    >
      <!-- 下拉盒子 -->
      <div
        class="top"
        :style="{
          height: `${downBoxHeight}px`,
          backgroundColor: downBoxBgColor,
        }"
        ref="top"
      >
        <!-- 下拉图片 -->
        <img
          class="icon refresh"
          ref="refresh"
          v-show="!isRefreshing"
          :src="themeColor == 'white' ? arrowIcon[0] : arrowIcon[1]"
        />
        <!-- 加载图片 -->
        <img
          class="icon"
          :class="{ rotate: isRefreshing }"
          :src="themeColor == 'white' ? loadingIcon[0] : loadingIcon[1]"
          v-show="isRefreshing && !isSuccess && !isErrRefresh"
        />
        <!-- 成功图片 -->
        <img
          class="icon"
          :src="themeColor == 'white' ? successIcon[0] : successIcon[1]"
          v-show="isSuccess"
        />
        <!-- 失败图片 -->
        <img
          class="icon"
          :src="themeColor == 'white' ? failIcon[0] : failIcon[1]"
          v-show="isErrRefresh"
        />
        <span class="font" :style="{ color: themeColor, fontSize: fontSize }">{{
          downRefreshText
        }}</span>
      </div>
      <!-- 状态图 -->
      <div class="status" v-show="!!status">
        <img :src="statusImg" />
        <span :style="{ fontSize: fontSize }">{{ statusText }}</span>
      </div>
      <!-- 滚动内容 -->
      <div
        class="content"
        ref="content"
        :style="{ minHeight: 'calc(100% - ' + upBoxHeight + ')' }"
      >
        <slot></slot>
      </div>
      <!-- 上拉盒子 -->
      <div
        class="bottom"
        @click="scrolling(false)"
        :class="{
          hide: !isUploading && !isFinish && !isErrload,
        }"
        ref="bottom"
        :style="{ height: upBoxHeight, backgroundColor: upBoxBgColor }"
        v-show="isFinishRefresh && !status"
      >
        <img
          class="icon rotate"
          :src="themeColor == 'white' ? loadingIcon[0] : loadingIcon[1]"
          v-show="!isFinish && !isErrload"
        />
        <img
          class="icon"
          :src="themeColor == 'white' ? noMoreIcon[0] : noMoreIcon[1]"
          v-show="isFinish"
        />
        <img
          class="icon"
          :src="themeColor == 'white' ? failIcon[0] : failIcon[1]"
          v-show="isErrload"
        />
        <span class="font" :style="{ color: themeColor, fontSize: fontSize }">{{
          isFinish ? "暂无更多" : isErrload ? "加载失败，点击重试" : "加载中..."
        }}</span>
      </div>
    </div>
    <BackTop :show="backTopShow" />
  </div>
</template>
<script>
import BackTop from "./childComp/back-top";
export default {
  name: "LibPdrPulSingle",
  components: { BackTop },
  props: {
    //空状态图
    emptyImg: {
      default: require("./img/empty.png"),
    },
    //请求错误状态图
    errorImg: {
      default: require("./img/error.png"),
    },
    //第一次请求的状态，通过后端返回的数据进行判断传入 error || empty
    status: {
      type: String,
      default: "",
      validator: (value) => {
        //传过来的值必须为其一
        return ["error", "empty", ""].indexOf(value) !== -1;
      },
    },

    /* 上拉和下拉盒子统一样式 */
    //刷新时机和刷新中停留距离
    downBoxStop: {
      type: Number,
      default: 75,
    },
    //图标大小
    iconSize: {
      type: String,
      default: "35px",
    },
    //字体大小
    fontSize: {
      type: String,
      default: "25px",
    },
    //图标及文字颜色
    themeColor: {
      type: String,
      default: "black",
      validator: (value) => {
        return ["black", "white"].indexOf(value) !== -1;
      },
    },

    /* 下拉盒子相关 */
    //背景色
    downBoxBgColor: {
      type: String,
      default: "transparent",
    },

    /* 上拉盒子相关 */
    //上拉盒子高度
    upBoxHeight: {
      type: String,
      default: "75px",
    },
    //背景色
    upBoxBgColor: {
      type: String,
      default: "transparent",
    },

    /* 回调函数参数传递 */
    //下拉刷新成功手动回调
    //this.$refs.scroll1.refreshSuccess() 传递 true 显示刷新成功，传递 false 显示刷新失败，根据后端返回数据传递
    //上拉加载成功手动回调
    //this.$refs.scroll1.loadSuccess() 传递 true 代表上拉加载成功，传递 false 显示加载失败，但还能上拉加载发送请求，传递null，代表分页全部加载完毕，且不能再上拉加载发送请求，，根据后端返回数据传递
  },
  data() {
    return {
      failIcon: [require("./img/fail_w.png"), require("./img/fail_b.png")],
      successIcon: [
        require("./img/success_w.png"),
        require("./img/success_b.png"),
      ],
      noMoreIcon: [
        require("./img/noMore_w.png"),
        require("./img/noMore_b.png"),
      ],
      arrowIcon: [require("./img/arrow_w.png"), require("./img/arrow_b.png")],
      loadingIcon: [
        require("./img/loading_w.png"),
        require("./img/loading_b.png"),
      ],

      backTopShow: false, //是否隐藏返回顶部按钮
      startY: 0, //点击坐标
      endY: 0, //抬起坐标
      downBoxHeight: 0, //下拉盒子高度
      isDown: false, //是否处于按下状态
      isWritePosition: true, //是否开始记录点击坐标
      isReadyRefresh: false, //是否处于释放刷新中
      isRefreshing: false, //是否处于刷新中
      isUploading: true, //是否处于加载中
      isSuccess: false, //是否刷新新成功
      event: null, //备用事件对象
      downRefreshText: "下拉刷新",
      upLoadText: "加载中",
      isFinish: false, //数据是否全部加载完毕
      isErrRefresh: false, //是否下拉刷新错误
      isErrload: false, //是否上拉加载错误
      refreshPer: 0, //下拉百分比
      isFinishRefresh: true, //是否返回了刷新结果
    };
  },
  mounted() {
    //首次加载触发上拉加载
    this.$emit("loading");
    /* 设置图标和字体大小 */
    const icon = document.querySelectorAll(".icon");
    const font = document.querySelectorAll(".font");
    icon.forEach((item) => {
      item.style.width = this.iconSize;
      item.style.height = this.iconSize;
    });
    font.forEach((item) => {
      item.style.fontSize = this.fontSize;
      item.style.color = this.themeColor;
    });
  },
  watch: {
    refreshPer() {
      //#####··········进入刷新后、释放刷新前实时触发，参数为距离释放刷新百分比··········#####//
      if (this.refreshPer < 100) {
        this.$refs.refresh.style.transform = `rotateZ(${
          this.refreshPer * 1.8
        }deg)`;
      } else {
        this.$refs.refresh.style.transform = `rotateZ(180deg)`;
      }
    },
  },
  computed: {
    //#####··········加载状态图··········#####//
    statusImg() {
      if (this.status == "empty") {
        return this.emptyImg;
      } else if (this.status == "error") {
        return this.errorImg;
      } else {
        return null;
      }
    },
    statusText() {
      //#####··········加载状态文字··········#####//
      return this.status == "empty"
        ? "暂无数据"
        : this.status == "error"
        ? "请求错误"
        : "";
    },
  },
  methods: {
    //#####··········滚动触发··········#####//
    scroll(e) {
      //滚动触发上拉加载
      this.scrolling(e);
      //是否显示回到顶部
      this.backTopShow =
        this.$refs.scroll.scrollTop > document.documentElement.clientHeight;
    },

    //#####··········按下触发··········#####//
    down(e) {
      this.event = e;
      this.isDown = true;
      //按下滑动的时候清除下拉箭头和盒子动画效果
      this.$refs.top.style.transition = "all 0s";
      this.$refs.refresh.style.transition = "all 0s";
      //防止内容未填充屏幕，而导致无法上拉加载
    },

    //#####··········手指滑动触发··········#####//
    setTopheight(e) {
      this.event = e;
      //如果处于刷新中，则禁止下拉滑动
      if (this.isRefreshing) return;
      //是否处于按下且距离顶部小于0
      if (this.isDown && this.$refs.scroll.scrollTop <= 0) {
        if (this.isWritePosition) {
          //触发下拉操作
          this.refreshStart();
          //记录按下位置
          this.startY = e.touches[0].clientY;
          //只记录一次
          this.isWritePosition = false;
        }
        //实时修改下拉盒子高度
        this.downBoxHeight = (e.touches[0].clientY - this.startY) / 2.5;
        //根据下拉盒子高度进行触发
        //获取下拉刷新距离百分比
        this.refreshPer = parseInt(
          (this.downBoxHeight / this.downBoxStop) * 100
        );
        /* 判断当前是否可释放刷新时机 */
        if (this.downBoxHeight >= this.downBoxStop) {
          //处于释放刷新后则禁止再次触发
          if (this.isReadyRefresh) return;
          //触发释放刷新
          this.refreshReady();
          this.isReadyRefresh = true;
        } else {
          this.downRefreshText = "下拉刷新";
          this.isReadyRefresh = false;
        }
      }
    },

    //#####··········抬起触发··········#####//
    up() {
      //%··下拉相关··%//
      //手指抬起后，下拉箭头和下拉盒子平缓动画还原
      this.$refs.refresh.style.transition = "all 0.5s";
      this.$refs.top.style.transition = "all 0.5s";
      //如果处于刷新中，则禁止再次触发下拉刷新
      if (this.isRefreshing) return;
      this.isDown = false;
      this.isWritePosition = true;
      //获取抬起位置
      this.endY = this.event.changedTouches[0].clientY;
      //下拉盒子大于等于75，停留在刷新中位置
      if (this.downBoxHeight >= this.downBoxStop) {
        //回归到刷新中位置
        this.downBoxHeight = this.downBoxStop;
        //触发刷新中
        this.refreshing();
      } else {
        //百分比和下拉盒子还原
        this.refreshPer = 0;
        this.downBoxHeight = 0;
      }
    },

    //#####··········下拉回调··········#####//
    refreshStart() {},

    //#####··········可释放刷新回调··········#####//
    refreshReady() {
      this.downRefreshText = "释放立即刷新";
    },

    //#####··········刷新回调··········#####//
    refreshing() {
      this.downRefreshText = "正在刷新";
      this.isFinishRefresh = false;
      this.isErrload = false;
      this.isRefreshing = true;
      this.$emit("refreshing");
    },

    //#####··········手动触发下拉刷新成功（需要传递刷新状态，后端返回的状态）··········#####//
    refreshSuccess(status = true) {
      setTimeout(() => {
        this.isFinishRefresh = true;
        this.downRefreshText =
          status || status === null ? "刷新成功" : "刷新失败";
        this.isSuccess = status || status === null;
        this.isErrRefresh = !(status || status === null);
        //继续显示上拉加载中...
        this.isFinish = false;
        setTimeout(() => {
          //刷新成功后下拉盒子还原动画时长
          this.$refs.top.style.transition = "all 0.5s";
          this.$refs.refresh.style.transition = "all 0.5s";
          //刷新成功后下拉盒子还原高度
          this.downBoxHeight = 0;
          this.isReadyRefresh = false;
          //刷新成功后下拉箭头还原角度
          //等 0.5s 动画结束后才能再次下拉刷新
          setTimeout(() => {
            //允许再次下拉
            this.refreshPer = 0;
            this.isRefreshing = false;
            this.isSuccess = false;
            this.isErrRefresh = false;
          }, 500);
        }, 1000);
      }, 500);
    },

    //#####··········主动触发加载中··········#####//
    scrolling(event) {
      if (event) {
        let disbottom =
          this.$refs.bottom.offsetTop -
          event.target.scrollTop -
          event.target.clientHeight +
          this.$refs.bottom.offsetHeight;
        //* 多少代表无感刷新
        if (
          disbottom <= document.documentElement.clientHeight * 0 &&
          !this.isUploading &&
          !this.isFinish &&
          this.isFinishRefresh
        ) {
          this.isUploading = true;
          //触发上拉加载
          this.$emit("loading");
        }
      } else {
        this.isErrload = false;
        this.isUploading = true;
        this.$emit("loading");
      }
    },

    //#####··········手动触发加载成功（需要传递刷新状态，后端返回的状态）··········#####//
    loadSuccess(status = true) {
      this.isUploading = false;
      this.isErrload = status === false;
      this.isFinish = status === null;
    },
  },
};
</script>
<style scoped lang="less">
.LibPdrPulSingle {
  //返回顶部用到了绝对定位，则此处定位必须加
  position: relative;
  height: 100%;
  .scroll {
    height: 100%;
    overflow-y: auto;
    .status {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      inset: 0;
      pointer-events: none;
      img {
        height: 50%;
      }
      span {
        color: #aaa;
      }
    }
    .top,
    .bottom {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 75px;
      overflow: hidden;
    }
    .top {
      top: 0;
      align-items: center;
      .refresh {
        transform: rotateZ(0deg);
      }
    }
    .bottom {
      transition: all 0.25s;
      align-items: center;
    }
  }
}

.icon {
  margin-right: 10px;
}
.hide {
  opacity: 0;
}
.rotate {
  animation: rotate 0.5s infinite linear;
}
@keyframes rotate {
  100% {
    transform: rotateZ(360deg);
  }
}
</style>
