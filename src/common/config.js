/* ====================================== api 配置  ====================================== */
const env = process.env.NODE_ENV === 'development';	// 是否为开发环境

const exist = str => window.location.host.indexOf(str) >= 0

let api = 'http://wx.ngrok.nicol.wang/org/'		        // 正式访问 api
let apt = 'http://wx.ngrok.nicol.wang/org/'		    // 测试访问 api
let apr = 'http://t.ubzyw.com/'						// 预发访问 api

if(env){ // 开发环境
	api = apt
}else{ // 生产环境
	if (exist('//testt.ubzyw.com/')) {	 		// 测试环境
        api = apt
    } else if(exist('//:preapi.ubzyw.com')) {	 	// 预发环境
    	api = apr
    }
}
/* ====================================== 全局变量配置  ====================================== */
module.exports = {
	api : api, 	// api
	env : env, 	// 环境变量
	contentType: 1,
    pageSize: 20
}
