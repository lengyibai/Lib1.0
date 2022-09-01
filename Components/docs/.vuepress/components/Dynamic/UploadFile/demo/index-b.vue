<template>
  <div class="demo">
    <Dynamic-UploadFile-index
      id="b"
      url="https://jsonplaceholder.typicode.com/posts/"
      :multiple="false"
      :size="1.25"
      :suffix="['png', 'jpg']"
      :files="files"
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
};
</script>
<style scoped>
.demo {
  width: 100%;
}
</style>
