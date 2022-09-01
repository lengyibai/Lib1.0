<template>
  <div class="LibEchartsBar">
    <div
      ref="chart"
      :style="{ width: width, height: height, margin: margin }"
    ></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "LibEchartsBar",
  props: {
    width: {
      type: String,
      default: "75%",
    },
    height: {
      type: String,
      default: "500px",
    },
    margin: {
      type: String,
      default: "50px 0",
    },
    title: {
      type: String,
      default: "",
    },
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    groups: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = echarts.init(this.$refs.chart, null, { renderer: "svg" });

      //指定图表的配置项和数据
      let option = {
        title: {
          text: this.title,
          top: 0,
          subtextStyle: {
            align: "center",
          },
        },
        //悬浮显示框
        tooltip: {},
        legend: {
          data: this.users,
        },
        xAxis: {
          data: [],
        },
        //左边数据显示
        yAxis: {},
        //显示的数据
        series: [],
      };

      this.$set(
        option,
        "series",
        this.data.map((item) => {
          return {
            name: item.name,
            //柱状显示类型
            type: "bar",
            data: item.time_data,
            emphasis: {
              focus: "series",
            },
          };
        })
      );
      //使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>
<style scoped lang="less">
.LibEchartsBar {
  display: flex;
  justify-content: center;
}
</style>
