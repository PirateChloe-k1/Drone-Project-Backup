<template>
  <div class="m2pd">
    <div class="m2pd-data">
      <div class="m2pd-data-center">
        <div class="m2pd-data-center-item">
          <span class="m2pd-data-center-item-title">任务剩余距离：</span
          ><span class="m2pd-data-center-item-value">{{ data.distance }}m</span>
        </div>
        <div class="m2pd-data-center-item">
          <span class="m2pd-data-center-item-title">任务剩余时间：</span
          ><span class="m2pd-data-center-item-value">{{ data.hours }}s</span>
        </div>
      </div>
      <div class="m2pd-data-btn">退出指点飞行</div>
    </div>
    <div class="m2pd-menu">
      <div class="m2pd-menu-item" v-for="(item, index) in menu" :key="index">
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const data = {
  distance: "24.28",
  hours: "7",
};
const menu = [
  {
    label: "恢复航线",
  },
  {
    label: "返航",
  },
  {
    label: "急停",
  },
];
</script>

<style lang="scss" scoped>
.m2pd {
  width: 337px;
  height: 140px;
  border-radius: 5px;
  background: url("@/assets/imgs/m2/BG1.png");
  display: flex;
  gap: 14px;
  padding: 18px 16px;
  font-family: SOURCEHANSANSCN;

  &-data {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-center {
      color: #fff;
      display: flex;
      flex-direction: column;
      gap: 16px;

      &-item {
        display: flex;
        gap: 20px;
        align-items: baseline;

        &-title {
          font-size: 14px;
        }

        &-value {
          font-size: 16px;
          color: #fdf0a1;
          font-weight: 900;
          font-family: OPPOSans;
        }
      }
    }

    &-btn {
      background: linear-gradient(
        0deg,
        rgba(71, 164, 235, 0.8) 0%,
        rgba(75, 135, 181, 0) 100%
      );
      box-sizing: border-box;
      border: 1px solid #79c1ff;
      color: #fff;
      width: 189px;
      font-size: 14px;
      text-align: center;
      padding: 6px 0;
    }
  }

  &-menu {
    display: flex;
    flex-direction: column;
    gap: 9px;

    &-item {
      width: 103px;
      height: 30px;
      background: linear-gradient(
        0deg,
        rgba(71, 164, 235, 0.4) 0%,
        rgba(75, 135, 181, 0) 100%
      );
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>
