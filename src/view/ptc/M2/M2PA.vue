<template>
  <div class="m2pa">
    <div class="m2pa-L">
      <span>{{ topInfo.lon }}</span>
      <span>纬度:{{ topInfo.lat }}</span>
      <span>高度:{{ topInfo.height }}</span>
      <span>水平速度:{{ topInfo.horizontalVelocity }}</span>
      <span>垂直速度:{{ topInfo.verticalVelocity }}</span>
      <span>风速:{{ topInfo.windSpeed }}</span>
    </div>
    <div class="m2pa-R">
      <div class="m2pa-R-item">
        <span>{{ topData.sign }}</span>
        <img
          src="@/assets/imgs/m2/ICON18.png"
          style="width: 14px; height: 11px"
          alt=""
        />
      </div>
      <div class="m2pa-R-item">
        <span>RTK</span>
        <img
          src="@/assets/imgs/m2/ICON19.png"
          style="width: 16px; height: 10px"
          alt=""
        />
        <span>{{ topData.location }}</span>
      </div>
      <div class="m2pa-R-item">
        <img
          src="@/assets/imgs/m2/ICON20.png"
          style="width: 13px; height: 8px"
          alt=""
        />
        <span>{{ topData.battery }}%</span>
      </div>
      <img src="@/assets/imgs/m2/IMG7.png" alt="" class="m2pa-R-header" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const topInfo = {
  lon: "106.4614",
  lat: "29.7788",
  height: "357.71m",
  horizontalVelocity: "1.26m/s",
  verticalVelocity: "5m/s",
  windSpeed: "31m/s",
};
const topData = {
  sign: "4G",
  location: "39",
  battery: "92",
};
</script>

<style lang="scss" scoped>
.m2pa {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #fff;

  &-L {
    display: flex;
    // gap: 4px;
    align-items: center;
    font-family: SOURCEHANSANSCN;
  }

  &-R {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 50px;
    font-family: OPPOSans;
    font-weight: 900;

    &-item {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    &-header {
      width: 34px;
      height: 34px;
      margin-left: 18px;
    }
  }
}
</style>
