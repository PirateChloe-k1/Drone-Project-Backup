<template>
    <div class="m2-content-right">
              <div class="m2-content-right-header">
                  <div class="m2-content-right-header-item"><el-icon color="#5bd7f7"><Position /></el-icon>漫游</div>
                  <div class="m2-content-right-header-item"><el-icon color="#5bd7f7"><Aim /></el-icon>视点</div>
                  <div class="m2-content-right-header-item"><el-icon color="#5bd7f7"><CopyDocument /></el-icon>图层</div>
                  <div class="m2-content-right-header-item"><el-icon color="#5bd7f7"><Search /></el-icon>查询</div>
                  <div class="m2-content-right-header-item"><el-icon color="#5bd7f7"><Tools /></el-icon>工具</div>
              </div>
              <div class="m2-content-right-tree"> 
                  <div class="m2-content-right-tree-search">
                      <el-input
                          v-model="input1"
                          size="small"
                          placeholder="请输入搜索关键字"
                          :suffix-icon="Search"
                          />
                      <el-button type="primary" size="small" style="margin-left: 4px;" @click="handleZ"> <el-icon class="el-icon--right"><Upload /></el-icon>专题</el-button>
                      <el-button type="primary" size="small" style="margin-left: 4px;"><el-icon class="el-icon--right"><CircleCheck /></el-icon>已选</el-button>
                  </div>
                  <div class="m2-content-right-tree-menu">
                      <div 
                          v-for="(item, index) in menuItems"
                          :key="'content-' + index"
                          :class="[ { 'menu-active': activeMenu === item.id }]"
                          @click="toggleMenu(item.id)">
                              {{ item.label }}
                      </div>
                  </div>
                  <mdcTree v-if="activeMenu === 'global'" v-model:modelValue="selectedNodes" :dataSource="dataSource"></mdcTree>
                  <div v-else>个人图层</div>
              </div>
          </div>
  </template>
  <script lang="ts" setup>
  
  import mdcTree from "../../mtc/m2Tree/index.vue";
  import { Search } from '@element-plus/icons-vue';
  import { ref } from "vue";
  const input1 = ref('')
  // 定义菜单项的数据结构
  interface MenuItem {
    id: string;
    label: string;
  }
    // 定义树的结构类型
    interface Tree {
    id: number
    label: string
    children?: Tree[]
    childrenCount?: number // 子节点数量
  }
  const selectedNodes = ref([])
  const handleZ = () => {
      console.log(selectedNodes.value,'handleZ')
  }
  // 菜单项数据
  const menuItems = ref<MenuItem[]>([
    {
      id: 'global',
      label: '全局图层',
    },
    {
      id: 'personal',
      label: '个人图层',
    },
  ]);
   // 数据源（树结构）
   const dataSource = ref<Tree[]>([
    {
      id: 1,
      label: '城市基础数据',
      children: [
        {
          id: 4,
          label: '电子地图',
          children: [
            {
              id: 9,
              label: '适量天地图',
            },
            {
              id: 10,
              label: '电子地图',
            },
            {
              id: 221,
              label: '适量天地图1',
              children: [
                {
                    id: 10111,
                    label: '电子地图112',
                },
              ]
            },
            {
              id: 210,
              label: '电子地图2',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: '建构诸物专题',
      children: [
        {
          id: 5,
          label: '适量天地图2-1',
        },
        {
          id: 6,
          label: '电子地图2-2',
        },
      ],
    },
    {
      id: 3,
      label: '城市道路专题',
      children: [
        {
          id: 7,
          label: '渝北区',
        },
        {
          id: 8,
          label: '南岸区',
        },
      ],
    },
  ])
  
  const activeMenu = ref<string>('global');
  const toggleMenu = (id: string) => {
    activeMenu.value = id;
  };
  </script>
<style lang="scss" scoped>
 .m2-content-right{
              pointer-events: auto;
              width: 294px;
              .m2-content-right-header{
                  height: 38px;
                  background-color: #13262f;
                  display: flex;
                  justify-content: space-around;
                  align-items: center;
                  .m2-content-right-header-item{
                      display: flex;
                      align-items:  flex-end;
                  }
              }
              .m2-content-right-tree{
                  width: 253px;
                  float: right;
                  background-color: #0e161d;
                  padding: 6px 6px;
                  .m2-content-right-tree-search{
                      display: flex;
                  }
                  .m2-content-right-tree-menu{
                      display: flex;
                      align-items: center;
                      width: 240px;
                      height: 23px;
                      margin-top: 5px;
                      border: 1px solid #538088;
                      cursor: pointer;
                      div{
                          width: 50%;
                          text-align: center;
                      }
                  }
                  .menu-active{
                      background-color: #1c7690;
                      border: 1px solid #1c7690;
                  }
              }
          }
</style>
  