<template>
  <div class="demo">
    <Statics-DeleteBtn-index @del="del" :finish="finish" />
    <span>{{ text }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      finish: false,
      text: "待删除",
    };
  },
  methods: {
    del() {
      this.text = "删除中";
      setTimeout(() => {
        this.finish = true;
        this.text = "删除成功";
      }, 2000);
    },
  },
};
</script>
<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2vw;
}
</style>
