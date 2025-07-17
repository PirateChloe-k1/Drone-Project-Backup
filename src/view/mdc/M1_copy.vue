<template>
  <div class="map" id="cesiumContainer"></div>
  <div class="m1">
    <M1PA class="M1PA" />
    <div class="m1-L">
      <M1PB class="M1PB" />
      <M1PC class="M1PC" />
    </div>
    <M1PD class="M1PD" />
    <div class="m1-R">
      <M1PE class="M1PE" />
      <M1PF class="M1PF" />
      <M1PG class="M1PG" />
      <M1PH class="M1PH" />
    </div>
    <M1PI class="M1PI" />
  </div>
</template>
<script lang="ts" setup>
import M1PA from "@/view/ptc/M1/M1PA_copy.vue";
import M1PB from "@/view/ptc/M1/M1PB_copy.vue";
import M1PC from "@/view/ptc/M1/M1PC.vue";
import M1PD from "@/view/ptc/M1/M1PD.vue";
import M1PE from "@/view/ptc/M1/M1PE.vue";
import M1PF from "@/view/ptc/M1/M1PF.vue";
import M1PG from "@/view/ptc/M1/M1PG.vue";
import M1PH from "@/view/ptc/M1/M1PH.vue";
import M1PI from "@/view/ptc/M1/M1PI.vue";
import { nextTick } from "vue";
import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

const showPip = ref(false);
const pipPosition = reactive({ x: 20, y: 20 });
const isDragging = ref(true);
const dragOffset = reactive({ x: 0, y: 0 });

import { ref, reactive, computed, onMounted, onUnmounted } from "vue";

const startDrag = (e) => {
  isDragging.value = true;
  if (e.type === "mousedown") {
    dragOffset.x = e.clientX - pipPosition.x;
    dragOffset.y = e.clientY - pipPosition.y;
  } else if (e.type === "touchstart") {
    dragOffset.x = e.touches[0].clientX - pipPosition.x;
    dragOffset.y = e.touches[0].clientY - pipPosition.y;
  }
};

const movePip = (e) => {
  if (!isDragging.value) return;
  e.preventDefault();

  if (e.type === "mousemove") {
    pipPosition.x = e.clientX - dragOffset.x;
    pipPosition.y = e.clientY - dragOffset.y;
  } else if (e.type === "touchmove") {
    pipPosition.x = e.touches[0].clientX - dragOffset.x;
    pipPosition.y = e.touches[0].clientY - dragOffset.y;
  }
};

const stopDrag = () => {
  isDragging.value = false;
};

const pipStyle = computed(() => {
  return `left: ${pipPosition.x}px; top: ${pipPosition.y}px;`;
});

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
    creditContainer: document.createElement("dic"), //去掉版权信息
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
  showPip.value = !showPip.value;
};
</script>
<style lang="scss" scoped>
.map {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
}
.m1 {
  box-shadow: inset 0 0 400px #081c33;
  width: 100vw;
  height: 100vh;
  font-family: SOURCEHANSANSCN;
  // background-color: red;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  .M1PA {
    padding: 21px 19px 0;
  }
  .M1PD {
    position: absolute;
    top: 78px;
    left: 447px;
  }

  .M1PI {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &-L {
    position: absolute;
    top: 54px;
    left: 21px;
  }
  &-R {
    position: absolute;
    top: 54px;
    right: 21px;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
}
</style>
