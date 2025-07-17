<template>
  <div class="m2pi">
    <div class="m2pi-TC m2pi-T">
      <div
        class="m2pi-TC-item"
        v-for="(item, index) in topData"
        :key="index"
        :class="item.active ? 'm2pi-TC-item-active' : ''"
      >
        <img :src="getIcon(item.icon)" />
        <span>{{ item.label }}</span>
      </div>
    </div>

    <div class="m2pi-TC m2pi-C">
      <div
        class="m2pi-TC-item"
        v-for="(item, index) in centerData"
        :key="index"
        :class="item.active ? 'm2pi-TC-item-active' : ''"
      >
        <img :src="getIcon(item.icon)" />
        <span>{{ item.label }}</span>
      </div>
      <div class="m2pi-C-itemA">
        <img
          src="@/assets/imgs/m2/ICON16.png"
          style="width: 22px; height: 19px"
          alt=""
        />
        <img
          src="@/assets/imgs/m2/ICON17.png"
          style="width: 22px; height: 22px"
          alt=""
        />
      </div>
    </div>

    <div class="m2pi-B">
      <div class="m2pi-B-center">
        <div class="m2pi-B-center-move" :style="{ bottom: step + 'px' }">
          <div />
        </div>
        <div
          class="m2pi-B-center-item"
          v-for="(item, index) in list"
          :key="index"
          :style="getItemStyle(index)"
        >
          <div class="m2pi-B-center-item-dot">
            <div />
          </div>
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
const iconModules = import.meta.glob("@/assets/imgs/m2/*.png", { eager: true });

const getIcon = (icon) => {
  const path = `/src/assets/imgs/m2/${icon}.png`;
  return iconModules[path]?.default;
};

const topData = [
  {
    label: "喊话",
    icon: "ICON12",
    active: true,
  },
  {
    label: "爆闪",
    icon: "ICON13",
    active: false,
  },
];

const centerData = [
  {
    label: "变焦",
    icon: "ICON14",
    active: false,
  },
  {
    label: "红外",
    icon: "ICON15",
    active: false,
  },
];

const list = [
  {
    label: "200m",
  },
  {
    label: "30m",
  },
  {
    label: "10m",
  },
  {
    label: "5m",
  },
  {
    label: "2m",
  },
];

const step = 12;

const gapList = [30, 24, 18, 12];

const getItemStyle = (index) => {
  return {
    marginTop: `${gapList[index]}px`,
  };
};
</script>

<style lang="scss" scoped>
.m2pi {
  font-family: SOURCEHANSANSCN;

  &-T {
    gap: 14px;
  }

  &-C {
    margin-top: 111px;
    gap: 9px;

    &-itemA {
      width: 54px;
      height: 67px;
      background: url("@/assets/imgs/m2/BG10.png");
      display: flex;
      flex-direction: column;
      gap: 7.75px;
      align-items: center;
      justify-content: center;
    }
  }

  &-TC {
    display: flex;
    flex-direction: column;

    &-item {
      width: 54px;
      height: 53px;
      background: url("@/assets/imgs/m2/BG9.png");
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 6px;

      img {
        width: 15px;
        height: 20px;
      }

      span {
        background: linear-gradient(180deg, #ffffff 40%, #5cbafb 99%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        font-size: 14px;
      }
    }

    &-item-active {
      width: 54px;
      height: 53px;
      background: url("@/assets/imgs/m2/BG8.png");
    }
  }

  &-B {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 13px;
    background: url("@/assets/imgs/m2/BG5.png");
    width: 54px;
    padding: 16px 9px;
    height: 240px;
    margin-top: 9px;

    &-center {
      height: 238px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transform: translateX(1px);
      padding-left: 9px;
      border-left: 2px dashed rgba(216, 216, 216, 0.6);
      position: relative;

      &-move {
        width: 13px;
        height: 13px;
        background: url("@/assets/imgs/m2/BG7.png");
        position: absolute;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        left: -7.5px;

        div {
          width: 7px;
          height: 7px;
          background: #bce3ff;
          border-radius: 45px;
        }
      }

      &-item {
        font-size: 10px;
        display: flex;
        align-items: center;
        color: #fff;
        position: relative;

        &:nth-child(2) {
          margin-top: 0 !important;
        }

        &-dot {
          width: 9px;
          height: 9px;
          background: url("@/assets/imgs/m2/BG6.png");
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          z-index: 1;
          left: -14.5px;

          div {
            width: 5px;
            height: 5px;
            background: #62b1e9;
            border-radius: 45px;
          }
        }

        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>
