<template>
  <div class="demo">
    <Statics-UpdateBtn-index
      @update="update"
      :finish="finish"
    />
    <span>{{ text }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      finish: false,
      text: "待更新",
    };
  },
  methods: {
    update() {
      this.text = "更新中";
      setTimeout(() => {
        this.finish = true;
        this.text = "更新成功";
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
