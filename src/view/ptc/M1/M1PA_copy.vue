<template>
  <div class="m1pa">
    <div class="m1pa-L">{{ time }}</div>
    <div class="m1pa-R">
      <div class="m1pa-R-weather">
        <img src="@/assets/imgs/m1/ICON1.png" alt="" />
        <span>{{ data.weather }}</span>
      </div>
      <div class="m1pa-R-temperature">温度{{ data.temperature }}℃</div>
      <div class="m1pa-R-menu">
        <img src="@/assets/imgs/m1/IMG1.png" alt="" />
        <img src="@/assets/imgs/m1/IMG2.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const time = "2025.05.16 15:23:24";
const data = {
  weather: "晴天",
  temperature: "26",
};
</script>
<style lang="scss" scoped>
.m1pa {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-L {
    font-family: ShiShangZhongJianHeiTi;
    color: #fff;
  }

  &-R {
    font-family: SOURCEHANSANSCN;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 16px;

    &-weather {
      display: flex;
      align-items: center;
      gap: 6px;

      img {
        width: 22px;
        height: 18.73px;
      }
    }

    &-menu {
      display: flex;
      align-items: center;
      gap: 17px;
      margin-left: 40px;

      img {
        width: 34px;
        height: 34px;
      }
    }
  }
}
</style>
