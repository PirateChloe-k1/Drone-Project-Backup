<template>
    <div class="m2pd">
        <div class="m2pd-data">
            <div class="m2pd-data-center">
                <!-- 顶部按键 -->
                <div class="key-row">
                    <button class="keyboard-key">Q</button>
                    <button class="keyboard-key">W</button>
                    <button class="keyboard-key">E</button>
                    <button class="keyboard-key keyboard-key-up">C</button>
                </div>
                <!-- 底部按键 -->
                <div class="key-row">
                    <button class="keyboard-key">A</button>
                    <button class="keyboard-key">S</button>
                    <button class="keyboard-key">D</button>
                    <button class="keyboard-key keyboard-key-down">Z</button>
                </div>
            </div>
            <div class="m2pd-data-btn">高速</div>
        </div>
        <div class="m2pd-menu">
            <div class="m2pd-menu-item" v-for="(item, index) in menu" :key="index"
                :class="{ 'emergency': item.label === '急停' }">
                {{ item.label }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const data = {
    distance: "24.28",
    hours: "7",
};
const menu = [
    {
        label: "恢复航线",
    },
    {
        label: "返航",
    },
    {
        label: "急停",
    },
];
</script>

<style lang="scss" scoped>
.m2pd {
    aspect-ratio: 337/140;
    width: 100%;
    /* 增加高度以容纳箭头 */
    // height: 180px;
    border-radius: 5px;
    background: url("@/assets/imgs/m2/BG1.png") center/contain no-repeat;
    display: flex;
    gap: 14px;
    padding: 18px 16px;
    font-family: SOURCEHANSANSCN;

    &-data {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &-center {
            color: #fff;
            display: flex;
            flex-direction: column;
            gap: 16px;

            .key-row {
                display: flex;
                gap: 15px;
            }

            .keyboard-key {
                width: 45px;
                height: 45px;
                background: linear-gradient(0deg,
                        rgba(71, 164, 235, 0.4) 0%,
                        rgba(75, 135, 181, 0) 100%);
                border: 1px solid #79c1ff;
                border-radius: 4px;
                color: #fff;
                font-size: 16px;
                // 悬停在此鼠标会变为手势
                cursor: pointer;
                transition: all 0.2s ease;

                &-up, &-down {
                    position: relative;
                    margin-left: 25px;
                }

                    &:hover {
                        background: linear-gradient(0deg,
                                rgba(71, 164, 235, 0.8) 0%,
                                rgba(75, 135, 181, 0.4) 100%);
                        /* 悬停时轻微放大 */
                        transform: scale(1.05);
                    }

                    &:active {
                        /* 点击时轻微缩小 */
                        transform: scale(0.98);
                    }
                }
            }

            &-btn {
                background: linear-gradient(0deg,
                        rgba(71, 164, 235, 0.8) 0%,
                        rgba(75, 135, 181, 0) 100%);
                box-sizing: border-box;
                border: 1px solid #79c1ff;
                color: #fff;
                width: 189px;
                font-size: 14px;
                text-align: center;
                padding: 6px 0;
                cursor: pointer;
                transition: all 0.2s ease;

                &:hover {
                    background: linear-gradient(0deg,
                            rgba(71, 164, 235, 1) 0%,
                            rgba(75, 135, 181, 0.2) 100%);
                }
            }
        }

        &-menu {
            display: flex;
            flex-direction: column;
            gap: 9px;

            &-item {
                width: 103px;
                height: 30px;
                background: linear-gradient(0deg,
                        rgba(71, 164, 235, 0.4) 0%,
                        rgba(75, 135, 181, 0) 100%);
                border: 1px solid #79c1ff;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 14px;

                &.emergency {
                    background: linear-gradient(0deg,
                            rgba(235, 71, 71, 0.7) 0%,
                            rgba(181, 75, 75, 0.3) 100%);
                    border-color: #ff7979;

                    &:hover {
                        background: linear-gradient(0deg,
                                rgba(235, 71, 71, 0.9) 0%,
                                rgba(181, 75, 75, 0.5) 100%);
                    }
                }

            }
        }
    }</style>
