/* ====================================== 全局变量及方法  ====================================== */
import LocalStorage from './localStorage'
import SessionStorage from './sessionStorage'
export default {
	c0:'#3295c4',
	regPhone:/^1[0-9]{10}$/,
	// ========================================================================  判断数据类型
	// 判断数据是否是对象 {}
	isObject(obj){ return {}.toString.call(obj) === '[object Object]' },
	// 判断数据是否是对象{}，且对象长度 >0
	hasObject(obj){ return this.isObject(obj) && Object.keys(obj).length > 0 },
	// 判断数据是否是函数 function
	isFunction(obj){ return {}.toString.call(obj) === '[object Function]' },
	// 判断数据是否是数组 []
	isArray(obj){ return {}.toString.call(obj) === '[object Array]' },
	// 判断数据是否是数级 []，且长度>0
	hasArray(obj){ return this.isArray(obj) && obj.length > 0 },
//	// 判断数据是否是字符串
	isString(obj){ return {}.toString.call(obj) === '[object String]' },
	// 判断数据是否是数字
	isNumber(obj){ return {}.toString.call(obj) === '[object Number]' },
//	// 判断数据是否有效
	isEmpty(obj){ return obj === null || obj === undefined || obj === '' },
	isValid(obj){ return !this.isEmpty(obj) || obj === 0 || obj === false },
	// ======================================================================== redux
	loading(bool,msg){
		const loading = document.querySelector('#ubLoading')
		if(!loading) return
		if(bool){
			loading.querySelector('.ub-loading-msg').innerHTML = msg || '数据加载中'
			loading.style.display = 'block'
		}else{
			loading.style.display = 'none'
		}
	},
	toast(msg,callback){
		const toast = document.querySelector('#ubToast')
		if(!toast) return
		toast.style.display = 'block'
		toast.querySelector('.ub-toast').innerHTML = msg;
		setTimeout(()=>{ toast.style.display = 'none' },1500);
		callback&&callback()
	},
	// ======================================================================== 本地存储配置
	local(name,data){
		let sname =  name || 'user';
		if(this.isValid(data)){
			SessionStorage.set(sname,data);
		}else {
			let gname = SessionStorage.get(sname);
			return gname;
		}
	},
	remove(name){
		let sname =  name || 'user';
		SessionStorage.remove(sname);
	},
	localPer(name,data){
		let sname =  name || 'remember';
		if(this.isValid(data)){
			LocalStorage.set(sname,data);
		}else {
			let gname = LocalStorage.get(sname);
			return gname;
		}
	},
	removePer(name){
		let sname =  name || 'user';
		LocalStorage.remove(sname);
	},
	// 绑定值
	val(v){return this.isValid(v) ? v : '--'},
	nan(v){return !isNaN(v) ? v : '--'},
	// ======================================================================== 获取 url 参数
	getQuery(id){
		let hash = window.location.search || window.location.hash
		let stack = {}
		if(hash.indexOf('?') !== -1){
			let search = hash.split('?')
			search = search[1].split('&')
			search.forEach(function(v,i){
				let s = v.split('=')
				if(s[1]!=='undefined' && s[1]!=='null' && s[1]!==''){
					stack[s[0]] = s[1]
				}
			})
		}
		if(id){ return stack[id] }
		return stack
	},
	// 获取地址栏与本地缓存的 token
	getToken(obj){
		let token = this.getQuery('token');
		let user = this.getUser();
		let rs = null

		if(token){
			rs = token
		}else if(user.token){
			rs = user.token
		}
		return rs
	},
	// 获取用户信息
	getUser(){
		const user = this.local();
		if(this.hasObject(user)){
			return user;
		}else{
			return {}
		}
	},
    // ======================================================================== 调用异步加载方法
    async asy(p){
        let m = ()=>{}
        await p.then( f => {
            m = f
        })
        return m
    },
	// ======================================================================== 登录后跳转
	loginTo(flag){
		if(flag){
			let page = this.local('loginToPage');
			if(page){
				return decodeURIComponent(page).replace('#','')
			}else{
				return false
			}
		}else{
			this.local('loginToPage',encodeURIComponent(window.location.hash))
		}
	},
	getValid(v){
		for(var i in v){
			if(!$fn.isValid(v[i])){
				delete v[i]
			}
		}
		return v
	}
}
