import { createRouter, createWebHashHistory } from "vue-router";
import { getToken } from "@/utils/auth";
import Layout from "../layouts/Layout.vue";
import HeaderNav from "@/layouts/HeaderNav.vue";
import HeaderNav2 from "@/layouts/HeaderNav-M2.vue";
import FooterNav from "@/layouts/FooterNav.vue";
import FooterNav2 from "@/layouts/FooterNav-M2.vue";
import FooterNav3 from "@/layouts/FooterNav-M35.vue";
import { goToScene } from "@/api/boardEvent/boardEventApi";
import { closeDialog } from "@/utils/dialog";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: () => import("../views/login/Login.vue"),
    },
    {
      path: "/",
      component: Layout,
      props: {
        enablePixelStreaming: false,
      },
      children: [
        {
          path: "m2",
          components: {
            default: () => import("../views/mdc/M2.vue"),
             header: HeaderNav2,
             footer: FooterNav2,
          },
          props: {
            default: { enablePixelStreaming: false },
          },
        },
      ],
    },
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "m3",
          components: {
            default: () => import("../views/mdc/M3.vue"),
            // header: HeaderNav,
            // footer: FooterNav,
          },
          props: {
            header: { subtitle: "CIM基础平台" },
          },
        },
      ],
    },
    {
      path: "/test/components-lib",
      component: () => import("@/components/componentsLib/ComponentsLib.vue"),
    },
  ],
});

// TODO:路由守卫,后面根据实际需求完成
// const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  closeDialog();
  switch (to.path) {
    case "/m3":
      goToScene("S1");
      next();
      break;
    case "/m5":
      goToScene("S5");
      next();
      break;
    case "/m6":
      goToScene("S6");
      next();
      break;
    case "/m10":
      goToScene("S7");
      next();
      break;
    case "/m11":
      goToScene("S7");
      next();
      break;
    case "/m14" || "/m15" || "/m16":
      goToScene("S8");
      next();
      break;
    case "/m19":
      goToScene("S9");
      next();
      break;
    case "/m20":
      goToScene("S9");
      next();
      break;
    case "/m25":
      goToScene("S10");
      next();
      break;
    case "/m37":
      goToScene("S37");
      next();
      break;
    case "/m38":
      goToScene("S38");
      next();
      break;
    default:
      next();
  }
});
export default router;
