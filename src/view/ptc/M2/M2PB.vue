<template>
  <div class="m2pb" :style="{ 'background-image': `url(${isVideoInPip ? m2Bg : originalBg})` }">
    <!-- 视频小窗容器 - 仅在切换后显示视频 -->
    <div v-if="isVideoInPip" class="video-pip-container">
      <VideoBackground :isPip="true" />
    </div>

    <!-- 小窗默认图片 - 仅在未切换时显示 -->
    <div v-else class="default-pic"></div>

    <!-- 切换按钮 - 提高层级避免被遮挡 -->
    <div class="m2pb-btn" @click="toggleVideoPosition">切换</div>
  </div>
</template>

<script lang="ts" setup>
// 接收状态和背景图参数
const props = defineProps<{
  isVideoInPip: boolean;
  originalBg: string; // 小窗默认图片（BG11.png）
  m2Bg: string;       // M2页面背景图
}>();

// 发射切换事件
const emit = defineEmits<{
  (e: 'toggle-video'): void;
}>();

const toggleVideoPosition = () => {
  emit('toggle-video');
};
</script>

<style lang="scss" scoped>
.m2pb {
  width: 363px;
  height: 277px;
  box-sizing: border-box;
  border: 2px solid #61b8fd;
  border-radius: 5px;
  position: relative;
  // background: url("@/assets/imgs/m2/BG11.png");
  background-size: cover; // 确保背景图充满容器

  // 小窗默认图片样式
  .default-pic {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url("@/assets/imgs/m2/BG11.png"); // 强制显示默认图片
  }

  // 视频小窗容器
  .video-pip-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1; // 视频层级低于按钮
  }

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
    background: linear-gradient(to top,
        rgba(71, 164, 235, 0.8) 0%,
        rgba(26, 60, 119, 0.8) 100%);
    box-sizing: border-box;
    border: 1px solid #79c1ff;
    border-radius: 2px;
    cursor: pointer;
    z-index: 10; // 按钮层级最高，不会被遮挡
  }
}
</style>
