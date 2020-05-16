<template>  
	<el-button 
		:size			= 'size'
		:type			= 'type'
		:plain			= 'plain'
		:loading 		= 'loading'
		:disabled 		= 'disabled'
		:icon 			= 'icon'
		:style 			= "{minWidth:fixed?width:'1px'}"
		:native-type 	= 'nativeType'
		@click			= 'onClick()'
	>
	 	{{label}}
	</el-button>
</template>

<script>
	// ================================================================ element-ui
	import { Button } from 'element-ui'
	Vue.use(Button)
	// ================================================================  class
	export default {
		props:{
			label		: String,
			icon		: String,
			plain 		: Boolean,
			fixed		: { type:Boolean, default:false },
			width		: { type:String, default:'100px' },
			size		: { type:String, default:'mini' },
			type		: { type:String, default:'primary' },
			loading 	: { type:Boolean, default:false },
			disabled 	: { type:Boolean, default:false },
			nativeType 	: { type:String, default:'button' },
		},
		methods:{
			onClick(){ this.$emit('click') }
		}
	}
</script>