import Vue from 'vue'
import Router from 'vue-router'
// =====================================================  异步加载路由
const loadAsync = name => () => import('@pages/'+ name).then(m => m.default)
// =====================================================  路由分配
const routes = [
	{ path: '/login', 		component: loadAsync('login') },
	{ 
		path: '/main', 		
		component: loadAsync('main'),
		children:[
			/* 新闻/公告 */
			{ path:'/', component: loadAsync('index') },
			{ path:'/main/news', component: loadAsync('index/news') },
			{ path:'/main/notice', component: loadAsync('index/notice') },
			{ path:'/main/detail/:id', component: loadAsync('index/detail') },
			/* 表单 */
			{ path:'/main/report-query', component: loadAsync('report-query') },
			{ path:'/main/data-query', component: loadAsync('data-query') },
            { path:'/main/sample-trace', component: loadAsync('sample-trace') },
			/* 修改密码 */
			{ path:'/main/change-passwords', component: loadAsync('change-passwords') }
		]
	},
	/* 重定向 */
	{ path: '', 	redirect: '/main' },
	/* 404 */
	{ path: '*',	component: loadAsync('404') }
]
// =====================================================  路由配置
Vue.use(Router)
const router =  new Router({
	mode: 'hash',
	hash: '?',
  	routes
})
// =====================================================  路由监听
// 进入路由之前
router.beforeEach((to, from, next) => {
	next()
})
// 进入路由之前后
//router.afterEach((to, from, next) => { })

export default router

