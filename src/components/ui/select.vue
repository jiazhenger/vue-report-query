<template>  
	<el-select
		v-model 		= 'myModel'
		:placeholder 	= 'p'
		:size 			= 'size'
		:multiple 		= 'multiple'
		:clearable 		= 'clearable'
		:filterable 	= 'filterable'
		:loading 		= 'loading'
		:disabled 		= 'disabled'
		@change 		= 'change'
		@clear 			= 'clear'
		:prefix-icon 	= 'prefixIcon'
	>
		<el-option
			v-for		= 'item in data'
			:key		= 'item[valueStr]'
			:value-key	= 'item[valueStr]'
			:label		= 'item[labelStr]'
			:value		= 'item[valueStr]'
	    />
	</el-select>
</template>

<script>
	// ================================================================ element-ui
	import { Select, Option } from 'element-ui'
	Vue.use(Select)
	Vue.use(Option)
	// ================================================================  class
	export default {
		// 嵌套封闭 v-model 组件
		model:{
			prop	: 'model', 	// 要存在于props
			event	: 'change' 	// 当组件的值发生改变时要emit的事件名
		},
		props:{
			data		: { type:Array, default:[] },
			labelStr	: { type:String, default:'label' },
			valueStr	: { type:String, default:'value' },
			model 		: [String,Array],
			// select 配置
			p			: { type:String, default:'请选择' },
			size		: { type:String, default:'mini' },
			multiple	: { type:Boolean },
			clearable 	: { type:Boolean, default: true },
			filterable 	: { type:Boolean, default: true },
			name 		: String,
			prefixIcon	: String,
			loading 	: Boolean,
			disabled 	: Boolean
		},
		data(){
			return {
				myModel: this.model 	// 要重新定义一个data，赋值为props中的值，因为组件时单数据流，不能直接修改props
			}
		},
		methods:{
			change(v){ this.value = v },
			clear(){ this.$emit('clear') },
			setValue(v){ this.myModel = v }
		},
		watch:{
			myModel(v){ this.$emit('change',v)  } // 这里检测 myModel，一旦发生变化就提交事件到父组件
		}
	}
</script>