<template>
  <div class="m2">
    <!-- 图片背景 - 在切换后显示 -->
    <div 
      v-if="isVideoInPip" 
      class="background-image"
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
    ></div>
    <!-- 视频背景 - 在未切换时显示 -->
    <VideoBackground v-if="!isVideoInPip" :isPip="false" />

    <div class="m2-top">
      <M2PA />
      <M2PB 
        class="m2-top-map" 
        :is-video-in-pip="isVideoInPip"
        :original-bg="'/src/assets/imgs/m2/BG11.png'"
        :m2-bg="'/src/assets/imgs/m2/BG11.png'"
        @toggle-video="toggleVideoPosition"
      />
    </div>
    <div class="m2-bottom">
      <div class="m2-bottom-R">
        <M2PC />
        <!-- <M2PD /> -->
        <M2PE />
      </div>
      <M2PG />
      <M2PH />
    </div>
    <M2PI class="m2-M2PI" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import M2PA from "@/view/ptc/M2/M2PA.vue";
import M2PB from "@/view/ptc/M2/M2PB.vue";
import M2PC from "@/view/ptc/M2/M2PC.vue";
// import M2PD from "@/view/ptc/M2/M2PD.vue";
import M2PE from "@/view/ptc/M2/M2PE.vue";
import M2PG from "@/view/ptc/M2/M2PG.vue";
import M2PH from "@/view/ptc/M2/M2PH.vue";
import M2PI from "@/view/ptc/M2/M2PI.vue";
import VideoBackground from "@/components/M2/video/VideoBackground.vue";
// 定义背景图片URL常量
const backgroundImageUrl = '/src/assets/imgs/m2/BG11.png';
// 默认状态：视频在背景，小窗显示图片
const isVideoInPip = ref(false);

// 切换逻辑（双向切换）
const toggleVideoPosition = () => {
  isVideoInPip.value = !isVideoInPip.value;
};
</script>
<style lang="scss" scoped>
.m2 {
  box-shadow: inset 0 0 160px #081c33;
  width: 100vw;
  height: 100vh;
  position: relative; // 确保定位正确

  &-top {
    padding: 26px 16px 0;
    display: flex;
    flex-direction: column;
    gap: 38px;

    &-map {
      margin: 0 20px;
    }
  }

  &-bottom {
    position: absolute;
    bottom: 15px;
    width: 100%;
    padding: 0 24px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    &-R {
      display: flex;
      gap: 18px;
      align-items: flex-end;
    }
  }

  &-M2PI {
    position: absolute;
    right: 11px;
    top: 68px;
  }

  /* 新增图片背景样式 */
  .background-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    z-index: -1; /* 确保在底层 */
  }
}
</style>
