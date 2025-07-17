<template>
  <div class="m2pg">
    <div class="m2pg-RL">
      <div class="m2pg-RL-item m2pg-RL-L">
        <div class="m2pg-RL-item-label">水平速度：</div>
        <div class="m2pg-RL-item-center">
          <span class="m2pg-RL-item-center-value">{{
            RData.horizontalVelocity
          }}</span>
          <span class="m2pg-RL-item-center-unit">m/s</span>
        </div>
      </div>
      <div class="m2pg-RL-item">
        <div class="m2pg-RL-item-label">垂直速度：</div>
        <div class="m2pg-RL-item-center">
          <span class="m2pg-RL-item-center-value">{{
            RData.verticalVelocity
          }}</span>
          <span class="m2pg-RL-item-center-unit">m/s</span>
        </div>
      </div>
      <div class="m2pg-RL-item">
        <div class="m2pg-RL-item-label">风速：</div>
        <div class="m2pg-RL-item-center">
          <span class="m2pg-RL-item-center-value">{{ RData.windSpeed }}</span>
          <span class="m2pg-RL-item-center-unit">m/s</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const RData = {
  horizontalVelocity: "1.26",
  verticalVelocity: "-5",
  windSpeed: "31",
};
</script>

<style lang="scss" scoped>
.m2pg {
  position: relative;
  width: 420px;
  height: 174px;
  border-radius: 5px;
  background: url("@/assets/imgs/m2/BG2.png");
  padding: 14px 21px;
  box-sizing: border-box;
  z-index: 0;
  overflow: hidden;

  &-RL {
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-L {
      text-align: left;
    }

    &-R {
      text-align: right;
    }

    &-item {
      display: flex;
      flex-direction: column;

      &-label {
        font-family: SOURCEHANSANSCN;
        font-size: 14px;
        color: #fff;
      }

      &-center {
        display: flex;
        align-items: baseline;
        color: #fdf0a1;

        &-value {
          font-size: 18px;
          font-weight: 900;
          font-family: OPPOSans;
        }

        &-unit {
          font-weight: 400;
          font-family: OPPOSans;
        }
      }
    }
  }
}
</style>
