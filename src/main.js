import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vant from "vant";
import "vant/lib/index.css";
import BaiduMap from "vue-baidu-map";

Vue.use(BaiduMap, {
  ak: "9fda916299b02a47ae05036e6d48366a",
});

Vue.config.productionTip = false;
Vue.use(vant);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
