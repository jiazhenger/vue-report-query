<template>
    <el-table-column
        :prop	= 'prop'
        :label	= 'label'
        :width	= 'width'
        :type 	= 'type'
        :align  = 'align'
        :fixed	= 'fixed'
    >
       <slot></slot>
    </el-table-column>
</template>

<script>
	// ================================================================ element-ui
	import { TableColumn } from 'element-ui'
	Vue.use(TableColumn)
	// ================================================================  class
	export default {
		props:{
			prop 	: String,
			label	: String,
			width	: String,
			type	: String,
			align	: String,
			fixed	: Boolean,
            scope   : Boolean
		}
	}
</script>
<style scoped>
	.el-table--mini th, .el-table--mini td{padding:3px 5px!important}
</style>
