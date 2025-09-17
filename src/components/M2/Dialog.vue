<template>
    <div class="dialog" v-if="visible">
        <div class="dialog-title">{{ title }}</div>
        <div class="dialog-cancel" @click="visible = false"></div>
        <div class="dialog-message">
            <div>
                <span>
                    确定要 返航/退出控制 吗？
                </span>
            </div>
        </div>
        <div class="dialog-btn">
            <div @click="toPage">确定</div>
            <div @click="visible = false">取消</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(true);
const title = "提示";
const toPage = () => {
    router.push("/m2");
};
</script>

<style lang="scss" scoped>
.dialog {
    // aspect-ratio:458/388;
    aspect-ratio: 4/3;
    width: 350px;
    background: url("@/assets/imgs/m1/BG8.png");
    // background-size: contain;
    box-sizing: border-box;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    padding: 0 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    display: flex;
    flex-direction: column;
    transform: translate(-50%, -50%);

    &-cancel {
        position: absolute;
        width: 26px;
        height: 26px;
        top: 13px;
        right: -12.5px;
        background: url("@/assets/imgs/m1/ICON24.png");
    }

    &-title {
        height: 33px;
        display: flex;
        align-items: center;
        font-size: 18px;
        font-family: ShiShangZhongJianHeiTi;
        color: #fff;
    }

    &-message {
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 150px;
        text-align: center;
        color: #fff;
    }

    &-btn {
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 10px;
        color: #fff;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 75px;
            height: 30px;
            background: linear-gradient(0deg,
                    rgba(71, 164, 235, 0.8) 0%,
                    rgba(75, 135, 181, 0) 100%);
            box-sizing: border-box;
            border: 1px solid #79c1ff;
        }
    }
}
</style>
