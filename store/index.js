// #ifndef VUE3
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
// #endif

// #ifdef VUE3
import { createStore } from 'vuex'
const store = createStore({
// #endif
	state: {
		text: "store测试"
	},
	mutations: {
	},
	getters: {
		currentColor(state) {
			return state.colorList[state.colorIndex]
		}
	},
	actions: {}
})

export default store
