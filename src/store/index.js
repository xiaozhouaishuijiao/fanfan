import Vue from "vue";
import Vuex from "vuex";
import { WeatherApi } from "../../src/api/home";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: "", //定位的城市
  },
  getters: {},
  mutations: {
    changeCity(state, data) {
      console.log(data);
      state.city = data.data.city;
    },
  },
  actions: {
    async actchangecity(context, data) {
      let result = await WeatherApi(data);
      context.commit("changeCity", result.data);
    },
  },
  modules: {},
});
