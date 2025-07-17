<template>
  <div class="m2pg">
    <div class="m2pg-RL">
      <div class="m2pg-RL-item m2pg-RL-L">
        <div class="m2pg-RL-item-label">水平速度</div>
        <div class="m2pg-RL-item-center">
          <span class="m2pg-RL-item-center-value">{{
            RData.horizontalVelocity
          }}</span>
          <span class="m2pg-RL-item-center-unit">m/s</span>
        </div>
      </div>
      <div class="m2pg-RL-item m2pg-RL-L">
        <div class="m2pg-RL-item-label">垂直速度</div>
        <div class="m2pg-RL-item-center">
          <span class="m2pg-RL-item-center-value">{{
            RData.verticalVelocity
          }}</span>
          <span class="m2pg-RL-item-center-unit">m/s</span>
        </div>
      </div>
      <div class="m2pg-RL-item m2pg-RL-L">
        <div class="m2pg-RL-item-label">风速</div>
        <div class="m2pg-RL-item-center">
          <span class="m2pg-RL-item-center-value">{{ RData.windSpeed }}</span>
          <span class="m2pg-RL-item-center-unit">m/s</span>
        </div>
      </div>
    </div>
    <div class="m2pg-C">
      <div class="m2pg-C-L">
        <div class="m2pg-C-L-value">{{ CData.value }}°</div>
        <div class="m2pg-C-L-bar">
          <img
            src="@/assets/imgs/m2/IMG3.png"
            class="m2pg-C-L-bar-arrow"
            :style="{ top: 'calc(50% - ' + CData.value + 'px)' }"
          />
        </div>
      </div>
      <div class="m2pg-C-R">
        <div class="m2pg-C-R-value">{{ CData.angle }}°</div>
        <div class="m2pg-C-R-bar">
          <!-- 图片给了一个19.3°的自带旋转 -->
          <div
            class="m2pg-C-R-bar-BG"
            :style="{
              transform: 'rotate(calc(' + CData.angle + ' - 19.3)deg)',
            }"
          ></div>
          <img src="@/assets/imgs/m2/IMG5.png" class="m2pg-C-R-bar-arrow" />
          <img src="@/assets/imgs/m2/IMG1.png" class="m2pg-C-R-bar-location" />
        </div>
      </div>
    </div>
    <div class="m2pg-RL">
      <div class="m2pg-RL-item m2pg-RL-R">
        <div class="m2pg-RL-item-label">海拔高度</div>
        <div class="m2pg-RL-item-center">
          <span class="m2pg-RL-item-center-value">{{
            RData.horizontalVelocity
          }}</span>
          <span class="m2pg-RL-item-center-unit">m</span>
        </div>
      </div>
      <div class="m2pg-RL-item m2pg-RL-R">
        <div class="m2pg-RL-item-label">相对高度</div>
        <div class="m2pg-RL-item-center">
          <span class="m2pg-RL-item-center-value">{{
            RData.verticalVelocity
          }}</span>
          <span class="m2pg-RL-item-center-unit">m</span>
        </div>
      </div>
      <div class="m2pg-RL-item m2pg-RL-R">
        <div class="m2pg-RL-item-label">机场距离</div>
        <div class="m2pg-RL-item-center">
          <span class="m2pg-RL-item-center-value">{{ RData.windSpeed }}</span>
          <span class="m2pg-RL-item-center-unit">m</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const RData = {
  horizontalVelocity: "1.26",
  verticalVelocity: "94.9",
  windSpeed: "149.76",
};
const LData = {
  horizontalVelocity: "357.71",
  verticalVelocity: "-5",
  windSpeed: "31",
};
const CData = {
  value: 0,
  angle: 19.3,
};
</script>

<style lang="scss" scoped>
.m2pg {
  position: relative;
  display: flex;
  justify-content: space-between;
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
      align-items: flex-start;
    }

    &-R {
      text-align: right;
      align-items: flex-end;
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

  &-C {
    display: flex;
    align-items: center;

    &-L {
      display: flex;
      flex-direction: column;
      gap: 4px;
      transform: translateY(10px);

      &-value {
        font-family: OPPOSans;
        font-weight: 500;
        font-size: 12px;
        color: #fdf0a1;
      }

      &-bar {
        background: url("@/assets/imgs/m2/IMG4.png");
        width: 8px;
        height: 93px;
        position: relative;
        z-index: 1;

        &-arrow {
          position: absolute;
          left: -24px;
          width: 32px;
          height: 21px;
          z-index: 2;
          transform: translateY(-50%);
        }
      }
    }

    &-R {
      display: flex;
      flex-direction: column;
      gap: 4px;
      align-items: center;

      &-value {
        font-family: OPPOSans;
        font-weight: 900;
        font-size: 16px;
        color: #fdf0a1;
      }
      &-bar {
        width: 125.71px;
        height: 125.71px;
        position: relative;
        z-index: 1;

        &-BG {
          width: 100%;
          height: 100%;
          background: url("@/assets/imgs/m2/IMG2.png");
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }

        &-arrow {
          position: absolute;
          left: 50%;
          top: 0;
          width: 23px;
          height: 26px;
          z-index: 2;
          transform: translateX(-50%);
        }

        &-location {
          width: 27px;
          height: 27px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>
