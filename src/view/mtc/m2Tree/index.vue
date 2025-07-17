<template>
  <div class="custom-tree-container">
    <el-tree
      style="max-width: 600px"
      :data="dataSource"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      @check-change="handleCheckChange"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span>
            <div v-if="!node.isLeaf" class="childercount">
              {{ data.childrenCount }}
            </div>
            <a v-if="node.isLeaf" @click="append(data)">
              <el-icon color="#5bd7f7"><HelpFilled /></el-icon>
            </a>
            <el-popover
              placement="bottom"
              title=""
              :width="200"
              trigger="click"
            >
              <template #reference>
                <a
                  v-if="node.isLeaf"
                  style="margin-left: 8px"
                  @click="handleMenu(node, data)"
                >
                  <el-icon color="#5bd7f7"><Operation /></el-icon>
                </a>
              </template>
              点击
            </el-popover>
          </span>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";

import type Node from "element-plus/es/components/tree/src/model/node";

// 定义树的结构类型
interface Tree {
  id: number;
  label: string;
  children?: Tree[];
  childrenCount?: number; // 子节点数量
}
// 定义外部传入的 和 `v-model`
const props = defineProps({
  modelValue: {
    type: Array as () => Tree[],
    default: () => [],
  },
  dataSource: {
    type: Array as () => Tree[],
    default: () => [],
  },
});
// 定义 emit 事件
const emit = defineEmits(["update:modelValue"]);

// 传入的选中节点数据
const checkedNodes = ref<Tree[]>(props.modelValue);

// 计算每个节点下所有子节点的数量
const calculateChildrenCount = (node: Tree) => {
  if (node.children && node.children.length > 0) {
    // 递归计算所有子节点数量
    let count = 0;
    node.children.forEach((child) => {
      calculateChildrenCount(child); // 递归计算子节点
      count += (child.childrenCount || 0) + 1; // +1 计算当前节点本身
    });
    node.childrenCount = count; // 保存总数
  } else {
    node.childrenCount = 0; // 没有子节点
  }
};
// 选中状态变化时的处理函数
const handleCheckChange = (node: Tree, checked: boolean) => {
  // 如果选中，添加节点；否则移除节点
  if (checked) {
    checkedNodes.value.push(node);
  } else {
    checkedNodes.value = checkedNodes.value.filter((n) => n.id !== node.id);
  }
  console.log(checkedNodes.value);
  emit("update:modelValue", checkedNodes.value); // 传递更新后的选中节点
};

watch(
  () => props.modelValue,
  (newVal) => {
    console.log("newVal", newVal);
    checkedNodes.value = newVal;
  }
);
const append = (data: Tree) => {
  console.log(data);
};

const handleMenu = (node: Node, data: Tree) => {
  console.log(node, data);
};

// 在组件加载时计算所有节点的子节点数量
onMounted(() => {
  props.dataSource.forEach(calculateChildrenCount);
});
</script>

<style scoped lang="scss">
.custom-tree-node {
  color: #fff;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
  .childercount {
    color: #d6df29;
    background: #39425d;
    border-radius: 35%;
    width: 20px;
    height: 15px;
    text-align: center;
  }
}
:deep(.el-tree) {
  background: #0e161d;
  color: #fff;
  .el-tree-node__content:hover {
    background-color: #244b85;
  }
  .el-tree-node:focus > .el-tree-node__content {
    background-color: #244b85;
  }
}
</style>
