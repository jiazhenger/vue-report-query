<template>  
	<el-popconfirm 
		:title				= 'title'
		confirmButtonText	= '确定'
  		cancelButtonText	= '取消'
  		@onConfirm 			= 'onConfirm'
	>
		<div slot='reference' class='dk'><slot name='reference'></slot></div>
	</el-popconfirm>
</template>

<script>
	// ================================================================ element-ui
	import { Popconfirm } from 'element-ui'
	Vue.use(Popconfirm)
	// ================================================================  class
	export default {
		props:{
			title : { type:String, default:'确定删除此条数据吗？' }
		},
		methods:{
			onConfirm(){
				this.$emit('yes')
			}
		}
	}
</script>