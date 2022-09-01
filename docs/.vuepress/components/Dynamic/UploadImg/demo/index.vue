<template>
  <Dynamic-UploadImg-index url="/upload" v-model="img_url" />
</template>
<script>
export default {
  data() {
    return {
      img_url: "http://lengyibai.gitee.io/img-bed/img/lyb.png",
    };
  },
  watch: {
    img_url(v) {
      console.log(v);
    },
  },
};
</script>
