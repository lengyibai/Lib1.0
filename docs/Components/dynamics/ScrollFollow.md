# ScrollFollow

<ContainerBox title="介绍">
::: slot desc
类似`iPhone`官网滚动动画效果



原理：获取整个滚动盒子的高度，计算出鼠标滚完整个盒子的百分比，通过百分比来控制动画，



作者拓展了一下，可以设置某个区间，当滚动到这个区间，则开始计算这个区间的百分比，由此可控制这个区间的元素动画

:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

很抱歉，这不是一个组件，仅供参考代码进行使用

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">

<div class="demoBox">
<Dynamics-ScrollFollow-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="LibScrollFollow" ref="LibScrollFollow" @scroll="scrollFollowPlaycallback($event.target.scrollTop)">
    <div class="FollowBox" ref="FollowBox">
      <div class="sticky">
        <div class="a" ref="a"></div>
        <div class="b" ref="b"></div>
        <div class="c" ref="c">by lengyibai</div>
        <div class="d" ref="d">Hello World!</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      parent: null,
    };
  },
  mounted() {
    this.scrollFollowPlaycallback(0); //初始化
  },
  methods: {
    scrollFollowPlaycallback(v) {
      //#####··········名··········#####//
      this.scrollFollowPlay(v, this.$refs.d, [
        [
          0,
          500,
          (v) => {
            return {
              opacity: v,
            };
          },
        ],
        [
          500,
          2000,
          (v) => {
            return {
              opacity: 1 - v,
            };
          },
        ],
      ]);
      //#####··········房间··········#####//
      this.scrollFollowPlay(v, this.$refs.a, [
        [
          1000,
          1500,
          (v) => {
            return {
              opacity: v,
              transform: "scale(4)",
              filter: "",
            };
          },
        ],
        [
          1500,
          2000,
          (v) => {
            return {
              transform: `scale(${4 - 2 * v})`,
              filter: "",
              opacity: 1,
            };
          },
        ],
        [
          2000,
          3000,
          (v) => {
            return {
              transform: `scale(${2 - 1 * v})`,
              filter: `blur(${7.5 * v}px)`,
              opacity: 1,
            };
          },
        ],
        [
          3500,
          4000,
          (v) => {
            return {
              transform: `scale(1)`,
              filter: `blur(7.5px)`,
              opacity: 1 - v,
            };
          },
        ],
      ]);
      //#####··········书··········#####//
      this.scrollFollowPlay(v, this.$refs.b, [
        [
          2000,
          3000,
          (v) => {
            return {
              transform: `translateY(${50 - 50 * v}%) scale(${2 - 1 * v})`,
              opacity: v,
            };
          },
        ],
        [
          3500,
          4000,
          (v) => {
            return {
              transform: "",
              opacity: `${1 - v}`,
            };
          },
        ],
      ]);

      //#####··········名··········#####//
      this.scrollFollowPlay(v, this.$refs.c, [
        [
          4000,
          4250,
          (v) => {
            return {
              transform: `translateY(${100 - 100 * v}px)`,
              opacity: v,
            };
          },
        ],
      ]);
    },

    //#####··········功能函数，不可修改··········#####//
    scrollFollowPlay(v, el, phase) {
      phase.forEach((i, index) => {
        /* 如果滚动坐标超过了当前区间，则不执行，节省性能 */
        if (v <= i[1] && v >= i[0]) {
          let p = 0;
          if (v >= i[0]) {
            p = (v - i[0]) / (i[1] - i[0]);
            Object.keys(i[2](p)).forEach((_i) => {
              el.style[_i] = i[2](p)[_i];
            });
          }
        } else if (v > i[1]) {
          Object.keys(i[2](1)).forEach((_i) => {
            el.style[_i] = i[2](1)[_i];
          });
        } else if (i[0] > v && index === 0) {
          Object.keys(i[2](0)).forEach((_i) => {
            el.style[_i] = i[2](0)[_i];
          });
        }
      });
    },
  },
};
</script>
<style scoped lang="less">
* {
  transition: all 0.25s ease-out;
}
*::-webkit-scrollbar {
  //display: none;
}
.LibScrollFollow {
  @height: 50vh;
  width: 100%;
  height: @height;
  overflow: hidden auto;
  .FollowBox {
    width: 100%;
    height: calc(4250px + @height);
    .sticky {
      position: sticky;
      top: 0;
      width: 100%;
      height: @height;
      .a {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url("./img/room.png") no-repeat center center;
        background-size: cover;
      }
      .b {
        position: absolute;
        width: 100%;
        height: 75%;
        bottom: 0;
        background: url("./img/book.png") no-repeat center center;
        background-size: cover;
      }
      .c,
      .d {
        position: absolute;
        font-size: 5vw;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>

```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="methods">
::: slot desc

| 参数                     | 说明                                                         |
| ------------------------ | ------------------------------------------------------------ |
| scrollFollowPlaycallback | 滚动实时触发，传递的是当前父元素实时滚动的坐标               |
| scrollFollowPlay         | 第一参数：传递滚动坐标<br />第二参数：跟随滚动播放动画的元素<br />第三参数：区间，一共有三个数组元素，一二元素为滚动到某个范围触发，产生该区间的滚动进度，第三元素为触发函数，样式写在此处，回调参数为当前区间的`0-1`的滚动进度<br />注：在某个区间内使用的样式，在其他区间也必须使用，避免区间之间的样式污染，详细请看该函数的代码 |

:::
</ContainerBox>

