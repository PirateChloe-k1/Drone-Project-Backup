<template>
  <div class="main">
    <div class="main-header">
      <span>{{ title }}</span>
    </div>
    <slot name="body"></slot>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "XXX",
  },
});
</script>
<style lang="scss" scoped>
.main {
  &-header {
    font-family: ShiShangZhongJianHeiTi;
    // font-size: 26px;
    font-size: 22px;
    color: #ffffff;
    text-shadow: 0px 0px 10px rgba(19, 60, 103, 0.2);
    background: url("@/assets/imgs/m1/BG1.png");
    width: 421px;
    height: 55px;
    display: flex;
    align-items: center;
    padding: 0 52px;

    span {
      transform: translateY(9px);
    }
  }
}
</style>
