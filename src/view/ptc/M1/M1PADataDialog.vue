<template>
  <Dialog v-model="dialogVisible" title="数据管理">
    <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm"
      :size="formSize"
      status-icon
    >
      <el-form-item label="视点" prop="region">
        <el-select v-model="ruleForm.region" placeholder="视点">
          <el-option
            v-for="item in dataList"
            :label="item.title"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="视点名称" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          确认
        </el-button>
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import Dialog from "@/view/mtc/Dialog/index.vue";
import type { ComponentSize, FormInstance, FormRules } from "element-plus";
const emits = defineEmits(["submit"]);


defineProps({
  dataList: {
    type: Array as () => any[],
    default: () => [],
  },
});
interface RuleForm {
  name: string;
  region: string;
}

const dialogVisible = ref(false);
const formSize = ref<ComponentSize>("default");
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive<RuleForm>({
  name: "Hello",
  region: "",
});

const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: true, message: "请输入视点名称", trigger: "blur" }],
  region: [
    {
      required: true,
      message: "请选择视点",
      trigger: "change",
    },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log("submit!", ruleForm);
      emits("submit", ruleForm);
      dialogVisible.value = false;
    } else {
      console.log("error submit!", fields);
    }
  });
};

const open = (type: string) => {
  console.log(type);
  dialogVisible.value = true;
};

defineExpose({
  open,
});
</script>
<style scoped lang="scss"></style>
