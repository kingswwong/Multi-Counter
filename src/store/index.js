import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    count: 0,
    countSum: 0
  },
  mutations: {
    increment (state) {
      state.countSum++
    },
    decrement(state){
      state.countSum--
    },
    setCount(state,num){
      state.count = num
    },
    reset(state){
      state.count = 0
    }
  }
})

