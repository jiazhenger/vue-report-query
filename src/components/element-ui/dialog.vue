<template>
  <el-dialog
		:title					= 'title'
		:visible.sync 			= 'show'
		:close-on-click-modal	='false'
		:width 					= 'width'
		top						= '0'
		center
		destroy-on-close
	>
		<slot></slot>
	</el-dialog>
</template>

<script>
	// ================================================================ element-ui
	import { Dialog } from 'element-ui'
	Vue.use(Dialog)
	// ================================================================  class
	export default {
		props:{
			title : String,
			width : String
		},
		data(){
			return {
				show:true
			}
		},
		mounted(){

		},
		methods:{
			open(){ this.show = true },
			close(){ this.show = false }
		}
	}
</script>
