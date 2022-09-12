<template>
  <div class="demo">
    <Dynamics-Waterfall-index ref="waterfall" :count="count" @load-more="loadMore">
      <div
        class="waterfall-box"
        v-for="(item, index) in data"
        :style="{
          width: '100px',
          height: (100 / getQueryString(item.img, 'w')) * getQueryString(item.img, 'h') + 75 + 'px',
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
    </Dynamics-Waterfall-index>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      originData: [
        {
          img: "https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080",
        },
        {
          img: "https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080",
        },
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

    /* 获取图片链接中的图片宽高 */
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
