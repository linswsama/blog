import Toast from './Toast'

const obj = {};
obj.install = function(Vue) {
	const toastContrustor = Vue.extend(Toast);
	const toast = new toastContrustor();
	toast.$mount(document.createElement('div'));
	document.body.appendChild(toast.$el);
	
	Vue.prototype.$toast = toast;
}

export default obj

/* 在 main.js 中 挂载 Toast 组件
import Toast from '@/components/Toast'
Vue.prototype.$bus = new Vue()
Vue.use(Toast)
*/ 