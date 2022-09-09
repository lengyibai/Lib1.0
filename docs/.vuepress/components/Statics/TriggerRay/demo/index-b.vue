<template>
  <div class="Test">
    <Statics-TriggerRay-index v-model="play" color="#3498db">
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
    this.icon = `<svg t="1662721480621" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1415"><path d="M64 483.04V872c0 37.216 30.144 67.36 67.36 67.36H192V416.32l-60.64-0.64A67.36 67.36 0 0 0 64 483.04zM857.28 344.992l-267.808 1.696c12.576-44.256 18.944-83.584 18.944-118.208 0-78.56-68.832-155.488-137.568-145.504-60.608 8.8-67.264 61.184-67.264 126.816v59.264c0 76.064-63.84 140.864-137.856 148L256 416.96v522.4h527.552a102.72 102.72 0 0 0 100.928-83.584l73.728-388.96a102.72 102.72 0 0 0-100.928-121.824z" p-id="1416" fill="currentColor"></path></svg>`;
    return {
      play: false,
      active: false,
      color: "#666",
    };
  },
  methods: {
    fn() {
      if (this.color === "#3498db") {
        this.color = "#666";
        return;
      }
      this.active = true;
      this.play = true;
      setTimeout(() => {
        this.color = "#3498db";
      }, 150);
      setTimeout(() => {
        this.active = false;
      }, 1000);
    },
  },
};
</script>
<style scoped lang="less">
.Test {
  position: relative;
  width: 100%;
  height: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    display: inline-block;
    width: 10vw;
    height: 10vw;
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
