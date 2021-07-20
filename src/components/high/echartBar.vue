<template>
  <div ref="echartDOM"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "echartBar",
  props: {
    option: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    option: {
      handler(val) {
        this.chart.setOption(val);
      },
      deep: true,
    },
  },
  methods: {
    renderChart() {
      let echartDOM = this.$refs.echartDOM;
      this.chart = echarts.init(echartDOM);
      this.chart.setOption(this.option);
    },
  },
  mounted() {
    this.renderChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
};
</script>

<style lang="less" scoped></style>
