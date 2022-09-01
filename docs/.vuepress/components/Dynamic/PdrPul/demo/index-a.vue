<template>
  <div class="demo">
    <Dynamic-PdrPul-index
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
    </Dynamic-PdrPul-index>
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
