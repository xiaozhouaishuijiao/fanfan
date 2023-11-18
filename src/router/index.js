import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Home/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    //重定向的首页页面
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      xian: true,
    },
  },
  {
    //关于页面
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: {
      xian: true,
    },
  },
  {
    //首页
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      xian: true,
    },
  },
  {
    //我的页面
    path: "/mine",
    name: "mine",
    component: () => import("../views/Mine/MineView.vue"),
    meta: {
      xian: true,
    },
  },
  {
    //退出登录页面
    path: "/Tuichu",
    name: "Tuichu",
    component: () => import("../views/Mine/TuiChu.vue"),
    meta: {
      xian: false,
    },
  },
  {
    //编辑资料页面
    path: "/editor",
    name: "editor",
    component: () => import("../views/Mine/EditorView.vue"),
    meta: {
      xian: false,
    },
  },
  {
    //个性标签页面
    path: "/gxbq",
    name: "gxbq",
    component: () => import("../views/Mine/GxBq.vue"),
    meta: {
      xian: false,
    },
  },
  {
    //关注页面
    path: "/guanzhu",
    name: "guanzhu",
    component: () => import("../views/Mine/AttenTion.vue"),
    meta: {
      xian: false,
    },
  },
  {
    //登录页面
    path: "/login",
    name: "login",
    component: () => import("../views/LoginRegister/LoginView.vue"),
    meta: {
      xian: false,
    },
  },
  {
    //注册页面
    path: "/register",
    name: "register",
    component: () => import("../views/LoginRegister/RegisterView.vue"),
    meta: {
      xian: false,
    },
  },
  {
    //达人圈页面
    path: "/expert",
    name: "expert",
    component: () => import("../views/expert/ExportVue.vue"),
    meta: {
      xian: true,
    },
  },
  {
    //达人圈发布页面
    path: "/fabu",
    name: "fabu",
    component: () => import("../views/expert/FaBu.vue"),
    meta: {
      xian: false,
    },
  },
  {
    //达人圈详情页面
    path: "/fabudatail",
    name: "fabudatail",
    component: () => import("../views/expert/FabuDatail.vue"),
    meta: {
      xian: false,
    },
  },
  {
    path: "/selectmap",
    name: "selectmap",
    component: () => import("../views/expert/MapView.vue"),
  },
  {
    //举报页面
    path: "/report",
    name: "report",
    component: () => import("../views/expert/ReportView.vue"),
    meta: {
      xian: true,
    },
  },
  {
    //定位城市页面
    path: "/cheng",
    name: "cheng",
    component: () => import("../views/Location/LocationView.vue"),
    meta: {
      xian: false,
    },
  },
  {
    //热门景点页面
    path: "/hot",
    name: "hot",
    component: () => import("../views/hot/HotView.vue"),
    meta: {
      xian: false,
    },
  },
  {
    //热门景点页面
    path: "/datail",
    name: "datail",
    component: () => import("../views/hot/HotDatail.vue"),
    meta: {
      xian: false,
    },
  },
  {
    //周边游页面
    path: "/zhou",
    name: "zhou",
    component: () => import("../views/zhou/ZhouBian.vue"),
    meta: {
      xian: false,
    },
  },
  {
    //亲子游页面
    path: "/qin",
    name: "qin",
    component: () => import("../views/qin/QinZi.vue"),
    meta: {
      xian: false,
    },
  },
  {
    //忘记密码页面
    path: "/forget",
    name: "forget",
    component: () => import("../views/LoginRegister/ForgetView.vue"),
    meta: {
      xian: false,
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
