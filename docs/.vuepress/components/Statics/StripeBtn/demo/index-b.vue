<template>
  <div class="demo">
    <Statics-StripeBtn-index @click="fn" :text="text" :bgColor="bgColor" theme="black" color="black" v-model="active" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: false,
      text: "删除",
      bgColor: "#f56c6c",
    };
  },
  methods: {
    fn() {
      this.text = "loading...";
      this.bgColor = "#67c23a";
      setTimeout(() => {
        this.bgColor = "#409eff";
        this.text = "创建";
        this.active = false;
      }, 2000);
    },
  },
};
</script>
<style scoped>
.demo {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
}
</style>
