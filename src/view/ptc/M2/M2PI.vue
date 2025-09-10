<template>
  <div class="m2pi">
    <div class="m2pi-TC m2pi-T">
      <div class="m2pi-TC-item" v-for="(item, index) in topData" :key="index"
        :class="item.active ? 'm2pi-TC-item-active' : ''">
        <img :src="getIcon(item.icon)" />
        <span>{{ item.label }}</span>
      </div>
    </div>

    <div class="m2pi-TC m2pi-C">
      <div class="m2pi-TC-item" v-for="(item, index) in centerData" :key="index"
        :class="item.active ? 'm2pi-TC-item-active' : ''">
        <img :src="getIcon(item.icon)" />
        <span>{{ item.label }}</span>
      </div>
      <div class="m2pi-C-itemA">
        <img src="@/assets/imgs/m2/ICON16.png" style="width: 22px; height: 19px" alt="" />
        <img src="@/assets/imgs/m2/ICON17.png" style="width: 22px; height: 22px" alt="" />
      </div>
    </div>

    <div class="m2pi-B">
      <div class="m2pi-B-center">
        <div class="m2pi-B-center-move" :style="{ bottom: step + 'px' }" ref="sliderRef" @mousedown="startDrag">
          <div />
        </div>
        <div class="m2pi-B-center-item" v-for="(item, index) in list" :key="index" :style="getItemStyle(index)">
          <div class="m2pi-B-center-item-dot">
            <div />
          </div>
          <span>{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
const iconModules = import.meta.glob("@/assets/imgs/m2/*.png", { eager: true });

const getIcon = (icon) => {
  const path = `/src/assets/imgs/m2/${icon}.png`;
  return iconModules[path]?.default;
};

const topData = [
  {
    label: "喊话",
    icon: "ICON12",
    active: true,
  },
  {
    label: "爆闪",
    icon: "ICON13",
    active: false,
  },
];

const centerData = [
  {
    label: "变焦",
    icon: "ICON14",
    active: false,
  },
  {
    label: "红外",
    icon: "ICON15",
    active: false,
  },
];

const list = [
  {
    label: "200m",
  },
  {
    label: "30m",
  },
  {
    label: "10m",
  },
  {
    label: "5m",
  },
  {
    label: "2m",
  },
];

// 滑块位置 值越大，滑块越靠上；值越小，滑块越靠下
const step = ref(12);

// 滑块元素引用
const sliderRef = ref(null)

// 父容器引用
const containerRef = ref(null)

// 拖拽状态
const isDragging = ref(false)

const gapList = [30, 24, 18, 12];

// 开始拖拽
const startDrag = (e) => {
  // 加上时滑动滑块就不会选中页面中的文本
  e.preventDefault();
  isDragging.value = true;
  // 获取父容器高度(限制滑动范围)
  // ?是为了避免因元素未加载导致的 Cannot read property 'offsetHeight' of null 错误
  const containerHeight = containerRef.value?.offsetHeight || 0;
  // 获取滑块高度
  const sliderHeight = sliderRef.value?.offsetHeight || 13;

  // 鼠标触摸移动实时计算易懂位置
  const handleMove = (e) => {
    // 不是拖拽状态就不处理
    if (!isDragging.value) return;

    // 获取当前触点位置
    const clientY = e.clientY

    // 计算父容器顶部相对于视口的位置
    // getBoundingClientRect()：DOM 元素的方法，返回一个对象，包含元素相对于「浏览器视口」的位置和尺寸信息
    const containerTop = containerRef.value?.getBoundingClientRect().top || 0;
    // 计算滑块在父容器内的垂直位置(从底部算起)
    // - clientY - containerTop：触点距离父容器顶部的垂直距离（从顶部算起）
    // - containerHeight - 父容器高度：父容器高度 - 滑块距离父容器顶部的值 = 滑块距离父容器底部的距离（即滑块的bottom值）
    const relativeY = containerHeight - (clientY - containerTop);
    // 限制范围在[0, containerHeight - sliderHeight]内，确保滑块不会超出容器
    // 父容器高度（238px） - 滑块高度（13px）= 225px（滑块顶部不超出父容器顶部的最大bottom值）
    const maxY = containerHeight - sliderHeight;
    const clampedY = Math.max(0, Math.min(relativeY, maxY));
    // 更新滑块位置(单位px)
    step.value = clampedY;
  }

  // 结束拖拽
  const handleEnd = () => {
    isDragging.value = false;
    // 移除事件监听
    document.removeEventListener('mousemove', handleMove);
    document.removeEventListener('mouseup', handleEnd);
  };

  // 绑定全局事件(避免鼠标移出滑块后停止拖拽)
  document.addEventListener('mousemove', handleMove);
  document.addEventListener('mouseup', handleEnd);
};

const getItemStyle = (index) => {
  return {
    marginTop: `${gapList[index]}px`,
  };
};

// 挂载时获取父容器引用
onMounted(() => {
  // 父容器为滑块的直接父元素（.m2pi-B-center）
  containerRef.value = sliderRef.value?.parentElement;
})


</script>

<style lang="scss" scoped>
.m2pi {
  font-family: SOURCEHANSANSCN;

  &-T {
    gap: 14px;
  }

  &-C {
    margin-top: 111px;
    gap: 9px;

    &-itemA {
      width: 54px;
      height: 67px;
      background: url("@/assets/imgs/m2/BG10.png");
      display: flex;
      flex-direction: column;
      gap: 7.75px;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      overflow: hidden;

      &:hover {
        cursor: pointer;
        background: linear-gradient(0deg,
            rgba(71, 164, 235, 1) 0%,
            rgba(75, 135, 181, 0.2) 100%);
      }
    }
  }

  &-TC {
    display: flex;
    flex-direction: column;

    &-item {
      width: 54px;
      height: 53px;
      background: url("@/assets/imgs/m2/BG9.png");
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 6px;
      border-radius: 5px;
      overflow: hidden;

      img {
        width: 15px;
        height: 20px;
      }

      span {
        background: linear-gradient(180deg, #ffffff 40%, #5cbafb 99%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-size: 14px;
      }

      &:hover {
        cursor: pointer;
        background: linear-gradient(0deg,
            rgba(71, 164, 235, 1) 0%,
            rgba(75, 135, 181, 0.2) 100%);
      }
    }

    &-item-active {
      width: 54px;
      height: 53px;
      background: url("@/assets/imgs/m2/BG8.png");
    }
  }

  &-B {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 13px;
    background: url("@/assets/imgs/m2/BG5.png");
    width: 54px;
    padding: 16px 9px;
    height: 240px;
    margin-top: 9px;

    &-center {
      height: 238px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transform: translateX(1px);
      padding-left: 9px;
      border-left: 2px dashed rgba(216, 216, 216, 0.6);
      position: relative;

      &-move {
        width: 13px;
        height: 13px;
        background: url("@/assets/imgs/m2/BG7.png");
        position: absolute;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        left: -7.5px;
        cursor: pointer;

        div {
          width: 7px;
          height: 7px;
          background: #bce3ff;
          border-radius: 45px;
        }
      }

      &-item {
        font-size: 10px;
        display: flex;
        align-items: center;
        color: #fff;
        position: relative;

        &:nth-child(2) {
          margin-top: 0 !important;
        }

        &-dot {
          width: 9px;
          height: 9px;
          background: url("@/assets/imgs/m2/BG6.png");
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          z-index: 1;
          left: -14.5px;

          div {
            width: 5px;
            height: 5px;
            background: #62b1e9;
            border-radius: 45px;
          }
        }

        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>