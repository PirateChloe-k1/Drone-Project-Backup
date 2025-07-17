<template>
  <div class="m2ph">
    <div class="m2ph-item" v-for="(item, index) in list" :key="index">
      <img :src="getIcon(item.icon)" alt="" />
      <span>{{ item.label }}</span>
    </div>
    <div class="m2ph-end-item"></div>
  </div>
</template>

<script setup>
const iconModules = import.meta.glob("@/assets/imgs/m2/*.png", { eager: true });

const getIcon = (icon) => {
  const path = `/src/assets/imgs/m2/${icon}.png`;
  return iconModules[path]?.default;
};
const list = [
  {
    label: "人工预警",
    icon: "ICON8",
  },
  {
    label: "指点飞行",
    icon: "ICON9",
  },
  {
    label: "激光打点",
    icon: "ICON10",
  },
  {
    label: "目标环绕",
    icon: "ICON11",
  },
];
</script>

<style lang="scss" scoped>
.m2ph {
  display: flex;
  gap: 7px;

  &-item {
    width: 125px;
    height: 30px;
    background: url("@/assets/imgs/m2/BG4.png");
    font-family: SOURCEHANSANSCN;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #fff;

    img {
      width: 16px;
      height: 16px;
    }
  }

  &-end-item {
    width: 39px;
    height: 42px;
    background: url("@/assets/imgs/m2/IMG6.png");
    // 修剪切图所带的边框
    transform: translate(calc(-10.5px - 2px), -6px);
  }
}
</style>
