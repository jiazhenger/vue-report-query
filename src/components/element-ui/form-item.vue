<template>
	<el-form-item :label='label' :class='{break:!breaks}' :prop='prop'>
    	<slot></slot>
  	</el-form-item>
</template>

<script>
	// ================================================================ element-ui
	import { Form, FormItem } from 'element-ui'
	Vue.use(FormItem)
    Vue.use(Form)
	// ================================================================  class
	export default {
		props:{
			label	: String,
			prop 	: String,
			breaks	: { type:Boolean, default:false }
		}
	}
</script>
<style scope>
	.break{margin-bottom:0!important}
</style>
