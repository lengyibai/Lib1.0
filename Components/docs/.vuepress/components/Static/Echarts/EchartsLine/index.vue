<template>
  <div class="LibEchartsLine">
    <div
      ref="chart"
      :style="{ width: width, height: height, margin: margin }"
    ></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "LibEchartsLine",
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
    users: {
      type: Array,
      default() {
        return [];
      },
    },
    //底部单位
    bottomCompany: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    this.drawLine();
  },
  destroyed() {},
  methods: {
    drawLine() {
      let myChart = echarts.init(this.$refs.chart, null, { renderer: "svg" });

      //指定图表的配置项和数据
      let option = {
        title: {
          text: this.title,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: this.users,
        },
        grid: {
          left: "5%",
          right: "5%",
          bottom: "5%",
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: this.bottomCompany,
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [],
      };
      this.$set(
        option,
        "series",
        this.data.map((item) => {
          return {
            name: item.name,
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: item.time_data,
          };
        }),
      );
      //使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    },
  },
};
</script>
<style scoped lang="less">
.LibEchartsLine {
  display: flex;
  justify-content: center;
}
</style>
