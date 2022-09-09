<template>
  <div class="Test">
    <Statics-TriggerRay-index v-model="play">
      <i
        v-html="icon"
        @click="fn"
        :style="{ color: color }"
        :class="{
          scale: active,
        }"
      ></i>
    </Statics-TriggerRay-index>
  </div>
</template>
<script>
export default {
  name: "Test",
  data() {
    this.icon = `<svg t="1662714312677" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7375"><path d="M512.023 980.34l-426.403-428.521c-53.225-55.389-82.385-127.767-82.385-204.079 0-162.327 132.049-294.377 294.377-294.377 82.362 0 159.046 33.396 214.412 92.486 55.343-59.113 132.026-92.486 214.388-92.486 162.327 0 294.353 132.049 294.353 294.377 0 80.803-31.953 156.02-89.972 211.759l-418.769 420.841z" p-id="7376" fill="currentColor"></path></svg>`;
    return {
      play: false,
      active: false,
      color: "#666",
    };
  },
  methods: {
    fn() {
      if (this.color === "red") {
        this.color = "#666";
        return;
      }
      this.active = true;
      this.play = true;
      setTimeout(() => {
        this.color = "red";
      }, 150);
      setTimeout(() => {
        this.active = false;
      }, 500);
    },
  },
};
</script>
<style scoped lang="less">
.Test {
  position: relative;
  width: 100%;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    display: inline-block;
    width: 5vw;
    height: 5vw;
    z-index: 1;
  }
  .scale {
    animation: scale 0.5s;
  }
}

@keyframes scale {
  35% {
    transform: scale(0);
  }

  75% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
