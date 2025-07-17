<template>
    <div class="layout">
        <div class="content" :class="{ 'pointer-events-none': enablePixelStreaming }"  style="z-index: 200">
			<router-view></router-view>
		</div>
        <div class="pointer-events-none page" style="z-index: 300">
			<router-view name="header" class="pointer-events-none"> </router-view>
			<router-view name="footer" class="pointer-events-none"></router-view>
			<router-view name="nav" class="pointer-events-none"></router-view>
			<router-view name="tool" class="pointer-events-none"></router-view>
			<div class="pointer-events-auto show-version" v-show="showPopover">
				<el-popover :title="projName" trigger="hover">
					<template  #default>
						<div>
							{{ "环境：" + projEnv }}<br />
							{{ "版本号：" + projVersion }}
						</div>
					</template>
                    <template #reference>
                        <div class="show-version" @click="getBeInfo"></div> 
                    </template>
				</el-popover>
			</div>
		</div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import config from "../../package.json";

defineProps({
    enablePixelStreaming:{
        type: Boolean,
        default: false
    }
})
const projName = config.name
const projVersion = config.version
const projEnv = import.meta.env.MODE
const showPopover = ref<Boolean>(import.meta.env.MODE !== "prod")

const getBeInfo = async () => {
    //   let versionInfoDetail = await getBeInfoDetail()
    //   const fInfo = versionInfoDetail.replace(/(<br>)/g, "\r\n")
    //   alert(`${fInfo}`)
}
</script>
<style lang="scss" scoped>
.pointer-events-none {
    pointer-events: none !important;
}
.layout {
	width: 100%;
	height: 100%;

	.page {
		position: fixed;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.content {
		position: fixed;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.show-version {
		z-index: 600;
		position: fixed;
		top: 0;
		left: 0%;
		width: 25%;
		height: 30px;
	}
}
</style>