import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "@/assets/styles/normalize.css";
import "@/assets/styles/reset.css";
import App from './App.vue'
import router from "./router";
import { initializationStore } from "@/stores";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "@/assets/styles/font.css";

const app = createApp(App)
app.use(router);
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
//初始化状态管理
initializationStore(app);
app.mount('#app')