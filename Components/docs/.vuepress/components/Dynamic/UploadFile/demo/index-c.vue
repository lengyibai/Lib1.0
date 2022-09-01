<template>
  <div class="demo">
    <Dynamic-UploadFile-index
      :files="files"
      id="c"
      readOnly
      v-if="files.length"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      files: [],
    };
  },
  mounted() {
    /* 模拟异步请求图片进行预览 */
    setTimeout(() => {
      this.files = [
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
      ];
    }, 1000);
  },
};
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
