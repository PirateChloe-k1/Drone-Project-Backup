<template>
  <div class="m1pc">
    <element title="机场运行统计">
      <template v-slot:body>
        <div class="m1pc-center">
          <div
            v-for="(item, index) in dataList"
            :key="index"
            class="m1pc-center-item"
          >
            <div class="m1pc-center-item-L">
              <img :src="getIcon(item.icon)" alt="" />
              <span>{{ item.title }}</span>
            </div>
            <div class="m1pc-center-item-line" />
            <div class="m1pc-center-item-R">
              <div
                v-for="(e, i) in item.data"
                :key="i"
                class="m1pc-center-item-R-i"
              >
                <div>
                  {{ e.value }}
                </div>
                <div>
                  {{ e.label }}
                </div>
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
const iconModules = import.meta.glob("@/assets/imgs/m1/*.png", { eager: true });
const getIcon = (icon) => {
  const path = `/src/assets/imgs/m1/${icon}.png`;
  return iconModules[path]?.default;
};
const dataList = [
  {
    icon: "ICON9",
    title: "飞行时长(h)",
    data: [
      {
        label: "本周时长",
        value: "0.3",
      },
      {
        label: "本月时长",
        value: "13.8",
      },
      {
        label: "累计时长",
        value: "16.7",
      },
    ],
  },
  {
    icon: "ICON10",
    title: "飞行架次(次)",
    data: [
      {
        label: "本周时长",
        value: "5",
      },
      {
        label: "本月时长",
        value: "148",
      },
      {
        label: "累计时长",
        value: "177",
      },
    ],
  },
  {
    icon: "ICON11",
    title: "飞行里程(km)",
    data: [
      {
        label: "本周时长",
        value: "1.60",
      },
      {
        label: "本月时长",
        value: "104.69",
      },
      {
        label: "累计时长",
        value: "104.69",
      },
    ],
  },
  {
    icon: "ICON12",
    title: "照片成果(张)",
    data: [
      {
        label: "本周时长",
        value: "1",
      },
      {
        label: "本月时长",
        value: "394",
      },
      {
        label: "累计时长",
        value: "337",
      },
    ],
  },
  {
    icon: "ICON13",
    title: "视频成果(个)",
    data: [
      {
        label: "本周时长",
        value: "0",
      },
      {
        label: "本月时长",
        value: "45",
      },
      {
        label: "累计时长",
        value: "64",
      },
    ],
  },
];
</script>

<style lang="scss" scoped>
.m1pc {
  &-center {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 14px;

    &-item {
      display: flex;
      width: 400px;
      height: 70px;
      box-sizing: border-box;
      border: 1px solid;
      border-image: linear-gradient(
          0deg,
          #79c1ff 0%,
          rgba(94, 181, 255, 0) 100%
        )
        1;
      padding: 8px;
      background: linear-gradient(
        0deg,
        rgba(71, 164, 235, 0.4) 0%,
        rgba(75, 135, 181, 0) 100%
      );

      &-L {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        color: #ffffff;
        font-size: 16px;
        width: 100px;
        border: 1px solid;
        border-image: linear-gradient(
          270deg,
          rgba(216, 216, 216, 0) 0%,
          #d8d8d8 50%,
          rgba(216, 216, 216, 0) 100%
        );
      }

      &-line {
        width: 1px;
        height: 100%;
        background: linear-gradient(
          to bottom,
          rgba(216, 216, 216, 0) 0%,
          rgba(216, 216, 216, 1) 50%,
          rgba(216, 216, 216, 0) 100%
        );
        margin-left: 10px;
        margin-right: 18px;
      }

      &-R {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;

        &-i {
          display: flex;
          flex-direction: column;
          align-items: center;
          //   justify-content: space-between;
          gap: 8px;
          color: #fff;
          font-size: 16px;

          div:nth-child(1) {
            color: #fdf0a1;
            font-family: OPPOSans;
            font-size: 18px;
            font-weight: 900;
          }
        }
      }
    }
  }
}
</style>
