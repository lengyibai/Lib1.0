<template>
  <div class="demo">
    <Static-Echarts-EchartsPie-index :title="pie.title" :data="pie.data" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      pie: {
        title: "某玩家游戏熟练度",
        desc: "不知名玩家",
        data: [
          { name: "英雄联盟", value: 10 + 30 + 50 + 70 + 90 },
          { name: "刺激战场", value: 20 + 40 + 60 + 80 + 100 },
          { name: "我的世界", value: 10 + 40 + 70 + 100 + 130 },
          { name: "王者荣耀", value: 20 + 40 + 60 + 80 + 100 + 120 },
        ],
      },
    };
  },
};
</script>
<style scoped lang="less">
.demo {
  width: 100%;
  height: 100%;
}
</style>
