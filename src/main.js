import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import hiworld from '@/components/hiworld.vue'
Vue.component("hiworld",hiworld)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// import obj from './data'
// console.log(obj,"obj")

// 引入全局css样式
// import './assets/css/main.css'

// 导入js-cookie插件 并且注册到VUE的原型中 以后可以通过VUE实例的 this.$jscookie直接访问
import cookies from 'js-cookie'
Vue.prototype.$jscookie = cookies


// 新建VUE实例 bus作为事件主线 将bus注册到VUE的原型中 以后再VUE的实例中就可以直接使用this.$bus
let bus = new Vue()
Vue.prototype.$bus = bus

// import {obj2,obj3} from './data'
// console.log(obj2,obj3)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
