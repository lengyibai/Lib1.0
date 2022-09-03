# PdrPulSingle

<ContainerBox title="介绍">
::: slot desc
此页面需要通过手指滑动才能下拉刷新，打开F12，点击左上角有个模拟移动端访问的按钮，然后就可以鼠标按钮并滑动列表
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibPdrPul.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="基础用法">
::: slot desc
初次请下拉刷新

滑动到第三页后会显示暂无更多

关闭网络再下拉刷新提示加载错误和刷新失败

开启网络下拉刷新，再关闭网络上拉加载，提示加载失败，点击可重试
:::
::: tip
在到达顶部向下滑动，整页会跟着滚动，属于正常现象，因为浏览器右边还有一个滚动条，在移动端并不会出现这种情况
:::

<div class="demoBox">
<Dynamics-PdrPul-demo-index-a />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div class="demo">
    <LibPdrPul
      @refreshing="refreshData"
      @loading="addData"
      :status="status"
      ref="scroll"
      fontSize="18px"
      iconSize="24px"
    >
      <div class="list" v-for="(item, index) in data" :key="index" ref="card">
        {{ item.slice(0, 10) }}...
      </div>
    </LibPdrPul>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "demo",
  data() {
    return {
      data: [],
      page: 9999,
      status: "",
    };
  },
  methods: {
    //####········请求封装········####//
    getDataReq(page, type) {
      const _this = this;
      /* 判断是刷新还是加载触发的数据请求 */
      if (type === "refresh") _this.status = ""; //如果是刷新，则重置状态
      /* 请求封装 */
      return new Promise((reslove, reject) => {
        axios
          .get("http://152.136.185.210:7878/api/hy66/home/data", {
            params: {
              page,
              type: "new",
            },
          })
          .then((res) => {
            if (res.data) {
              this.data.push(
                ...res.data.data.list.map((item) => {
                  return item.title;
                })
              );
              //向外传递加载成功
              reslove(true);
            } else {
              //向外传递暂无更多
              reslove(null);
            }
            /* 请求第一页如果为空，则提示空列表 */
            if (this.data.length === 0) {
              this.status = "empty";
            }
          })
          .catch(() => {
            //向外传递请求失败，多为网络或请求验证问题
            reject(false);
          });
      });
    },
    //####········下拉刷新········####//
    refreshData() {
      this.page = 1;
      this.data = [];
      this.getDataReq(1, "refresh")
        .then((res) => {
          this.$refs.scroll.refreshSuccess(res); //刷新成功回调
        })
        .catch((err) => {
          this.status = "error"; //提示请求错误
          this.$refs.scroll.refreshSuccess(err); //刷新失败回调
        });
    },
    //####········上拉加载········####//
    addData() {
      setTimeout(() => {
        let page = this.page;
        this.getDataReq(page, "loading")
          .then((status) => {
            this.$refs.scroll.loadSuccess(status); //上拉加载成功回调
            if (page > 2) {
              this.page = 9999;
            } else {
              this.page++;
            }
          })
          .catch((err) => {
            this.$refs.scroll.loadSuccess(err); //上拉加载失败回调
          });
      }, 250);
    },
  },
};
</script>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
  overflow: hidden;
}

.list {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  font-size: 18px;
}
</style>
```
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="多栏">
::: slot desc
目前只是用于测试，所以使用同一个组件，实际开发每栏的内容都不同，所以需要引入三个不一样的上拉刷新下拉加载组件
:::

<div class="demoBox">
<Dynamics-PdrPul-demo-index-b />
</div>

<ShowCode iskey>
::: slot codes
```vue
<!-- 单选多tab栏 -->
<template>
  <div class="demo-b">
    <div class="tab">
      <div
        class="tab-item"
        :class="{ active: currentIndex == index }"
        v-for="(item, index) in tabName"
        :key="index"
        @click="tabClick(index)"
      >
        {{ item }}
      </div>
      <div
        class="foil"
        :style="{
          left: (currentIndex / tabName.length) * 100 + '%',
          width: 100 / tabName.length + '%',
        }"
      ></div>
    </div>
    <div class="slide" ref="slide">
      <Dynamics-PdrPul-demo-index-a
        class="slide-item"
      ></Dynamics-PdrPul-demo-index-a>
      <Dynamics-PdrPul-demo-index-a
        class="slide-item"
        v-if="cache[1]"
      ></Dynamics-PdrPul-demo-index-a>
      <Dynamics-PdrPul-demo-index-a
        class="slide-item"
        v-if="cache[2]"
      ></Dynamics-PdrPul-demo-index-a>
    </div>
  </div>
</template>
<script>
/* 注意：目前用于只是用于测试，所以使用同一个组件，实际开发每栏的内容都不同，所以需要引入三个不一样的上拉刷新下拉加载组件 */
export default {
  props: {},
  data() {
    return {
      tabName: ["one", "two", "three"],
      currentIndex: 0,
      //tab栏标签页懒加载
      cache: [true, false, false],
    };
  },
  methods: {
    //#####··········tab栏点击··········#####//
    tabClick(index) {
      //tab栏标签页懒加载
      this.cache[index] = true;
      this.currentIndex = index;
      this.$refs.slide.style.transform = `translateX(-${index * 100}%)`;
    },
  },
};
</script>
<style scoped lang="less">
.demo-b {
  position: relative;
  width: 100%;
  overflow: hidden;
  //tab栏整体
  .tab {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #aaa;
    height: 50px;
    //tab栏标签
    .tab-item {
      flex: 1;
      font-size: 25px;
      text-align: center;
      line-height: 50px;
    }
    .foil {
      position: absolute;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      transition: all 0.25s;
      &::before {
        content: "";
        position: absolute;
        width: 25%;
        height: 3px;
        background-color: #000;
        bottom: 5px;
      }
    }
  }
  //滑动位置
  .slide {
    display: flex;
    transition: all 0.25s;
    .slide-item {
      flex-shrink: 0;
    }
  }
}
.active {
  transition: all 0.1s;
  font-size: 30px !important;
  color: #000 !important;
}
</style>
```
:::
</ShowCode>
</ContainerBox>

## API

<ContainerBox title="Props">
::: slot desc
| 参数           | 说明                               | 类型   | 默认值      | 可选值         |
| -------------- | ---------------------------------- | ------ | ----------- | -------------- |
| emptyImg       | 空状态图                           | 未知   | -           | -              |
| errorImg       | 请求错误状态图                     | 未知   | -           | -              |
| status         | 请求状态，决定显示以上哪张图       | String | -           | error          |
| downBoxStop    | 需要下拉多少距离触发刷新，单位`px` | Number | 75          | -              |
| iconSize       | 图标大小                           | String | 35px        | -              |
| fontSize       | 字体大小                           | String | 25px        | -              |
| themeColor     | 主题色                             | String | black       | black \| white |
| downBoxBgColor | 下拉盒子背景色                     | String | transparent | -              |
| upBoxHeight    | 上拉盒子高度                       | String | 75px        | -              |
| upBoxBgColor   | 上拉盒子背景色                     | String | transparent | -              |
:::
</ContainerBox>

<ContainerBox title="Events">
::: slot desc
| 事件名     | 说明         | 回调参数 |
| ---------- | ------------ | -------- |
| loading    | 上拉加载触发 | -        |
| refreshing | 下拉刷新触发 | -        |
:::
</ContainerBox>

<ContainerBox title="Ref">
::: slot desc
通过给组件设置`ref`，来调用组件的`methods`

| 名称           | 说明                       |
| -------------- | -------------------------- |
| refreshSuccess | 传递给组件下拉刷新是否成功 |
| loadSuccess    | 传递给组件上拉加载是否成功 |

:::
</ContainerBox>