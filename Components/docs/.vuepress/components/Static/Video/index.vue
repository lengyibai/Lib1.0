<template>
  <div
    class="LibVideo"
    :class="{ fullScreen: is_fill }"
    ref="LibVideo"
    @mousemove="showToolbar"
    @mouseleave="show_toolbar = false"
    @click="playPause"
  >
    <video ref="video" :src="url" :muted="is_mute"></video>
    <!-- 播放栏目 -->
    <transition name="fade">
      <div class="toolbar" :class="{ hidden: !show_toolbar }">
        <!-- 进度条 -->
        <div class="bar" ref="bar">
          <!-- 播放进度条 -->
          <LibRange
            v-model="progress_play"
            v-if="video"
            :text="$fmtSec(video.currentTime)[3]"
            :showDot="show_toolbar"
            :step="0.001"
            @mousedown.native="handleLibRange('down')"
            @mouseup.native="handleLibRange('up')"
          />
        </div>
        <!-- 工具栏 -->
        <div
          class="options"
          @mouseenter="enter_toolbar = true"
          @mouseleave="enter_toolbar = false"
        >
          <!-- 左侧 -->
          <div class="left">
            <span class="time" v-if="is_ready">
              {{ $fmtSec(video.currentTime)[3] }} /
              {{ $fmtSec(video.duration)[3] }}
            </span>
            <span class="time" v-else>00:00:00 / 00:00:00</span>
          </div>
          <!-- 中间 -->
          <div class="center">
            <img
              class="play-pause"
              :src="
                is_play ? require('./svg/play.svg') : require('./svg/pause.svg')
              "
            />
          </div>
          <!-- 右侧 -->
          <div class="right">
            <!-- 音量 -->
            <div
              class="volume"
              @mouseenter="volumeEnter"
              @mouseleave="volumeLeave"
            >
              <img
                @click="volume"
                :src="
                  is_mute
                    ? require('./svg/volume_disable.svg')
                    : require('./svg/volume.svg')
                "
                alt
              />
              <transition name="fade">
                <div
                  class="volume-box"
                  v-show="show_volume && !is_mute"
                  ref="volumeBox"
                >
                  <div class="box">
                    <span>{{ (progress_volume * 100).toFixed(0) }}</span>

                    <LibRange
                      v-model="progress_volume"
                      class="LibRange-volume"
                      :size="15"
                      :showNum="false"
                      :step="0.01"
                    />
                  </div>
                </div>
              </transition>
            </div>
            <!-- 控制全屏 -->
            <img
              @click="fullScreen"
              class="full-screen"
              :src="
                is_fill
                  ? require('./svg/full_screen_exit.svg')
                  : require('./svg/full_sreen.svg')
              "
            />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import LibRange from "./childComp/LibRange";
export default {
  name: "LibVideo",
  props: {
    url: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      debounce: null,
      video: null,
      timer: null, //更新播放进度
      allow_drag: false, //解决侦听器自动触发滑动条导致视频减慢
      is_fill: false, //控制全屏
      is_mute: true, //是否静音
      is_play: false, //控制播放
      is_ready: false, //视频是否加载完成
      progress_play: 0, //播放进度 0-1
      progress_volume: 1, //音量条
      enter_toolbar: false, //是否悬浮在了工具栏
      show_toolbar: false, //显示工具栏
      show_volume: false, //显示音量条
    };
  },
  components: { LibRange },
  watch: {
    //#####··········拖动播放条时触发··········#####//
    progress_play(v) {
      if (!this.allow_drag) return;
      this.video.currentTime = v * this.video.duration;
    },

    //#####··········拖动音量条时触发··········#####//
    progress_volume(v) {
      this.video.volume = v;
    },
  },
  created() {
    //#####··········如果全屏模式下一秒未动，则隐藏工具栏··········#####//
    this.debounce = this.$debounce(() => {
      //如果悬浮在了工具栏，则不隐藏
      this.show_toolbar = false || this.enter_toolbar;
    }, 500);
  },
  mounted() {
    this.video = this.$refs.video;
    //#####··········判断视频是否加载完毕··········#####//
    let timer = null;
    timer = setInterval(() => {
      if (this.video.readyState) {
        this.is_ready = true;
        clearInterval(timer);
      }
    }, 100);
  },
  methods: {
    //#####··········公共方法··········#####//
    //####········秒数格式化········####//
    $fmtSec(seconds) {
      let hour =
        Math.floor(seconds / 3600) >= 10
          ? Math.floor(seconds / 3600)
          : `0${Math.floor(seconds / 3600)}`;
      seconds -= 3600 * hour;
      let min =
        Math.floor(seconds / 60) >= 10
          ? Math.floor(seconds / 60)
          : `0${Math.floor(seconds / 60)}`;
      seconds -= 60 * min;
      seconds = parseInt(seconds);
      let sec = seconds >= 10 ? seconds : `0${seconds}`;
      return [hour, min, sec, `${hour}:${min}:${sec}`];
    },

    //####········开启全屏显示········####//
    $isFull() {
      const docElm = document.documentElement;
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }
    },

    //####········关闭全屏显示········####//
    $noFull() {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    },

    //####········防抖········####//
    $debounce(fn, delay, mtm = false) {
      if (mtm) {
        let timer;
        return function () {
          let context = this;
          let args = arguments;
          if (timer) clearTimeout(timer);
          let callNow = !timer;
          timer = setTimeout(() => {
            timer = null;
          }, delay);
          if (callNow) fn.apply(context, args);
        };
      } else {
        return function (args) {
          let that = this;
          let _args = args;
          clearTimeout(fn.id);
          fn.id = setTimeout(function () {
            fn.call(that, _args);
          }, delay);
        };
      }
    },

    //#####··········显示工具栏··········#####//
    showToolbar() {
      this.show_toolbar = true;
      if (!this.is_fill || this.enter_toolbar) return;
      this.debounce();
    },
    //#####··········控制视频播放··········#####//
    play() {
      this.video.play();
      this.timer = setInterval(() => {
        if (this.video.ended) {
          this.is_play = false;
          clearInterval(this.timer);
        }
        this.progress_play = parseFloat(
          (this.video.currentTime / this.video.duration).toFixed(4)
        );
      }, 100);
    },
    //####··········暂停视频··········####//
    pause() {
      clearInterval(this.timer);
      this.video.pause();
    },
    //####··········控制播放/暂停··········####//
    playPause(e) {
      if (e.target.tagName !== "VIDEO" && e.target._prevClass !== "play-pause")
        return;
      this.is_play = !this.is_play;
      if (this.is_play) {
        this.play();
      } else {
        this.pause();
      }
    },

    //####··········按住播放条··········####//
    handleLibRange(flag) {
      if (flag === "down") {
        this.pause();
        this.allow_drag = true;
      } else if (flag === "up") {
        this.allow_drag = false;
        if (!this.is_play) return;
        this.play();
      }
    },

    //#####··········控制音量··········#####//
    //####········控制静音········####//
    volume() {
      this.is_mute = !this.is_mute;
      if (this.is_mute) {
        this.video.volume = 0;
      } else {
        this.video.volume = this.progress_volume;
      }
    },
    //####········悬浮在喇叭上········####//
    volumeEnter() {
      this.show_volume = true;
    },
    //####········从喇叭离开········####//
    volumeLeave() {
      this.show_volume = false;
    },
    //####··········控制音量条··········####//
    getPointVolume(e) {
      const el = this.$refs.barVolume;
      this.progress_volume = parseFloat(
        (
          -(e.pageY - el.getBoundingClientRect().bottom) / el.offsetHeight
        ).toFixed(2)
      );
      this.video.volume = this.progress_volume;
    },

    //#####··········控制全屏··········#####//
    fullScreen() {
      this.is_fill = !this.is_fill;
      if (this.is_fill) {
        this.$isFull();
      } else {
        this.$noFull();
      }
    },
  },
};
</script>
<style scoped lang="less">
.LibVideo {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .toolbar {
    position: absolute;
    width: 100%;
    height: 75px;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.25);
    transition: transform 0.5s;
    .bar {
      position: relative;
      top: 0;
      width: 100%;
      height: 3px;
      transition: height 0.25s;
      background-color: #ddd;
      .bar-inside {
        position: absolute;
        width: 0%;
        height: 100%;
        transition: width 0.25s;
        background-color: var(--blue);
      }
    }
    .options {
      .flex {
        flex: 1;
        display: flex;
        align-items: center;
      }
      .icon {
        width: 35px;
        height: 35px;
        cursor: pointer;
      }
      width: 100%;
      height: 100%;
      display: flex;
      align-items: stretch;
      background-color: rgba(0, 0, 0, 0.25);
      .left {
        .flex();
        .time {
          margin-left: 1em;
          color: #fff;
          font-size: 20px;
        }
      }
      .center {
        .flex();
        .play-pause {
          .icon();
        }
        justify-content: center;
      }
      .right {
        .flex();
        @right: 15px;
        justify-content: flex-end;
        padding-right: @right;
        .volume {
          position: relative;
          .icon();
          margin-right: @right;
          img {
            .icon();
          }
          .volume-box {
            position: absolute;
            top: 0;
            right: 5px;
            transform: translateY(-100%);
            width: 100%;
            height: 175px;
            padding-bottom: 25px;
            .box {
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.75);
              border-radius: 5px;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 15px 20px;
              span {
                color: #fff;
                font-size: 16px;
              }
              .LibRange-volume {
                width: 85px;
                margin-top: 15px;
                transform: translateY(35px) rotate(-90deg);
              }
            }
          }
        }
        .full-screen {
          .icon();
        }
      }
    }
  }
}
/* 收起播放栏 */
.hidden {
  transform: translateY(calc(100% - 3px));
}

/* 全屏播放 */
.fullScreen {
  position: fixed !important;
  inset: 0;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 999;
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
