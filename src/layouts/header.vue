<template>
  <div class="header-nav">
    <div class="title-img">
      <div class="left-content">
        <div class="weather">
          <img src="@/assets/imgs/cloud01.png" alt="" />
          <span class="temp">29</span>
        </div>
      </div>
      <div class="title">
        <div class="projectName">{{ projectName }}</div>
        <div class="subtitle">{{ subtitle }}</div>
      </div>
      <div class="right-content">
        <div class="avatar">
          <img src="@//assets/imgs/avatar01.png" alt="" />
          <span class="name">{{ nickName }}</span>
        </div>
        <div class="home" @click="toM2">
          <img src="@//assets/imgs/home01.png" alt="" />
          <span class="name">主页</span>
        </div>
        <div class="exit" @click="toLogin">
          <img src="@//assets/imgs/exit01.png" alt="" />
          <span class="name">退出</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useUserStore } from "@/stores/index";
import { useRouter } from "vue-router";
const userStore = useUserStore();
const router = useRouter();

defineProps({
  projectName: {
    type: String,
    default: "无人机AI智能监管平台",
  },
  subtitle: {
    type: String,
    default: "",
  },
});

const nickName = "张三";
const toM2 = () => {};
const toLogin = () => {
  router.replace("/login");
  userStore.LogOut();
};
</script>
<style lang="scss" scoped>
.header-nav {
  width: 100%;
  height: 91px;
  .title-img {
    z-index: 101;
    position: absolute;
    top: 0;
    left: 50%;
    width: 1879px;
    height: 163px;
    background-image: url("@/assets/imgs/header01.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transform: translate(-50%, -42px);
    pointer-events: none;
    .left-content {
      display: flex;
      align-items: center;
      position: absolute;
      top: 10px;
      left: 35px;
      line-height: 18px;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ffffff;

      .weather {
        display: flex;
        justify-content: center;

        .temp {
          margin-left: 7px;
        }
      }
    }
    .right-content {
      display: flex;
      align-items: center;
      position: absolute;
      cursor: pointer;
      top: 10px;
      right: 30px;
      line-height: 16px;
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 800;
      color: #ffffff;
      pointer-events: auto;

      .avatar {
        display: flex;
        align-items: center;
        margin-right: 20px;

        img {
          width: 16px;
          height: 20px;
        }

        .name {
          margin-left: 10px;
        }
      }

      .home {
        display: flex;
        align-items: center;
        margin-right: 20px;

        img {
          width: 22px;
          height: 18px;
        }

        .name {
          margin-left: 10px;
        }
      }

      .exit {
        display: flex;
        align-items: center;
        margin-right: 20px;

        img {
          width: 15px;
          height: 15px;
        }

        .name {
          margin-left: 10px;
        }
      }
    }
    .title {
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      color: #fff;
      text-align: center;
      margin-top: 6px;
      font-size: 36px;
      font-family: YouSheBiaoTiHei;
      font-weight: 700;

      .projectName {
        letter-spacing: 8px;
      }

      .subtitle {
        font-size: 26px;
        line-height: 26px;
      }

      .projectName,
      .subtitle {
        background: linear-gradient(180deg, #ffffff 37%, #d0f4ff 99%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style>
