import vue from 'vue'
import VueRouter from 'vue-router'


const route = new VueRouter({
	//mode: 'history',
	routes: [{
		path: '/',
		redirect: '/home'
	}, {
		path: '/home',
		component: () => import('@/pages/home.vue')
	}, {
		path: '/classify',
		component: () => import('@/pages/classify.vue')
	}, {
		path: '/tag',
		component: () => import('@/pages/tag.vue')
	}, {
		path: '/article/:id',
		component: () => import('@/pages/article.vue')
	}, {
		path: '/write_article',
		component: () => import('@/pages/writeArticle.vue')
	}, {
		path: '/about',
		component: () => import('@/pages/about.vue'),
		beforeEnter: (to, from, next) => {
			let isLogin = localStorage.getItem('isLogin');
			if (!isLogin) {
				next('/user/login')
			} else {
				next()
			}
		}
	}, {
		path: '/user',
		component: () => import( /* webpackChunkName: 'user' */ '@/pages/user/user.vue'),
		children: [{
			path: '/user',
			redirect: '/user/login'
		}, {
			path: 'login',
			component: () => import('@/\/pages/user/login.vue'),
			beforeEnter: (to, from, next) => {
				let isLogin = localStorage.getItem('isLogin');
				if (!isLogin) {
					next()
				} else {
					next('/about')
				}
			}
		}, {
			path: 'get_password',
			component: () => import( /* webpackChunkName: 'user' */ '@/pages/user/getPassword.vue')
		}, {
			path: 'set_password',
			component: () => import( /* webpackChunkName: 'user' */ '@/pages/user/setPassword.vue')
		}]
	}]
})


route.beforeEach((to, from, next) => {
	// let isLogin;
	// console.log(!isLogin)
	// if (isLogin) {
	// 	next()
	// } else {
	// 	next('/login')
	// }
	next()
})

export default route;
