<template>
  <div class="m1pb">
    <element title="设备总览">
      <template v-slot:body>
        <div class="m1pb-T">
          <div
            class="m1pb-T-item"
            v-for="(item, index) in Tdata"
            :key="index"
            :class="topIndex === index ? 'm1pb-T-active' : ''"
          >
            <div class="m1pb-T-item-top">
              <div class="m1pb-T-item-top-img">
                <img
                  class="m1pb-T-item-top-img-icon"
                  :src="getIcon(item.icon)"
                  alt=""
                />
                <img
                  class="m1pb-T-item-top-img-base"
                  src="@/assets/imgs/m1/BG2.png"
                  alt=""
                />
              </div>
              <div class="m1pb-T-item-top-text">
                {{ item.label }}
              </div>
            </div>
            <div class="m1pb-T-item-bottom">
              <div class="m1pb-T-item-bottom-item">
                <div class="m1pb-T-item-bottom-item-title">在线设备</div>
                <div class="m1pb-T-item-bottom-item-value">
                  {{ item.online }}
                </div>
              </div>
              <div class="m1pb-T-item-bottom-item">
                <div class="m1pb-T-item-bottom-item-title">离线设备</div>
                <div class="m1pb-T-item-bottom-item-value">
                  {{ item.offline }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m1pb-B">
          <div class="m1pb-B-title">
            <img src="@/assets/imgs/m1/ICON4.png" alt="" />
            <span>DJL Docki3</span>
            <img src="@/assets/imgs/m1/ICON5.png" alt="" />
          </div>
          <div class="m1pb-B-center">
            <div
              class="m1pb-B-center-item"
              v-for="(item, index) in devices"
              :key="index"
            >
              <div class="m1pb-B-center-item-L">
                <img :src="getIcon(item.imgUrl)" alt="" />
                <span>{{ item.devicesName }}</span>
              </div>
              <div class="m1pb-B-center-item-R">
                <template v-if="item.task">
                  <div class="m1pb-B-center-item-R-I1">
                    <div class="m1pb-B-center-item-R-I1-btn">任务空间</div>
                    <div>任务查看>></div>
                  </div>
                </template>
                <div class="m1pb-B-center-item-R-I2">
                  <div
                    :class="
                      item.state1
                        ? 'm1pb-B-center-item-R-I2-active'
                        : 'm1pb-B-center-item-R-I2-cancel'
                    "
                  >
                    {{ item.state1 ? "空闲中" : "未连接" }}
                  </div>
                  <div>{{ item.state2 ? "当前正常" : "" }}</div>
                </div>
                <div class="m1pb-B-center-item-R-I3">
                  <div
                    v-for="(e, i) in item.data"
                    :key="i"
                    class="m1pb-B-center-item-R-I3-item"
                  >
                    <div>{{ e.label }}</div>
                    <div class="m1pb-B-center-item-R-I3-item-value">
                      <span>{{ e.value }}</span>
                      <template v-if="e.icon">
                        <img :src="getIcon(e.icon)" alt="" />
                      </template>
                    </div>
                  </div>
                </div>
                <div class="m1pb-B-center-item-R-I4">
                  <div v-for="(e, i) in item.btn" :key="i">
                    <span>{{ e.label }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </element>
  </div>
</template>
<script lang="ts" setup>
import element from "@/components/M1/element.vue";
const iconModules = import.meta.glob("@/assets/imgs/m1/*.png", { eager: true });
const getIcon = (icon) => {
  const path = `/src/assets/imgs/m1/${icon}.png`;
  return iconModules[path]?.default;
};

const topIndex = 0;
const Tdata = [
  {
    icon: "ICON2",
    label: "机场",
    online: 0,
    offline: 1,
  },
  {
    icon: "ICON3",
    label: "无人机",
    online: 0,
    offline: 0,
  },
];

const devices = [
  {
    imgUrl: "IMG3",
    devicesName: "Dock3",
    task: true,
    state1: true,
    state2: true,
    data: [
      {
        label: "风速",
        value: "2m/s",
      },
      {
        label: "降雨量",
        value: "无雨",
      },
      {
        label: "温度",
        value: "24.9℃",
      },
      {
        label: "网速",
        value: "3KB/s",
      },
    ],
    btn: [
      {
        key: 0,
        label: "定位",
      },
      {
        key: 1,
        label: "详情",
      },
      {
        key: 2,
        label: "远程控制",
      },
    ],
  },
  {
    imgUrl: "IMG4",
    devicesName: "M4TD",
    task: false,
    state1: false,
    state2: true,
    data: [
      {
        label: "电池电量",
        value: "94%",
        icon: "ICON6",
      },
      {
        label: "图传信号",
        value: "4G",
        icon: "ICON7",
      },
      {
        label: "搜星质量",
        value: "RTK",
        icon: "ICON8",
      },
      {
        label: "存储容量",
        value: "0KB",
      },
    ],
    btn: [
      {
        key: 0,
        label: "定位",
      },
      {
        key: 1,
        label: "详情",
      },
      {
        key: 2,
        label: "远程控制",
      },
    ],
  },
];
</script>
<style lang="scss" scoped>
.m1pb {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-T {
    display: flex;
    gap: 9px;
    padding: 0 5px;
    margin-top: 16px;

    &-item {
      width: 197px;
      height: 123px;
      padding: 22px 15px 12.8px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: linear-gradient(
        0deg,
        rgba(71, 164, 235, 0.2) 0%,
        rgba(75, 135, 181, 0) 100%
      );

      box-sizing: border-box;
      border: 1px solid;
      border-image: linear-gradient(
          0deg,
          #79c1ff 0%,
          rgba(94, 181, 255, 0) 100%
        )
        1;

      &-top {
        display: flex;
        gap: 18px;
        align-items: center;

        &-img {
          display: flex;
          flex-direction: column;
          align-items: center;

          &-icon {
            width: 32px;
            height: 27px;
            position: relative;
            z-index: 1;
          }

          &-base {
            width: 43px;
            height: 10px;
            transform: translateY(-4px);
          }
        }

        &-text {
          color: #fff;
        }
      }

      &-bottom {
        display: flex;
        gap: 15px;

        &-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
          align-items: center;

          &-title {
            font-size: 16px;
            color: #81d6fd;
          }

          &-value {
            font-family: OPPOSans;
            font-weight: 900;
            font-size: 22px;
            color: #fdf0a1;
          }
        }
      }
    }

    &-active {
      background: linear-gradient(
        0deg,
        rgba(71, 164, 235, 0.6) 0%,
        rgba(75, 135, 181, 0) 100%
      );

      box-sizing: border-box;
      border: 1px solid;
      border-image: linear-gradient(
          0deg,
          #79c1ff 0%,
          rgba(94, 181, 255, 0) 100%
        )
        1;
    }
  }

  &-B {
    margin-top: 15px;

    &-title {
      width: 402px;
      height: 29px;
      background: linear-gradient(
        90deg,
        rgba(71, 164, 235, 0) 0%,
        rgba(71, 164, 235, 0.6) 54%,
        rgba(75, 135, 181, 0) 100%
      );
      display: flex;
      justify-content: space-between;
      align-items: center;

      img {
        width: 39px;
        height: 42px;
      }

      span {
        color: #ffffff;
        font-size: 18px;
      }
    }

    &-center {
      color: #ffffff;

      &-item:nth-child(2) {
        position: relative;

        &::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          left: 0px;
          top: 0px;
          background: linear-gradient(
            90deg,
            rgba(216, 216, 216, 0) 0%,
            rgba(216, 216, 216, 1) 50%,
            rgba(216, 216, 216, 0) 100%
          );
        }
      }

      &-item {
        display: flex;
        padding: 16px 0;

        &-L {
          width: 111px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 9px;
        }

        &-R {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;

          &-I1 {
            display: flex;
            justify-content: space-between;
            color: #81d6fd;
            align-items: center;

            &-btn {
              width: 80px;
              height: 22px;
              border: 1px solid #79c1ff;
              background: linear-gradient(
                0deg,
                rgba(71, 164, 235, 0.4) 0%,
                rgba(75, 135, 181, 0) 100%
              );
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          &-I2 {
            display: flex;
            align-items: center;
            gap: 14px;
            font-size: 14px;
            color: #fff;

            div {
              width: 80px;
              height: 22px;
              background: linear-gradient(
                0deg,
                rgba(71, 164, 235, 0.4) 0%,
                rgba(75, 135, 181, 0) 100%
              );
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            }
            &-active {
              border: 1px solid;
              border-image: linear-gradient(
                  90deg,
                  #79c1ff 0%,
                  rgba(94, 181, 255, 0) 100%
                )
                1;
              &::after {
                content: "";
                width: 7px;
                height: 7px;
                border-radius: 45px;
                background: #74f4fb;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 6px;
              }
            }
            &-cancel {
              border: 1px solid;
              border-image: linear-gradient(
                  90deg,
                  #fa5858 0%,
                  rgba(94, 181, 255, 0) 100%
                )
                1;

              background: linear-gradient(
                0deg,
                rgba(250, 88, 88, 0.4) 0%,
                rgba(75, 135, 181, 0) 100%
              ) !important;

              &::after {
                content: "";
                width: 7px;
                height: 7px;
                border-radius: 45px;
                background: #fa5858;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 6px;
              }
            }
          }

          &-I3 {
            display: flex;
            justify-content: space-between;

            &-item {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              gap: 6px;
              font-size: 14px;
              color: #ffffff;

              &-value {
                font-size: 16px;
                color: #fdf0a1;
                width: 100%;
                display: flex;
                justify-content: flex-start;
                gap: 4px;
                align-items: center;
                font-family: OPPOSans;
                font-weight: 900;
              }
            }
          }

          &-I4 {
            display: flex;
            justify-content: space-between;
            align-items: center;

            div {
              width: 80px;
              height: 22px;
              background: linear-gradient(
                0deg,
                rgba(71, 164, 235, 0.8) 0%,
                rgba(75, 135, 181, 0) 100%
              );
              box-sizing: border-box;
              border: 1px solid #79c1ff;
              display: flex;
              justify-content: center;
              align-items: center;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
