# Waterfall

<ContainerBox title="介绍">
::: slot desc
参考网上瀑布流基础代码进行拓展
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibWaterfall.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
此组件必须配合后端，后端需要将图片的尺寸写入图片链接，前端再将图片链接中的宽高提取出来，详细操作见`demo`源码
:::
<div class="demoBox">
<Dynamics-Waterfall-demo-index />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <LibWaterfall
      ref="waterfall"
      :count="count"
      @load-more="loadMore"
    >
      <div
        class="waterfall-box"
        v-for="(item, index) in data"
        :style="{
          width: '100px',
          height: (100 / getQueryString(item.img, 'w')) * getQueryString(item.img, 'h') + 75 + 'px',
          /*
            100：宽度
            getQueryString(item.img, 'w'))：获取图片链接中的w字段，即图片宽度
            getQueryString(item.img, 'h')：获取图片链接中的w字段，即图片高度
            75 ：图片下面的商品名及价格等信息的元素高度
          */
        }"
        :key="index"
      >
        <img
          :src="item.img"
          alt="加载失败"
          :style="{
            height: (100 / getQueryString(item.img, 'w')) * getQueryString(item.img, 'h') + 'px',
          }"
        />
        <div class="box">
          <span class="name">第{{ index + 1 }}个商品</span>
          <div class="nums">
            <div class="price">¥ 9.99</div>
            <div class="sellnum">999+人购买</div>
          </div>
        </div>
      </div>
    </LibWaterfall>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      originData: [
        { img: "https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080", }, { img: "https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080", },
      ],
      count: 0,
    };
  },
  mounted() {
    this.data = [...this.originData];
    this.setCount();
    window.addEventListener("resize", this.setCount.bind(this));
  },
  methods: {
    /* 加载更多 */
    loadMore() {
      setTimeout(() => {
        this.data.push(...this.originData);
        this.loading = false;
        this.$refs.waterfall.updateChilds();
      }, 100);
    },

    /* 获取图片链接中的字段值 */
    getQueryString(url, name) {
      const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = url.split("?")[1].match(reg);
      if (r != null) return decodeURI(r[2]);
      return null;
    },

    /* 根据屏幕宽度显示列数 */
    setCount() {
      const w = document.documentElement.clientWidth;
      if (w > 1560) {
        this.count = 10;
      } else if (w > 1450) {
        this.count = 9;
      } else if (w > 1340) {
        this.count = 8;
      } else if (w > 1240) {
        this.count = 7;
      } else if (w > 1130) {
        this.count = 6;
      } else if (w > 1020) {
        this.count = 5;
      } else if (w > 830) {
        this.count = 4;
      } else if (w > 460) {
        this.count = 3;
      } else if (w > 0) {
        this.count = 2;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.demo {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 75vh;
  overflow: auto;
  overscroll-behavior: contain;
  background-color: #eee;
  .waterfall-box {
    display: flex;
    flex-direction: column;
    position: absolute;
    transition: all 0.75s;
    opacity: 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
    border-radius: 15px;
    overflow: hidden;
    img {
      width: 100%;
      flex: 1;
      background-color: #ccc;
    }
    .box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 75px;
      background-color: #fff;
      padding-left: 10px;
      .name {
        font-size: 15px;
      }
      .nums {
        .price {
          font-size: 14px;
          color: #e67e22;
        }
        .sellnum {
          font-size: 12px;
          color: #ccc;
        }
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

<ContainerBox title="Props">
::: slot desc

| 参数     | 说明   | 类型   | 默认值 |
| -------- | ------ | ------ | ------ |
| count | 列数 | Number | 2     |
| gap | 间隔 | Number | 10 |
| loadHeight | 距离底部多少像素触发加载更多，可实现<br />注：当触发加载更多后会锁定，锁定后无法触发加载更多，需要距离底部`>loadHeight`才会解锁，所以填的上限取决于加载元素后增加的高度，如果增加的高度低于`loadHeight`，那将无法触发加载更多，遇到这种情况时，请减少`loadHeight`的值 | Number | 0 |
| loading | 需要加后缀`.sync`，即`:loading.sync="loading"`，当滚动到最底部（距离底部为0）时为`true`，此时可以显示自己的`loading`组件<br />注：组件只负责给你显示，当加载完毕后，你需要手动设置为`false`进行隐藏 | Boolean | false |

:::
</ContainerBox>

<ContainerBox title="Methods">
::: slot desc

| 参数     | 说明   |
| -------- | ------ |
| updateChilds | 当加载更多且已经将新数据`push`到数组后，手动调用此方法，用于显示新数据，必写 |

:::
</ContainerBox>
