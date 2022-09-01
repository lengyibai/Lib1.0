<template>
  <div>
    <Statics-MaskClose-index @close="close" />
  </div>
</template>
<script>
export default {
  methods: {
    close() {
      alert("关闭回调");
    },
  },
};
</script>
