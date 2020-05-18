<template>  
	<el-input 
	 	:value			= 'value' 
	 	@input			= 'onInput($event)'
	 	@clear 			= 'onClear($event)'
	 	:placeholder	= 'p' 
	 	:size			= 'size'
	 	:clearable 		= 'clearable'
	 	:disabled 		= 'disabled'
	 	:prefix-icon 	= 'prefixIcon'
	 	:show-password 	= 'showPassword'
	 	:type 			= 'type'
	/>
</template>

<script>
	// ================================================================ element-ui
	import { Input } from 'element-ui'
	Vue.use(Input)
	// ================================================================  class
	export default {
		props:{
			value		: String,
			p			: String,
			prefixIcon	: String,
			type 		: String,
			showPassword: Boolean,
			size		: { type:String, default:'mini' },
			clearable	: { type:Boolean,default:true },
			disabled	: { type:Boolean,default:false },
		},
		methods:{
			onInput(v){ this.$emit('input', v) },
			onClear(v){ this.$emit('clear', v) },
		}
	}
</script>