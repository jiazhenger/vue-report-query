/* 全局 */
import '@com/global.js'
import '@css/public.css'
/* 模块 */
import Vue from 'vue'
/* 入口模块 */
import App from './App'
/* 路由 */
import router from './router'
/* 阻止启动生产消息 */
Vue.config.productionTip = false
/* element-ui 配置 */
import './element-variables.scss'
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
/* 启动 */

window.Vue = Vue

window.V = new Vue({
	el: '#app-root',
	router,
	components: { App },
	template: '<App/>'
})
