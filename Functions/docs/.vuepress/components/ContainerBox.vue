<template>
  <div class="ContainerBox">
    <div class="title">{{ title }}</div>
    <div class="desc">
      <slot name="desc"></slot>
    </div>
    <div class="code">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped lang="less">
.ContainerBox {
  max-width: 100%;
  background-color: #fff;
  box-shadow: 0 8px 12px #ebedf0;
  border-radius: 20px;
  margin: 24px 0;
  padding: 24px;
  overflow: auto;
  .title {
    margin-bottom: 16px;
    font-weight: 600;
    font-size: 20px;
  }
  .desc {
    color: #34495e;
    font-size: 15px;
    p {
      margin: 0;
    }
  }
  :deep(input[type="text"]) {
    background-color: transparent;
    border: 2px solid #000;
    outline: none;
  }
}
</style>
