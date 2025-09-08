<template>
  <div class="m2pc">
    <div class="m2pc-item" 
    v-for="(item, index) in list" 
    :key="index" 
    @click="handleItemClick(item)"
    :class="{'exit-control': item.label === '退出控制'}"
    >
      <img :src="getIcon(item.icon)" alt="" />
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter()

const iconModules = import.meta.glob("@/assets/imgs/m2/*.png", { eager: true });

const getIcon = (icon:any) => {
  const path = `/src/assets/imgs/m2/${icon}.png`;
  return iconModules[path]?.default;
};
const list = [
  {
    label: "地图",
    icon: "ICON1",
  },
  {
    label: "云台控制",
    icon: "ICON2",
  },
  {
    label: "无人机控制",
    icon: "ICON3",
  },
  {
    label: "负载控制",
    icon: "ICON4",
  },
  {
    label: "AR标注",
    icon: "ICON5",
  },
  {
    label: "实时预警",
    icon: "ICON6",
  },
  {
    label: "退出控制",
    icon: "ICON7",
  },
];

const handleItemClick = (item:any) => {
  // 判断是否是退出控制按钮
  if(item.label === "退出控制") {
    // 跳转到M1页面
    router.push("/m1");
  }
}

</script>

<style lang="scss" scoped>
.m2pc {
  display: flex;
  flex-direction: column;
  gap: 13px;

  &-item {
    width: 160px;
    height: 40px;
    background: linear-gradient(
      0deg,
      rgba(71, 164, 235, 0.8) 0%,
      rgba(11, 35, 54, 0.608) 100%
    );
    box-sizing: border-box;
    border: 1px solid;
    border-image: linear-gradient(180deg, #79C1FF 0%, rgba(94, 181, 255, 0) 100%) 1;
    font-family: YouSheBiaoTiHei;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    color: #fff;
    padding: 0 15px;
    transition: all 0.3s ease; /* 过渡动画，让 hover 更平滑 */

    img {
      width: 20px;
      height: 20px;
    }
  }

    /* 退出控制按钮的 hover 样式 */
  .exit-control {
    &:hover {
      cursor: pointer; /* 鼠标悬停时变为手指形状 */
      background: linear-gradient(0deg, rgba(0, 233, 218, 0.505) 0%, rgba(0, 120, 180, 0.9) 100%); /* 调整为目标颜色渐变 */
      border-image: linear-gradient(180deg, #00a0e9 0%, #0078b4 100%) 1; /* 调整边框渐变 */
      box-shadow: 0 0 5px rgba(0, 160, 233, 0.5); /* 可选：添加阴影增强质感 */
    }
  }
}
</style>
