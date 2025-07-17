<template>
  <div class="m1ph">
    <element title="任务列表">
      <template v-slot:body>
        <div class="m1ph-content">
          <div
            v-for="(item, index) in data"
            :key="index"
            class="m1ph-content-item"
          >
            <div class="m1ph-content-item-info">
              <div class="m1ph-content-item-info-T">
                <div
                  class="m1ph-content-item-info-T-state"
                  :class="
                    item.state ? '' : 'm1ph-content-item-info-T-state-lose'
                  "
                >
                  {{ item.state ? "已完成" : "失效" }}
                </div>
                <div>{{ item.title }}</div>
              </div>
              <div class="m1ph-content-item-info-B">
                {{ item.time }}
              </div>
            </div>
            <div class="m1ph-content-item-btn">
              <div>任务还原</div>
              <div>地图相册</div>
            </div>
          </div>
        </div>
      </template>
    </element>
  </div>
</template>

<script setup>
import element from "@/components/M1/element.vue";

const data = [
  {
    state: true,
    title: "高速巡检060501",
    time: "2025-06-17 14:22:12",
  },
  {
    state: false,
    title: "高速巡检060501",
    time: "2025-06-17 14:22:12",
  },
  {
    state: true,
    title: "高达062303",
    time: "2025-06-17 14:22:12",
  },
  {
    state: true,
    title: "高速巡检060501",
    time: "2025-06-17 14:22:12",
  },
  {
    state: true,
    title: "高速巡检060501",
    time: "2025-06-17 14:22:12",
  },
];
</script>

<style lang="scss" scoped>
/* 整个滚动条区域 */
::-webkit-scrollbar {
  width: 3px; /* 垂直滚动条宽度 */
  height: 10px; /* 水平滚动条高度 */
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background: rgba(114, 188, 230, 0.31);
  border-radius: 5px;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background: #70A7EB;
  border-radius: 5px;
}

/* 滚动条滑块悬停状态 */
::-webkit-scrollbar-thumb:hover {
  background: #70A7EB;
}
.m1ph {
  &-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 406px;
    margin-top: 14px;
    max-height: 230px;
    overflow: auto;

    &-item {
      width: 400px;
      height: 50px;
      background: linear-gradient(
        90deg,
        rgba(38, 105, 160, 0.6) 6%,
        rgba(28, 65, 100, 0.6) 100%
      );
      display: flex;
      padding: 6px 9px;
      justify-content: space-between;

      &-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &-T {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #fff;
          font-size: 16px;

          &-state {
            font-size: 14px;
            width: 53px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(
              180deg,
              rgba(94, 219, 119, 0.6) 12%,
              rgba(94, 219, 119, 0.372) 62%,
              rgba(94, 219, 119, 0) 99%
            );

            box-sizing: border-box;
            border: 1px solid;
            border-image: linear-gradient(
                0deg,
                #6aec84 0%,
                rgba(250, 88, 88, 0) 100%
              )
              1;
          }

          &-state-lose {
            background: linear-gradient(
              180deg,
              rgba(250, 88, 88, 0.6) 12%,
              rgba(250, 88, 88, 0.3602) 62%,
              rgba(75, 135, 181, 0) 100%
            ) !important;

            box-sizing: border-box;
            border: 1px solid;
            border-image: linear-gradient(
                0deg,
                #fa5858 0%,
                rgba(250, 88, 88, 0) 100%
              )
              1 !important;
          }
        }

        &-B {
          color: #81c7f8;
          font-size: 14px;
        }
      }
      &-btn {
        display: flex;
        align-items: center;
        gap: 6px;
        color: #fff;

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            0deg,
            rgba(71, 164, 235, 0.8) 0%,
            rgba(75, 135, 181, 0) 100%
          );
          box-sizing: border-box;
          border: 1px solid #79c1ff;
          width: 75px;
          height: 22px;
        }
      }
    }
  }
}
</style>
