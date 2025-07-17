<template>
  <div>
    <el-dialog v-bind="getBindValue" destroy-on-close :show-close="false">
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header">
          <h4 :id="titleId" :class="titleClass">{{ title }}</h4>
          <el-icon color="#53cae8" @click="close"><CircleClose /></el-icon>
        </div>
      </template>
      <slot></slot>
      <template #footer>
        <div class="dialog-footer">
          <slot name="footer"></slot>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "标题",
  },
});
const getBindValue = computed(() => {
  const delArr: string[] = ["title"];
  const attrs = useAttrs();
  const obj: Record<string, any> = { ...attrs, ...props };
  for (const key in obj) {
    if (delArr.indexOf(key) !== -1) {
      delete obj[key];
    }
  }
  return obj;
});
</script>
<style scoped lang="scss">
:deep(.el-form-item__label) {
  color: #fff;
}
:deep(.el-dialog) {
  width: 665px;
  background: transparent;
  height: 351px;
  background-image: url("http://192.168.105.150:14178/assets/bg-fc2161da.png");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
:deep(.el-dialog__title) {
  color: #fff;
}
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  cursor: pointer;
}
.dialog-footer {
  position: absolute;
  bottom: 10px;
  right: 12px;
}
</style>
