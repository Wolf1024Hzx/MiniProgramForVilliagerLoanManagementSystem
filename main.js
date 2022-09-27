import App from './App'
import store from './store'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false

Vue.prototype.$resourceRoute = function(route) {
  return 'http://106.14.200.144:8090/static/' + route
}

App.mpType = 'app'
const app = new Vue({
  store,
  ...App
})
app.$mount()

// 引入cu-custom组件
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('CuCustom', cuCustom)
// 引入customerInformationSearch组件
import customerInformation from './components/customerInformation/customerInformation'
Vue.component('customerInformation', customerInformation)
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
