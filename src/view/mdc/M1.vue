<template>
  <div id="cesiumContainer"></div>

<div class="M1">
<div class="M1-content">
      <M1PA></M1PA>
      <M1PB></M1PB>
    </div>
</div>
</template>
<script lang="ts" setup>

import M1PA from "../ptc/M1/M1PA.vue";
import M1PB from "../ptc/M1/M1PB.vue";

import { nextTick } from "vue"
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";


const showPip = ref(false);
const pipPosition = reactive({ x: 20, y: 20 });
const isDragging = ref(true);
const dragOffset = reactive({ x: 0, y: 0 });

import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'


const startDrag = (e) => {
  isDragging.value = true
  if (e.type === 'mousedown') {
    dragOffset.x = e.clientX - pipPosition.x
    dragOffset.y = e.clientY - pipPosition.y
  } else if (e.type === 'touchstart') {
    dragOffset.x = e.touches[0].clientX - pipPosition.x
    dragOffset.y = e.touches[0].clientY - pipPosition.y
  }
}

const movePip = (e) => {
  if (!isDragging.value) return
  e.preventDefault()
  
  if (e.type === 'mousemove') {
    pipPosition.x = e.clientX - dragOffset.x
    pipPosition.y = e.clientY - dragOffset.y
  } else if (e.type === 'touchmove') {
    pipPosition.x = e.touches[0].clientX - dragOffset.x
    pipPosition.y = e.touches[0].clientY - dragOffset.y
  }
}

const stopDrag = () => {
  isDragging.value = false
}

const pipStyle = computed(() => {
  return `left: ${pipPosition.x}px; top: ${pipPosition.y}px;`
})

async function run() {
  await nextTick();
  const viewer = new Cesium.Viewer("cesiumContainer", {
      terrain: Cesium.Terrain.fromWorldTerrain(),
      baseLayerPicker: false, // 是否显示图层选择器,右上角地图选择按钮
      geocoder: false, // 是否显示geocoder小器件，右上角查询按钮
      sceneModePicker: false, // 是否显示3D/2D选择器 右上角
      navigationHelpButton: false, // 是否显示右上角的帮助按钮
      homeButton: false, // 是否显示Home按钮 右上角
      animation: false, // 是否创建动画小器件，左下角仪表
      timeline: false, // 是否显示时间轴 底部
      fullscreenButton: false, // 是否显示全屏按钮 右下角
      creditContainer:document.createElement("dic") //去掉版权信息
  });
  
  const tileset = await Cesium.Cesium3DTileset.fromUrl(
    "http://192.168.11.42:8067/model/p2310-sgh-school-opg-3dt-v3-1/tileset.json"
  );
   const tileset1 = await Cesium.Cesium3DTileset.fromUrl(
    "http://192.168.11.42:8067/model/p2310-sgh-opg-3dt-v1-3/tileset.json"
  );
  // 加载3D模型
  viewer.scene.primitives.add(tileset);
  viewer.scene.primitives.add(tileset1);
  viewer.zoomTo(tileset1);
}
run();

const togglePip = () => {
  showPip.value = !showPip.value
}

</script>
<style lang="scss" scoped>
.M1 {
  pointer-events: none;
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 102px;
  font-family: PingFang SC;
  /* background: url("@/assets/imgs/background.png") 100% 100%; */
  .M1-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: #fff;
    position: relative;
  }
}
#cesiumContainer {
  position: absolute;
  width: 100%;
  height: 100vh;
}
#pip-view
{
  width: 300px;
  height: 300px;
  color: #802121FF;
  position: absolute;
}

.pip-window {
  position: relative;
  width: 320px;
  height: 240px;
  top:200px;
  background-color: white;
  border-radius: 8px;
  //box-shadow: 0 4px 12px rgb(236, 7, 7);
  overflow: hidden;
  z-index: 1000;
}

.pip-iframe {
  width: 100%;
  height: 100%;
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 24px;
  height: 24px;
  background-color: rgba(0,0,0,0.5);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  font-size: 14px;
}
</style>
