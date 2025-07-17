<template>
  <div>
    <element title="AI预警统计">
      <template v-slot:body>
        <div ref="chartRef" style="width: 400px; height: 170px"></div>
      </template>
    </element>
  </div>
</template>

<script setup>
import element from "@/components/M1/element.vue";
import { onMounted, ref } from "vue";
import * as echarts from "echarts";

const data = [
  {
    name: "一月",
    value: 80,
  },
  {
    name: "二月",
    value: 87.8,
  },
  {
    name: "三月",
    value: 71,
  },
  {
    name: "四月",
    value: 80,
  },
  {
    name: "五月",
    value: 66,
  },
  {
    name: "六月",
    value: 80,
  },
  {
    name: "七月",
    value: 80,
  },
];

const xAxisData = data.map((item) => item.name);
const seriesData = data.map((item) => item.value);

const chartRef = ref(null);

onMounted(() => {
  const chart = echarts.init(chartRef.value);

  const option = {
    textStyle: {
      color: "#ffffff", // 你想要的颜色，比如白色
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: 30,
      bottom: 0,
      left: 0,
      right: 0,
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: xAxisData,
    },
    yAxis: {
      type: "value",
      name: "单位:次",
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
          color: "#ccc",
          width: 1,
        },
      },
    },

    series: [
      {
        data: seriesData,
        type: "bar",
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: [10, 10, 0, 0],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgba(52, 246, 253, 1)",
              },
              {
                offset: 0.5,
                color: "rgba(52, 246, 253, 0.7)",
              },
              {
                offset: 1,
                color: "rgba(52, 246, 253, 0)",
              },
            ]),
          },
        },
      },
    ],
  };

  chart.setOption(option);
  window.addEventListener("resize", () => {
    chart.resize();
  });
});
</script>
<style lang="scss" scoped></style>
