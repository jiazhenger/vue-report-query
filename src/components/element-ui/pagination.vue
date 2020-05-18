<template>  
	<div class='p10' :class="{fxmr:pag.align==='right'||!pag.align,fxmc:pag.align==='center'}">
		<el-pagination 
			background
	  		layout			= 'total, prev, pager, next, jumper'
	  		:total			= 'pag.total'
	  		:page-size 		= 'pag.pageSize'
	  		:current-page 	= 'pag.current'
	  		:page-sizes 	= 'pag.pages||[5,10,20]'
	  		:small 			= 'pag.small'
	  		hide-on-single-page
	  		@current-change	= 'onChange'
		/>
	</div>
</template>

<script>
	// ================================================================ element-ui
	import { Pagination } from 'element-ui'
	Vue.use(Pagination)
	// ================================================================  class
	export default {
		props:{
			pag:{ type:Object, default:()=>({ total: 0, pageSize: 10, align:'right' })},
		},
		methods:{
			onChange(v){
				this.$emit('change',v)
				this.pag.change(v)
			}
		}
	}
</script>