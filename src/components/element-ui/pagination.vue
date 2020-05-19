<template>
	<div class='p10' :class="{fxmr:pag.align==='right'||!pag.align,fxmc:pag.align==='center'}">
		<el-pagination
			background
	  		:layout			= 'pags.layout'
	  		:total			= 'pags.total'
	  		:page-size 		= 'pags.pageSize'
	  		:current-page 	= 'pags.current'
	  		:page-sizes 	= 'pags.pages||[5,10,20,30,40,50]'
	  		:small 			= 'pags.small'
	  		hide-on-single-page
	  		@current-change	= 'change'
            @size-change    = 'sizeChange'
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
			pag:{ type:Object, default:{}}
		},
        data(){
            return {
                pags:{ total: 0, pageSize: 10, align:'right', layout:'total, prev, pager, next, sizes, jumper', ...this.pag}
            }
        },
		methods:{
			change(v){
				this.$emit('change',v)
				this.pag.change(v)
			},
            sizeChange(v){
            	this.$emit('sizeChange',v)
            	this.pag.sizeChange(v)
            }
		}
	}
</script>
