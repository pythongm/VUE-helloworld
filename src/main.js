import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 导入组件
import hiworld from '@/components/hiworld.vue'
// 注册全局组件
Vue.component("hiworld", hiworld)

// 注册全局的过滤器
Vue.filter("info", function(value) {
	return value + "  gm"
})

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// import obj from './data'
// console.log(obj,"obj")

// 引入全局css样式
// import './assets/css/main.css'

// 引入ico样式
import './assets/css/iconfont.css'

// 导入js-cookie插件 并且注册到VUE的原型中 以后可以通过VUE实例的 this.$jscookie直接访问
import cookies from 'js-cookie'
Vue.prototype.$jscookie = cookies


import axios from "./api/index.js"
Vue.prototype.$axios = axios

// 新建VUE实例 bus作为事件主线 将bus注册到VUE的原型中 以后再VUE的实例中就可以直接使用this.$bus
let bus = new Vue()
Vue.prototype.$bus = bus

// import {obj2,obj3} from './data'
// console.log(obj2,obj3)

import './mock/index.js'
// console.log(mock.mock({
// 	"key1|5":"abc",
// 	"key2|1-3":"abc",
// 	"key3|1-10":100,
// 	"key4|1-10.1-3":100,
// 	"key5|1":true,
// 	"key6|1-9":true,
// 	"key7|2":{name:"gm",age:23,sex:"男"},
// 	"key8|1-3":{name:"gm",age:23,sex:"男"},
// 	"key9|1":[1,2,3,4,5],
// 	"key10|2-5":[1,2,3,4,5],
// 	"key11|3":[1,2,3,4,5],
// 	"key12":function(){
// 		return mock.mock({
// 			"key12|3":[1,2]
// 		})
// 	},
// 	"key13":/[a-z][A-Z][0-9]/,
// 	"key14":"@CNAME",
// }));

// 引入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
