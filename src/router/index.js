import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// import Home from "../views/Home.vue";
// import PageA from "../views/PageA.vue";
// import PageB from "../views/PageB.vue";
// import PageC from "../views/PageC.vue";

const Home = () => import(/* webpackChunkName:'home' */ "../views/Home.vue");
const PageA = () =>
  import(/* webpackChunkName:'page-a' */ "../views/PageA.vue");
const PageB = () =>
  import(/* webpackChunkName:'page-b' */ "../views/PageB.vue");
const PageC = () =>
  import(/* webpackChunkName:'page-c' */ "../views/PageC.vue");

const routes = [
  {
    path: "/ccc",
    // redirect:{name:'PageC'}
    redirect: "/page-c",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/page-a",
    name: "PageA",
    component: PageA,
    alias: "/xxxx",
  },
  {
    path: "/page-b/:xxx",
    name: "PageB",
    component: PageB,
  },
  {
    path: "/page-c",
    name: "PageC",
    component: PageC,
    // beforeEnter: (to, from, next) => {
    //   console.log("page c before enter");
    //   console.log(to);
    //   console.log(from);
    //   next({ msg: "hello" });
    // },
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
  // base: process.env_BASE_URL
});

// 路由守卫test
/*
router.beforeEach((to, from, next) => {
  console.log("---全局 beforeEach---");
  console.log(to);
  console.log(from);
  next({ msg: "1,beforeEach next" });
});
router.beforeResolve((to, from, next) => {
  console.log("---全局 beforeResolve---");
  console.log(to);
  console.log(from);
  next({ msg: "1,beforeResolve next" });
});
router.afterEach((to, from) => {
  console.log("---全局 afterEach---");
  console.log(to);
  console.log(from);
});
*/
export default router;
