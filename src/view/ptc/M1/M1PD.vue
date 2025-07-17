<template>
  <div class="m1pd">
    <div class="m1pd-menu">
      <div
        v-for="(item, index) in menu"
        :key="index"
        class="m1pd-menu-item"
        :class="menuIndex === index ? 'm1pd-menu-item-active' : ''"
      >
        <img :src="getIcon(item.icon)" alt="" />
      </div>
    </div>
    <div class="m1pd-submenu">
      <div v-for="(item, index) in submenu" :key="index">
        <div class="m1pd-submenu-item">
          <img :src="getIcon(item.icon)" alt="" />
          <span>{{ item.label }}</span>
        </div>
        <div
          v-if="index < submenu.length - 1"
          class="m1pd-submenu-divider"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const iconModules = import.meta.glob("@/assets/imgs/m1/*.png", { eager: true });
const getIcon = (icon) => {
  const path = `/src/assets/imgs/m1/${icon}.png`;
  return iconModules[path]?.default;
};
const menuIndex = 0;
const menu = [
  {
    icon: "ICON14",
  },
  {
    icon: "ICON15",
  },
  {
    icon: "ICON16",
  },
  {
    icon: "ICON17",
  },
  {
    icon: "ICON18",
  },
];
const submenu = [
  {
    label: "全景",
    icon: "ICON19",
  },
  {
    label: "限飞行",
    icon: "ICON20",
  },
  {
    label: "机场范围",
    icon: "ICON21",
  },
  {
    label: "地图标绘",
    icon: "ICON22",
  },
  {
    label: "无人机机场",
    icon: "ICON23",
  },
];
</script>

<style lang="scss" scoped>
.m1pd {
  display: flex;
  gap: 13px;

  &-menu {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &-item {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: url("@/assets/imgs/m1/BG4.png");
    }

    &-item-active {
      background: url("@/assets/imgs/m1/BG3.png");
    }
  }

  &-submenu {
    color: #ffffff;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    width: 125px;
    height: 217px;
    padding: 0 9px;
    background: url("@/assets/imgs/m1/BG5.png");
    justify-content: center;

    &-item {
      display: flex;
      align-items: center;

      img {
        width: 16px;
        height: 16px;
      }

      span {
        padding: 12px 0;
        white-space: nowrap;
      }
    }

    &-divider {
      width: 100%;
      height: 1px;
      background: linear-gradient(
        to left,
        rgba(216, 216, 216, 0) 0%,
        rgb(216, 216, 216) 50%,
        rgba(216, 216, 216, 0) 100%
      );
    }
  }
}
</style>
