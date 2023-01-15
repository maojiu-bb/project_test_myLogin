import Vue from 'vue'
import App from './App.vue'

// 导入全局样式
import '@/assets/global.css'

// 导入路由
import router from '@/router/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
