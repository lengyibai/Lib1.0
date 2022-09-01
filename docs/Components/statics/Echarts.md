# Echarts

<ContainerBox title="介绍">
::: slot desc
需要`npm i echarts`

对三类图表进行简单封装
:::
</ContainerBox>

<ContainerBox title="下载并引入">
::: slot desc

[下载组件包](https://gitee.com/lengyibai/component-package/raw/master/LibEcharts.zip)

引入参考 [引入组件](/Components/Base/start.html#引入组件)

:::
</ContainerBox>

## 代码演示

<ContainerBox title="折线图">
<div class="demoBox">
<Statics-Echarts-demo-index-a />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div>
    <LibEchartsLine
      :title="line.title"
      :data="line.data"
      :bottomCompany="line.bottomCompany"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      line: {
        title: "某玩家游戏熟练度",
        data: [
          { name: "英雄联盟", time_data: [10, 30, 50, 70, 90] },
          { name: "刺激战场", time_data: [20, 40, 60, 80, 100] },
          { name: "我的世界", time_data: [10, 40, 70, 100, 130] },
          { name: "王者荣耀", time_data: [20, 40, 60, 80, 100, 120] },
        ],
        bottomCompany: ["英雄联盟", "刺激战场", "我的世界", "王者荣耀"],
      },
    };
  },
};
</script>
<style scoped lang="less">
.index {
  width: 100%;
  height: 100%;
}
</style>
````
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="柱状图">
<div class="demoBox">
<Statics-Echarts-demo-index-b />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div>
    <LibEchartsBar
      :title="bar.title"
      :data="bar.data"
      :groups="bar.groups"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      bar: {
        title: "某玩家游戏熟练度",
        data: [
          { name: "英雄联盟", time_data: [10, 30, 50, 70, 90] },
          { name: "刺激战场", time_data: [20, 40, 60, 80, 100] },
          { name: "我的世界", time_data: [10, 40, 70, 100, 130] },
          { name: "王者荣耀", time_data: [20, 40, 60, 80, 100, 120] },
        ],
        groups: ["英雄联盟", "刺激战场", "我的世界", "王者荣耀"],
      },
    };
  },
};
</script>
<style scoped lang="less">
.index {
  width: 100%;
  height: 100%;
}
</style>
````
:::
</ShowCode>
</ContainerBox>

<ContainerBox title="饼状图">
<div class="demoBox">
<Statics-Echarts-demo-index-c />
</div>

<ShowCode>
::: slot codes
```vue
<template>
  <div>
    <LibEchartsPie :title="pie.title" :data="pie.data" />
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
.index {
  width: 100%;
  height: 100%;
}
</style>
````
:::
</ShowCode>
</ContainerBox>
