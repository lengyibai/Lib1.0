<template>
  <div class="demo">
    <h1></h1>
    <!--//%%%%%··········已在 vue.config.js 做了跨域代理，所以为/upload··········%%%%%//-->
    <!-- 多文件上传 -->
    <div class="box flex">
      <Dynamic-UploadFile-index
        :files="multiple.files"
        @finish="MultipleFinish"
        id="a"
        url="https://jsonplaceholder.typicode.com/posts/"
        v-if="multiple.isShow || multiple.files.length"
      />
      <span v-else>暂无图片</span>
      <p v-for="(item, index) in multiple.files" :key="index">
        {{ item }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      multiple: {
        files: [],
        isShow: false,
      },
    };
  },
  mounted() {
    /* 模拟异步请求已有图片进行预览，multiple.isShow 是为了避免无图片的状态。只适用于在编辑的时候使用，如果是普通上传，则不需要做这些操作 */
    setTimeout(() => {
      this.$set(this.multiple, "files", [
        {
          fileName: "图片1",
          src: "http://lengyibai.gitee.io/img-bed/img/lyb.png",
        },
        {
          fileName: "图片2",
          src: "http://lengyibai.gitee.io/img-bed/img/lyb.png",
        },
        {
          fileName: "图片3",
          src: "http://lengyibai.gitee.io/img-bed/img/lyb.png",
        },
      ]);
      this.multiple.isShow = true;
    }, 1000);
  },
  methods: {
    //#####··········上传完成后触发··········#####//
    MultipleFinish(v) {
      console.warn(v);
    },
  },
};
</script>
<style scoped lang="less">
.demo {
  width: 100%;
  flex-direction: column;
  .box {
    flex-direction: column;
    height: fit-content;
    margin: 25px 0;
  }
}
</style>
