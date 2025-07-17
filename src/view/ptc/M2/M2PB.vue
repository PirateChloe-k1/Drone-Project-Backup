<template>
  <div class="m2pb">
    <div class="m2pb-btn" @click="navTo">切换</div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();

// 点击切换跳转
const navTo = () => {
  router.push("/m1");
};
</script>

<style lang="scss" scoped>
.m2pb {
  width: 363px;
  height: 277px;
  background-color: red;
  box-sizing: border-box;
  border: 2px solid #61b8fd;
  border-radius: 5px;
  position: relative;

  &-btn {
    width: 53px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    position: absolute;
    top: 9px;
    right: 10px;
    background: linear-gradient(
      to top,
      rgba(71, 164, 235, 0.8) 0%,
      rgba(26, 60, 119, 0.8) 100%
    );
    box-sizing: border-box;
    border: 1px solid #79c1ff;
    border-radius: 2px;
    cursor: pointer;
  }
}
</style>
