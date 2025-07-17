<template>
  <div
    class="r11TitleMay"
    :class="{ bg2: bgStyle || isDetail, active, fullBtn }"
  >
    <div class="title">{{ title }}</div>
    <div class="right">
      <slot></slot>
      <el-icon class="cpin" v-if="isClose" color="#53cae8" @click="handleClose"><CircleClose /></el-icon>
      <div class="detail" v-if="isDetail" @click="detailBtn">详情 >></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "标题",
  },
  isDetail: {
    type: Boolean,
    required: false,
    default: false,
  },
  isClose: {
    type: Boolean,
    required: false,
    default: false,
  },
  bgStyle: {
    type: Boolean,
    required: false,
    default: false,
  },
  fullBtn: {
    type: Boolean,
    required: false,
    default: false,
  },
  active: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const emits = defineEmits(["detailBtn","close"]);
const detailBtn = () => {
  emits("detailBtn");
};
const handleClose = () => {
  emits("close");
};
</script>

<style lang="scss" scoped>
.r11TitleMay {
  width: 100%;
  height: 34px;
  padding: 0 0 0 30px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url("./assets/imgs/title-bg-1.png") no-repeat;
  background-position: center;
  background-size: 100%;
  .bg2 {
    background: url("./assets/imgs/title-bg-2.png") 100% 100% no-repeat;
    background-position: center;
    background-size: 100%;
  }
  .cpin{
    cursor: pointer;
  }
  .title {
    font-weight: 800;
    color: #ffffff;
    padding-left: 5px;
  }
  .right {
    display: flex;
    align-items: center;
  }
  .detail {
    margin-left: 5px;
    padding: 4px;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 14px;
    background: rgba(36, 44, 56, 0.5);
    border: 1px solid #23fbf3;
    box-shadow: 0px 0px 18px 0px rgba(32, 34, 40, 0.03);
    cursor: pointer;
  }

  &.fullBtn .arrow {
    display: none;
  }
}
</style>
