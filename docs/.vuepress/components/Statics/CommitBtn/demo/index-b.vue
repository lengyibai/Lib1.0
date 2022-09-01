<template>
  <div class="demo">
    <Statics-CommitBtn-index
      style="border: 0.75vw solid #000"
      @commit="commit"
      :finish="finish"
      size="15vw"
    />
    <span>{{ text }}</span>
  </div>
</template>
<script>
export default {
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
<style scoped>
.demo {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 4vw;
}
</style>
