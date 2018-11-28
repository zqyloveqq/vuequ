import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex);

let defaultCity = '上海';
try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {}
export default new Vuex.Store({
  state:  {
    city: defaultCity
  },
  actions: {
    cityChange (cx, city) {
      cx.commit('cityChange', city);
    },

  },
  mutations: mutations,
})
