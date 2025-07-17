<template>
  <div class="m1pi" v-if="visible">
    <div class="m1pi-title">{{ title }}</div>
    <div class="m1pi-cancel" @click="visible = false"></div>
    <div class="m1pi-content">
      <div class="m1pi-content-item">
        <div class="m1pi-content-item-name">
          <span v-for="(item, index) in '设备名称'" :key="index">{{
            item
          }}</span>
        </div>
        <div class="m1pi-content-item-input"><input /></div>
      </div>
      <div class="m1pi-content-item">
        <div class="m1pi-content-item-name">
          <span v-for="(item, index) in '最大速度'" :key="index">{{
            item
          }}</span>
        </div>
        <div class="m1pi-content-item-input"><input /></div>
      </div>
      <div class="m1pi-content-item">
        <div class="m1pi-content-item-name">
          <span v-for="(item, index) in '纬度'" :key="index">{{ item }}</span>
        </div>
        <div class="m1pi-content-item-input">
          <span>+</span><input /><span>-</span>
        </div>
      </div>
      <div class="m1pi-content-item">
        <div class="m1pi-content-item-name">
          <span v-for="(item, index) in '经度'" :key="index">{{ item }}</span>
        </div>
        <div class="m1pi-content-item-input">
          <span>+</span><input /><span>-</span>
        </div>
      </div>
      <div class="m1pi-content-item">
        <div class="m1pi-content-item-name">
          <span v-for="(item, index) in '高度'" :key="index">{{ item }}</span>
        </div>
        <div class="m1pi-content-item-input">
          <span>+</span><input /><span>-</span>
        </div>
      </div>
      <div class="m1pi-content-item">
        <div class="m1pi-content-item-name">
          <span v-for="(item, index) in '飞行作业高'" :key="index">{{
            item
          }}</span>
        </div>
        <div class="m1pi-content-item-input">
          <span>+</span><input /><span>-</span>
        </div>
      </div>
      <div class="m1pi-content-item">
        <div class="m1pi-content-item-name">
          <span v-for="(item, index) in '返航高'" :key="index">{{ item }}</span>
        </div>
        <div class="m1pi-content-item-input">
          <span>+</span><input /><span>-</span>
        </div>
      </div>
    </div>
    <div class="m1pi-btn">
      <div @click="toPage">开始</div>
      <div @click="visible = false">取消</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const visible = ref(true);
const title = "指点飞行";
const toPage = () => {
  router.push("/m2");
};
</script>

<style lang="scss" scoped>
.m1pi {
  width: 452px;
  height: 385px;
  background: url("@/assets/imgs/m1/BG8.png");
  padding: 0 40px;
  position: relative;

  &-cancel {
    position: absolute;
    width: 25px;
    height: 25px;
    top: 30px;
    right: -12.5px;
    background: url("@/assets/imgs/m1/ICON24.png");
  }

  &-title {
    height: 45px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-family: ShiShangZhongJianHeiTi;
    color: #fff;
  }

  &-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-top: 20px;

    &-item {
      display: flex;
      height: 35px;
      align-items: center;
      gap: 8px;

      &-name {
        width: 90px;
        color: #fff;
        display: flex;
        justify-content: space-between;
      }

      &-input {
        flex: 1;
        display: flex;
        min-width: 0;
        gap: 4px;

        input {
          flex: 1;
          height: 35px;
          min-width: 0;
          background: rgba(39, 136, 242, 0.3);
          box-sizing: border-box;
          border: 1px solid #2b619f;
        }

        span {
          flex-shrink: 0;
          width: 35px;
          height: 35px;
          background: rgba(39, 136, 242, 0.3);
          box-sizing: border-box;
          border: 1px solid #2b619f;
          font-size: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }
      }
    }
  }

  &-btn {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    color: #fff;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 75px;
      height: 30px;
      background: linear-gradient(
        0deg,
        rgba(71, 164, 235, 0.8) 0%,
        rgba(75, 135, 181, 0) 100%
      );
      box-sizing: border-box;
      border: 1px solid #79c1ff;
    }
  }
}
</style>
