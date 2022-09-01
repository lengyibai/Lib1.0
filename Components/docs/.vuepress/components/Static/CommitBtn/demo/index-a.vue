<template>
  <div class="demo">
    <Static-CommitBtn-index @commit="commit" :finish="finish" />
    <span>{{ text }}</span>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      finish: false,
      text: "待提交",
    };
  },
  methods: {
    commit() {
      this.text = "提交中";
      setTimeout(() => {
        this.finish = true;
        this.text = "提交成功";
      }, 2000);
    },
  },
};
</script>
<style scoped lang="less">
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2vw;
}
</style>
