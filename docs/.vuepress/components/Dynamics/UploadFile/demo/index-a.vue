<template>
  <div class="demo">
    <Dynamics-UploadFile-index
      :files="files"
      @cancel="cancel"
      @del="del"
      @fail="fail"
      @progress="progress"
      @success="success"
      id="a"
      url="https://jsonplaceholder.typicode.com/posts/"
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
    };
  },
  methods: {
    success(a) {
      console.warn("上传成功：", a);
    },
    del(a) {
      console.warn("删除文件：", a);
    },
    cancel(a) {
      console.warn("取消上传");
    },
    fail(a) {
      console.error("上传失败");
    },
    progress(a) {
      console.warn("上传进度：", a);
    },
  },
};
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
