<!-- 柱状图 -->
<template>
  <div class="bgcolor-page">
    <div class="title bgcolor-content">分析总数：<span>1314</span></div>
    <div class="barWarp bgcolor-content">
      <p class="barTitle">标题1</p>
      <!-- <echart-bar :option="option1" style="height: 300px" /> -->
    </div>
    <div class="barWarp bgcolor-content">
      <p class="barTitle">标题2</p>
      <!-- <echart-bar :option="option2" style="height: 300px" /> -->
      <echart-bar :option="option1" style="height: 300px"></echart-bar>
      <echart-bar :option="option2" style="height: 300px"></echart-bar>
    </div>
  </div>
</template>

<script>
// import EchartBar from "components/frequency/echartBar.vue";

// import echartBar from "comp/echartBar";

export default {
  mounted() {
    // console.warn("图表分析页");
    // console.warn(this.$http);
  },
  components: {},
  data() {
    return {
      // height: "300px",
      option1: {
        color: [
          "#4460FE",
          "#5470c6",
          "#91cc75",
          "#ee6666",
          "#fac858",
          "#3ba272",
          "#fc8452",
          "#9a60b4",
          "#ea7ccc",
        ],
        title: {
          show: false,
          text: "ECharts 入门示例",
        },
        tooltip: {
          trigger: "axis",
          // axisPointer: {
          //   type: "shadow",
          // },
        },
        legend: {
          data: ["销量"],
        },
        xAxis: {
          type: "category",
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "销量",
            type: "bar",
            label: {
              show: true,
              position: "top",
              color: "#333333",
            },
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
      option2: {
        color: [
          "#FE9617",
          "#91cc75",
          "#fac858",
          "#ee6666",
          "#73c0de",
          "#3ba272",
          "#fc8452",
          "#9a60b4",
          "#ea7ccc",
        ],
        title: {
          show: false,
          text: "世界人口总量",
          subtext: "数据来自网络",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["2020年"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: ["巴西", "印尼", "美国", "印度", "中国", "世界人口(万)"],
        },
        series: [
          {
            name: "2020年",
            type: "bar",
            // label: {
            //   show: true,
            //   position: 'right',
            //   color: '#333333'
            // },
            data: [9, 20, 40, 60, 70, 90],
          },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.bgcolor-page {
  background: #f8f8f8;
}
.bgcolor-content {
  background: #ffffff;
}
.title {
  padding: 15px;
  margin: 0 15px 10px;
  text-align: center;
  span {
    color: red;
  }
}
.barWarp {
  margin: 0 15px 10px;
  padding-top: 10px;
}
.barTitle {
  padding: 10px 0;
  margin: 0;
  text-align: center;
}
</style>
