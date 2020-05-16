/* ====================================== localStorage 本地存储  ====================================== */
import $fn from './fn'
export default {
	// ====================================== 设置存储
	set(key,value){
		let mv = value;
		// 如果 v 不存在，直接存
		if($fn.isObject(mv) || $fn.isArray(mv)){
			mv = JSON.stringify(mv);
		}
		localStorage.setItem(key,mv);
	},
	// ====================================== 获取存储
	get(key){
		let k = localStorage.getItem(key);
		if($fn.isValid(k)){
			if(k.indexOf('}') >=0 || k.indexOf('[') >=0){
				return JSON.parse(k);
			}else{
				return k;
			}
		}else{
			return false;
		}
	},
	// ====================================== 列出指定 key
	remove(key){
		if($fn.hasArray(key)){
			key.each((v,i)=>{
				localStorage.removeItem(v);
			})
		}else{
			localStorage.removeItem(key);
		}
	}
}
