<template>
  <div class="login">
    <!-- 头部 -->
    <div class="header-nav">
      <!-- 中间标题栏 -->
      <!-- <div class="title-img"></div> -->
      <div class="bg">
        <div class="middle-area">
          <div class="pic"></div>
          <div class="user-form">
            <el-form
              :model="formState"
              label-position="top"
              @submit.prevent="onFinish"
            >
              <el-form-item
                label=""
                :rules="[{ required: true, message: '请输入正确的账号' }]"
              >
                <el-input
                  v-model="formState.username"
                  placeholder="请输入账号"
                />
                <div class="prefix">
                  <img src="../../assets/imgs/user.webp" alt="" />
                  <div class="divide"></div>
                </div>
              </el-form-item>

              <el-form-item
                label=""
                :rules="[{ required: true, message: '请输入正确的密码' }]"
              >
                <el-input
                  type="password"
                  v-model="formState.password"
                  placeholder="请输入密码"
                />
                <div class="prefix">
                  <img src="../../assets/imgs/password.webp" alt="" />
                  <div class="divide"></div>
                </div>
              </el-form-item>

              <el-form-item
                label=""
                :rules="[{ required: true, message: '请输入正确的验证码' }]"
              >
                <el-input
                  v-model="formState.code"
                  placeholder="请输入验证码"
                  style="width: 63%"
                />
                <div class="prefix">
                  <img src="../../assets/imgs/user.webp" alt="" />
                  <div class="divide"></div>
                </div>
                <div class="login-code">
                  <img :src="codeUrl" @click="getCode" class="login-code-img" />
                </div>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="onFinish">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <!-- <div class="login-text">技术支持： 重庆市市政设计研究院有限公司</div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { encryptByCry } from "@/utils/jscrypto";
import { getCodeImg } from "@/api/login";
import { useUserStore } from "@/stores/index";
import { useRouter } from "vue-router";

const formState = ref({
  username: "",
  password: "",
  code: "",
  captchaId: "",
  sCode: "",
  sId: "",
});
const codeUrl = ref(""); // 存储验证码的 URL
// 验证码开关
const captchaEnabled = ref(true);

// 获取 userStore 和 router
const userStore = useUserStore();
const router = useRouter();

const onFinish = () => {
  let { username, password, code, captchaId, sCode, sId } = formState.value;

  // 加密处理
  username = encryptByCry(username, sCode);
  code = encryptByCry(code, sCode);
  password = encryptByCry(password, sCode);
  captchaId = encryptByCry(captchaId, sCode);

  // xid不需要加密
  const form = { username, password, code, captchaId, sId };
  userStore
    .Login(form)
    .then(() => {
      router.push("/m1"); // 登录成功，跳转到首页
    })
    .catch(() => {
      if (captchaEnabled.value) {
        getCode(); // 登录失败，重新获取验证码
      }
    });
};

// 表单提交失败时的处理
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

// 获取验证码图片及信息
const getCode = () => {
  getCodeImg().then((res) => {
    formState.value.sCode = res.sCode;
    formState.value.sId = res.sId;
    captchaEnabled.value =
      res.captchaEnabled === undefined ? true : res.captchaEnabled;
    if (captchaEnabled.value) {
      codeUrl.value = "data:image/gif;base64," + res.img;
      formState.value.captchaId = res.captchaId;
    }
  });
};

// 组件加载完成后获取验证码
onMounted(() => {
  getCode();
});
</script>

<style scoped lang="scss">
// 头部样式
.login {
  width: 100%;
  height: 100%;
}

.header-nav {
  width: 100%;
  height: 114px;
}

.title-img {
  z-index: 101;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 114px;
  background-image: url("@/assets/imgs/header-nav.webp");
  background-repeat: no-repeat;
  background-size: 100% 100%;

  .title-content {
    position: absolute;
    top: 53px;
    left: 46%;
    font-size: 26px;
    font-family: PangMenZhengDao;
    font-weight: 400;
    color: #ffffff;
    line-height: 36px;
    background: linear-gradient(0deg, #b2deff 0%, #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.bg {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/imgs/login-bg.webp");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .middle-area {
    margin-left: 35px;
    margin-top: -60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .pic {
      width: 170px;
      height: 61px;
      background-image: url("@/assets/imgs/login-welcome.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      margin-bottom: 31px;
    }

    .user-form {
      width: 400px;

      .el-form {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 500;

        .login-code {
          width: 33%;
          height: 50px;
          float: right;

          img {
            height: 50px;
            cursor: pointer;
            vertical-align: middle;
          }
        }

        .el-input {
          position: relative;
          text-align: left;
          border: 1px solid #6ef3ff;
          background-color: transparent;
          color: #fff;
          letter-spacing: 1px;
          height: 55px;
          line-height: 55px;
          padding-left: 66px;
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #fff;
          :deep(.el-input__wrapper) {
            background-color: transparent;
            border-radius: 0;
            border: none;
          }
          :deep(.el-input__inner) {
            color: #fff;
          }
          :deep(.el-input__inner::placeholder) {
            font-size: 18px;
            font-family: PingFang SC;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.7);
          }
        }

        .prefix {
          position: absolute;
          top: 14px;
          left: 18px;
          display: flex;

          img {
            width: 19px;
            height: 23px;
          }

          .divide {
            margin-left: 14px;
            height: 26px;
            width: 1px;
            border: 1px solid #fff;
          }
        }

        .el-button {
          border: none;
          width: 400px;
          height: 61px;
          line-height: 61px;
          background-color: transparent;
          background-image: url("../../assets/imgs/submit-button.webp");
          background-size: 400px 61px;
          background-repeat: no-repeat;
          font-size: 24px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #ffffff;
        }
      }
    }
  }

  .login-text {
    position: absolute;
    left: 44%;
    bottom: 20px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 79px;
    text-shadow: 0px 1px 0px rgba(7, 27, 52, 0.8);
  }
}
</style>
