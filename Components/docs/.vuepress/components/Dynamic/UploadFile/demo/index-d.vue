<template>
  <div class="demo">
    <Dynamic-UploadFile-index
      :files="files"
      id="d"
      url="https://jsonplaceholder.typicode.com/posts/"
      v-if="isShow || files.length"
    />
    <p v-for="(item, index) in files" :key="index">
      {{ item }}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      files: [],
      isShow: false,
    };
  },
  mounted() {
    /* 模拟异步请求图片，isShow 是为了避免无图片导致隐藏，无法添加图片 */
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
      this.isShow = true; //请求成功后赋值
    }, 1000);
  },
};
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
