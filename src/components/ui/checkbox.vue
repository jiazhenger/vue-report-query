<template>  
	<el-checkbox
		v-model 		= 'myModel'
		:size			= 'size'
		:disabled 		= 'disabled'
		@change			= 'change'
	>
	 	{{label}}
	</el-checkbox>
</template>

<script>
	// ================================================================ element-ui
	import { Checkbox } from 'element-ui'
	Vue.use(Checkbox)
	// ================================================================  class
	export default {
		model:{
			prop	: 'model', 	// 要存在于props
			event	: 'change' 	// 当组件的值发生改变时要emit的事件名
		},
		props:{
			label		: String,
			disabled 	: { type:Boolean, default:false },
			size		: { type:String, default:'mini' },
			model 		: [ Boolean, String],
		},
		data(){
			return {
				myModel: this.model
			}
		},
		methods:{
			change(v){ this.value = v },
			setValue(v){ this.myModel = v }
		},
		watch:{
			myModel(v){ this.$emit('change',v)  } // 这里检测 myModel，一旦发生变化就提交事件到父组件
		}
	}
</script>