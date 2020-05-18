var formatNumber = function(n) { 
    n = n.toString()
    return n[1] ? n : '0' + n
}
var join = function(arr,split){
	return arr.map(formatNumber).join(split)
}
export default {
	full: function(time){
		var date = new Date(time);
	    return {
	    	year : date.getFullYear(),
	     	month : date.getMonth() + 1,
	    	day : date.getDate(),
	    	h : date.getHours(),
	   		m : date.getMinutes(),
	    	s : date.getSeconds(),
	    }
	},
	format: function(time,option){
		var opt = { s:'-', l:'en', t:'ymd', ...option }
		var str = null
		if(!isNaN(parseInt(time))){
			var t = this.full(time);
			switch(opt.t){
				case 'full':
					str = join([t.year,t.month,t.day],opt.s) + ' ' + join([t.h,t.m,t.s],':')
					break;
				case 'ymd-hm':
					str = join([t.year,t.month,t.day],opt.s) + ' ' + join([t.h,t.m],':') + ':00'
					break;
				case 'ymd':
					str = opt.l === 'zh' ? t.year+'年'+t.month+'月'+t.day+'日' : join([t.year,t.month,t.day],opt.s)
					break;
				case 'hms':
					str = join([t.h,t.m,t.s],':')
					break;
				case 'hm':
					str = join([t.h,t.m],':')
					break;
				default:
					break;
			}
		}
		return str
	},
	getTime(time){
		return time ? new Date(time).getTime() :  new Date().getTime()
	}
}