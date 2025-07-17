import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layouts/Layout.vue";
import headerNav from "@/layouts/header.vue";
import footerNav from "@/layouts/FooterNav.vue";
import { useUserStore } from '@/stores/index';
import { getToken, getUserInfo } from "@/utils/auth";
const routes = [
    {
        path: "/",
        redirect: "/M1",
    },
    {
        path: "/login",
        component: () => import("../view/login/Login.vue"),
    },
    {
        path: "/",
        component: Layout,
        props: {
            enablePixelStreaming: false
        },
        children: [
            {
                path: "/M1",
                components: {
                    default: () => import("../view/mdc/M1_copy.vue"),
                    header: headerNav,
                    footer: footerNav,
                },
                props: {
                    header: { projectName: "无人机AI智能监管平台", subtitle: "" }
                }
            },
            {
                path: "/M2",
                components: {
                    default: () => import("../view/mdc/M2.vue"),
                    header: headerNav,
                    footer: footerNav,
                },
                props: {
                    header: { projectName: "无人机AI智能监管平台", subtitle: "" }
                }
            },
        ]
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

// TODO:路由守卫,后面根据实际需求完成
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
    //暂时没对接后端先直接放行
    next();
    if (getToken()) {
        if (getUserInfo()) {
            next();
        } else {
            useUserStore().GetInfo().then(res => {
                next();
            }).catch(err => {

            })
        }
    } else {
        if (whiteList.includes(to.path)) {
            next();
        } else {
            next(`/login`);
        }
    }
})

export default router;
