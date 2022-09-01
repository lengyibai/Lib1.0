<template>
  <div class="demo">
    <Dynamics-RichText-index v-model="content" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      content:
        `<p class="ql-align-center"><span style="color: rgb(255, 255, 255);"><img src="http://lengyibai.gitee.io/img-bed/img/lyb.png"></span></p><h1 class="ql-align-center">冷弋白</h1>`,
    };
  },
  watch: {
    content(v) {
      console.log(v);
    },
  },
};
</script>
<style scoped>
.demo {
  width: 100%;
  height: 50vh;
}
</style>
