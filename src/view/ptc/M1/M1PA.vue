<template>
  <div>
    <div class="m2-icon" @click="handleDataManage" v-if="!showDataManage">
      <div class="m2-icon-title">数据管理</div>
      <img :src="dataIcon" />
    </div>
    <transition name="el-zoom-in-left">
      <div class="m2-left" v-if="showDataManage">
        <R11TitleMay
          title="数据管理"
          :isClose="true"
          @close="closeDataManage"
        ></R11TitleMay>
        <div class="m2-left-box">
          <div class="container">
            <div class="container-header">
              <div>
                <el-checkbox
                  v-model="dataCheckAll"
                  :indeterminate="isIndeterminate"
                  @change="handleCheckAllChange"
                >
                  全选
                </el-checkbox>
                <el-icon class="icon-left" color="#53cae8"><Lock /></el-icon>
              </div>
              <el-icon class="cpin" color="#53cae8" @click="handleAddData"><CirclePlus /></el-icon>
            </div>
            <div
              v-for="(item, index) in dataList"
              :key="item.id"
              class="top-level-item"
            >
              <div @click="toggleChild(index)" class="title">
                <el-icon
                  :style="{
                    transform: item.showChild
                      ? 'rotate(90deg)'
                      : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }"
                  ><CaretRight
                /></el-icon>
                {{ item.title }}
              </div>

              <!-- 子集数据 -->
              <div v-if="item.showChild" class="child-list">
                <div
                  v-for="child in item.childer"
                  :class="{ selected: child.id === childId }"
                  :key="child.id"
                  class="child-item"
                  @click="handleChilder(child.id)"
                >
                  {{ child.title }}
                </div>
              </div>
            </div>
          </div>
          <div class="map">
            <div class="container-header">
              <div>
                <el-checkbox
                  v-model="dataCheckAll"
                  :indeterminate="isIndeterminate"
                  @change="handleCheckAllChange"
                >
                  全选
                </el-checkbox>
                <el-icon class="icon-left " color="#53cae8"><Lock /></el-icon>
              </div>
              <el-icon class="cpin" color="#53cae8" @click="handleAddMap"><CirclePlus /></el-icon>
            </div>
            <div class="map-list">
              <div
                class="map-list-item"
                v-for="item in  childerMap.mapList"
                :class="{ selected: item.id === mapId }"
                :key="item.id"
                @click="handleMap(item.id)"
              >
                <img
                  class="map-list-item-img"
                  :src="item.imgUrl"
                  alt="地图图片"
                />
                <div class="map-list-item-title">{{ item.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <M1PADataDialog ref="M2PADialogRef" :dataList="dataList"  @submit="handleSubmit"></M1PADataDialog>
    <M1PAMapDialog ref="M1PAMapDialogRef"   @submit="handleSubmitMap"></M1PAMapDialog>
  </div>
</template>

<script setup lang="ts">
import {  reactive, ref } from "vue";
import R11TitleMay from "../../mtc/R11TitleMay/index.vue";
import dataIcon from "@/assets/imgs/dataicon.svg";
import M1PADataDialog from "./M1PADataDialog.vue"
import M1PAMapDialog from "./M1PAMapDialog.vue"
import { ElMessage } from 'element-plus'
// 定义数据类型
interface DataItemChild {
  title: string;
  id: number;
}

interface DataItem {
  title: string;
  id: number;
  childer: DataItemChild[];
  showChild?: boolean; // 控制子集是否显示
}
interface MapItem {
  imgUrl: string;
  id: number;
  title: string;
}
const M2PADialogRef = ref()
const M1PAMapDialogRef = ref()

const dataList = ref<DataItem[]>([
  {
    title: "全局视点",
    id: 1,
    childer: [
      {
        title: "全局视点1",
        id: 11,
      },
    ],
  },
  {
    title: "自建视点",
    id: 2,
    childer: [
      {
        title: "三维数据",
        id: 21,
      },
      {
        title: "三维数据2",
        id: 22,
      },
    ],
  },
]);
const showDataManage = ref<Boolean>(false);
const dataCheckAll = ref<Boolean>(false);
const isIndeterminate = ref<Boolean>(false);

// 根据父级id添加子节点数据
const  addChildToParent = (parentId: number, title: string)=> {
  let idCounter = 100; // 用于生成新的 id
  // 遍历父级数据
  dataList.value.forEach(parent => {
    if (parent.id === parentId) {
      const newId = idCounter++; // 自动生成新 id
      parent.childer.push({ title, id: newId }); // 添加子项
    }
  });
}
const handleSubmit = (ruleForm:any) => {
    console.log(ruleForm)
    addChildToParent(ruleForm.region,ruleForm.name)
}
const handleAddData = () => {
    M2PADialogRef.value.open()
}
const handleAddMap = () => {
    if(!childId.value){
        ElMessage({
            message: '请选择视点',
            type: 'warning',
        })
        return
    }
    M1PAMapDialogRef.value.open()
    
    
}
const handleSubmitMap = (ruleForm:any) => {
    console.log(ruleForm,childId.value)
    if(childId.value===childerMap.childerId){
        let pushList ={
            id: Date.now(),
            imgUrl: "https://lbs.amap.com/dev/config/mapstyle/img/macaron.png",
            title: ruleForm.name,
        }
        childerMap.mapList.push(pushList)
        
    }
}
const handleCheckAllChange = () => {};
const handleDataManage = () => {
  showDataManage.value = true;
};
const closeDataManage = () => {
  showDataManage.value = false;
};

const mapId = ref<number>();

const maplist = ref<MapItem[]>([
  {
    id: 1,
    imgUrl: "https://lbs.amap.com/dev/config/mapstyle/img/macaron.png",
    title: "壅江艺庭",
  },
  {
    id: 2,
    imgUrl: "https://lbs.amap.com/dev/config/mapstyle/img/macaron.png",
    title: "黄家堡",
  },
  {
    id: 3,
    imgUrl: "https://lbs.amap.com/dev/config/mapstyle/img/macaron.png",
    title: "黄家堡",
  },
]);
const childerMap = reactive({
    childerId:11,
    mapList:maplist
})
// 切换显示子集
const toggleChild = (index: number) => {
  const item = dataList.value[index];
  item.showChild = !item.showChild;
};
const childId = ref<number>();
const handleChilder = (id: number) => {
  childId.value = id;
};
const handleMap = (id: number) => {
  mapId.value = id;
};
</script>
<style scoped lang="scss">
.m2-icon {
  pointer-events: auto;
  position: relative;
  width: 78px;
  height: 78px;
  cursor: pointer;
  .m2-icon-title {
    position: absolute;
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 10px; 
  }
}
.cpin{
    cursor: pointer;
}
.m2-left {
  pointer-events: auto;
  width: 500px;
  height: 700px;
  background-color: #061930;
  .container-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .m2-left-box {
    display: flex;
    .container {
      width: 230px;
      padding: 12px;
      .top-level-item {
        transition: "transform 0.6s";
        cursor: pointer;
        .title {
          height: 36px;
          font-size: 16px;
          background-color: #2e4451;
          font-weight: bold;
          line-height: 36px;
          padding-left: 5px;
          cursor: pointer;
        }

        .child-list {
          .child-item {
            background-color: #293e4b;
            padding-left: 16px;
            margin: 5px 0 5px 0;
            font-size: 14px;
            height: 36px;
            line-height: 36px;
            &.selected {
              // 选中子项的样式
              background-color: #2489b6;
              color: white;
            }
          }
        }
      }
    }
    .map {
      padding: 12px;
      .map-list {
        width: 270px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        flex-wrap: wrap;
        .map-list-item {
          box-sizing: content-box;
          height: 120px;
          position: relative;
          margin-top: 8px;
          border-radius: 3px;
          cursor: pointer;
          .map-list-item-img {
            width: 120px;
            height: 120px;
            border-radius: 3px;
          }
          .map-list-item-title {
            position: absolute;
            width: 100%;
            height: 30px;
            line-height: 30px;
            text-align: center;
            bottom: 0;
            background-color: #29292b;
            opacity: 0.6;
          }
          &.selected {
            border: 2px solid yellow;
          }
        }
      }
    }
  }
  :deep(.el-checkbox__label) {
    color: #fff;
  }
  .icon-left {
    margin-left: 4px;
  }
}
</style>
