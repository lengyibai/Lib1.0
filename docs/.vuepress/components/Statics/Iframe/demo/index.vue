<template>
  <div class="demo">
    <button class="btn" @click="Switch">{{ show ? "关闭" : "打开" }}</button>
    <Statics-Iframe-index
      class="LibIframe"
      link="http://lengyibai.gitee.io/vue-function-library/dist/15/index.html"
      :show="show"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    Switch() {
      this.show = !this.show;
    },
  },
};
</script>
<style scoped>
.demo {
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.LibIframe {
  width: 100%;
  height: 100%;
}
</style>
