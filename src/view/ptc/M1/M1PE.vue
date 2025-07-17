<template>
  <div>
    <element title="本年巡检统计">
      <template v-slot:body>
        <div class="chart">
          <div class="chart-pos">
            <!-- 图表 -->
            <div ref="chartRef" class="chart-pos-container"></div>

            <!-- 中间内容 -->
            <div class="chart-pos-center">
              <div class="chart-pos-center-label">
                <span>{{ totalData }}</span>
                <span>次</span>
              </div>
            </div>
            <!-- 外轮廓 -->
            <div class="chart-pos-bg"></div>
          </div>
          <!-- 菜单 -->
          <div class="chart-menu">
            <div
              v-for="(item, index) in dataList"
              :key="index"
              class="chart-menu-item"
            >
              <div class="chart-menu-item-title">
                <div
                  class="chart-menu-item-title-dot"
                  :style="{ background: item.color }"
                ></div>
                <span>{{ item.name }}</span>
              </div>
              <div class="chart-menu-item-value">
                <span>{{ item.value }}次</span>
                <span>{{ item.rate }}%</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </element>
  </div>
</template>

<script setup>
import element from "@/components/M1/element.vue";
import { onMounted, ref, nextTick } from "vue";
import * as echarts from "echarts";

const totalData = 89;
const dataList = [
  { value: 63, name: "车辆识别", color: "#FAC465", rate: "41.1" },
  { value: 26, name: "人员聚集", color: "#5BD774", rate: "22.4" },
];

const total = dataList.reduce((sum, { value }) => sum + value, 0);

let startAngle = 0;

const pieData = dataList.map(({ value, name, color }) => {
  const angleSpan = (value / total) * 2 * Math.PI;
  const midAngle = startAngle + angleSpan / 2; // 扇形中心角

  // 计算渐变起止点
  const dx = Math.cos(midAngle);
  const dy = Math.sin(midAngle);
  const x = 0.5 + dx * 0.5;
  const y = 0.5 + dy * 0.5;
  const x2 = 0.5 - dx * 0.5;
  const y2 = 0.5 - dy * 0.5;

  startAngle += angleSpan; // 更新下一个扇形起始角度

  return {
    value,
    name,
    itemStyle: {
      color: {
        type: "linear",
        x,
        y,
        x2,
        y2,
        colorStops: [
          { offset: 0, color: `${color}ff` }, // 完全不透明
          { offset: 1, color: `${color}00` }, // 完全透明
        ],
      },
    },
  };
});
const chartRef = ref();
// 图表初始化
onMounted(async () => {
  await nextTick();

  const myChart = echarts.init(chartRef.value);

  const option = {
    series: [
      {
        type: "pie",
        radius: ["70%", "90%"],
        avoidLabelOverlap: false,
        label: { show: false },
        data: pieData,
      },
    ],
  };

  myChart.setOption(option);
});
</script>

<style lang="scss" scoped>
.chart {
  position: relative;
  display: flex;
  gap: 57px;
  align-items: center;
  width: 400px;

  &-pos {
    position: relative;

    &-container {
      width: 147px;
      height: 147px;
      position: relative;
      z-index: 1;
    }

    &-center {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 2;
      pointer-events: none;
      background: url("@/assets/imgs/m1/BG6.png");
      width: 84px;
      height: 84px;
      display: flex;
      align-items: center;
      justify-content: center;

      &-label {
        font-size: 16px;
        color: #333;
        font-weight: bold;
        display: flex;
        gap: 2px;
        align-items: flex-end;

        span:nth-child(1) {
          font-size: 24px;
          color: #fdf0a1;
          font-family: OPPOSans;
          font-weight: 900;
        }
        span:nth-child(2) {
          font-size: 16px;
          color: #ffffff;
          font-weight: bold;
        }
      }
    }

    &-bg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: url("@/assets/imgs/m1/BG7.png");
      width: 147px;
      height: 147px;
    }
  }

  &-menu {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-item {
      font-size: 14px;
      color: #333;

      &-title {
        position: relative;
        font-size: 16px;
        color: #ffffff;

        &-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          position: absolute;
          left: -17px;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      &-value {
        font-size: 18px;
        color: #fff;
        font-family: OPPOSans;
        font-weight: 900;
        margin-top: 14px;

        span:nth-child(1) {
          color: #fdf0a1;
          margin-right: 16px;
        }
      }
    }
  }
}
</style>
