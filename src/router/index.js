import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/new',
		name: 'New',
		component: () => import( /* webpackChunkName: "new" */ '../views/new/New.vue')
	},
	{
		path: '/book/:pk',
		name: 'Book',
		component: () => import( /* webpackChunkName: "book" */ '../views/Book.vue')
	},
	{
		path: '/article/:pk',
		name: 'Article',
		component: () => import( /* webpackChunkName: "article" */ '../views/Article.vue')
	},
	{
		path: '/collect',
		name: 'Collect',
		component: () => import( /* webpackChunkName: "collect" */ '../views/Collect.vue'),
		meta: {
			auth: true
		}
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
	},
	{
		path: '/regist',
		name: 'Regist',
		component: () => import( /* webpackChunkName: "regist" */ '../views/Regist.vue')
	},
	{
		path: '/center',
		name: 'Center',
		component: () => import( /* webpackChunkName: "center" */ '../views/Center.vue'),
		meta: {
			auth: true
		},
		redirect: {
			name: 'UserInfo'
		},
		children: [
			{
				path: 'userinfo',
				name: 'UserInfo',
				component: () => import( /* webpackChunkName: "userinfo" */ '../views/UserInfo.vue'),
			},
			{
				path: 'sethead',
				name: 'SetHead',
				component: () => import( /* webpackChunkName: "sethead" */ '../views/SetHead.vue')
			},
			{
				path: 'setpassword',
				name: 'SetPassword',
				component: () => import( /* webpackChunkName: "setpassword" */ '../views/SetPassword.vue')
			},
		]
	},
]

const router = new VueRouter({
	routes
})

import cookies from 'js-cookie'

// 给router添加全局路由守卫 t去哪里 f从哪儿来 n下一步干什么
router.beforeEach(function(t, f, n) {
	// 先判断是否需要授权
	if (t.meta.auth) {
		// 如果需要授权 在判断有没有登录
		let user = cookies.get("user")
		if (user) {
			n();
		} else {
			n({
				name: "Login",
				query: {
					next: t.path
				}
			}) // /login?next=/collect
		}
	} else {
		n();
	}
})

export default router
