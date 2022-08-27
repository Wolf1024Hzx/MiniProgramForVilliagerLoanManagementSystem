import App from './App'
import store from "./store"

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

App.mpType = 'app'
const app = new Vue({
	store,
    ...App
})
app.$mount()

// 引入cu-custom组件
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  return {
    app
  }
}
// #endif