<template>  
	<el-form ref='form' :inline='inline' :model='model' @key.enter.native='onSubmit($event)'>
		<slot></slot>
	</el-form>
</template>

<script>
	// ================================================================ element-ui
	import { Form } from 'element-ui'
	Vue.use(Form)
	// ================================================================  class
	export default {
		props:{
			model	: Object,
			inline	: Boolean,
			ref 	: Object
		},
		methods:{
			onSubmit(){
				this.$emit('submit')
			},
			getRef(){ return this.$refs.form}
		}
	}
</script>