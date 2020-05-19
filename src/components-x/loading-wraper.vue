<template>
	<div class='rel' style='min-height:200px;'>
        <slot></slot>
		<div v-if='loading' class='abs_lt fxmc wh i10' style='right:0;top:0;background:rgba(255,255,255,0.8);'>
			<div>
				<div class='fxc'><i class='el-icon-loading f20 c0'></i></div>
				<div class='f12 tc mt5 c0'>拼命加载中...</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			loading : { type:Boolean, default:false }
		},
		data(){
			return {
				fn:$fn
			}
		}
	}
</script>
