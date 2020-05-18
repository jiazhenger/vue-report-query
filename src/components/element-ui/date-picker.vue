<template>  
	<el-date-picker
		v-model 			= 'myModel'
		:size				= 'size'
		:disabled 			= 'disabled'
		:clearable 			= 'clearable'
		:type 				= 'type'
		:range-separator	= 'rangeSeparator'
		:start-placeholder 	= 'startPlaceholder'
		:end-placeholder 	= 'endPlaceholder'
		@change				= 'change'
	/>
</template>

<script>
	// ================================================================ element-ui
	import { DatePicker } from 'element-ui'
	Vue.use(DatePicker)
	// ================================================================  class
	export default {
		model:{
			prop	: 'model', 	// 要存在于props
			event	: 'change' 	// 当组件的值发生改变时要emit的事件名
		},
		props:{
			disabled 			: { type:Boolean, default:false },
			clearable 			: { type:Boolean, default:true },
			size				: { type:String, default:'mini' },
			type				: { type:String, default:'daterange' },
			rangeSeparator		: { type:String, default:'至' },
			startPlaceholder	: { type:String, default:'开始日期' },
			endPlaceholder		: { type:String, default:'结束日期' },
			model 				: [ String, Object ],
		},
		data(){
			return {
				myModel: this.model
			}
		},
		methods:{
			change(v){
				this.value = v
			},
			setValue(v){ this.myModel = v },
			reset(){
				this.setValue(null)
			},
			getValue(v){
				if($fn.hasArray(v)){
					const start = $time.getTime(v[0])
					const end = $time.getTime(v[1])
					return {
						start: $time.format(start),
						end: $time.format(end)
					}
				}else{
					return $time.format($time.getTime(v))
				}
			}
		},
		watch:{
			myModel(v){
				if(v === null){
					this.$emit('clear', v)
				}else{
					this.$emit('change',this.getValue(v))
				}
			} // 这里检测 myModel，一旦发生变化就提交事件到父组件
		}
	}
</script>