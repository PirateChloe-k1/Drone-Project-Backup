<template>
  <div class="m2pa">
    <span>经度：{{ topInfo.lon }}</span>
    <span>纬度：{{ topInfo.lat }}</span>
    <span>高度：{{ topInfo.height }}</span>
    <span>水平速度：{{ topInfo.horizontalVelocity }}</span>
    <span>垂直速度：{{ topInfo.verticalVelocity }}</span>
    <span>风速：{{ topInfo.windSpeed }}</span>
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
</script>

<style lang="scss" scoped>
.m2pa {
  display: flex;
  font-size: 14px;
  gap: 4px;
}
</style>
