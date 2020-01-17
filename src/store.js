import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scrollHeights: {}
  },
  mutations: {
   getHeights(state, obj) {
    state.scrollHeights = obj
   }
  },
  actions: {

  }
})
