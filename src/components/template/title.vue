<template>  
	<div class='fxm'>
		<i class='r5px' style='background:#37a6da;height:16px;width:4px;'></i>
		<h3 class='f15 b ml5 ex'>{{title}}</h3>
		<div class='c0'><slot name='more'></slot></div>
	</div>
</template>

<script>
	// ================================================================ element-ui
	import { Dialog } from 'element-ui'
	Vue.use(Dialog)
	// ================================================================  class
	export default {
		props:{
			title : String,
		},
		data(){
			return {
				show:false
			}
		},
		mounted(){
			
		},
		methods:{
			open(){
				this.show = true
			}
		}
	}
</script>