import Vue from 'vue'
import App from './App.vue'

import '@/style/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import $ from 'jquery'
window.$ = $
window.jQuery = $

// 过滤
import {
	formatDate
} from '@/utils/date.js'
Vue.filter('formatDate', (time) => {
	return formatDate(time, 'yyyy-MM-dd hh:mm')
})

//路由
import Vuerouter from 'vue-router'
Vue.use(Vuerouter)
import router from '@/router.js'
//组件
import myIcon from '@/components/i-icon.vue'
Vue.component('my-icon', myIcon)

import Toast from '@/components/Toast'
Vue.prototype.$bus = new Vue()
Vue.use(Toast)

Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
